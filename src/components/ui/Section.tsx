import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bgColor?: 'primary' | 'secondary';
  className?: string;
}

export default function Section({ id, title, children, bgColor = 'primary', className = '' }: SectionProps) {
  const bgColorClass = bgColor === 'primary' 
    ? 'bg-[rgb(var(--color-bg))]' 
    : 'bg-[rgb(var(--color-bg-secondary))]';
  
  return (
    <section id={id} className={`section-spacing px-4 ${bgColorClass} ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-12">
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
} 