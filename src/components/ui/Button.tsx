import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center text-xs md:text-sm font-retro transition-all duration-100 transform active:translate-y-1 uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] border-4';
  
  const variants = {
    primary: 'bg-cyan-500 hover:bg-cyan-400 text-slate-900 border-white',
    secondary: 'bg-fuchsia-500 hover:bg-fuchsia-400 text-white border-white',
    accent: 'bg-lime-500 hover:bg-lime-400 text-slate-900 border-white',
    outline: 'bg-slate-800 border-cyan-500 text-cyan-400 hover:bg-slate-700'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm'
  };

  const classes = `
    ${baseStyles} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${className}
  `.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
