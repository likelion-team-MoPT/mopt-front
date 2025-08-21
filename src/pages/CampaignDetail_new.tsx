import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout, Loading, ErrorMessage } from '../components/common';
import { useCampaignDetail } from '../hooks/useApi';
import facebookSvg from '../assets/Facebook.svg';
import instagramSvg from '../assets/instagram.svg';
import iconSvg from '../assets/icon.svg';

const CampaignDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // API 호출
  const { data: campaignData, isLoading, error } = useCampaignDetail(Number(id));

  const formatCurrency = (amount: number) => {
    return `₩${amount.toLocaleString()}`;
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const getPlatformIcon = (channel: string) => {
    const channelLower = channel.toLowerCase();
    if (channelLower.includes('facebook')) return facebookSvg;
    if (channelLower.includes('instagram')) return instagramSvg;
    return facebookSvg; // 기본값
  };

  const getPlatformBgColor = (channel: string) => {
    const channelLower = channel.toLowerCase();
    if (channelLower.includes('facebook')) return 'bg-blue-500';
    if (channelLower.includes('instagram')) return 'bg-gradient-to-r from-purple-500 to-pink-500';
    return 'bg-gray-500'; // 기본값
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return '진행 중';
      case 'ended':
        return '완료됨';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50';
      case 'ended':
        return 'text-gray-600 bg-gray-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  if (isLoading) {
    return (
      <Layout showBottomTab={false}>
        <div className="flex justify-between items-center px-4 py-3 bg-white">
          <button 
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">캠페인 상세</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>
        <Loading text="캠페인 상세 정보를 불러오는 중..." />
      </Layout>
    );
  }

  if (error || !campaignData) {
    return (
      <Layout showBottomTab={false}>
        <div className="flex justify-between items-center px-4 py-3 bg-white">
          <button 
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">캠페인 상세</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>
        <ErrorMessage
          title="데이터 로드 실패"
          message="캠페인 상세 정보를 불러오는 데 실패했습니다."
          onRetry={() => window.location.reload()}
        />
      </Layout>
    );
  }

  const campaign = campaignData as any;

  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 bg-white">
          <button 
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">캠페인 상세</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>

        {/* Campaign Info */}
        <div className="px-4 py-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getPlatformBgColor(campaign.channel)}`}>
                  <img
                    src={getPlatformIcon(campaign.channel)}
                    alt={campaign.channel}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{campaign.name}</h2>
                  <p className="text-sm text-gray-500">
                    {campaign.start_date} ~ {campaign.end_date || '진행 중'}
                  </p>
                </div>
              </div>
              <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(campaign.status)}`}>
                {getStatusText(campaign.status)}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">{campaign.roas.toFixed(0)}%</p>
                <p className="text-sm text-gray-500">ROAS</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(campaign.spend)}</p>
                <p className="text-sm text-gray-500">총 지출</p>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">노출수</span>
                <span className="font-semibold">{formatNumber(campaign.impressions || 0)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">클릭수</span>
                <span className="font-semibold">{formatNumber(campaign.clicks || 0)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">클릭률</span>
                <span className="font-semibold">
                  {campaign.impressions && campaign.clicks 
                    ? `${((campaign.clicks / campaign.impressions) * 100).toFixed(2)}%`
                    : '0%'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">전환수</span>
                <span className="font-semibold">{campaign.conversions || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">전환율</span>
                <span className="font-semibold">
                  {campaign.clicks && campaign.conversions
                    ? `${((campaign.conversions / campaign.clicks) * 100).toFixed(2)}%`
                    : '0%'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="px-4 pb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">성과 추이</h3>
            <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">성과 차트가 여기에 표시됩니다</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {campaign.recommendation && (
          <div className="px-4 pb-6">
            <div className="bg-yellow-50 rounded-xl p-6 shadow-sm border border-yellow-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI 추천</h3>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{campaign.recommendation.title}</h4>
                  <p className="text-sm text-gray-700">{campaign.recommendation.description}</p>
                  {campaign.recommendation.created_at && (
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(campaign.recommendation.created_at).toLocaleDateString('ko-KR')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CampaignDetailPage;
