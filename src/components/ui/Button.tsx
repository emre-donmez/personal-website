import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'link';
  className?: string;
  external?: boolean;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '',
  external = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors';
  
  const variantClasses = {
    primary: 'px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700',
    secondary: 'px-6 py-3 bg-zinc-700 text-white rounded-md hover:bg-zinc-600',
    link: 'text-teal-400 hover:text-teal-300'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  const externalProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};
  
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...externalProps}>
        {children}
        {external && variant === 'link' && (
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        )}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
} 