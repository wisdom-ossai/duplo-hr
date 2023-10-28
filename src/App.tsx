import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "./layouts";
import { Suspense, lazy } from "react";

const SignInPage = lazy(() => import("./pages/auth/SignInPage"));
const SignUpPage = lazy(() => import("./pages/auth/SignUpPage"));
const DashboardHome = lazy(() => import("./pages/dashboard/Home"));

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
            <DashboardLayout />
          </Suspense>
        }
      >
        <Route index element={<Navigate to="/lsosi" />} />
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
