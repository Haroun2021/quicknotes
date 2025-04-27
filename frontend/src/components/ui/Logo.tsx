import React from 'react';
import { FileText } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };
  
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };
  
  return (
    <div className="flex items-center">
      <div className="bg-primary-600 rounded-lg p-1.5 text-white">
        <FileText className={sizeClasses[size]} />
      </div>
      {showText && (
        <span className={`ml-2 font-bold ${textSizeClasses[size]}`}>
          <span className="text-primary-600 dark:text-primary-400">Quick</span>
          <span className="text-gray-900 dark:text-white">Notes</span>
        </span>
      )}
    </div>
  );
};

export default Logo;