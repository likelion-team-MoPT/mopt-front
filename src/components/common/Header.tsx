import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  backgroundColor?: string;
  textColor?: string;
  rightComponent?: React.ReactNode;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  rightComponent,
  onBackClick,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={`flex items-center justify-between px-4 py-4 ${backgroundColor}`}>
      {showBackButton ? (
        <button
          onClick={handleBackClick}
          className="flex items-center justify-center w-8 h-8"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      ) : (
        <div className="w-8 h-8" />
      )}
      
      <h1 className={`text-lg font-semibold ${textColor}`}>{title}</h1>
      
      <div className="w-8 h-8 flex items-center justify-center">
        {rightComponent}
      </div>
    </div>
  );
};

export default Header;
