import React from "react";
import { TrendUp } from "./icons";
import { TStatData } from "@/types";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui";
import CirclarProgress from "./CircularProgress";

type StatCardProps = {
  data: TStatData;
};
const StatCard: React.FC<StatCardProps> = ({ data }) => {
  return (
    <Card className="p-4 border-none mx-auto flex flex-1 shadow-none dark:shadow-none">
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-gray-200 text-sm">{data.name}</p>
        <h2 className="text-gray-900 text-xl font-semibold">{data.value}</h2>
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-4 w-4 flex items-center justify-center rounded-full",
              `bg-${data.color}-100`
            )}
          >
            <TrendUp className={`fill-${data.color}`} color={data.color} />
          </div>
          <small className="text-xs text-gray-500">
            {data.newPercent}% {data.newPercent >= 0 ? "Inc" : "Dec"}
          </small>
        </div>
      </div>
      <div>
        <CirclarProgress size={16} />
      </div>
    </Card>
  );
};

export default StatCard;
