import React from "react";
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
import { Card } from "@/components/ui";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {},
  // responsive: true,
  // interaction: {
  //   mode: "index" as const,
  //   intersect: false,
  // },
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
      label: "Dataset 1",
      data: [40, 85, 38, 66, 23, 100, 42],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
      borderWidth: 1,
    },
    {
      label: "Dataset 2",
      data: [40, 85, 38, 66, 23, 100, 42],
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
      borderWidth: 1,
    },
    {
      label: "Dataset 3",
      data: [40, 85, 38, 66, 23, 100, 42],
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 0",
      borderWidth: 1,
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

const BarchartCard = () => {
  // const [filter, setFilter] = useState("month");
  return (
    <Card className="mx-auto w-full p-8 flex flex-col gap-8 shadow-none dark:shadow-none border-none">
      <div className="flex flex-col lg:flex-row items-start lg:items-center w-full">
        <h2 className="flex-auto text-lg font-bold text-slate-900">
          Statistics of Active Applications
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center items-end flex-1 w-full justify-between sm:gap-16 gap-1">
          <div className="flex gap-2 flex-auto flex-wrap">
            {statuses.map((status) => (
              <div key={status.name} className="flex items-center">
                {/* <Switch id="switch" name="switch" checked={status.value} /> */}
                <label htmlFor="switch" className="text-sm text-gray-500">
                  {status.name}
                </label>
              </div>
            ))}
          </div>
          <div>
            {/* <Select
              value={filter}
              onValueChange={setFilter}
              placeholder="Month"
              enableClear={false}
              className="max-w-[48px]"
            >
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </Select> */}
          </div>
        </div>
      </div>
      <div>
        <Bar options={options} data={data} />
      </div>
    </Card>
  );
};

export default BarchartCard;
