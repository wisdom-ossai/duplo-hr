import { SearchInput } from "@/components";
import { Button } from "@/components/ui";
import { useAuth } from "@/contexts/AuthProvider";
import { PanelLeftClose, PanelRightClose } from "lucide-react";
import { ReactNode } from "react";

const Content = ({
  onSidebarHide,
  onRightSiderHide,
  children,
}: {
  onSidebarHide: () => void;
  onRightSiderHide: () => void;
  children: ReactNode;
}) => {
  const { user } = useAuth();
  return (
    <div className="flex w-full bg-slate-100">
      <div className="h-screen hidden sm:block w-full sm:w-0 lg:w-96 flex-shrink-0">
        .
      </div>

      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start py-2 gap-8 px-8 no-scrollbar">
        <div className="w-full sm:flex items-end">
          <div className="sm:flex-grow flex justify-between">
            <div className="">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  className="block sm:hidden"
                  onClick={onSidebarHide}
                >
                  <PanelRightClose />
                </Button>
                <div className="text-lg font-bold text-gray-900">Dashboard</div>
              </div>
              <div className="flex items-center">
                <div className="ml-2 text-sm font-light text-gay-200">
                  Hello, {user?.firstName}. Welcome to Galucter
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              className="block sm:hidden"
              onClick={onRightSiderHide}
            >
              <PanelLeftClose />
            </Button>
          </div>
          <div className="w-full flex-1 sm:w-56 mt-4 sm:mt-0 relative">
            <SearchInput />
          </div>
        </div>

        <div className="w-full">{children}</div>
      </div>
      <div className="h-screen hidden sm:block w-full sm:w-0 lg:w-96 flex-shrink-0">
        .
      </div>
    </div>
  );
};

export default Content;
