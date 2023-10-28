import { FormEvent, RefObject, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

const SignInPage = () => {
  const { signin, errorMsg, processing } = useAuth();
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const passwordRef: RefObject<HTMLInputElement> = useRef(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(emailRef.current?.value, passwordRef.current?.value);
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (email && password) {
      signin(email, password);
    }
  };
  return (
    <>
      {errorMsg && <div>{errorMsg}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="text" name="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label>Password</label>
          <input
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
    </>
  );
};

export default SignInPage;
