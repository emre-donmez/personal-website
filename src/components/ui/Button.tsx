import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
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
  const baseClasses = variant === 'link' 
    ? 'inline-flex items-center font-medium transition-colors duration-300 text-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary))/80]' 
    : 'btn';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    link: ''
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