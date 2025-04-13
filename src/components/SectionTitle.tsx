
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

const SectionTitle = ({ children, className, as = 'h2' }: SectionTitleProps) => {
  const Component = as;
  
  const styles = cn(
    "font-bold tracking-tight mb-6",
    as === 'h1' && "text-4xl md:text-5xl lg:text-6xl",
    as === 'h2' && "text-3xl md:text-4xl",
    as === 'h3' && "text-2xl md:text-3xl",
    className
  );
  
  return (
    <Component className={styles}>
      {children}
    </Component>
  );
};

export default SectionTitle;
