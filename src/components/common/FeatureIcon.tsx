import React from 'react';

interface FeatureIconProps {
  icon?: React.ReactNode;
  image?: string;
  label: string;
  onClick?: () => void;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ icon, image, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="size-24 px-4 py-3.5 bg-white rounded-2xl shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] outline outline-[0.50px] outline-offset-[-0.50px] outline-yellow-50 inline-flex justify-center items-center gap-2.5 hover:bg-gray-50 transition-colors"
    >
      <div className="inline-flex flex-col justify-start items-center gap-2">
        <div className="self-stretch h-10 flex items-center justify-center">
          {image ? (
            <img src={image} alt={label} className="w-10 h-10 object-contain" />
          ) : (
            icon
          )}
        </div>
        <div className="self-stretch text-center text-neutral-900 text-xs font-medium font-['Pretendard'] leading-none">
          {label}
        </div>
      </div>
    </button>
  );
};

export default FeatureIcon;
