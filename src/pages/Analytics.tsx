import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Header } from '../components/common';

type PeriodType = 'week' | 'thisMonth' | 'lastMonth';

interface ReportData {
  period: string;
  roas: number;
  totalClicks: number;
  totalRevenue: number;
  totalAdSpend: number;
  campaigns: {
    name: string;
    percentage: number;
  }[];
  recommendations: {
    id: number;
    title: string;
    subtitle: string;
    type: string;
  }[];
  channelComparison: {
    totalRevenue: number;
    channels: {
      name: string;
      percentage: number;
      color: string;
    }[];
  };
}

const Analytics: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('week');

  const reportData: Record<PeriodType, ReportData> = {
    week: {
      period: '최근 7일',
      roas: 400,
      totalClicks: 8750,
      totalRevenue: 1250000,
      totalAdSpend: 8000000,
      campaigns: [
        { name: '주말 저녁 할인', percentage: 550 },
        { name: '신규 상권 타겟', percentage: 480 },
        { name: 'SNS 이벤트', percentage: 420 },
        { name: '이벤트 캠페인', percentage: 390 },
        { name: '직접인 타겟', percentage: 350 },
      ],
      recommendations: [
        {
          id: 1,
          title: '주말 저녁 방문 유도 프로모션 제안',
          subtitle: '주말 저녁 할인',
          type: '주말 저녁 할인',
        },
        {
          id: 2,
          title: '신규 상권 대상 타겟 광고 전략',
          subtitle: '신규 상권 타겟',
          type: '신규 상권 타겟',
        },
        {
          id: 3,
          title: 'SNS 이벤트 참여 유도 캠페인',
          subtitle: 'SNS 이벤트',
          type: 'SNS 이벤트',
        },
        {
          id: 4,
          title: '고객 맞춤 이벤트 캠페인 제안',
          subtitle: '이벤트 캠페인',
          type: '이벤트 캠페인',
        },
        {
          id: 5,
          title: '점심 타임 직장인 타겟 쿠폰 발송',
          subtitle: '직접인 타겟',
          type: '직접인 타겟',
        },
      ],
      channelComparison: {
        totalRevenue: 720000,
        channels: [
          { name: 'Facebook', percentage: 65, color: 'bg-blue-500' },
          { name: 'Instagram', percentage: 35, color: 'bg-red-500' },
        ],
      },
    },
    thisMonth: {
      period: '이번 달',
      roas: 387,
      totalClicks: 24890,
      totalRevenue: 3780000,
      totalAdSpend: 15200000,
      campaigns: [
        { name: '재방문 유도', percentage: 550 },
        { name: 'SNS 바이럴', percentage: 320 },
      ],
      recommendations: [
        {
          id: 1,
          title: '재방문 고객 유도 캠페인',
          subtitle: '재방문 유도',
          type: '재방문 유도',
        },
        {
          id: 2,
          title: 'SNS 바이럴 확산 캠페인',
          subtitle: 'SNS 바이럴',
          type: 'SNS 바이럴',
        },
      ],
      channelComparison: {
        totalRevenue: 15200000,
        channels: [
          { name: 'Facebook', percentage: 72, color: 'bg-blue-500' },
          { name: 'Instagram', percentage: 28, color: 'bg-red-500' },
        ],
      },
    },
    lastMonth: {
      period: '저번 달',
      roas: 352,
      totalClicks: 28450,
      totalRevenue: 2387000,
      totalAdSpend: 18500000,
      campaigns: [
        { name: '주말 저녁 할인', percentage: 550 },
        { name: '신규 상권 타겟', percentage: 480 },
        { name: 'SNS 이벤트', percentage: 420 },
        { name: '이벤트 캠페인', percentage: 390 },
        { name: '직접인 타겟', percentage: 350 },
      ],
      recommendations: [
        {
          id: 1,
          title: '주말 저녁 방문 유도 프로모션 제안',
          subtitle: '주말 저녁 할인',
          type: '주말 저녁 할인',
        },
        {
          id: 2,
          title: '신규 상권 대상 타겟 광고 전략',
          subtitle: '신규 상권 타겟',
          type: '신규 상권 타겟',
        },
        {
          id: 3,
          title: 'SNS 이벤트 참여 유도 캠페인',
          subtitle: 'SNS 이벤트',
          type: 'SNS 이벤트',
        },
        {
          id: 4,
          title: '고객 맞춤 이벤트 캠페인 제안',
          subtitle: '이벤트 캠페인',
          type: '이벤트 캠페인',
        },
        {
          id: 5,
          title: '점심 타임 직장인 타겟 쿠폰 발송',
          subtitle: '직접인 타겟',
          type: '직접인 타겟',
        },
      ],
      channelComparison: {
        totalRevenue: 18500000,
        channels: [
          { name: 'Facebook', percentage: 58, color: 'bg-blue-500' },
          { name: 'Instagram', percentage: 42, color: 'bg-red-500' },
        ],
      },
    },
  };

  const currentData = reportData[selectedPeriod];

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const formatCurrency = (num: number) => {
    return `₩${num.toLocaleString()}`;
  };

  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-zinc-50">
        {/* Header */}
        <Header title="리포트" backgroundColor="bg-white" />

        {/* Period Tabs */}
        <div className="px-4 py-4 bg-zinc-50">
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setSelectedPeriod('week')}
              className={selectedPeriod === 'week' ? '' : ''}
            >
              {selectedPeriod === 'week' ? (
                <div
                  data-property-1="true"
                  className="w-20 px-4 py-1.5 bg-yellow-400 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden"
                >
                  <div className="text-center justify-start text-white text-xs font-medium font-['Pretendard'] leading-none">
                    최근 7일
                  </div>
                </div>
              ) : (
                <div
                  data-property-1="false"
                  className="w-20 px-4 py-1.5 bg-neutral-100 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden"
                >
                  <div className="text-center justify-start text-neutral-500 text-xs font-medium font-['Pretendard'] leading-none">
                    최근 7일
                  </div>
                </div>
              )}
            </button>
            <button
              onClick={() => setSelectedPeriod('thisMonth')}
              className={selectedPeriod === 'thisMonth' ? '' : ''}
            >
              {selectedPeriod === 'thisMonth' ? (
                <div
                  data-property-1="true"
                  className="w-20 px-4 py-1.5 bg-yellow-400 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden"
                >
                  <div className="text-center justify-start text-white text-xs font-medium font-['Pretendard'] leading-none">
                    이번 달
                  </div>
                </div>
              ) : (
                <div
                  data-property-1="false"
                  className="w-20 px-4 py-1.5 bg-neutral-100 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden"
                >
                  <div className="text-center justify-start text-neutral-500 text-xs font-medium font-['Pretendard'] leading-none">
                    이번 달
                  </div>
                </div>
              )}
            </button>
            <button
              onClick={() => setSelectedPeriod('lastMonth')}
              className={selectedPeriod === 'lastMonth' ? '' : ''}
            >
              {selectedPeriod === 'lastMonth' ? (
                <div
                  data-property-1="true"
                  className="w-20 px-4 py-1.5 bg-yellow-400 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden"
                >
                  <div className="text-center justify-start text-white text-xs font-medium font-['Pretendard'] leading-none">
                    저번 달
                  </div>
                </div>
              ) : (
                <div
                  data-property-1="false"
                  className="w-20 px-4 py-1.5 bg-neutral-100 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] inline-flex justify-center items-center gap-2 overflow-hidden"
                >
                  <div className="text-center justify-start text-neutral-500 text-xs font-medium font-['Pretendard'] leading-none">
                    저번 달
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>

        <div className="px-7 py-6 space-y-6">
          {/* Overall Performance */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              전체 성과
            </h2>
            {/* 하나로 합쳐진 그리드 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-200 p-4">
                <div className="text-white">
                  <p className="text-xs opacity-90 font-bold">ROAS</p>
                  <p className="text-2xl font-bold">{currentData.roas}%</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">총 클릭 수</p>
                <p className="text-xl font-bold text-gray-900">
                  {formatNumber(currentData.totalClicks)}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">총 지출</p>
                <p className="text-lg font-bold text-gray-900">
                  {formatCurrency(currentData.totalRevenue)}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">총 광고 수익</p>
                <p className="text-lg font-bold text-gray-900">
                  {formatCurrency(currentData.totalAdSpend)}
                </p>
              </div>
            </div>
          </div>

          {/* Campaign Performance */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              상위 5개 성과 캠페인(ROAS 기준)
            </h3>
            <div className="bg-white rounded-lg p-4 shadow-sm space-y-3">
              {currentData.campaigns.map((campaign, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{campaign.name}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-100 rounded-full h-2 relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-yellow-400 rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.min(campaign.percentage / 6, 100)}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12 text-right">
                      {campaign.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <div className="space-y-3">
              {currentData.recommendations.map(rec => (
                <div key={rec.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">
                        {rec.id}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {rec.title}
                      </p>
                      <p className="text-xs text-gray-500">{rec.subtitle}</p>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Channel Comparison */}
          <div className="pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              채널별 성과 비교
            </h3>
            <p className="text-sm text-gray-600 mb-4">채널별 수익</p>
            <p className="text-2xl font-bold text-gray-900 mb-6">
              총 {formatCurrency(currentData.channelComparison.totalRevenue)}
            </p>

            <div className="bg-yellow-50 rounded-lg p-6">
              <div className="flex justify-center space-x-8 mb-6">
                {currentData.channelComparison.channels.map(
                  (channel, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`w-6 h-24 ${channel.color} rounded-full mx-auto mb-2 relative`}
                      >
                        <div
                          className="absolute bottom-0 w-full bg-gray-200 rounded-full"
                          style={{ height: `${100 - channel.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {channel.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {channel.percentage}%
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
