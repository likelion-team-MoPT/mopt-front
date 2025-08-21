import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Header, Loading, ErrorMessage } from '../components/common';
import { useTotalReport, useKpiReport, useChannelReport, useCampaignReport } from '../hooks/useApi';

type PeriodType = 'week' | 'thisMonth' | 'lastMonth';

const periodMap = {
  week: '7d',
  thisMonth: '30d',
  lastMonth: '60d',
};

const Analytics: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('week');
  
  // API 호출
  const { data: totalReport, isLoading: totalLoading, error: totalError } = useTotalReport({ period: periodMap[selectedPeriod] });
  const { data: kpiReport, isLoading: kpiLoading } = useKpiReport({ period: periodMap[selectedPeriod] });
  const { data: channelReport, isLoading: channelLoading } = useChannelReport({ period: periodMap[selectedPeriod] });
  const { data: campaignReport, isLoading: campaignLoading } = useCampaignReport({ 
    period: periodMap[selectedPeriod],
    sort: '-roas',
    limit: 5
  });

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const formatCurrency = (num: number) => {
    return `₩${num.toLocaleString()}`;
  };

  const isLoading = totalLoading || kpiLoading || channelLoading || campaignLoading;
  
  if (isLoading) {
    return (
      <Layout showBottomTab={false}>
        <Header title="리포트" />
        <Loading text="리포트 데이터를 불러오는 중..." />
      </Layout>
    );
  }

  if (totalError) {
    return (
      <Layout showBottomTab={false}>
        <Header title="리포트" />
        <ErrorMessage 
          title="데이터 로드 실패"
          message="리포트 데이터를 불러오는 데 실패했습니다."
          onRetry={() => window.location.reload()}
        />
      </Layout>
    );
  }

  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-zinc-50">
        {/* Header */}
        <Header title="리포트" backgroundColor="bg-zinc-50" />

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
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-200 p-4">
                <div className="text-white">
                  <p className="text-xs opacity-90 font-bold">ROAS</p>
                  <p className="text-2xl font-bold">
                    {totalReport ? `${totalReport.overall_roas.toFixed(0)}%` : '0%'}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">총 클릭 수</p>
                <p className="text-xl font-bold text-gray-900">
                  {totalReport ? formatNumber(totalReport.total_clicks) : '0'}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">총 지출</p>
                <p className="text-lg font-bold text-gray-900">
                  {totalReport ? formatCurrency(totalReport.total_spent) : '₩0'}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">총 광고 수익</p>
                <p className="text-lg font-bold text-gray-900">
                  {totalReport ? formatCurrency(totalReport.total_sales) : '₩0'}
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
              {campaignReport && campaignReport.length > 0 ? (
                campaignReport.slice(0, 5).map((campaign, index) => (
                  <div key={campaign.campaign_id} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{campaign.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-100 rounded-full h-2 relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-yellow-400 rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.min(campaign.roas / 6, 100)}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 w-12 text-right">
                        {campaign.roas.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 text-center py-4">캠페인 데이터가 없습니다.</p>
              )}
            </div>
          </div>

          {/* Channel Comparison */}
          <div className="pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              채널별 성과 비교
            </h3>
            <p className="text-sm text-gray-600 mb-4">채널별 수익</p>
            
            {channelReport && channelReport.length > 0 ? (
              <>
                <p className="text-2xl font-bold text-gray-900 mb-6">
                  총 {formatCurrency(channelReport.reduce((sum, channel) => sum + channel.sales, 0))}
                </p>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <div className="flex justify-center space-x-8 mb-6">
                    {channelReport.map((channel, index) => {
                      const totalSales = channelReport.reduce((sum, ch) => sum + ch.sales, 0);
                      const percentage = totalSales > 0 ? (channel.sales / totalSales) * 100 : 0;
                      const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500'];
                      
                      return (
                        <div key={channel.channel} className="text-center">
                          <div
                            className={`w-6 h-24 ${colors[index % colors.length]} rounded-full mx-auto mb-2 relative`}
                          >
                            <div
                              className="absolute bottom-0 w-full bg-gray-200 rounded-full"
                              style={{ height: `${100 - percentage}%` }}
                            ></div>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            {channel.channel}
                          </p>
                          <p className="text-xs text-gray-500">
                            {percentage.toFixed(0)}%
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500 text-center py-4">채널 데이터가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
