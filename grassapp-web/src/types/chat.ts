export enum MessageType {
  USER = 'user',
  BOT = 'bot'
}

export interface Message {
  id: string;
  type: MessageType;
  text: string;
  timestamp: Date;
  effects?: {
    relaxed: number;
    energetic: number;
    creative: number;
    focused: number;
  };
  recommendations?: {
    name: string;
    type: string;
    thc: string;
    description: string;
    price: number;
  }[];
} 