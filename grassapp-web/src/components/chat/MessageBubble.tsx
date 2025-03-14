'use client';

import { Message, MessageType } from '@/types/chat';
import { motion } from 'framer-motion';
import { EffectMeter } from './EffectMeter';
import { ProductCard } from './ProductCard';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isBot = message.type === MessageType.BOT;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-[80%] rounded-2xl p-4 ${
          isBot
            ? 'bg-emerald-900 text-white'
            : 'bg-emerald-600 text-white'
        }`}
      >
        <p className="text-sm md:text-base">{message.text}</p>
        
        {isBot && message.effects && (
          <div className="mt-4 space-y-2">
            <EffectMeter label="Relaxed" value={message.effects.relaxed} />
            <EffectMeter label="Energetic" value={message.effects.energetic} />
            <EffectMeter label="Creative" value={message.effects.creative} />
            <EffectMeter label="Focused" value={message.effects.focused} />
          </div>
        )}

        {isBot && message.recommendations && (
          <div className="mt-4 space-y-4">
            {message.recommendations.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
} 