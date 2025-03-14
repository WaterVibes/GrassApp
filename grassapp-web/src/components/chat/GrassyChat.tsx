'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message, MessageType } from '@/types/chat';
import { generateId } from '@/utils/helpers';
import { getMockResponse, introMessages } from '@/utils/mockResponses';
import { MessageBubble } from './MessageBubble';
import { CannabisIcon } from '../icons/CannabisIcon';

export function GrassyChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getRandomIntroMessage = () => {
    const randomIndex = Math.floor(Math.random() * introMessages.length);
    return introMessages[randomIndex];
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: generateId(),
        type: MessageType.BOT,
        text: getRandomIntroMessage(),
        timestamp: new Date(),
      };
      setMessages([initialMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: generateId(),
      type: MessageType.USER,
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay with random variation
    const typingDelay = Math.random() * 1000 + 800; // Random delay between 800ms and 1800ms
    setTimeout(() => {
      const response = getMockResponse(input);
      const botMessage: Message = {
        id: generateId(),
        type: MessageType.BOT,
        text: response.text,
        timestamp: new Date(),
        effects: response.effects,
        recommendations: response.recommendations,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, typingDelay);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition-colors duration-200"
      >
        <CannabisIcon className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-full right-0 mb-4 w-[350px] h-[500px] bg-black rounded-2xl shadow-xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-emerald-900 p-4 flex items-center">
              <CannabisIcon className="w-6 h-6 text-white mr-2" />
              <h3 className="text-white font-semibold">Chat with Grassy</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
              {isTyping && (
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Grassy anything..."
                  className="flex-1 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 