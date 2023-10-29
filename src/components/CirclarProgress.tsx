import { cn } from "@/lib/utils";
import React from "react";

type CircularProgressProps = {
  size?: number;
};
const CirclarProgress: React.FC<CircularProgressProps> = ({ size }) => {
  return (
    <div
      className={cn("relative h-40 w-40", size ? `w-${size} h-${size}` : "")}
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-blue-100 stroke-current"
          stroke-width="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        <circle
          className="text-indigo-500  progress-ring__circle stroke-current"
          stroke-width="10"
          stroke-linecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke-dashoffset="calc(400 - (400 * 45) / 100)"
        ></circle>
        <text
          x="50"
          y="50"
          font-family="Verdana"
          font-size="12"
          text-anchor="middle"
          alignment-baseline="middle"
        >
          70%
        </text>
      </svg>
    </div>
  );
};

export default CirclarProgress;
