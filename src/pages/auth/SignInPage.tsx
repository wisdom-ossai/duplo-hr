import { FormEvent, RefObject, useRef } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui";
import { useAuth } from "@/contexts/AuthProvider";

const SignInPage = () => {
  const { signin, errorMsg, processing } = useAuth();
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const passwordRef: RefObject<HTMLInputElement> = useRef(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (email && password) {
      signin(email, password);
    }
  };
  return (
    <div>
      {errorMsg && <div>{errorMsg}</div>}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div>
          <label>Email</label>
          <Input type="text" name="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label>Password</label>
          <Input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
        </div>

        <div>
          <button type="submit" disabled={processing}>
            {processing ? "Please wait..." : "Sign In"}
          </button>
        </div>
        <div>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
