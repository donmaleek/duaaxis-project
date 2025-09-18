import React from 'react';

const Card = ({
  children,
  variant = 'default',
  padding = 'medium',
  hover = false,
  className = '',
  ...props
}) => {
  // Base classes
  const baseClasses = 'rounded-lg border';
  
  // Variant classes
  const variantClasses = {
    default: 'bg-white border-gray-200',
    elevated: 'bg-white border-gray-200 shadow-sm',
    filled: 'bg-gray-50 border-gray-200',
    outlined: 'bg-transparent border-gray-300',
    primary: 'bg-primary-50 border-primary-200',
    secondary: 'bg-secondary-50 border-secondary-200'
  };
  
  // Padding classes
  const paddingClasses = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };
  
  // Hover effect
  const hoverClass = hover ? 'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5' : '';
  
  // Combine all classes
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${hoverClass}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

// Card Header component
const CardHeader = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`pb-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Card Title component
const CardTitle = ({
  children,
  size = 'medium',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    small: 'text-lg font-semibold',
    medium: 'text-xl font-semibold',
    large: 'text-2xl font-bold'
  };
  
  return (
    <h3 className={`${sizeClasses[size]} text-gray-900 ${className}`} {...props}>
      {children}
    </h3>
  );
};

// Card Description component
const CardDescription = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <p className={`text-sm text-gray-600 ${className}`} {...props}>
      {children}
    </p>
  );
};

// Card Content component
const CardContent = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

// Card Footer component
const CardFooter = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`pt-4 mt-4 border-t border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Compound component export
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;