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
    ? 'bg-dark-gradient' 
    : 'bg-[rgb(var(--color-bg-secondary))]';
  
  return (
    <section id={id} className={`section-spacing px-4 ${bgColorClass} ${className} relative overflow-hidden`}>
      {/* Dekoratif arka plan öğeleri */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgb(var(--color-primary))] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgb(var(--color-primary))] to-transparent"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex justify-center mb-2">
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
} 