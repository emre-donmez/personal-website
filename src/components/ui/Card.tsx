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
        card
        ${hoverEffect ? 'hover:translate-y-[-5px]' : ''}
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
    <div className={`px-6 py-4 border-t border-zinc-800/30 ${className}`}>
      {children}
    </div>
  );
} 