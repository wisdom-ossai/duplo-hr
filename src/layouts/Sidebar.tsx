import { routes } from "@/components/Leftbar";
import { Button } from "@/components/ui";
import { buttonVariants } from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthProvider";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type SidebarProps = {
  onSidebarHide: () => void;
  showSidebar: boolean;
};
const Sidebar = ({ onSidebarHide, showSidebar }: SidebarProps) => {
  const { user } = useAuth();
  const location = useLocation();
  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 bg-white w-full sm:w-0 lg:w-96 sm:flex flex-col z-10 lg:px-5 gap-5",
        showSidebar ? "flex" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <div className="h-10 w-10 bg-blue rounded-full" />
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-gray-900">
            Human R.
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <Button
            variant="ghost"
            className="block md:hidden"
            onClick={onSidebarHide}
          >
            <X size={16} />
          </Button>
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        {routes.map((route) => (
          <div className="flex flex-col w-full gap-5" key={route.name}>
            <p className="ml-8 text-sm">{route.name}</p>
            <ul className="flex flex-col gap-2 w-full">
              {route.items.map((item) => {
                if (item.admin && user?.role !== "admin") return null;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={cn(
                        buttonVariants({
                          variant: location.pathname.includes(item.path)
                            ? "default"
                            : "ghost",
                          size: "lg",
                        }),
                        "w-full justify-start gap-4 rounded-xl",
                        location.pathname.includes(item.path)
                          ? ""
                          : "text-gray-200"
                      )}
                    >
                      {item.icon(location.pathname.includes(item.path))}
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
