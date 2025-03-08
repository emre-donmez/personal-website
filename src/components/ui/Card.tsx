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
        ${hoverEffect ? 'hover:translate-y-[-5px] hover:shadow-[0_10px_25px_-5px_rgba(var(--color-primary),0.15)]' : ''}
        transition-all duration-500 ease-in-out
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
    <div className={`px-6 py-4 border-t border-[rgb(var(--color-primary))]/10 ${className}`}>
      {children}
    </div>
  );
} 