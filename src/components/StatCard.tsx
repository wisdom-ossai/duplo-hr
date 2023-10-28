import { Card, Metric, Text } from "@tremor/react";

const StatCard = () => {
  return (
    <Card className="mx-auto">
      <Text>Sales</Text>
      <Metric>$ 34,743</Metric>
    </Card>
  );
};

export default StatCard;
