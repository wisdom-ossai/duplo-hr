import { FocusEvent, FormEvent, RefObject, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { isEmailValid, isPasswordValid } from "../../utils/validation";

const SignUpPage = () => {
  const { signup, errorMsg, processing } = useAuth();
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    password: "",
  });
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const passwordRef: RefObject<HTMLInputElement> = useRef(null);
  const confirmPasswordRef: RefObject<HTMLInputElement> = useRef(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(emailRef.current?.value, passwordRef.current?.value);
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (email && password) {
      signup(email, password);
    }
  };

  const handleInputChange = () => {
    const emailValue = emailRef.current?.value || "";
    const passwordValue = passwordRef.current?.value || "";
    const confirmPasswordValue = confirmPasswordRef.current?.value || "";

    // Check if email and password are not empty, and if password and confirm password match
    const isValid =
      emailValue.trim() !== "" &&
      passwordValue.trim() !== "" &&
      passwordValue === confirmPasswordValue;

    setDisableSubmit(!isValid);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const emailValue = emailRef.current?.value || "";
    const passwordValue = passwordRef.current?.value || "";
    console.log(name);
    if (name === "email" && !isEmailValid(emailValue)) {
      setFieldErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    } else if (name === "password" && !isPasswordValid(passwordValue)) {
      setFieldErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    }
  };

  return (
    <>
      {errorMsg && <div>{errorMsg}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            ref={emailRef}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {fieldErrors.email && <small>{fieldErrors.email}</small>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {fieldErrors.password && <small>{fieldErrors.password}</small>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            ref={confirmPasswordRef}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <button type="submit" disabled={processing || disableSubmit}>
            {processing ? "Please wait..." : "Register"}
          </button>
        </div>
        <div>
          Already have an account? <Link to="/signin">Sign In</Link>
        </div>
      </form>
    </>
  );
};

export default SignUpPage;
