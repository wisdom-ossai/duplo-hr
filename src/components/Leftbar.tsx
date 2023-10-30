import { Link, useLocation } from "react-router-dom";
import { buttonVariants } from "./ui/Button";
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

const routes = [
  {
    name: "MENU",
    items: [
      {
        name: "Users",
        icon: (active: boolean) => <Profile active={active} />,
        path: "/users",
      },
      {
        name: "Dashboard",
        icon: (active: boolean) => <Dashboard active={active} />,
        path: "/dashboard",
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

const Leftbar = () => {
  const location = useLocation();
  return (
    <aside className="w-16 lg:w-[325px] flex flex-col justify-center items-center gap-12 h-full bg-white px-4">
      <div className="mt-8 w-full">
        <h1 className="text-gray-900 font-bold text-lg">Human R.</h1>
      </div>
      <div className="flex-1 w-full">
        <div className="flex flex-col gap-8">
          {routes.map((route) => (
            <div className="flex flex-col w-full gap-4" key={route.name}>
              <p className="ml-8 text-sm">{route.name}</p>
              <ul className="flex flex-col gap-2 w-full">
                {route.items.map((item) => (
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
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Leftbar;
