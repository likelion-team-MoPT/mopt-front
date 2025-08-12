import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
  className = '',
}) => {
  return (
    <div className={`flex justify-between items-center mb-8 ${className}`}>
      <span className="text-sm text-gray-500">{currentStep} / {totalSteps}</span>
      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-blue-500 rounded"></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
