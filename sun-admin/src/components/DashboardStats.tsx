'use client';

import { Card, Metric, Text, Flex, Grid, ProgressBar } from "@tremor/react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

export function DashboardStats() {
  const stats = [
    {
      title: "Total Revenue",
      metric: "$12,699",
      progress: 85,
      change: "+15.9%",
      isIncreasing: true,
    },
    {
      title: "Active Users",
      metric: "8,594",
      progress: 65,
      change: "+22.4%",
      isIncreasing: true,
    },
    {
      title: "Pending Orders",
      metric: "145",
      progress: 45,
      change: "-8.1%",
      isIncreasing: false,
    },
    {
      title: "Platform Uptime",
      metric: "99.9%",
      progress: 95,
      change: "+0.1%",
      isIncreasing: true,
    },
  ];

  return (
    <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="stats-card">
          <Text>{stat.title}</Text>
          <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
            <Metric>{stat.metric}</Metric>
            <Text className={stat.isIncreasing ? "text-emerald-500" : "text-red-500"}>
              {stat.isIncreasing ? (
                <ArrowUpIcon className="inline w-4 h-4 mr-1" />
              ) : (
                <ArrowDownIcon className="inline w-4 h-4 mr-1" />
              )}
              {stat.change}
            </Text>
          </Flex>
          <ProgressBar value={stat.progress} className="mt-3" />
        </Card>
      ))}
    </Grid>
  );
} 