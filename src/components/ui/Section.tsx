import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bgColor?: 'black' | 'zinc';
  className?: string;
}

export default function Section({ id, title, children, bgColor = 'black', className = '' }: SectionProps) {
  const bgColorClass = bgColor === 'black' ? 'bg-black' : 'bg-zinc-900/50';
  
  return (
    <section id={id} className={`py-20 px-4 ${bgColorClass} ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{title}</h2>
        {children}
      </div>
    </section>
  );
} 