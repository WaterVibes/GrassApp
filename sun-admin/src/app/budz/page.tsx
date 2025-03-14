'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { DashboardHeader } from '@/components/DashboardHeader';

const BudzzDashboard = dynamic(() => import('@/components/BudzzDashboard'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function BudzzPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DashboardHeader
        heading="Budz Dashboard"
        text="View and manage your delivery operations"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BudzzDashboard />
      </Suspense>
    </div>
  );
} 