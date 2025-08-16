import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common';
import iconSvg from '../assets/icon.svg'; 
import backIcon from '../assets/back.svg'; 
import chevronRightIcon from '../assets/chevron-right.svg'; 

interface NewStrategy {
  id: string; //API : 'insight_001'같은 형태
  title: string;
  reason_summary: {
      icon: string;
      text: string; // subtitle 대신 text로 변경
  }
  created_at: string;
  isNew: boolean; // api에는 없지만, 새로 추가된 전략을 구분하기 위한 플래그임
}

interface RecommendedStrategy {
  id: string; // API : 'insight_001'같은 형태
  icon: string;
  title: string;
  tags: { text: string; type: 'growth' | 'retention' | 'expansion' }[]; // 해당 태그는 백 api 추가 가능한지 확인
  // icon, tags - reason_summary로 묶어야 하는지 확인(api 수정되는 거 확인)
}

const mockInsightData = {
  newStrategies: [
    {
      id: 1,
      icon: '📈',
      title: '주말 점심 할인 캠페인 제안',
      subtitle: '최근 3주간 점심 시간대 매출 상승',
      date: '2025.08.01.',
      isNew: true,
    },
    {
      id: 2,
      icon: '📣',
      title: 'SNS 광고 예산 확대 필요',
      subtitle: 'SNS 유입 전환율이 평균보다 2배 높음',
      date: '2025.07.30.',
      isNew: true,
    },
    {
      id: 3,
      icon: '🥐',
      title: '브런치 세트 프로모션 제안',
      subtitle: '브런치 키워드 상권 내 검색량 40%',
      date: '2025.08.05.',
      isNew: true,
    },
  ],
  recommendedStrategies: [
     {
      id: 1,
      icon: '🍽',
      title: '주말 저녁 방문 유도 프로모션 제안',
      tags: [
        { text: '#매출상승', type: 'growth' }, // 노란색 계열
        { text: '#신규고객유입', type: 'growth' }
      ],
    },
    {
      id: 2,
      icon: '✉️',
      title: '고객 맞춤 이메일 캠페인 제안',
      tags: [
        { text: '#고객유지', type: 'retention' }, // 파란색 계열
        { text: '#충성도향상', type: 'retention' }
      ],
    },
    {
      id: 3,
      icon: '📱',
      title: 'SNS 이벤트 참여 유도 캠페인',
      tags: [
        { text: '#참여율증가', type: 'retention' },
        { text: '#참여율증가', type: 'retention' }
      ],
    },
    {
      id: 4,
      icon: '📍',
      title: '신규 상권 대상 타겟 광고 전략',
      tags: [
        { text: '#시장확대', type: 'expansion' }, // 빨간색 계열
        { text: '#신규진입', type: 'expansion' }
      ],
    },
    {
      id: 5,
      icon: '☕',
      title: '점심 타임 직장인 타겟 쿠폰 발송',
      tags: [
        { text: '#시간대마케팅', type: 'expansion' },
        { text: '#반복구매유도', type: 'retention' }
      ],
    },
  ],
};

