import React from "react";
import { Card } from "@/components/ui";
import { CardHead } from "./Meetings";
import { Avatar, AvatarImage } from "./ui/Avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

const filterOptions = [
  {
    label: "All Activity",
    value: "all",
  },
  {
    label: "Applying",
    value: "applying",
  },
  {
    label: "Creation",
    value: "creation",
  },
];

const feedsData = [
  {
    id: "1",
    actor: "Marvin Mckinney",
    subject: "Product Designer",
    activity: "applying",
    createdAt: new Date(),
    avatar: null,
  },
  {
    id: "2",
    actor: "John Cooper",
    subject: "Job Hunt",
    activity: "creation",
    createdAt: new Date(),
    avatar: null,
  },
  {
    id: "3",
    actor: "Johnny Wilson",
    subject: "Frontend Engineer",
    activity: "applying",
    createdAt: new Date(),
    avatar: null,
  },
];

const getBadgeClass = (activity: string) => {
  switch (activity) {
    case "applying":
      return "bg-blue-200 text-blue";

    case "creation":
      return "text-green bg-green-200";

    default:
      "text-gray-500 bg-gray-100";
  }
};
const getActivityPhrase = (activity: string) => {
  switch (activity) {
    case "applying":
      return "applied for the job";

    case "creation":
      return "created a new account as a";

    default:
      "";
  }
};

const Feed = ({ data }: { data: (typeof feedsData)[0] }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage></AvatarImage>
          <AvatarFallback>{data.avatar}</AvatarFallback>
        </Avatar>

        <div className="text-xs flex items-center justify-center gap-2">
          <span className="font-bold text-gray-900 inline">{data.actor}</span>
          <span className="font-light text-gray-200">
            {getActivityPhrase(data.activity)}
          </span>
          <span className="font-bold text-gray-900 inline">{data.subject}</span>
        </div>
      </div>

      <div
        className={cn(
          "capitalize px-2 py-1 rounded-lg text-[10px]",
          getBadgeClass(data.activity)
        )}
      >
        {data.activity === "creation" ? "Sign Up" : data.activity}
      </div>
    </div>
  );
};

const ActivityFeeds = () => {
  return (
    <Card className="p-4 border-none mx-auto flex flex-col gap-4 flex-auto shadow-none dark:shadow-none">
      <CardHead title="Activity Feeds" options={filterOptions} />
      <div className="flex flex-col gap-4">
        {feedsData.map((feed) => (
          <Feed key={feed.id} data={feed} />
        ))}
      </div>
    </Card>
  );
};

export default ActivityFeeds;
