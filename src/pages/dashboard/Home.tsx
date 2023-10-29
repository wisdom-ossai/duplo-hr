import { StatCards } from "@/components";
import BarchartCard from "@/components/BarchartCard";

const DashboardHome = () => {
  return (
    <div className="flex flex-col gap-8">
      <StatCards />
      <BarchartCard />
    </div>
  );
};

export default DashboardHome;
