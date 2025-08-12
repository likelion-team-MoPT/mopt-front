import { useState } from 'react';
import type { BusinessInfo, ServiceAgreement, ConnectData } from '../types';

export const useOnboardingState = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    name: '',
    category: '',
    location: '',
    description: '',
  });
  const [agreements, setAgreements] = useState<ServiceAgreement>({
    all: false,
    terms: false,
    privacy: false,
    marketing: false,
  });
  const [connections, setConnections] = useState<ConnectData>({
    posConnected: false,
    facebookConnected: false,
    instagramConnected: false,
  });

  const updateBusinessInfo = (info: Partial<BusinessInfo>) => {
    setBusinessInfo(prev => ({ ...prev, ...info }));
  };

  const updateAgreements = (newAgreements: Partial<ServiceAgreement>) => {
    setAgreements(prev => ({ ...prev, ...newAgreements }));
  };

  const updateConnections = (newConnections: Partial<ConnectData>) => {
    setConnections(prev => ({ ...prev, ...newConnections }));
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => Math.max(1, prev - 1));

  return {
    currentStep,
    businessInfo,
    agreements,
    connections,
    updateBusinessInfo,
    updateAgreements,
    updateConnections,
    nextStep,
    prevStep,
    setCurrentStep,
  };
};
