import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow';
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseStyles = 'p-6 border-4 border-slate-700 backdrop-blur-sm shadow-[8px_8px_0_0_rgba(0,0,0,0.5)]';
  
  const variants = {
    default: 'bg-slate-900',
    glow: 'bg-slate-900 border-cyan-500/80 shadow-[8px_8px_0_0_rgba(6,182,212,0.3)]'
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`.trim()}>
      {children}
    </div>
  );
}
