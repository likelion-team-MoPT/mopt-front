import { api } from '../utils/api';
import type {
  InsightDetailV2Schema,
  CampaignListOut,
  CampaignDetailOut,
  CampaignUpdateIn,
  CampaignStatusUpdateIn,
  CampaignStatusOut,
  MessageOut,
  TrendKeywordsSchema,
  TotalReportOut,
  KpiReportOut,
  ChannelReportOut,
  CampaignReportOut,
  IntegrationListResponse,
  IntegrationDisconnectedOut,
  UserProfileOut,
  UserProfileFullOut,
  UserProfileUpdateIn,
  NotificationSettingsOut,
  NotificationSettingsIn,
  SubscriptionOut,
  PaymentMethodOut,
  BillingHistoryItem,
  NoticeListOut,
  NoticeDetailOut,
} from '../types/api';

// AI 인사이트 API
export const insightsApi = {
  // AI 인사이트 목록 조회
  getInsights: async (kind?: 'new' | 'recommended') => {
    const params = kind ? `?status=${kind}` : '';
    const response = await api.get<{
      new_strategies?: unknown[];
      recommended_strategies?: unknown[];
    }>(`/insights${params}`);

    // API 응답 구조를 프론트엔드가 예상하는 구조로 변환
    if (kind === 'new') {
      return { data: response.new_strategies || [] };
    } else if (kind === 'recommended') {
      return { data: response.recommended_strategies || [] };
    } else {
      // kind가 없으면 전체 응답 반환
      return response;
    }
  },

  // AI 인사이트 상세 조회
  getInsightDetail: (insightId: string) =>
    api.get<InsightDetailV2Schema>(`/insights/${insightId}`),
};

// 캠페인 API
export const campaignsApi = {
  // 캠페인 목록 조회
  getCampaigns: (status?: string) => {
    const params = status ? `?status=${status}` : '';
    return api.get<CampaignListOut>(`/campaigns/${params}`);
  },

  // 캠페인 상세 조회
  getCampaign: (campaignId: number) =>
    api.get<CampaignDetailOut>(`/campaigns/${campaignId}`),

  // 캠페인 수정
  updateCampaign: (campaignId: number, data: CampaignUpdateIn) =>
    api.patch<MessageOut>(`/campaigns/${campaignId}`, data),

  // 캠페인 상태 변경
  updateCampaignStatus: (campaignId: number, data: CampaignStatusUpdateIn) =>
    api.patch<CampaignStatusOut>(`/campaigns/${campaignId}/status`, data),
};

// 홈/대시보드 API
export const homeApi = {
  // 대시보드 상위 트렌드 키워드 조회
  getTrendKeywords: (region: string, limit: number = 5) =>
    api.get<TrendKeywordsSchema>(
      `/home/dashboard?region=${region}&limit=${limit}`
    ),
};

// 리포트 API
export const reportsApi = {
  // 전체 리포트 조회
  getTotalReport: (params?: {
    period?: string;
    startDate?: string;
    endDate?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params?.period) searchParams.append('period', params.period);
    if (params?.startDate) searchParams.append('startDate', params.startDate);
    if (params?.endDate) searchParams.append('endDate', params.endDate);

    const queryString = searchParams.toString();
    return api.get<TotalReportOut>(
      `/reports/${queryString ? `?${queryString}` : ''}`
    );
  },

  // KPI 리포트 조회
  getKpiReport: (params?: {
    period?: string;
    startDate?: string;
    endDate?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params?.period) searchParams.append('period', params.period);
    if (params?.startDate) searchParams.append('startDate', params.startDate);
    if (params?.endDate) searchParams.append('endDate', params.endDate);

    const queryString = searchParams.toString();
    return api.get<KpiReportOut>(
      `/reports/kpi${queryString ? `?${queryString}` : ''}`
    );
  },

  // 채널별 리포트 조회
  getChannelReport: (params?: {
    period?: string;
    startDate?: string;
    endDate?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params?.period) searchParams.append('period', params.period);
    if (params?.startDate) searchParams.append('startDate', params.startDate);
    if (params?.endDate) searchParams.append('endDate', params.endDate);

    const queryString = searchParams.toString();
    return api.get<ChannelReportOut[]>(
      `/reports/channel${queryString ? `?${queryString}` : ''}`
    );
  },

  // 캠페인별 리포트 조회
  getCampaignReport: (params?: {
    period?: string;
    startDate?: string;
    endDate?: string;
    sort?: string;
    limit?: number;
  }) => {
    const searchParams = new URLSearchParams();
    if (params?.period) searchParams.append('period', params.period);
    if (params?.startDate) searchParams.append('startDate', params.startDate);
    if (params?.endDate) searchParams.append('endDate', params.endDate);
    if (params?.sort) searchParams.append('sort', params.sort);
    if (params?.limit) searchParams.append('limit', params.limit.toString());

    const queryString = searchParams.toString();
    return api.get<CampaignReportOut[]>(
      `/reports/campaign${queryString ? `?${queryString}` : ''}`
    );
  },
};

// 사용자 API
export const usersApi = {
  // 사용자 연결된 계정 목록 조회
  getUserIntegrations: (userId: number) =>
    api.get<IntegrationListResponse>(`/users/${userId}/integrations`),

  // 사용자 연결 해제
  disconnectUserIntegration: (userId: number, integrationId: string) =>
    api.delete<IntegrationDisconnectedOut[]>(
      `/users/${userId}/integrations/${integrationId}`
    ),

  // 사용자 프로필 조회
  getUserProfile: (userId: number) =>
    api.get<UserProfileOut>(`/users/${userId}/profile`),

  // 사용자 프로필 수정
  updateUserProfile: (userId: number, data: UserProfileUpdateIn) =>
    api.patch<UserProfileFullOut>(`/users/${userId}/profile`, data),

  // 알림 설정 조회
  getNotificationSettings: (userId: number) =>
    api.get<NotificationSettingsOut>(`/users/${userId}/settings/notifications`),

  // 알림 설정 수정
  updateNotificationSettings: (userId: number, data: NotificationSettingsIn) =>
    api.put<NotificationSettingsOut>(
      `/users/${userId}/settings/notifications`,
      data
    ),

  // 구독 정보 조회
  getSubscription: (userId: number) =>
    api.get<SubscriptionOut>(`/users/${userId}/billing/subscription`),

  // 결제 수단 목록 조회
  getPaymentMethods: (userId: number) =>
    api.get<PaymentMethodOut[]>(`/users/${userId}/billing/payment-methods`),

  // 결제 내역 조회
  getBillingHistory: (userId: number) =>
    api.get<BillingHistoryItem[]>(`/users/${userId}/billing/history`),

  // 공지사항 목록 조회
  getUserNotices: (userId: number, page: number = 1, limit: number = 6) =>
    api.get<NoticeListOut>(
      `/users/${userId}/notices?page=${page}&limit=${limit}`
    ),

  // 공지사항 상세 조회
  getNoticeDetail: (userId: number, noticeId: string) =>
    api.get<NoticeDetailOut>(`/users/${userId}/notices/${noticeId}`),
};
