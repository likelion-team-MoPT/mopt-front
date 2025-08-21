import React from 'react';
import { useNavigate } from 'react-router-dom';
import iconSvg from '../../assets/icon.svg';
import backSvg from '../../assets/back.svg';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showLogo?: boolean;
  backgroundColor?: string;
  textColor?: string;
  rightComponent?: React.ReactNode;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  showLogo = true,
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
          <img src={backSvg} alt="Back" className="w-6 h-6" />
        </button>
      ) : (
        <div className="w-8 h-8" />
      )}
      
      <h1 className={`text-lg font-semibold ${textColor}`}>{title}</h1>
      
      <div className="w-8 h-8 flex items-center justify-center">
        {rightComponent ? (
          rightComponent
        ) : showLogo ? (
          <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
        ) : null}
      </div>
    </div>
  );
};

export default Header;
