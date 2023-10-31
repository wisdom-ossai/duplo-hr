import { useAuth } from "@/contexts/AuthProvider";
import { ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthGuard = ({
  children,
  admin,
}: {
  children: ReactNode;
  admin?: boolean;
}) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log("from auth guard", user);

  if (!user) return <Navigate to="/signin" />;

  if (admin && user.role !== "admin") {
    navigate(-1);
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
