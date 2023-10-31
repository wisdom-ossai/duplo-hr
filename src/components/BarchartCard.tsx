import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Button, Card, Switch } from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },

  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [40, 85, 38, 66, 23, 100, 42],
      backgroundColor: "#57ccf2",
      borderRadius: [
        { topLeft: 12, topRight: 12, bottomLeft: 12, bottomRight: 12 },
        { topLeft: 12, topRight: 12, bottomLeft: 12, bottomRight: 12 },
      ],
      borderSkipped: false,
      barPercentage: 0.15,
      categoryPercentage: 0.5,
    },
    {
      label: "",
      data: [10, 10, 10, 10, 10, 10, 10],
      backgroundColor: "#fff",
      borderSkipped: false,
      barPercentage: 0.15,
      categoryPercentage: 0.5,
    },
    {
      label: "",
      data: [40, 85, 38, 66, 23, 100, 42],
      backgroundColor: "#ffb833",
      borderRadius: [
        { topLeft: 12, topRight: 12, bottomLeft: 12, bottomRight: 12 },
        { topLeft: 12, topRight: 12, bottomLeft: 12, bottomRight: 12 },
      ],
      borderSkipped: false,
      barPercentage: 0.15,
      categoryPercentage: 0.5,
    },
    {
      label: "",
      data: [10, 10, 10, 10, 10, 10, 10],
      backgroundColor: "#fff",
      borderSkipped: false,
      barPercentage: 0.15,
      categoryPercentage: 0.5,
    },
    {
      label: "",
      data: [40, 85, 38, 66, 23, 100, 42],
      backgroundColor: "#ff7859",
      borderRadius: [
        { topLeft: 12, topRight: 12, bottomLeft: 12, bottomRight: 12 },
        { topLeft: 12, topRight: 12, bottomLeft: 12, bottomRight: 12 },
      ],
      borderSkipped: false,
      barPercentage: 0.15,
      categoryPercentage: 0.5,
    },
  ],
};

const statuses = [
  {
    name: "Applications",
    value: true,
  },
  {
    name: "Shortlisted",
    value: true,
  },
  {
    name: "Rejected",
    value: true,
  },
];

const filterOptions = [
  {
    name: "Day",
    value: "day",
  },
  {
    name: "Week",
    value: "week",
  },
  {
    name: "Month",
    value: "month",
  },
  {
    name: "Year",
    value: "year",
  },
];

const BarchartCard = () => {
  const [filter, setFilter] = useState(filterOptions[0]);
  const getSwitchColor = (name: string) => {
    if (name === "Applications") return "data-[state=checked]:bg-cyan";
    if (name === "Shortlisted") return "data-[state=checked]:bg-amber";
    if (name === "Rejected") return "data-[state=checked]:bg-red";
  };
  return (
    <Card className="mx-auto w-full p-8 flex flex-col gap-8 shadow-none dark:shadow-none border-none">
      <div className="flex flex-col md:flex-row flex-wrap items-end md:items-center justify-between w-full">
        <h2 className="text-lg flex-1 font-bold text-slate-900">
          Statistics of Active Applications
        </h2>
        <div className="flex items-center justify-center flex-1 gap-2 flex-wrap w-full">
          {statuses.map((status) => (
            <div key={status.name} className="flex items-center gap-1">
              <Switch
                id="switch"
                name="switch"
                checked={status.value}
                className={cn("h-[16px] w-[24px]", getSwitchColor(status.name))}
                togglerClassName="h-3 w-3 data-[state=checked]:translate-x-2"
                color="blue"
              />
              <label htmlFor="switch" className="text-xs text-gray-500">
                {status.name}
              </label>
            </div>
          ))}
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-xl focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0 dark:ring-offset-transparent dark:focus-visible:ring-transparent">
              <Button
                size="sm"
                variant="outline"
                className="rounded-xl focus:outline-none text-xs text-gray-200 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0 dark:ring-offset-transparent dark:focus-visible:ring-transparent"
              >
                {filter.name}
                <ChevronDown className="ms-4" size={16} />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              {filterOptions.map((option) => (
                <DropdownMenuItem onClick={() => setFilter(option)}>
                  {option.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* <div className="flex flex-col sm:flex-row sm:items-center items-end w-full justify-between sm:gap-16 gap-1">
        </div> */}
      </div>
      <div>
        <Bar options={options} data={data} />
      </div>
    </Card>
  );
};

export default BarchartCard;
