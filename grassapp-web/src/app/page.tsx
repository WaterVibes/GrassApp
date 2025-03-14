'use client';

import { HomePage } from '@/components/HomePage';
import { GrassyChat } from '@/components/chat/GrassyChat';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <Suspense fallback={null}>
        <HomePage />
      </Suspense>
      <div className="fixed bottom-4 right-4 z-50">
        <GrassyChat />
      </div>
    </div>
  );
}
