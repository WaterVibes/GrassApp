'use client';

import { List, ListItem, Text, Badge, Card } from "@tremor/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Order {
  id: string;
  platform: 'grassapp' | 'budzz';
  customer: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed';
  timestamp: Date;
}

export function RealtimeOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [mounted, setMounted] = useState(false);

  // Initialize orders after component mounts to avoid hydration mismatch
  useEffect(() => {
    setOrders([
      {
        id: '1',
        platform: 'grassapp',
        customer: 'John D.',
        amount: 150.00,
        status: 'pending',
        timestamp: new Date(),
      },
      {
        id: '2',
        platform: 'budzz',
        customer: 'Sarah M.',
        amount: 89.99,
        status: 'processing',
        timestamp: new Date(),
      },
    ]);
    setMounted(true);
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      const newOrder: Order = {
        id: Math.random().toString(),
        platform: Math.random() > 0.5 ? 'grassapp' : 'budzz',
        customer: `Customer ${Math.floor(Math.random() * 1000)}`,
        amount: Math.floor(Math.random() * 200) + 50,
        status: 'pending',
        timestamp: new Date(),
      };

      setOrders(prev => [newOrder, ...prev.slice(0, 4)]);
    }, 5000);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <List>
      <AnimatePresence>
        {orders.map((order) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ListItem className="mt-2">
              <div className="flex items-center justify-between w-full">
                <div>
                  <Text>{order.customer}</Text>
                  <div className="flex items-center gap-2">
                    <Badge
                      color={order.platform === 'grassapp' ? 'green' : 'purple'}
                    >
                      {order.platform}
                    </Badge>
                    <Badge
                      color={
                        order.status === 'completed'
                          ? 'green'
                          : order.status === 'processing'
                          ? 'yellow'
                          : 'blue'
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <Text className="font-medium">${order.amount.toFixed(2)}</Text>
                  <Text suppressHydrationWarning className="text-xs text-gray-500">
                    {order.timestamp.toLocaleTimeString()}
                  </Text>
                </div>
              </div>
            </ListItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </List>
  );
} 