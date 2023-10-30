import React from "react";
import RightContentItem, { TContentItem } from "./RightContentItem";
import { cn } from "@/lib/utils";

type RightItemProps = {
  data: TContentItem[];
  name: string;
  className?: string;
};

const RightItems: React.FC<RightItemProps> = ({ data, name, className }) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h2 className="font-bold text-lg font-sans">{name}</h2>
      {data.map((item) => (
        <RightContentItem key={item.name} data={item} />
      ))}
    </div>
  );
};

export default RightItems;
