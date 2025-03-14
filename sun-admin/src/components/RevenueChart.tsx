'use client';

import { Card, AreaChart, Title, Text } from "@tremor/react";
import { useState } from "react";

const chartdata = [
  {
    date: "Jan 22",
    GrassApp: 2890,
    Budzz: 2400,
  },
  {
    date: "Feb 22",
    GrassApp: 3890,
    Budzz: 3200,
  },
  {
    date: "Mar 22",
    GrassApp: 3490,
    Budzz: 2900,
  },
  {
    date: "Apr 22",
    GrassApp: 4200,
    Budzz: 3700,
  },
  {
    date: "May 22",
    GrassApp: 4500,
    Budzz: 4100,
  },
  {
    date: "Jun 22",
    GrassApp: 4780,
    Budzz: 4500,
  },
];

export function RevenueChart() {
  return (
    <div className="mt-4">
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["GrassApp", "Budzz"]}
        colors={["emerald", "purple"]}
        valueFormatter={(number) =>
          `$${Intl.NumberFormat("us").format(number).toString()}`
        }
        yAxisWidth={60}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card className="stats-card">
          <Title>GrassApp Revenue</Title>
          <Text>Total: $4,780</Text>
          <Text className="text-emerald-500">+12.5% from last month</Text>
        </Card>
        
        <Card className="stats-card">
          <Title>Budzz Revenue</Title>
          <Text>Total: $4,500</Text>
          <Text className="text-emerald-500">+8.9% from last month</Text>
        </Card>
      </div>
    </div>
  );
} 