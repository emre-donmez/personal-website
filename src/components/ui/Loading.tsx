import React from 'react';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Loading({ message = 'Loading...', size = 'medium' }: LoadingProps) {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12'
  };
  
  return (
    <div className="text-center py-12">
      <div className={`inline-block ${sizeClasses[size]} animate-spin rounded-full border-4 border-solid border-[rgb(var(--color-primary))] border-r-transparent`}></div>
      {message && <p className="mt-4 text-gray-400">{message}</p>}
    </div>
  );
}