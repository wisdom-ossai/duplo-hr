import React, { useState } from "react";
import { Button, Card } from "@/components/ui";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { ChevronDown, MoreVertical } from "lucide-react";

const filterOptions = [
  {
    label: "Create New",
    value: "create",
  },
];

export const CardHead = ({
  title,
  options,
}: {
  title: string;
  options: (typeof filterOptions)[0][];
}) => {
  const [filter, setFilter] = useState(filterOptions[0]);
  return (
    <div className="flex items-center flex-wrap justify-between">
      <h1 className="font-bold text-lg text-gray-900">{title}</h1>

      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-xl focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0 dark:ring-offset-transparent dark:focus-visible:ring-transparent">
          <Button
            size="sm"
            variant="outline"
            className="rounded-xl focus:outline-none text-xs focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0 dark:ring-offset-transparent dark:focus-visible:ring-transparent"
          >
            {filter.label}
            <ChevronDown className="ms-4" size={16} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {options.map((option) => (
            <DropdownMenuItem onClick={() => setFilter(option)}>
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const meetingsData = [
  {
    title: "Interview",
    startTime: "9:00 am",
    endTime: "11:30 am",
    date: new Date(),
  },
  {
    title: "Organization meeting",
    startTime: "9:00 am",
    endTime: "11:30 am",
    date: new Date("10/08/2023"),
  },
  {
    title: "Meeting with the manager",
    startTime: "9:00 am",
    endTime: "11:30 am",
    date: new Date("08/11/2023"),
  },
];

const Meeting = ({ data }: { data: (typeof meetingsData)[0] }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-4">
        <div className="h-6 w-6 shadow-md bg-white text-[10px] p-4 rounded-lg border-none font-bold flex flex-col items-center justify-center">
          <span className="text-amber">{format(data.date, "eee")}</span>
          <span className="text-gray-900">{format(data.date, "dd")}</span>
        </div>

        <div className="text-sm">
          <h2 className="font-bold text-gray-900">{data.title}</h2>
          <span className="font-light text-xs text-gray-200">
            {data.startTime} - {data.endTime}
          </span>
        </div>
      </div>

      <Button
        size="icon"
        className="p-0 rounded-lg h-8 w-8"
        variant="secondary"
      >
        <MoreVertical size={14} className="text-gray-500" />
      </Button>
    </div>
  );
};

const Meetings = () => {
  return (
    <Card className="p-4 border-none mx-auto flex flex-col gap-4 flex-1 shadow-none dark:shadow-none min-w-[350px]">
      <CardHead title="Meetings" options={filterOptions} />
      <div className="flex flex-col gap-4">
        {meetingsData.map((meeting) => (
          <Meeting key={meeting.title} data={meeting} />
        ))}
      </div>
    </Card>
  );
};

export default Meetings;
