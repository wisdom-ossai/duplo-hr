import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  FC,
  ReactNode,
  createContext,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export type TAuthContext = {
  user: User | null;
  signin: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
  errorMsg: string;
  processing: boolean;
};

export type TAuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider: FC<TAuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [processing, setProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) return navigate("/");
      setUser(authUser);
      return navigate("/dashboard");
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const signin = async (email: string, password: string) => {
    try {
      setErrorMsg("");
      setProcessing(true);
      if (email && password) {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Handle known error types like Error
        if (error.message.includes("auth/invalid-login-credentials")) {
          setErrorMsg("Invalid Email/Password");
        }
      } else {
        // Handle other unknown error types
        setErrorMsg("Unable to login at this time. Please try again later");
      }
    } finally {
      setProcessing(false);
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      setErrorMsg("");
      setProcessing(true);

      if (email && password) {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Handle known error types like Error
        console.log(error, "vvvan");
        if (error.message.includes("auth/invalid-login-credentials")) {
          setErrorMsg("Invalid Email/Password");
        }
      } else {
        // Handle other unknown error types
        setErrorMsg("Unable to login at this time. Please try again later");
      }
    } finally {
      setProcessing(false);
    }
  };

  const signout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, signin, signout, signup, errorMsg, processing }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default memo(AuthProvider);
