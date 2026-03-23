import React from 'react';
import { cn } from './Button';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-panel p-6 md:p-8 relative overflow-hidden group",
          hoverEffect && "transition-all duration-500 hover:-translate-y-1 hover:shadow-lg",
          className
        )}
        {...props}
      >
        {/* Subtle yellow hover glare for interactive cards */}
        {hoverEffect && (
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-yellow/0 via-accent-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);
Card.displayName = "Card";
