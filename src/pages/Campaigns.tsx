import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Header } from '../components/common';
import facebookSvg from '../assets/Facebook.svg';
import instagramSvg from '../assets/instagram.svg';

type FilterType = 'all' | 'progress' | 'completed';

interface Campaign {
  id: number;
  name: string;
  platform: 'facebook' | 'instagram';
  status: 'progress' | 'completed';
  roas: number;
  revenue: number;
  startDate: string;
  endDate?: string;
}

const Campaigns: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  const campaigns: Campaign[] = [
    {
      id: 1,
      name: '점심 세트 프로모션',
      platform: 'facebook',
      status: 'progress',
      roas: 328,
      revenue: 6500000,
      startDate: '2024.07.01',
    },
    {
      id: 2,
      name: '신메뉴 런칭 이벤트',
      platform: 'instagram',
      status: 'progress',
      roas: 145,
      revenue: 1720000,
      startDate: '2024.06.01',
    },
    {
      id: 3,
      name: '신규 고객 환영 이벤트',
      platform: 'facebook',
      status: 'completed',
      roas: 500,
      revenue: 6020300,
      startDate: '2024.05.15',
      endDate: '2024.05.22',
    },
    {
      id: 4,
      name: '배달 무료 프로모션',
      platform: 'instagram',
      status: 'completed',
      roas: 120,
      revenue: 3230000,
      startDate: '2024.04.01',
      endDate: '2024.04.40',
    },
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    if (selectedFilter === 'all') return true;
    return campaign.status === selectedFilter;
  });

  const formatCurrency = (num: number) => {
    return `₩${num.toLocaleString()}`;
  };

  const getPlatformIcon = (platform: 'facebook' | 'instagram') => {
    return platform === 'facebook' ? facebookSvg : instagramSvg;
  };

  const getPlatformBgColor = (platform: 'facebook' | 'instagram') => {
    return platform === 'facebook'
      ? 'bg-blue-500'
      : 'bg-gradient-to-r from-purple-500 to-pink-500';
  };

  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-zinc-50">
        {/* Header */}
        <Header title="캠페인" />

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
