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
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        <circle
          className="text-indigo-500  progress-ring__circle stroke-current"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDashoffset="calc(400 - (400 * 45) / 100)"
        ></circle>
        <text
          x="50"
          y="50"
          fontFamily="Verdana"
          fontSize="12"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          70%
        </text>
      </svg>
    </div>
  );
};

export default CirclarProgress;
