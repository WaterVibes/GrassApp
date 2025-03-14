'use client';

import { Card, Title, Text, Grid, AreaChart, BarChart, Flex, Badge, List, ListItem } from "@tremor/react";
import { useState } from "react";

const revenueData = [
  {
    date: "Jan 22",
    Revenue: 2890,
    Orders: 145,
  },
  {
    date: "Feb 22",
    Revenue: 3890,
    Orders: 192,
  },
  {
    date: "Mar 22",
    Revenue: 3490,
    Orders: 168,
  },
  {
    date: "Apr 22",
    Revenue: 4200,
    Orders: 214,
  },
  {
    date: "May 22",
    Revenue: 4500,
    Orders: 235,
  },
  {
    date: "Jun 22",
    Revenue: 4780,
    Orders: 253,
  },
];

const dispensaryMetrics = [
  {
    name: "Green Leaf Dispensary",
    orders: 145,
    revenue: 12500,
    rating: 4.8,
  },
  {
    name: "Herbal Wellness",
    orders: 132,
    revenue: 10800,
    rating: 4.6,
  },
  {
    name: "MediCanna",
    orders: 128,
    revenue: 11200,
    rating: 4.9,
  },
  {
    name: "Pure Relief",
    orders: 118,
    revenue: 9800,
    rating: 4.7,
  },
];

const productPerformance = [
  { name: "Flower", sales: 45 },
  { name: "Edibles", sales: 21 },
  { name: "Concentrates", sales: 18 },
  { name: "Pre-rolls", sales: 12 },
  { name: "Accessories", sales: 4 },
];

export function GrassAppDashboard() {
  return (
    <div className="space-y-6">
      <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6">
        <Card className="stats-card">
          <Text>Total Revenue (MTD)</Text>
          <Flex className="mt-2">
            <Text className="text-tremor-default text-tremor-content">$</Text>
            <Text className="text-xl font-semibold">178,450</Text>
          </Flex>
          <Text className="text-xs text-emerald-500 mt-1">+12.3% vs last month</Text>
        </Card>
        <Card className="stats-card">
          <Text>Active Users</Text>
          <Text className="text-xl font-semibold mt-2">12,543</Text>
          <Text className="text-xs text-emerald-500 mt-1">+8.7% vs last month</Text>
        </Card>
        <Card className="stats-card">
          <Text>Orders Completed</Text>
          <Text className="text-xl font-semibold mt-2">1,245</Text>
          <Text className="text-xs text-emerald-500 mt-1">+15.2% vs last month</Text>
        </Card>
        <Card className="stats-card">
          <Text>Average Order Value</Text>
          <Flex className="mt-2">
            <Text className="text-tremor-default text-tremor-content">$</Text>
            <Text className="text-xl font-semibold">143.25</Text>
          </Flex>
          <Text className="text-xs text-emerald-500 mt-1">+5.4% vs last month</Text>
        </Card>
      </Grid>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <Title>Revenue & Orders</Title>
          <AreaChart
            className="h-72 mt-4"
            data={revenueData}
            index="date"
            categories={["Revenue", "Orders"]}
            colors={["emerald", "blue"]}
            valueFormatter={(number) =>
              number > 1000 ? `$${(number / 1000).toFixed(1)}k` : `$${number}`
            }
            yAxisWidth={60}
          />
        </Card>

        <Card>
          <Title>Product Category Performance</Title>
          <BarChart
            className="h-72 mt-4"
            data={productPerformance}
            index="name"
            categories={["sales"]}
            colors={["emerald"]}
            valueFormatter={(number) => `${number}%`}
            yAxisWidth={48}
          />
        </Card>
      </div>

      <Card>
        <Title>Top Performing Dispensaries</Title>
        <List className="mt-4">
          {dispensaryMetrics.map((dispensary) => (
            <ListItem key={dispensary.name} className="space-y-2">
              <Flex>
                <div>
                  <Text className="font-medium">{dispensary.name}</Text>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge color="emerald">{dispensary.rating} ★</Badge>
                    <Text className="text-sm text-gray-500">
                      {dispensary.orders} orders
                    </Text>
                  </div>
                </div>
                <div className="text-right">
                  <Text className="font-medium">
                    ${dispensary.revenue.toLocaleString()}
                  </Text>
                  <Text className="text-xs text-gray-500">Monthly Revenue</Text>
                </div>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
}

export default GrassAppDashboard; 