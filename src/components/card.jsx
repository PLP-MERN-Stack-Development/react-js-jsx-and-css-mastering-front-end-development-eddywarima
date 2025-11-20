import React from 'react';

const Card = ({ 
  children, 
  className = '',
  padding = 'medium',
  hover = false,
  ...props 
}) => {
  const paddingClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };

  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-200';
  const hoverClass = hover ? 'hover:shadow-lg hover:scale-[1.02]' : '';

  const classes = `${baseClasses} ${paddingClasses[padding]} ${hoverClass} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;