'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { RealTimeProvider } from '@/providers/RealTimeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-sun-dark text-white">
        <QueryClientProvider client={queryClient}>
          <RealTimeProvider>
            {children}
          </RealTimeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
} 