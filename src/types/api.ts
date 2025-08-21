// API 응답 타입 정의

export interface TagSchema {
  text: string;
  type: string;
}

export interface AnalysisItemSchema {
  icon: string;
  title: string;
  description: string;
}

export interface AnalysisSchema {
  title: string;
  items: AnalysisItemSchema[];
}

export interface RecommendationItemSchema {
  icon: string;
  title: string;
  description: string;
}

export interface RecommendationSchema {
  title: string;
  item: RecommendationItemSchema;
}

export interface InsightDetailV2Schema {
  id: string;
  tags: TagSchema[];
  title: string;
  summary: string | null;
  analysis: AnalysisSchema;
  recommendation: RecommendationSchema | null;
}

export interface CampaignListItemOut {
  id: number;
  name: string;
  channel: string;
  status: string;
  roas: number;
  spend: number;
  start_date: string;
  end_date: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
}

export interface CampaignListOut {
  data: CampaignListItemOut[];
  meta: PaginationMeta;
}

export interface CampaignDetailOut {
  id: number;
  name: string;
  status: string;
  channel: string;
  objectives: string;
  performance: Record<string, any>;
  daily_performance: any[];
  duration: Record<string, any>;
  creative: Record<string, any>;
}

export interface CampaignUpdateIn {
  name?: string | null;
  objectives?: string | null;
  creative?: Record<string, any> | null;
  target?: Record<string, any> | null;
  budget?: Record<string, any> | null;
  duration?: Record<string, any> | null;
}

export interface CampaignStatusUpdateIn {
  status: 'active' | 'ended';
}

export interface CampaignStatusOut {
  id: number;
  name: string;
  status: string;
  message: string;
}

export interface MessageOut {
  message: string;
}

export interface TrendKeywordsSchema {
  trend_keywords: string[];
}

export interface TotalReportOut {
  total_spent: number;
  total_sales: number;
  total_clicks: number;
  total_impressions: number;
  overall_roas: number;
}

export interface KpiMetrics {
  spend: number[];
  sales: number[];
}

export interface KpiReportOut {
  dates: string[];
  metrics: KpiMetrics;
}

export interface ChannelReportOut {
  channel: string;
  spend: number;
  sales: number;
  roas: number;
}

export interface CampaignReportOut {
  campaign_id: number;
  name: string;
  channel: string;
  spend: number;
  sales: number;
  roas: number;
}

export interface AccountListOut {
  id: string;
  name?: string | null;
  handle?: string | null;
  avatar_url?: string | null;
}

export interface IntegrationListItemOut {
  integration_id: string;
  provider: string;
  provider_label: string;
  account: AccountListOut;
  permissions: string[];
  connected_at: string;
  status: string;
}

export interface IntegrationListResponse {
  data: IntegrationListItemOut[];
}

export interface IntegrationDisconnectedOut {
  integration_id: string;
  provider: string;
  account_name: string;
  connected_at: string;
  status: string;
  disconnected_at: string;
  reason: string;
}

export interface UserProfileOut {
  nickname: string;
  email: string;
  phone_number: string;
  birthdate: string | null;
}

export interface UserProfileFullOut {
  nickname: string;
  email: string;
  phone_number: string;
  profileImage?: string | null;
  birthdate?: string | null;
}

export interface UserProfileUpdateIn {
  nickname?: string | null;
  profileImage?: string | null;
}

export interface NotificationSettingsOut {
  marketing_alerts: boolean;
  ai_insights_notification: boolean;
  weekly_report_notification: boolean;
}

export interface NotificationSettingsIn {
  marketing_alerts: boolean;
  ai_insights_notification: boolean;
  weekly_report_notification: boolean;
}

export interface SubscriptionOut {
  plan_name: string;
  monthly_price: number;
  currency: string;
  next_payment_date: string | null;
}

export interface PaymentMethodOut {
  method_id: string;
  card_type: string;
  masked_number: string;
  is_default: boolean;
}

export interface BillingHistoryItem {
  invoice_id: string;
  payment_date: string;
  amount: number;
  plan_name: string;
}

export interface NoticeItemOut {
  id: string;
  title: string;
  created_at: string;
}

export interface NoticeListMeta {
  page: number;
  limit: number;
  total: number;
}

export interface NoticeListOut {
  data: NoticeItemOut[];
  meta: NoticeListMeta;
}

export interface NoticeDetailOut {
  id: string;
  title: string;
  content: string;
  created_at: string;
}
