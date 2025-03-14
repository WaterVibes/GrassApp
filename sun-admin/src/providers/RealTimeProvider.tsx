'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { WebSocketEvent, PlatformMetrics } from '@grassapp/shared-types';
import { io } from 'socket.io-client';

interface RealTimeContextType {
  grassappMetrics: PlatformMetrics | null;
  budzMetrics: PlatformMetrics | null;
  isConnected: boolean;
}

const RealTimeContext = createContext<RealTimeContextType>({
  grassappMetrics: null,
  budzMetrics: null,
  isConnected: false,
});

export function RealTimeProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [grassappMetrics, setGrassappMetrics] = useState<PlatformMetrics | null>(null);
  const [budzMetrics, setBudzMetrics] = useState<PlatformMetrics | null>(null);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL || 'ws://localhost:3001', {
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      console.log('WebSocket connected');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
      setIsConnected(false);
    });

    socket.on('metrics:grassapp', (data: PlatformMetrics) => {
      setGrassappMetrics(data);
    });

    socket.on('metrics:budz', (data: PlatformMetrics) => {
      setBudzMetrics(data);
    });

    // Cleanup
    return () => {
      socket.disconnect();
      setIsConnected(false);
    };
  }, []);

  return (
    <RealTimeContext.Provider value={{ grassappMetrics, budzMetrics, isConnected }}>
      {children}
    </RealTimeContext.Provider>
  );
}

export const useRealTime = () => useContext(RealTimeContext); 