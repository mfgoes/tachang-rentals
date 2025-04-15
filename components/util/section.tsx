// components/util/section.tsx
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export const Section = ({
  children,
  color = 'default',
  className = '',
}: SectionProps) => {
  const colorClasses = {
    default: 'bg-white',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
  };

  return (
    <section className={`py-12 ${colorClasses[color]} ${className}`}>
      {children}
    </section>
  );
};