import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthLayout, DashboardLayout } from "@/layouts";
import AuthGuard from "./components/AuthGuard";

const SignInPage = lazy(() => import("./pages/auth/SignInPage"));
const SignUpPage = lazy(() => import("./pages/auth/SignUpPage"));
const DashboardHome = lazy(() => import("./pages/dashboard/Home"));
const UsersPage = lazy(() => import("./pages/dashboard/Users"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AuthLayout />
          </Suspense>
        }
      >
        <Route index element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route
        path="/*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AuthGuard>
              <DashboardLayout />
            </AuthGuard>
          </Suspense>
        }
      >
        <Route index element={<Navigate to="/dashboard" />} />
        <Route
          path="dashboard"
          element={
            <AuthGuard>
              <DashboardHome />
            </AuthGuard>
          }
        />
        <Route
          path="users"
          element={
            <AuthGuard admin>
              <UsersPage />
            </AuthGuard>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
