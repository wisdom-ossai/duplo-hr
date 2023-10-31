import { BarchartCard, Meetings, StatCards } from "@/components";
import ActivityFeeds from "@/components/ActivityFeeds";

const DashboardHome = () => {
  return (
    <div className="flex flex-col gap-8">
      <StatCards />
      <BarchartCard />
      <div className="flex items-start flex-wrap gap-8">
        <ActivityFeeds />
        <Meetings />
      </div>
    </div>
  );
};

export default DashboardHome;
