import { Card } from "@/components/ui";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen flex justify-center px-8">
      <Card className="max-w-md flex-1 p-8 m-auto">
        <Outlet />
      </Card>
    </div>
  );
};

export default AuthLayout;