const Insight: React.FC = () => {
  const navigate = useNavigate();
   const handleCardClick = (id: string) => {
    navigate(`/insight/${id}`);
   };

   const getTagClasses = (type: 'growth' | 'retention' | 'expansion') => {
    switch (type) {
      case 'growth':
        return 'font-semibold text-[#E4A700] bg-[#FEF8D8]'; // 노란색 계열(growth)
      case 'retention':
        return 'font-semibold text-[#3892E3] bg-[#E2F1FF]'; // 파란색 계열(retention)
      case 'expansion':
        return 'font-semibold text-[#FF7171] bg-[#F5F5F5]'; // 빨간색 계열(expansion)
    }
  };

  return (
    <Layout showBottomTab={false}>
        {/* Header */}
      <div className="flex items-center justify-between px-7 py-4 sticky top-0 z-10 border-b border-gray-100">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center w-8 h-8">
            <img src={backIcon} alt="뒤로 가기" className="w-6 h-6" />
          </button>
          
          <h1 className="text-lg font-semibold text-gray-900">AI 인사이트</h1>
          
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-8 h-8" />
          </div>
      </div>
        
      <div className="min-h-screen bg-gray2">
        <div className="p-7 space-y-6">
          <div className="space-y-8">

            {/* 새로운 AI 추천 전략 섹션 */}
            <section>
              <div className="flex justify-between items-center self-stretch mb-4">
                <h2 className="text-[#121212] text-lg font-bold leading-[150%] tracking-[-0.18px]">
                  새로운 AI 추천 전략
                </h2>
                <p className="text-[#121212] text-xs font-medium leading-[150%]">
                  총 <span className="text-[#3892E3] font-bold">{mockInsightData.newStrategies.length}</span>건{/* 총 건수 연결 필요 */}
                </p>
              </div>

              {/* 카드 리스트(3개 한 묶음)*/}
              <div className="flex flex-col gap-2">
                {mockInsightData.newStrategies.map((strategy) => (
                  <div 
                    key={strategy.id} 
                    onClick={() => handleCardClick(strategy.id)}
                    className="flex items-start justify-between p-4 gap-4 rounded-xl bg-[#FFF8E1] shadow-[0_1px_3px_0_rgba(18,18,18,0.08)] cursor-pointer active:bg-[#fdeec9] transition-colors"
                  >
                    <div className="flex flex-col flex-grow gap-1"> {/* 텍스트 전체를 감싸는 세로 프레임 */}
                      <p className="text-[#767676] text-[10px] font-medium leading-[140%] tracking-[0.1px]">
                        생성일 {strategy.date}
                      </p>

                      {/* 아이콘 + [N뱃지 + 제목을 묶는 가로 프레임] */}
                      <div className="flex items-center gap-2 self-stretch"> 
                        <span className="text-sm text-[#767676]">{strategy.icon}</span>
                        {strategy.isNew && (
                          <div className="flex justify-center items-center py-[1px] px-1 rounded-full bg-[#FF7171]">
                            <span className="text-white text-[10px] font-bold">N</span>
                          </div>
                        )}
                        <h3 className="text-[#121212] text-base font-semibold leading-[150%]">
                          {strategy.title}
                        </h3>
                      </div>

                      <p className="text-[#767676] text-sm font-normal leading-[160%] self-stretch">
                        {strategy.subtitle}
                      </p>
                    </div>
                    
                    <div className="w-[18px] h-[18px] flex-shrink-0 self-center">
                      <img src={chevronRightIcon} alt="자세히 보기" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* AI 추천 전략 섹션 */}
            <section className="pb-4">
                  <h2 className="text-[#121212] text-lg font-bold leading-[150%] tracking-[-0.18px] mb-4">AI 추천 전략</h2>
                  
                  {/* 모든 카드를 감싸는 외부 컨테이너를 추가 */}
                  <div className="bg-[#FFFEFB] rounded-2xl p-2 shadow-[0_1px_3px_0_rgba(18,18,18,0.08)]">

                    <div className="divide-y divide-gray-100">
                      {mockInsightData.recommendedStrategies.map((strategy) => (
                        <div 
                          key={strategy.id}
                          onClick={() => handleCardClick(strategy.id)}

                          className="flex items-center justify-between cursor-pointer py-4 px-2 active:bg-[#faf8f0] transition-colors"
                        >
                          <div className="flex flex-col flex-1 gap-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{strategy.icon}</span>
                              <p className="font-semibold text-gray-800 text-base">{strategy.title}</p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {strategy.tags.map((tag, index) => (
                                <span 
                                  key={index} 
                                  className={`text-xs font-medium rounded-full px-2.5 py-1 ${getTagClasses(tag.type)}`}
                                >
                                  {tag.text}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <img src={chevronRightIcon} alt="자세히 보기" className="w-[18px] h-[18px] flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
              </section>
            </div>

        </div>
      </div>
    </Layout>
  );
};

export default Insight;