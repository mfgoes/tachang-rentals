// components/util/container.tsx
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full';
  className?: string;
}

export const Container = ({
  children,
  size = 'medium',
  className = '',
}: ContainerProps) => {
  const sizeClasses = {
    small: 'max-w-4xl',
    medium: 'max-w-6xl',
    large: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};