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

export interface NewStrategy {
  id: string;
  title: string;
  reason_summary: {
    icon: string;
    text: string;
  };
  created_at: string;
  isNew: boolean;
}

export interface RecommendedStrategy {
  id: string;
  icon: string;
  title: string;
  tags: {
    text: string;
    type: 'growth' | 'retention' | 'expansion';
  }[];
}

export interface InsightsResponse {
  new_strategies: NewStrategy[];
  recommended_strategies: RecommendedStrategy[];
}

export interface InsightDetail {
  id: string;
  tags: {
    text: string;
    type: string;
  }[];
  title: string;
  summary: string;
  analysis: {
    title: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  recommendation: {
    title: string;
    item: {
      icon: string;
      title: string;
      description: string;
    };
  };
}