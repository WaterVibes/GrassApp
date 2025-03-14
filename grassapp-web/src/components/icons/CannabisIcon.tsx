import { SVGProps } from 'react';

export function CannabisIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2c-1.4 0-2.8.3-4 .8 1.1 1.4 1.7 3.1 1.7 4.9 0 1.8-.6 3.5-1.7 4.9C9.2 13.7 11 14.5 12 14.5s2.8-.8 4-1.9c-1.1-1.4-1.7-3.1-1.7-4.9 0-1.8.6-3.5 1.7-4.9C14.8 2.3 13.4 2 12 2z"/>
      <path d="M12 15.5c-1.4 0-2.8.3-4 .8 1.1 1.4 1.7 3.1 1.7 4.9 0 .3 0 .5-.1.8h4.8c0-.3-.1-.5-.1-.8 0-1.8.6-3.5 1.7-4.9-1.2-.5-2.6-.8-4-.8z"/>
      <path d="M17.3 7.7c.7-1.3 1.7-2.4 2.9-3.2-.4-.2-.8-.3-1.2-.5-1.4 1.1-2.4 2.7-2.9 4.5.4-.3.8-.6 1.2-.8z"/>
      <path d="M6.7 7.7c-.7-1.3-1.7-2.4-2.9-3.2.4-.2.8-.3 1.2-.5 1.4 1.1 2.4 2.7 2.9 4.5-.4-.3-.8-.6-1.2-.8z"/>
    </svg>
  );
} 