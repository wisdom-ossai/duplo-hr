import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const DashboardLayout = () => {
  const { signout } = useAuth();
  return (
    <div>
      <div>
        <h1>Admin Dashboard</h1>
        <button onClick={() => signout()}>Sign Out</button>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
