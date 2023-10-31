import {
  FC,
  ReactNode,
  createContext,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "@/config/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { TCreateUser, TUser } from "@/types";

export type TAuthContext = {
  user: TUser | null;
  signin: (email: string, password: string) => Promise<void>;
  signup: (payload: TCreateUser) => Promise<void>;
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
  const [user, setUser] = useState<TUser | null>(null);
  const [processing, setProcessing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchUserById = async (id: string) => {
    try {
      const userRef = doc(db, "users", id);
      const res = await getDoc(userRef);
      return res.data();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      try {
        if (!authUser) return navigate("/");
        const data = await fetchUserById(authUser.uid);
        setUser({ ...authUser, ...data } as TUser);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
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
        await signInWithEmailAndPassword(auth, email, password);
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

  const signup = async ({
    email,
    password,
    firstName,
    lastName,
    designation,
  }: TCreateUser) => {
    try {
      setErrorMsg("");
      setProcessing(true);

      if (email && password) {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (response) {
          const res = await setDoc(doc(db, "users", response.user.uid), {
            email,
            firstName,
            lastName,
            designation,
            isActive: true,
            createdAt: serverTimestamp(),
            verified: false,
            photoUrl: "",
            role: "user",
          });

          console.log(res);
        }
        console.log(user);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
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

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider
      value={{ user, signin, signout, signup, errorMsg, processing }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default memo(AuthProvider);
