export const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

// Regular expression for a strong password
export const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

export const isEmailValid = (email: string) => emailPattern.test(email);

// Check if password meets the criteria
export const isPasswordValid = (password: string) =>
  passwordPattern.test(password);
