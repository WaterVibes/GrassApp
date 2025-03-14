'use client';

import { Title, Text, Badge } from "@tremor/react";
import { SunIcon } from "@heroicons/react/24/solid";

interface DashboardHeaderProps {
  heading?: string;
  text?: string;
}

export function DashboardHeader({ heading = "Sun Admin Dashboard", text = "Unified control center for GrassApp and Budzz" }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="sun-gradient p-3 rounded-xl">
          <SunIcon className="w-8 h-8 text-white" />
        </div>
        <div>
          <Title>{heading}</Title>
          <Text>{text}</Text>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Badge color="green">GrassApp: Online</Badge>
          <Badge color="purple">Budz: Online</Badge>
        </div>
        
        <div className="card px-4 py-2">
          <Text>Last sync: Just now</Text>
        </div>
      </div>
    </div>
  );
} 