import React from "react";
import StatCard from "./StatCard";

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <StatCard />
      <StatCard />
      <StatCard />
    </div>
  );
};

export default StatCards;
