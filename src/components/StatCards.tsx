import StatCard from "./StatCard";

const stats = [
  {
    name: "Total Application",
    value: 5672,
    totalPercentage: 74,
    newPercent: 14,
    color: "green",
  },
  {
    name: "Shortlisted Candidates",
    value: 3045,
    totalPercentage: 74,
    newPercent: 14,
    color: "amber",
  },
  {
    name: "Rejected Candidates",
    value: 1055,
    totalPercentage: 74,
    newPercent: 14,
    color: "red",
  },
];

const StatCards = () => {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      {stats.map((stat) => (
        <StatCard key={stat.name} data={stat} />
      ))}
    </div>
  );
};

export default StatCards;
