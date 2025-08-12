import React from 'react';
import { COLORS } from '../../constants/colors';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  fullWidth = true,
  className = '',
}) => {
  const baseClasses = 'h-14 rounded-2xl font-bold text-lg transition-colors duration-200 flex items-center justify-center';
  
  const variantClasses = {
    primary: `bg-[${COLORS.primary.yellow}] text-black hover:bg-[${COLORS.primary.yellowHover}] active:bg-[${COLORS.primary.yellowActive}] shadow-lg`,
    secondary: 'bg-white text-black border-2 border-gray-200 hover:bg-gray-50',
    outline: 'bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-50',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
