'use client';

import { useState } from 'react';
import {
  Card,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Grid,
  Metric,
  Flex,
  List,
  ListItem,
  Badge,
  ProgressBar,
  AreaChart,
  BarChart,
  DonutChart,
  DateRangePicker,
  type DateRangePickerValue
} from '@tremor/react';

// Mock data for various metrics
const platformMetrics = {
  grassapp: {
    revenue: 125000,
    users: 8500,
    orders: 3420,
    avgOrderValue: 85.20,
    growth: {
      revenue: 12.5,
      users: 8.7,
      orders: 10.2,
      avgOrderValue: 5.8,
    },
  },
  budzz: {
    revenue: 98000,
    drivers: 245,
    deliveries: 3420,
    avgDeliveryFee: 12.50,
    growth: {
      revenue: 9.8,
      drivers: 7.2,
      deliveries: 8.5,
      avgDeliveryFee: 3.2,
    },
  },
};

const revenueData = [
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

const userSegmentation = [
  {
    name: "Power Users",
    value: 25,
  },
  {
    name: "Regular Users",
    value: 45,
  },
  {
    name: "Occasional Users",
    value: 20,
  },
  {
    name: "New Users",
    value: 10,
  },
];

const retentionData = [
  {
    week: "Week 1",
    "Retention Rate": 85,
  },
  {
    week: "Week 2",
    "Retention Rate": 75,
  },
  {
    week: "Week 3",
    "Retention Rate": 65,
  },
  {
    week: "Week 4",
    "Retention Rate": 55,
  },
];

const geographicData = [
  {
    city: "Baltimore",
    users: 12500,
    revenue: 125000,
    mmccPatients: 8500,
    dispensaries: 12,
  },
  {
    city: "Montgomery County",
    users: 9800,
    revenue: 98000,
    mmccPatients: 6500,
    dispensaries: 8,
  },
  {
    city: "Prince George's County",
    users: 8500,
    revenue: 85000,
    mmccPatients: 5800,
    dispensaries: 6,
  },
  {
    city: "Anne Arundel County",
    users: 7200,
    revenue: 72000,
    mmccPatients: 4800,
    dispensaries: 5,
  },
  {
    city: "Howard County",
    users: 6500,
    revenue: 65000,
    mmccPatients: 4200,
    dispensaries: 4,
  },
];

const platformComparison = [
  {
    metric: "User Engagement",
    GrassApp: 85,
    Budzz: 78,
  },
  {
    metric: "Order Completion",
    GrassApp: 92,
    Budzz: 89,
  },
  {
    metric: "Customer Satisfaction",
    GrassApp: 88,
    Budzz: 91,
  },
  {
    metric: "Driver Availability",
    GrassApp: 95,
    Budzz: 87,
  },
];

export function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState<DateRangePickerValue>({
    from: new Date(),
    to: new Date()
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Title>Analytics Dashboard</Title>
        <DateRangePicker
          value={dateRange}
          onValueChange={setDateRange}
          className="max-w-md"
        />
      </div>

      <TabGroup>
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="geographic">Geographic Data</Tab>
          <Tab value="platform">Platform Comparison</Tab>
          <Tab value="compliance">Compliance</Tab>
        </TabList>

        <TabPanels>
          {/* Overview Panel */}
          <TabPanel>
            <div className="mt-6 space-y-6">
              <Grid numItems={2} numItemsSm={2} numItemsLg={4} className="gap-6">
                <Card>
                  <Text>Total Patients</Text>
                  <Metric>1,234</Metric>
                  <Text>+12.3% from last month</Text>
                </Card>

                <Card>
                  <Text>Active Patients</Text>
                  <Metric>987</Metric>
                  <Text>+5.6% from last month</Text>
                </Card>

                <Card>
                  <Text>MMCC Verified</Text>
                  <Metric>856</Metric>
                  <Text>+8.2% from last month</Text>
                </Card>

                <Card>
                  <Text>Pending Verification</Text>
                  <Metric>131</Metric>
                  <Text>-2.1% from last month</Text>
                </Card>
              </Grid>

              <Card>
                <Title>Patient Growth Over Time</Title>
                <AreaChart
                  data={[
                    { date: '2023-01', total: 800, active: 600 },
                    { date: '2023-02', total: 900, active: 700 },
                    { date: '2023-03', total: 1000, active: 800 },
                    { date: '2023-04', total: 1100, active: 900 },
                    { date: '2023-05', total: 1234, active: 987 }
                  ]}
                  index="date"
                  categories={['total', 'active']}
                  colors={['blue', 'green']}
                />
              </Card>
            </div>
          </TabPanel>

          {/* Geographic Data Panel */}
          <TabPanel>
            <Card>
              <Title>Maryland Region Distribution</Title>
              <List>
                <ListItem>
                  <div>
                    <Text>Baltimore Metro</Text>
                    <Text>45% of total patients</Text>
                  </div>
                  <div>
                    <Text>450 patients</Text>
                  </div>
                  <div>
                    <Text>Growth: +15%</Text>
                  </div>
                  <ProgressBar value={45} color="blue" />
                </ListItem>
                {/* Add more regions as needed */}
              </List>
            </Card>

            <Card>
              <Title>Patient Distribution by County</Title>
              <DonutChart
                data={[
                  { county: 'Baltimore City', value: 250 },
                  { county: 'Montgomery', value: 200 },
                  { county: 'Prince George\'s', value: 150 },
                  { county: 'Anne Arundel', value: 100 },
                  { county: 'Others', value: 300 }
                ]}
                category="value"
                index="county"
              />
            </Card>

            <Card>
              <Title>Population Coverage</Title>
              <DonutChart
                data={[
                  { status: 'Covered', value: 70 },
                  { status: 'Uncovered', value: 30 }
                ]}
                category="value"
                index="status"
              />
            </Card>
          </TabPanel>

          {/* Platform Comparison Panel */}
          <TabPanel>
            <Card>
              <Title>Platform Performance</Title>
              <List>
                <ListItem>
                  <Text>GrassApp</Text>
                  <Flex>
                    <Badge color="green">Active</Badge>
                    <Badge color="blue">Primary</Badge>
                  </Flex>
                </ListItem>

                <ListItem>
                  <Text>Budzz</Text>
                  <Flex>
                    <Badge color="green">Active</Badge>
                    <Badge color="gray">Secondary</Badge>
                  </Flex>
                </ListItem>

                <ListItem>
                  <Text>Combined</Text>
                  <Flex>
                    <Badge color="green">Active</Badge>
                    <Badge color="yellow">Synced</Badge>
                  </Flex>
                </ListItem>
              </List>
            </Card>

            <Card>
              <Title>Platform Usage Comparison</Title>
              <BarChart
                data={[
                  { platform: 'GrassApp', users: 800, orders: 1200 },
                  { platform: 'Budzz', users: 600, orders: 900 },
                ]}
                index="platform"
                categories={['users', 'orders']}
                colors={['blue', 'green']}
              />
            </Card>
          </TabPanel>

          {/* Compliance Panel */}
          <TabPanel>
            <Card>
              <Title>MMCC Compliance Status</Title>
              <List>
                <ListItem>
                  <Text>Verified Patients</Text>
                  <Flex>
                    <Badge color="green">856</Badge>
                    <Badge color="blue">87%</Badge>
                  </Flex>
                </ListItem>

                <ListItem>
                  <Text>Pending Verification</Text>
                  <Flex>
                    <Badge color="yellow">98</Badge>
                    <Badge color="blue">10%</Badge>
                  </Flex>
                </ListItem>

                <ListItem>
                  <Text>Rejected</Text>
                  <Flex>
                    <Badge color="red">33</Badge>
                    <Badge color="blue">3%</Badge>
                  </Flex>
                </ListItem>
              </List>
            </Card>

            <Card>
              <Title>Verification Success Rate</Title>
              <BarChart
                data={[
                  { month: 'Jan', rate: 85 },
                  { month: 'Feb', rate: 88 },
                  { month: 'Mar', rate: 91 },
                  { month: 'Apr', rate: 87 },
                  { month: 'May', rate: 89 }
                ]}
                index="month"
                categories={['rate']}
                colors={['green']}
              />
            </Card>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default AnalyticsDashboard; 