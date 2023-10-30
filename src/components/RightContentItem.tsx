import React, { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type TContentItem = {
  name: string;
  avatar: string;
  fallback: ReactNode;
  description: string;
};

type RightContentItemProps = {
  data: TContentItem;
};

const RightContentItem: React.FC<RightContentItemProps> = ({ data }) => (
  <div className="flex items-center gap-5 bg-slate-100 p-4 rounded-xl">
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt={data.name}
      ></AvatarImage>
      <AvatarFallback>{data.fallback}</AvatarFallback>
    </Avatar>
    <div>
      <p className="text-sm">{data.name}</p>
      <span className="text-sm text-gray-200">{data.description}</span>
    </div>
  </div>
);

export default RightContentItem;
