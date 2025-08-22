import React from 'react';

// 차트에 필요한 데이터의 타입을 정의합니다.
interface CampaignData {
  id: number;
  name: string;
  roas: number;
  channel?: string;
}

interface CampaignPerformanceChartProps {
  campaigns: CampaignData[];
}

const CampaignPerformanceChart = ({
  campaigns,
}: CampaignPerformanceChartProps) => {
  // 데이터 중 가장 높은 ROAS 값을 찾아 막대 길이의 기준으로 삼습니다.
  const maxRoas = Math.max(...campaigns.map(c => c.roas), 1);

  // 채널별 색상과 아이콘 매핑 (노란색 계열로 통일)
  const getChannelStyle = (channel?: string) => {
    const baseStyle =
      'relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl transform hover:scale-105';

    switch (channel?.toLowerCase()) {
      case 'instagram':
        return {
          gradient:
            'bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500',
          icon: '📸',
          shadowColor: 'shadow-yellow-200',
          style: baseStyle,
        };
      case 'facebook':
        return {
          gradient:
            'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500',
          icon: '👥',
          shadowColor: 'shadow-amber-200',
          style: baseStyle,
        };
      case 'google':
        return {
          gradient:
            'bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600',
          icon: '🔍',
          shadowColor: 'shadow-yellow-200',
          style: baseStyle,
        };
      case 'youtube':
        return {
          gradient:
            'bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-600',
          icon: '📺',
          shadowColor: 'shadow-amber-200',
          style: baseStyle,
        };
      default:
        return {
          gradient:
            'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600',
          icon: '🚀',
          shadowColor: 'shadow-yellow-200',
          style: baseStyle,
        };
    }
  };

  return (
    <div className="">
      {campaigns.map((campaign, index) => {
        const channelStyle = getChannelStyle(campaign.channel);
        const widthPercentage = Math.min((campaign.roas / maxRoas) * 100, 100);

        return (
          <div key={campaign.id} className="group mb-6">
            {/* 캠페인 헤더 */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full ${channelStyle.gradient} flex items-center justify-center text-white text-sm font-bold shadow-md`}
                >
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm truncate max-w-[200px]">
                    {campaign.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>
                      {channelStyle.icon} {campaign.channel || 'Unknown'}
                    </span>
                  </div>
                </div>
              </div>

              {/* ROAS 수치 */}
              <div className="text-right">
                <div className="text-lg font-bold text-gray-800">
                  {Math.round(campaign.roas)}%
                </div>
                <div className="text-xs text-gray-500">ROAS</div>
              </div>
            </div>

            {/* 프로그레스 바 */}
            <div className="relative">
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full ${channelStyle.gradient} transition-all duration-1000 ease-out relative overflow-hidden`}
                  style={{
                    width: `${widthPercentage}%`,
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* 반짝이는 효과 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* 상세 정보 (호버 시 표시) */}
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        );
      })}
    </div>
  );
};

export default CampaignPerformanceChart;
