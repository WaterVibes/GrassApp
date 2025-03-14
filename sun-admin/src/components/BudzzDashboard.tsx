import { Card, Title, Text, Grid, AreaChart, BarChart, Flex, Badge, List, ListItem } from "@tremor/react";
import { useState } from "react";

const revenueData = [
  {
    date: "Jan 22",
    Revenue: 2890,
    "Active Drivers": 2400,
  },
  {
    date: "Feb 22",
    Revenue: 3890,
    "Active Drivers": 3200,
  },
  {
    date: "Mar 22",
    Revenue: 3490,
    "Active Drivers": 2900,
  },
  {
    date: "Apr 22",
    Revenue: 4200,
    "Active Drivers": 3700,
  },
  {
    date: "May 22",
    Revenue: 4500,
    "Active Drivers": 4100,
  },
  {
    date: "Jun 22",
    Revenue: 4780,
    "Active Drivers": 4500,
  },
];

const deliveryCategories = [
  {
    name: "Food Delivery",
    value: 45,
  },
  {
    name: "Grocery Delivery",
    value: 30,
  },
  {
    name: "Package Delivery",
    value: 15,
  },
  {
    name: "Express Delivery",
    value: 10,
  },
];

const driverMetrics = [
  {
    name: "John Smith",
    rating: 4.8,
    deliveries: 156,
    revenue: 12500,
  },
  {
    name: "Sarah Johnson",
    rating: 4.9,
    deliveries: 142,
    revenue: 11800,
  },
  {
    name: "Mike Wilson",
    rating: 4.7,
    deliveries: 128,
    revenue: 10500,
  },
  {
    name: "Emily Brown",
    rating: 4.8,
    deliveries: 115,
    revenue: 9800,
  },
  {
    name: "David Lee",
    rating: 4.6,
    deliveries: 98,
    revenue: 8500,
  },
];

export function BudzzDashboard() {
  return (
    <div className="space-y-6">
      <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6">
        <Card className="stats-card">
          <Text>Total Revenue (MTD)</Text>
          <Flex className="mt-2">
            <Text className="text-tremor-default text-tremor-content">$</Text>
            <Text className="text-xl font-semibold">142,800</Text>
          </Flex>
          <Text className="text-xs text-purple-500 mt-1">+9.8% vs last month</Text>
        </Card>
        <Card className="stats-card">
          <Text>Active Drivers</Text>
          <Text className="text-xl font-semibold mt-2">9,876</Text>
          <Text className="text-xs text-purple-500 mt-1">+7.2% vs last month</Text>
        </Card>
        <Card className="stats-card">
          <Text>Deliveries Completed</Text>
          <Text className="text-xl font-semibold mt-2">342</Text>
          <Text className="text-xs text-purple-500 mt-1">+12.5% vs last month</Text>
        </Card>
        <Card className="stats-card">
          <Text>Average Delivery Fee</Text>
          <Flex className="mt-2">
            <Text className="text-tremor-default text-tremor-content">$</Text>
            <Text className="text-xl font-semibold">45.75</Text>
          </Flex>
          <Text className="text-xs text-purple-500 mt-1">+3.2% vs last month</Text>
        </Card>
      </Grid>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <Title>Revenue & Driver Growth</Title>
          <AreaChart
            className="h-72 mt-4"
            data={revenueData}
            index="date"
            categories={["Revenue", "Active Drivers"]}
            colors={["purple", "blue"]}
            valueFormatter={(number) =>
              `$${Intl.NumberFormat("us").format(number).toString()}`
            }
            yAxisWidth={60}
          />
        </Card>

        <Card>
          <Title>Delivery Category Distribution</Title>
          <BarChart
            className="h-72 mt-4"
            data={deliveryCategories}
            index="name"
            categories={["value"]}
            colors={["purple"]}
            valueFormatter={(number) => `${number}%`}
            yAxisWidth={30}
          />
        </Card>
      </div>

      <Card>
        <Title>Top Performing Drivers</Title>
        <List className="mt-4">
          {driverMetrics.map((driver) => (
            <ListItem key={driver.name} className="space-y-2">
              <Flex>
                <div>
                  <Text className="font-medium">{driver.name}</Text>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge color="purple">{driver.rating} ★</Badge>
                    <Text className="text-sm text-gray-500">
                      {driver.deliveries} deliveries
                    </Text>
                  </div>
                </div>
                <div className="text-right">
                  <Text className="font-medium">
                    ${driver.revenue.toLocaleString()}
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

export default BudzzDashboard; 