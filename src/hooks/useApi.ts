import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { insightsApi, campaignsApi, homeApi, reportsApi, usersApi } from '../services/api';
import type {
  CampaignUpdateIn,
  CampaignStatusUpdateIn,
  UserProfileUpdateIn,
  NotificationSettingsIn,
} from '../types/api';

// Query Keys
export const queryKeys = {
  insights: ['insights'] as const,
  insightDetail: (id: string) => ['insights', id] as const,
  campaigns: ['campaigns'] as const,
  campaignDetail: (id: number) => ['campaigns', id] as const,
  trendKeywords: (region: string, limit: number) => ['trendKeywords', region, limit] as const,
  totalReport: (params?: any) => ['totalReport', params] as const,
  kpiReport: (params?: any) => ['kpiReport', params] as const,
  channelReport: (params?: any) => ['channelReport', params] as const,
  campaignReport: (params?: any) => ['campaignReport', params] as const,
  userIntegrations: (userId: number) => ['userIntegrations', userId] as const,
  userProfile: (userId: number) => ['userProfile', userId] as const,
  notificationSettings: (userId: number) => ['notificationSettings', userId] as const,
  subscription: (userId: number) => ['subscription', userId] as const,
  paymentMethods: (userId: number) => ['paymentMethods', userId] as const,
  billingHistory: (userId: number) => ['billingHistory', userId] as const,
  userNotices: (userId: number, page: number, limit: number) => ['userNotices', userId, page, limit] as const,
  noticeDetail: (userId: number, noticeId: string) => ['noticeDetail', userId, noticeId] as const,
};

// AI 인사이트 hooks
export const useInsights = (kind?: 'new' | 'recommended') => {
  return useQuery({
    queryKey: [...queryKeys.insights, kind],
    queryFn: () => insightsApi.getInsights(kind),
  });
};

export const useInsightDetail = (insightId: string) => {
  return useQuery({
    queryKey: queryKeys.insightDetail(insightId),
    queryFn: () => insightsApi.getInsightDetail(insightId),
    enabled: !!insightId,
  });
};

// 캠페인 hooks
export const useCampaigns = (status?: string) => {
  return useQuery({
    queryKey: [...queryKeys.campaigns, status],
    queryFn: () => campaignsApi.getCampaigns(status),
  });
};

export const useCampaignDetail = (campaignId: number) => {
  return useQuery({
    queryKey: queryKeys.campaignDetail(campaignId),
    queryFn: () => campaignsApi.getCampaign(campaignId),
    enabled: !!campaignId,
  });
};

export const useUpdateCampaign = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ campaignId, data }: { campaignId: number; data: CampaignUpdateIn }) =>
      campaignsApi.updateCampaign(campaignId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.campaignDetail(variables.campaignId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.campaigns });
    },
  });
};

export const useUpdateCampaignStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ campaignId, data }: { campaignId: number; data: CampaignStatusUpdateIn }) =>
      campaignsApi.updateCampaignStatus(campaignId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.campaignDetail(variables.campaignId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.campaigns });
    },
  });
};

// 홈/대시보드 hooks
export const useTrendKeywords = (region: string, limit: number = 5) => {
  return useQuery({
    queryKey: queryKeys.trendKeywords(region, limit),
    queryFn: () => homeApi.getTrendKeywords(region, limit),
    enabled: !!region,
  });
};

// 리포트 hooks
export const useTotalReport = (params?: {
  period?: string;
  startDate?: string;
  endDate?: string;
}) => {
  return useQuery({
    queryKey: queryKeys.totalReport(params),
    queryFn: () => reportsApi.getTotalReport(params),
  });
};

export const useKpiReport = (params?: {
  period?: string;
  startDate?: string;
  endDate?: string;
}) => {
  return useQuery({
    queryKey: queryKeys.kpiReport(params),
    queryFn: () => reportsApi.getKpiReport(params),
  });
};

export const useChannelReport = (params?: {
  period?: string;
  startDate?: string;
  endDate?: string;
}) => {
  return useQuery({
    queryKey: queryKeys.channelReport(params),
    queryFn: () => reportsApi.getChannelReport(params),
  });
};

export const useCampaignReport = (params?: {
  period?: string;
  startDate?: string;
  endDate?: string;
  sort?: string;
  limit?: number;
}) => {
  return useQuery({
    queryKey: queryKeys.campaignReport(params),
    queryFn: () => reportsApi.getCampaignReport(params),
  });
};

// 사용자 hooks
export const useUserIntegrations = (userId: number) => {
  return useQuery({
    queryKey: queryKeys.userIntegrations(userId),
    queryFn: () => usersApi.getUserIntegrations(userId),
    enabled: !!userId,
  });
};

export const useDisconnectUserIntegration = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ userId, integrationId }: { userId: number; integrationId: string }) =>
      usersApi.disconnectUserIntegration(userId, integrationId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.userIntegrations(variables.userId) });
    },
  });
};

export const useUserProfile = (userId: number) => {
  return useQuery({
    queryKey: queryKeys.userProfile(userId),
    queryFn: () => usersApi.getUserProfile(userId),
    enabled: !!userId,
  });
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ userId, data }: { userId: number; data: UserProfileUpdateIn }) =>
      usersApi.updateUserProfile(userId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.userProfile(variables.userId) });
    },
  });
};

export const useNotificationSettings = (userId: number) => {
  return useQuery({
    queryKey: queryKeys.notificationSettings(userId),
    queryFn: () => usersApi.getNotificationSettings(userId),
    enabled: !!userId,
  });
};

export const useUpdateNotificationSettings = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ userId, data }: { userId: number; data: NotificationSettingsIn }) =>
      usersApi.updateNotificationSettings(userId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.notificationSettings(variables.userId) });
    },
  });
};

export const useSubscription = (userId: number) => {
  return useQuery({
    queryKey: queryKeys.subscription(userId),
    queryFn: () => usersApi.getSubscription(userId),
    enabled: !!userId,
  });
};

export const usePaymentMethods = (userId: number) => {
  return useQuery({
    queryKey: queryKeys.paymentMethods(userId),
    queryFn: () => usersApi.getPaymentMethods(userId),
    enabled: !!userId,
  });
};

export const useBillingHistory = (userId: number) => {
  return useQuery({
    queryKey: queryKeys.billingHistory(userId),
    queryFn: () => usersApi.getBillingHistory(userId),
    enabled: !!userId,
  });
};

export const useUserNotices = (userId: number, page: number = 1, limit: number = 6) => {
  return useQuery({
    queryKey: queryKeys.userNotices(userId, page, limit),
    queryFn: () => usersApi.getUserNotices(userId, page, limit),
    enabled: !!userId,
  });
};

export const useNoticeDetail = (userId: number, noticeId: string) => {
  return useQuery({
    queryKey: queryKeys.noticeDetail(userId, noticeId),
    queryFn: () => usersApi.getNoticeDetail(userId, noticeId),
    enabled: !!userId && !!noticeId,
  });
};
