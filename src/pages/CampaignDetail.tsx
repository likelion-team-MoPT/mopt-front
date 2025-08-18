import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout, Header } from '../components/common';
import facebookSvg from '../assets/Facebook.svg';
import instagramSvg from '../assets/instagram.svg';

interface CampaignDetail {
  id: number;
  name: string;
  platform: 'facebook' | 'instagram';
  status: 'progress' | 'completed';
  period: string;
  category: string;
  goal: string;
  roas: number;
  clicks: number;
  totalSpend: number;
  impressions: number;
  dailyPerformance: {
    date: string;
    value: number;
  }[];
  weeklyRevenue: {
    week: string;
    value: number;
  }[];
  recommendation: {
    title: string;
    time: string;
    description: string;
    image: string;
  };
}

const CampaignDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Mock data - 실제로는 API에서 가져와야 함
  const campaignDetail: CampaignDetail = {
    id: 1,
    name: '점심 세트 프로모션',
    platform: 'facebook',
    status: 'progress',
    period: '7월 1일 - 7월 31일',
    category: '레이스북',
    goal: '신규 고객 유입 증가',
    roas: 328,
    clicks: 1200,
    totalSpend: 6500000,
    impressions: 50000,
    dailyPerformance: [
      { date: '7/1', value: 100 },
      { date: '7/8', value: 150 },
      { date: '7/15', value: 200 },
      { date: '7/22', value: 220 },
      { date: '7/29', value: 260 },
    ],
    weeklyRevenue: [
      { week: '월', value: 1 },
      { week: '화', value: 1.2 },
      { week: '수', value: 1.5 },
      { week: '목', value: 1.3 },
      { week: '금', value: 1.7 },
      { week: '토', value: 1.6 },
      { week: '일', value: 1.8 },
    ],
    recommendation: {
      title: '바쁜 점심시간, 든든한 한 끼!',
      time: '11:30 - 14:00 점심 특가',
      description:
        '바쁜 점심시간 직장인을 대상으로 든든하고 맛있는 한 끼 메뉴 3인분 중 1인분 + 음료 세트를 7,500원에 출시해보세요.',
      image: '/api/placeholder/300/200',
    },
  };

  const formatCurrency = (num: number) => {
    return `₩${num.toLocaleString()}`;
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const getPlatformIcon = (platform: 'facebook' | 'instagram') => {
    return platform === 'facebook' ? facebookSvg : instagramSvg;
  };

  const getPlatformBgColor = (platform: 'facebook' | 'instagram') => {
    return platform === 'facebook'
      ? 'bg-blue-500'
      : 'bg-gradient-to-r from-purple-500 to-pink-500';
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header title="캠페인" backgroundColor="bg-zinc-50" />

        <div className="p-7">
          {/* Campaign Info */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              캠페인 정보
            </h2>

            <div className="bg-white rounded-xl p-4">
              <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {campaignDetail.name}
                </h3>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">상태</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        campaignDetail.status === 'progress'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {campaignDetail.status === 'progress'
                        ? '진행중'
                        : '완료됨'}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">기간</span>
                    <span className="text-gray-900 text-sm">
                      {campaignDetail.period}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">채널</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                      {campaignDetail.category}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">목표</span>
                    <span className="text-gray-900 text-sm">
                      {campaignDetail.goal}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Performance */}
          <div className="py-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              전체 성과
            </h2>
            {/* 하나로 합쳐진 그리드 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-200 p-4">
                <div className="text-white">
                  <p className="text-xs opacity-90 font-bold">ROAS</p>
                  <p className="text-2xl font-bold">{campaignDetail.roas}%</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">총 클릭 수</p>
                <p className="text-xl font-bold text-gray-900">
                  {formatNumber(campaignDetail.clicks)}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">총 지출</p>
                <p className="text-lg font-bold text-gray-900">
                  {formatCurrency(campaignDetail.totalSpend)}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">노출수</p>
                <p className="text-lg font-bold text-gray-900">
                  {formatNumber(campaignDetail.impressions)}
                </p>
              </div>
            </div>
          </div>

          {/* Daily Performance Chart */}
          <div className="py-4">
            <div className="bg-white rounded-xl p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                일일 캠페인 성과
              </h2>
              <p className="text-gray-600 text-sm mb-4">최근 30일간의 클릭수</p>

              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900">260회</div>
                <div className="text-sm text-gray-600">
                  최근 30회 <span className="text-green-600">+15%</span>
                </div>
              </div>
              {/* Simple Chart */}
              <div className="h-32 flex items-end justify-between space-x-2 mb-4">
                {campaignDetail.dailyPerformance.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1"
                  >
                    <div
                      className="bg-yellow-400 w-full rounded-t"
                      style={{
                        height: `${(item.value / 300) * 100}%`,
                        minHeight: '8px',
                      }}
                    ></div>
                    <div className="text-xs text-gray-500 mt-1">
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly Revenue */}
          <div className="py-4">
            <div className="bg-white rounded-xl p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                주간 매출 동향
              </h2>
              <p className="text-gray-600 text-sm mb-4">최근 7일간의 매출</p>

              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900">₩12,345</div>
                <div className="text-sm text-gray-600">
                  어제 대비 <span className="text-green-600">+12%</span>
                </div>
              </div>

              {/* Weekly Chart */}
              <div className="h-20 flex items-end justify-between space-x-1 mb-4 bg-yellow-50 rounded p-2">
                {campaignDetail.weeklyRevenue.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1"
                  >
                    <div
                      className="bg-yellow-400 w-full rounded-t"
                      style={{
                        height: `${(item.value / 2) * 100}%`,
                        minHeight: '4px',
                      }}
                    ></div>
                    <div className="text-xs text-gray-500 mt-1">
                      {item.week}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="py-4">
            <div className="bg-white rounded-xl p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                추천하는 광고 소재
              </h2>

              <div className="bg-gray-100 rounded-lg h-40 mb-4 flex items-center justify-center">
                <div className="text-gray-500 text-sm">음식 이미지</div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {campaignDetail.recommendation.title}
                </h3>
                <p className="text-yellow-600 text-sm font-medium mb-2">
                  {campaignDetail.recommendation.time}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {campaignDetail.recommendation.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CampaignDetailPage;
