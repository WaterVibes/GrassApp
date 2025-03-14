'use client';

import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels } from "@tremor/react";
import { useState, Suspense } from "react";
import dynamic from 'next/dynamic';
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardStats } from "@/components/DashboardStats";
import { RealtimeOrders } from "@/components/RealtimeOrders";
import { RevenueChart } from "@/components/RevenueChart";
import { PlatformComparison } from "@/components/PlatformComparison";

// Dynamic imports for tab panels
const GrassAppDashboard = dynamic(() => import('@/components/GrassAppDashboard'), {
  loading: () => <div>Loading GrassApp dashboard...</div>
});

const BudzzDashboard = dynamic(() => import('@/components/BudzzDashboard'), {
  loading: () => <div>Loading Budzz dashboard...</div>
});

const AnalyticsDashboard = dynamic(() => import('@/components/AnalyticsDashboard'), {
  loading: () => <div>Loading Analytics dashboard...</div>
});

export default function Home() {
  const [selectedView, setSelectedView] = useState("overview");

  return (
    <main className="p-6 space-y-8">
      <DashboardHeader />
      
      <TabGroup>
        <TabList className="mt-8">
          <Tab value="overview">Overview</Tab>
          <Tab value="grassapp">GrassApp</Tab>
          <Tab value="budz">Budz</Tab>
          <Tab value="analytics">Analytics</Tab>
        </TabList>
        
        <TabPanels>
          <TabPanel>
            {/* Overview Panel */}
            <div className="mt-6 space-y-6">
              <DashboardStats />
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <Title>Platform Revenue Comparison</Title>
                  <PlatformComparison />
                </Card>
                
                <Card>
                  <Title>Real-time Orders</Title>
                  <RealtimeOrders />
                </Card>
              </div>
              
              <Card>
                <Title>Revenue Over Time</Title>
                <RevenueChart />
              </Card>
            </div>
          </TabPanel>
          
          <TabPanel>
            {/* GrassApp Panel */}
            <div className="mt-6">
              <Suspense fallback={<div>Loading GrassApp dashboard...</div>}>
                <GrassAppDashboard />
              </Suspense>
            </div>
          </TabPanel>
          
          <TabPanel>
            {/* Budzz Panel */}
            <div className="mt-6">
              <Suspense fallback={<div>Loading Budzz dashboard...</div>}>
                <BudzzDashboard />
              </Suspense>
            </div>
          </TabPanel>
          
          <TabPanel>
            {/* Analytics Panel */}
            <div className="mt-6">
              <Suspense fallback={<div>Loading Analytics dashboard...</div>}>
                <AnalyticsDashboard />
              </Suspense>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
} 