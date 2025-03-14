'use client';

import { BarChart, Card, Title, Text, Flex, Grid, Metric } from "@tremor/react";

const metrics = [
  {
    title: "Active Dispensaries",
    grassapp: 245,
    budzz: 189,
  },
  {
    title: "Daily Active Users",
    grassapp: 12500,
    budzz: 9800,
  },
  {
    title: "Average Order Value",
    grassapp: 85,
    budzz: 92,
  },
];

const chartdata = [
  {
    name: "User Engagement",
    GrassApp: 85,
    Budzz: 78,
  },
  {
    name: "Order Completion",
    GrassApp: 92,
    Budzz: 89,
  },
  {
    name: "Customer Satisfaction",
    GrassApp: 88,
    Budzz: 91,
  },
  {
    name: "Driver Availability",
    GrassApp: 95,
    Budzz: 87,
  },
];

export function PlatformComparison() {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className="space-y-6 mt-4">
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="stats-card">
            <Text className="text-sm font-medium mb-2">{metric.title}</Text>
            <Flex className="mt-2 gap-6">
              <div className="flex-1">
                <Text className="text-xs text-gray-500">GrassApp</Text>
                <div className="text-xl font-semibold mt-1">
                  {formatNumber(metric.grassapp)}
                </div>
              </div>
              <div className="flex-1">
                <Text className="text-xs text-gray-500">Budzz</Text>
                <div className="text-xl font-semibold mt-1">
                  {formatNumber(metric.budzz)}
                </div>
              </div>
            </Flex>
          </Card>
        ))}
      </Grid>

      <Card>
        <Title>Performance Metrics (%)</Title>
        <BarChart
          className="mt-4 h-48"
          data={chartdata}
          index="name"
          categories={["GrassApp", "Budzz"]}
          colors={["emerald", "purple"]}
          stack={false}
          yAxisWidth={30}
        />
      </Card>
    </div>
  );
} 