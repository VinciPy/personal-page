
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const Section = ({ className, children, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-16", className)}>
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
