export interface BusinessInfo {
  name: string;
  category: string;
  location: string;
  description: string;
}

export interface ServiceAgreement {
  all: boolean;
  terms: boolean;
  privacy: boolean;
  marketing: boolean;
}

export interface ConnectData {
  posConnected: boolean;
  facebookConnected: boolean;
  instagramConnected: boolean;
}

export interface OnboardingStep {
  step: number;
  title: string;
  subtitle?: string;
  isCompleted: boolean;
}
