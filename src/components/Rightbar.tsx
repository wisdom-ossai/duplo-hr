import { Button } from "@/components/ui";
import NeedHelp from "./icons/NeedHelp";
import NotificationBing from "./icons/NotificationBing";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import RightItems from "./RightItems";
import { ScrollArea } from "./ui/scroll-area";
import { AlignRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { jobsData, messagesData } from "@/utils/data";

const Rightbar = ({ open, toggle }: { open: boolean; toggle: () => void }) => {
  return (
    <aside
      className={cn(
        "fixed top-0 bottom-0 right-0 z-50 slide-in-from-right-4 hidden md:w-[275px] lg:w-[375px] md:block md:relative h-full bg-white px-5",
        open ? "block" : "hidden"
      )}
    >
      <div className="flex items-center justify-between md:justify-end gap-6 py-4 px-5">
        <Button variant="ghost" className="block md:hidden" onClick={toggle}>
          <AlignRight />
        </Button>
        <div className="flex items-center justify-end gap-6 ">
          <Button variant="ghost" className="p-0 rounded-full">
            <NeedHelp />
          </Button>
          <Button variant="ghost" className="p-0 rounded-full">
            <NotificationBing />
          </Button>
          <Avatar style={{ height: 24, width: 24 }}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-12 gap-2 px-5">
        <Avatar style={{ height: 120, width: 120 }}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-lg font-bold font-sans mb-0 pb-0 ">
            Thomas Flecture
          </h2>
          <small className="text-sm text-gray-200 font-sans">
            Director of Recruiting
          </small>
        </div>
      </div>

      <ScrollArea className="flex flex-col gap-8 mt-8 h-[65vh] px-5">
        <RightItems name="Messages" data={messagesData} />
        <RightItems name="Recent Added Jobs" data={jobsData} className="mt-5" />
      </ScrollArea>
    </aside>
  );
};

export default Rightbar;
