import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div>
        <h1>Auth Layout</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
