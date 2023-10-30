import { FocusEvent, FormEvent, RefObject, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { isEmailValid, isPasswordValid } from "../../utils/validation";
import { Button, Input } from "@/components/ui";

const SignUpPage = () => {
  const { signup, errorMsg, processing } = useAuth();
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    designation: "",
    firstName: "",
    lastName: "",
  });
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const passwordRef: RefObject<HTMLInputElement> = useRef(null);
  const confirmPasswordRef: RefObject<HTMLInputElement> = useRef(null);
  const firstNameRef: RefObject<HTMLInputElement> = useRef(null);
  const lastNameRef: RefObject<HTMLInputElement> = useRef(null);
  const designationRef: RefObject<HTMLInputElement> = useRef(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const firstName = firstNameRef.current?.value ?? "";
    const lastName = lastNameRef.current?.value ?? "";
    const designation = designationRef.current?.value ?? "";
    if (email && password) {
      signup({ email, password, firstName, lastName, designation });
    }
  };

  const handleInputChange = () => {
    const emailValue = emailRef.current?.value ?? "";
    const passwordValue = passwordRef.current?.value ?? "";
    const confirmPasswordValue = confirmPasswordRef.current?.value ?? "";
    const firstName = firstNameRef.current?.value ?? "";
    const lastName = lastNameRef.current?.value ?? "";
    const designation = designationRef.current?.value ?? "";

    // Check if email and password are not empty, and if password and confirm password match
    const isValid =
      emailValue.trim() !== "" &&
      passwordValue.trim() !== "" &&
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      designation.trim() !== "" &&
      passwordValue === confirmPasswordValue;

    setDisableSubmit(!isValid);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const emailValue = emailRef.current?.value ?? "";
    const passwordValue = passwordRef.current?.value ?? "";
    if (name === "email") {
      if (emailValue && !isEmailValid(emailValue)) {
        setFieldErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      } else {
        setFieldErrors((prev) => ({ ...prev, email: "" }));
      }
    }
    if (name === "password") {
      if (passwordValue && !isPasswordValid(passwordValue)) {
        setFieldErrors((prev) => ({
          ...prev,
          password:
            "Password must contain at least 1 number, 1 uppercase letter, 1 special character and should be at least 8 character long",
        }));
      } else {
        setFieldErrors((prev) => ({
          ...prev,
          password: "",
        }));
      }
    }
  };

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-center text-gray text-2xl">Welcome</h1>
        <small className="text-center text-gray-200 text-sm">
          Please enter details to sign up
        </small>
      </div>
      {errorMsg && <div>{errorMsg}</div>}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div>
          <label className="text-sm text-gray-200" htmlFor="firstName">
            First Name
          </label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            ref={firstNameRef}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {fieldErrors.firstName && (
            <small className="text-red">{fieldErrors.firstName}</small>
          )}
        </div>
        <div>
          <label className="text-sm text-gray-200" htmlFor="lastName">
            Last Name
          </label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            ref={lastNameRef}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {fieldErrors.lastName && (
            <small className="text-red">{fieldErrors.lastName}</small>
          )}
        </div>
        <div>
          <label className="text-sm text-gray-200" htmlFor="email">
            Email
          </label>
          <Input
            type="text"
            name="email"
            id="email"
            ref={emailRef}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {fieldErrors.email && (
            <small className="text-red">{fieldErrors.email}</small>
          )}
        </div>
        <div>
          <label className="text-sm text-gray-200" htmlFor="password">
            Password
          </label>
          <Input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {fieldErrors.password && (
            <small className="text-red">{fieldErrors.password}</small>
          )}
        </div>
        <div>
          <label className="text-sm text-gray-200" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            ref={confirmPasswordRef}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <label className="text-sm text-gray-200" htmlFor="designation">
            Designation
          </label>
          <Input
            type="text"
            name="designation"
            id="designation"
            ref={designationRef}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {fieldErrors.designation && (
            <small className="text-red">{fieldErrors.designation}</small>
          )}
        </div>

        <div className="mt-4">
          <Button
            type="submit"
            className="w-full"
            disabled={
              processing ||
              disableSubmit ||
              !!Object.values(fieldErrors).find((v) => v)
            }
          >
            {processing ? "Please wait..." : "Register"}
          </Button>
        </div>
        <div className="text-sm text-gray-900">
          Already have an account?{" "}
          <Button variant="link">
            <Link to="/signin" className="text-blue">
              Sign In
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
