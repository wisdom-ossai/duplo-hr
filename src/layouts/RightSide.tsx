import { RightItems } from "@/components";
import NeedHelp from "@/components/icons/NeedHelp";
import NotificationBing from "@/components/icons/NotificationBing";
import { Person3 } from "@/components/icons/Person1";
import { Button } from "@/components/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { useAuth } from "@/contexts/AuthProvider";
import { jobsData, messagesData } from "@/utils/data";
import clsx from "clsx";
import { X } from "lucide-react";

type RightSideProps = {
  onRightSideHide: () => void;
  showRightSide: boolean;
};
const RightSide = ({ onRightSideHide, showRightSide }: RightSideProps) => {
  const { user } = useAuth();
  return (
    <div
      className={clsx(
        "fixed inset-y-0 right-0 bg-white w-full sm:w-0 lg:w-96 sm:flex flex-col z-10 lg:px-4",
        showRightSide ? "flex" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center flex-col h-full sm:justify-center xl:justify-start gap-10 sidebar-separator-top">
          <div className="flex w-full items-center justify-between md:justify-end gap-6 p-4">
            <Button
              variant="ghost"
              className="block sm:hidden"
              onClick={onRightSideHide}
            >
              <X size={16} />
            </Button>
            <div className="flex items-center justify-end gap-6 ">
              <Button variant="ghost" className="p-0 rounded-full">
                <NeedHelp />
              </Button>
              <Button variant="ghost" className="p-0 rounded-full">
                <NotificationBing />
              </Button>
              <Avatar style={{ height: 24, width: 24 }}>
                <AvatarImage src={user?.photoURL ?? ""} alt={user?.firstName} />
                <AvatarFallback>
                  <Person3 />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 px-4">
            <Avatar style={{ height: 120, width: 120 }}>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt={user?.firstName}
              ></AvatarImage>
            </Avatar>
            <div className="text-center">
              <h2 className="text-lg font-bold font-sans mb-0 pb-0 ">
                {user?.firstName} {user?.lastName}
              </h2>
              <small className="text-sm text-gray-200 font-sans">
                {user?.designation}
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex gap-8 px-4 flex-col">
        <RightItems name="Messages" data={messagesData} />
        <RightItems name="Recent Added Jobs" data={jobsData} className="mt-5" />
      </div>
    </div>
  );
};

export default RightSide;
