import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className = '', hoverEffect = true }: CardProps) {
  return (
    <div 
      className={`
        bg-zinc-800/50 
        rounded-lg 
        shadow-lg 
        overflow-hidden 
        border 
        border-zinc-700/50 
        backdrop-blur-sm 
        ${hoverEffect ? 'hover:shadow-xl transition duration-300 hover:bg-zinc-800/80' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-6 flex-grow ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-6 py-3 bg-zinc-900/80 border-t border-zinc-700/50 ${className}`}>
      {children}
    </div>
  );
} 