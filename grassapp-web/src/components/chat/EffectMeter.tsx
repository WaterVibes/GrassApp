'use client';

import { motion } from 'framer-motion';

interface EffectMeterProps {
  label: string;
  value: number;
}

export function EffectMeter({ label, value }: EffectMeterProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400 w-20">{label}</span>
      <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-grass-primary"
          initial={{ width: 0 }}
          animate={{ width: `${value * 100}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <span className="text-sm text-gray-400 w-12 text-right">
        {Math.round(value * 100)}%
      </span>
    </div>
  );
} 