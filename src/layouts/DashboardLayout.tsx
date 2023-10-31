import { Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthProvider";
import { Leftbar, Navbar, Rightbar } from "@/components";

const DashboardLayout = () => {
  const { signout, user } = useAuth();
  console.log(user);
  return (
    <div className="h-screen w-full flex">
      <Leftbar />
      <div className="flex-1 overflow-y-auto p-8 scr h-full no-scrollbar bg-slate-100">
        <Navbar />
        <button onClick={() => signout()}>Sign Out</button>
        <Outlet />
      </div>

      <Rightbar />
    </div>
  );
};

export default DashboardLayout;
