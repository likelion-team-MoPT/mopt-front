import React from 'react';
import { useNavigate } from 'react-router-dom';
import iconSvg from '../../assets/icon.svg';
import backSvg from '../../assets/back.svg';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showLogo?: boolean;
  backgroundColor?: string;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  showLogo = true,
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
    <div className={`flex items-center justify-between px-4 py-4`}>
      {showBackButton ? (
        <button
          onClick={handleBackClick}
          className="flex items-center justify-center w-8 h-8"
        >
          <img src={backSvg} alt="Back" className="w-6 h-6" />
        </button>
      ) : (
        <div className="w-8 h-8"></div>
      )}

      <h1 className="text-lg font-semibold text-gray-900">{title}</h1>

      {showLogo ? (
        <div className="w-9 h-9 flex items-center justify-center">
          <img src={iconSvg} alt="MoPT Logo" className="w-9 h-9" />
        </div>
      ) : (
        <div className="w-8 h-8"></div>
      )}
    </div>
  );
};

export default Header;
