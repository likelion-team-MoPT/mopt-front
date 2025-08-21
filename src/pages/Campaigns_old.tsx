import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Header, Loading, ErrorMessage, EmptyState } from '../components/common';
import { useCampaigns } from '../hooks/useApi';
import facebookSvg from '../assets/Facebook.svg';
import instagramSvg from '../assets/instagram.svg';

type FilterType = 'all' | 'active' | 'ended';

const Campaigns: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  // API 호출
  const statusFilter = selectedFilter === 'all' ? undefined : selectedFilter;
  const { data: campaignsData, isLoading, error } = useCampaigns(statusFilter);

  const formatCurrency = (num: number) => {
    return `₩${num.toLocaleString()}`;
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
        <Header title="캠페인" />
        <Loading text="캠페인 데이터를 불러오는 중..." />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout showBottomTab={false}>
        <Header title="캠페인" />
        <ErrorMessage 
          title="데이터 로드 실패"
          message="캠페인 데이터를 불러오는 데 실패했습니다."
          onRetry={() => window.location.reload()}
        />
      </Layout>
    );
  }

  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-zinc-50">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 bg-zinc-50">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-8 h-8"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <h1 className="text-lg font-semibold text-gray-900">캠페인</h1>

          <div className="w-9 h-9 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-9 h-9" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="px-4 py-4 bg-zinc-50">
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setSelectedFilter('all')}
              className={selectedFilter === 'all' ? '' : ''}
            >
              {selectedFilter === 'all' ? (
                <div className="w-20 px-4 py-1.5 bg-yellow-400 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden">
                  <div className="text-center justify-start text-white text-xs font-medium font-['Pretendard'] leading-none">
                    All
                  </div>
                </div>
              ) : (
                <div className="w-20 px-4 py-1.5 bg-neutral-100 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden">
                  <div className="text-center justify-start text-neutral-500 text-xs font-medium font-['Pretendard'] leading-none">
                    All
                  </div>
                </div>
              )}
            </button>
            <button
              onClick={() => setSelectedFilter('progress')}
              className={selectedFilter === 'progress' ? '' : ''}
            >
              {selectedFilter === 'progress' ? (
                <div className="w-20 px-4 py-1.5 bg-yellow-400 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden">
                  <div className="text-center justify-start text-white text-xs font-medium font-['Pretendard'] leading-none">
                    진행중
                  </div>
                </div>
              ) : (
                <div className="w-20 px-4 py-1.5 bg-neutral-100 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden">
                  <div className="text-center justify-start text-neutral-500 text-xs font-medium font-['Pretendard'] leading-none">
                    진행중
                  </div>
                </div>
              )}
            </button>
            <button
              onClick={() => setSelectedFilter('completed')}
              className={selectedFilter === 'completed' ? '' : ''}
            >
              {selectedFilter === 'completed' ? (
                <div className="w-20 px-4 py-1.5 bg-yellow-400 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden">
                  <div className="text-center justify-start text-white text-xs font-medium font-['Pretendard'] leading-none">
                    완료됨
                  </div>
                </div>
              ) : (
                <div className="w-20 px-4 py-1.5 bg-neutral-100 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden">
                  <div className="text-center justify-start text-neutral-500 text-xs font-medium font-['Pretendard'] leading-none">
                    완료됨
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Campaign List */}
        <div className="p-4 space-y-3">
          {filteredCampaigns.map(campaign => (
            <div
              key={campaign.id}
              className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(`/campaigns/${campaign.id}`)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${getPlatformBgColor(campaign.platform)}`}
                  >
                    <img
                      src={getPlatformIcon(campaign.platform)}
                      alt={campaign.platform}
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-1">
                      {campaign.endDate
                        ? `${campaign.startDate} - ${campaign.endDate}`
                        : campaign.startDate}
                    </div>
                    <div className="text-gray-900 font-semibold text-base">
                      {campaign.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      ROAS {campaign.roas}% · 지출{' '}
                      {formatCurrency(campaign.revenue)}
                    </div>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'progress'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {campaign.status === 'progress' ? '진행중' : '완료됨'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Campaigns;
