import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  border = true,
  hover = false,
}) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };
  
  const borderClass = border ? 'border border-gray-200 dark:border-gray-800' : '';
  const hoverClass = hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg' : '';
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm ${paddingClasses[padding]} ${borderClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;