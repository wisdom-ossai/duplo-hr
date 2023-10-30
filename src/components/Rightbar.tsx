import { Button } from "@/components/ui";
import NeedHelp from "./icons/NeedHelp";
import NotificationBing from "./icons/NotificationBing";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RightItems from "./RightItems";
import { ScrollArea } from "./ui/scroll-area";

const messages = [
  {
    name: "Cameron Williamson",
    avatar: "",
    fallback: null,
    description: "Have you planned any deadline...",
  },
  {
    name: "Jacob Jones",
    avatar: "",
    fallback: null,
    description: "The candidate has been shortlisted",
  },
];

const jobs = [
  {
    name: "Product Designer",
    avatar: "",
    fallback: null,
    description: "Spotify, Singapore - 6 hours ago",
  },
  {
    name: "iOS Developer",
    avatar: "",
    fallback: null,
    description: "San Fransisco, CA - 2 Days ago",
  },
  {
    name: "Brand Strategist",
    avatar: "",
    fallback: null,
    description: "New york, US - 2 Days ago",
  },
  {
    name: "Jr Frontend Engineer",
    avatar: "",
    fallback: null,
    description: "Spotify, Singapore - 2 Days ago",
  },
];

const Rightbar = () => {
  return (
    <aside className="fixed top-0 bottom-0 right-0 hidden w-[400px] lg:block lg:relative h-full bg-white px-5">
      <div className="flex items-center justify-end gap-6 py-4 px-5">
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
        <RightItems name="Messages" data={messages} />
        <RightItems name="Recent Added Jobs" data={jobs} className="mt-5" />
      </ScrollArea>
    </aside>
  );
};

export default Rightbar;
