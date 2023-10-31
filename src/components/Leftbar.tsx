import { Link, useLocation } from "react-router-dom";
import { Button, buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Dashboard,
  Job,
  Message,
  Profile,
  Referral,
  Report,
  Setting,
  Site,
} from "@/components/icons";
import { useAuth } from "@/contexts/AuthProvider";
import { AlignLeft, LogOut } from "lucide-react";

const routes = [
  {
    name: "MENU",
    items: [
      {
        name: "Dashboard",
        icon: (active: boolean) => <Dashboard active={active} />,
        path: "/dashboard",
      },
      {
        name: "Users",
        icon: (active: boolean) => <Profile active={active} />,
        path: "/users",
        admin: true,
      },
      {
        name: "Messages",
        icon: (active: boolean) => <Message active={active} />,
        path: "/messages",
      },
      {
        name: "Calendar",
        icon: (active: boolean) => <Calendar active={active} />,
        path: "/calendar",
      },
    ],
  },
  {
    name: "RECRUITMENT",
    items: [
      {
        name: "Jobs",
        icon: (active: boolean) => <Job active={active} />,
        path: "/jobs",
      },
      {
        name: "Candidates",
        icon: (active: boolean) => <Profile active={active} />,
        path: "/candidates",
      },
      {
        name: "My Referrals",
        icon: (active: boolean) => <Referral active={active} />,
        path: "/referrals",
      },
      {
        name: "Career Site",
        icon: (active: boolean) => <Site active={active} />,
        path: "/career",
      },
    ],
  },
  {
    name: "ORGANIZATION",
    items: [
      {
        name: "Employees",
        icon: (active: boolean) => <Profile active={active} />,
        path: "/employee",
      },
      {
        name: "Structure",
        icon: (active: boolean) => <Referral active={active} />,
        path: "/structure",
      },
      {
        name: "Report",
        icon: (active: boolean) => <Report active={active} />,
        path: "/report",
      },
      {
        name: "Settings",
        icon: (active: boolean) => <Setting active={active} />,
        path: "/settings",
      },
    ],
  },
];

const Leftbar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { user, signout } = useAuth();
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 bottom-0 z-50 slide-in-from-left-6 md:w-[275px] lg:w-[375px] md:block md:relative h-full bg-white px-4",
        open ? "flex" : "hidden"
      )}
    >
      <div className="flex flex-col justify-center items-start gap-12">
        <div className="mt-8 w-full flex items-center justify-between">
          <h1 className="text-gray-900 font-bold text-lg ml-8">Human R.</h1>

          <Button variant="ghost" className="block md:hidden" onClick={onClose}>
            <AlignLeft />
          </Button>
        </div>
        <div className="flex-1 w-full">
          <div className="flex flex-col gap-8">
            {routes.map((route) => (
              <div className="flex flex-col w-full gap-4" key={route.name}>
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
        <div className="w-full">
          <Button
            variant="ghost"
            className="p-0 w-full justify-start pl-8"
            onClick={() => signout()}
          >
            <LogOut /> Logout
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Leftbar;
