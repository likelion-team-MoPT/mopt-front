import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../components/common';
import iconSvg from '../assets/icon.svg';
import backIcon from '../assets/back.svg';
import lightbulb from '../assets/lightbulb.svg';

const mockDetailData = {
  id: 'insight_001',
  tags: [
    { text: '#프로모션', type: 'growth' },
    { text: '#시간대마케팅', type: 'retention' },
  ],
  title: '주말 점심 할인 캠페인 제안',
  summary: '상권 주변 기숙사생들의 주말 점심 소비 패턴을 분석하여 매출 증대를 위한 타겟팅 전략을 제안합니다.',
  analysis: {
    title: 'AI 분석 근거',
    items: [
      {
        icon: '🧾',
        title: '매출 데이터',
        description: '최근 3주간 주말 점심 매출이 평균 대비 18% 상승하였습니다.',
      },
      {
        icon: '📍',
        title: '시장 데이터',
        description: '상권 내 기숙사생들의 주말 외식 빈도가 다른 요일 대비 높게 나타났습니다.',
      },
      {
        icon: '💬',
        title: 'SNS 트렌드',
        description: '“기숙사”, “점심 메뉴 추천”, “혼밥 맛집” 관련 키워드가 주말 점심 시간대에 SNS에서 급증하였습니다.',
      },
    ],
  },
  recommendation: {
    title: '추천 실행 계획',
    item: {
      icon: '🎯',
      title: 'SNS 기반 주말 점심 타겟팅 프로모션 제안',
      description: '주변 기숙사 반경 1.5km 내 타겟 유저에게 배달앱 쿠폰 + SNS 홍보용 메뉴 카드 콘텐츠 조합을 추천합니다.\n점심 전 타이밍(오전 11시)에 메시지를 발송하여 “혼밥 할인 세트”를 노출하세요!',
    },
  },
};

// Insight.tsx의 getTagClasses 재사용
const getTagClasses = (type: 'growth' | 'retention' | 'expansion') => {
    switch (type) {
      case 'growth':
        return 'text-[#E4A700] bg-[#FFF8E1]'; // 노란색 계열
      case 'retention':
        return 'text-[#3892E3] bg-[#E2F1FF]'; // 파란색 계열
      case 'expansion':
        return 'text-[#FF7171] bg-[#F5F5F5]'; // 빨간색 계열
    }
};

// AI 분석 근거 카드
const AnalysisCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="rounded-2xl bg-white p-4 shadow-[0_1px_3px_0_rgba(18,18,18,0.08)] space-y-2">
    <div className="flex items-center gap-2">
      <span role="img" aria-label={`${title} 아이콘`} className="text-lg">{icon}</span>
      <p className="font-semibold text-[#121212]">{title}</p>
    </div>
    <p className="text-sm text-[#5B7490] leading-relaxed">
      {description}
    </p>
  </div>
);


const InsightDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // URL에서 insight id를 가져옴

  // 추후 api 호출, 데이터 받아오는 로직 작성
  const data = mockDetailData;

  return (
    <Layout showBottomTab={false}> 
      {/* Header */}
      <div className="flex items-center justify-between px-7 py-4 z-10 border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center w-8 h-8">
          <img src={backIcon} alt="뒤로 가기" className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">AI 인사이트</h1>
        <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-8 h-8" />
        </div>
      </div>

      {/* Body */}
      <div className="min-h-screen bg-gray2">
        <div className="p-7 space-y-6">
          <div className="space-y-8">

            {/* 상단*/}
            <div className="space-y-6">
              <div className = "flex justify-center">
                <img src={lightbulb} alt="인사이트 아이콘" className="w-15 h-15" />
              </div>

              <section className="flex flex-col items-center gap-2 text-center">

                {/* tag */}
                <div className="flex flex-wrap justify-center gap-2">
                  {data.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`text-xs font-medium rounded-full px-3 py-1.5 ${getTagClasses(tag.type as any)}`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>

                {/* title */}
                <h2 className="text-2xl font-bold text-[#121212] break-keep">
                  {data.title}
                </h2>

                {/* summary */}
                <p className="text-l text-[#121212] leading-relaxed">
                  {data.summary}
                </p>
              </section>
            </div>

            {/* AI 분석 근거 및 추천 실행 계획 */}
            <section>
               <div className="flex flex-col gap-8">

                {/*1. AI 분석 근거*/}
                <div className='flex flex-col gap-2'>
                    <div className="flex flex-row gap-4 items-start">

                      <div className="flex-shrink-0 w-6 flex justify-center">
                        <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs font-bold">1</div>
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">
                          {data.analysis.title}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-2">
                        {data.analysis.items.map((item, index) => (
                          <AnalysisCard key={index} {...item} />
                        ))}
                    </div>
                </div>
                
                {/* dot */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-6">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: 'linear-gradient(-98deg, #FFE082 0%, #FFC400 100%)'
                      }}
                    ></div>
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: 'linear-gradient(-98deg, #FFE082 0%, #FFC400 100%)'
                      }}
                    ></div>
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{
                        background: 'linear-gradient(-98deg, #FFE082 0%, #FFC400 100%)'
                      }}
                    ></div>
                  </div>
                </div>

                {/* 2. 추천 실행 계획 */}
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row gap-4 items-start">

                    <div className="flex-shrink-0 w-6 flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs font-bold">2</div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                          {data.recommendation.title}
                      </h3>
                    </div>
                  </div>
                      
                  <div className="rounded-2xl bg-[#FFFBEA] p-4 space-y-2 shadow-[0_1px_3px_0_rgba(18,18,18,0.08)]">
                    <div className="flex items-center gap-2">
                       <span role="img" aria-label="추천 아이콘" className="text-lg">{data.recommendation.item.icon}</span>
                       <p className="font-semibold text-[#121212]">{data.recommendation.item.title}</p>
                    </div>
                    <p className="text-sm text-[#767676] whitespace-pre-line leading-relaxed">
                            {data.recommendation.item.description}
                    </p>
                  </div>     
                </div>                                
              </div>

            </section>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <footer className="static p-8">
        <button
          className="w-full text-black font-semibold py-4 rounded-full"
          style={{ background: 'linear-gradient(-98deg, #FFE082 0%, #FFC400 100%)' }}>
          캠페인 만들기
        </button>
      </footer>
    </Layout>
  );
};

export default InsightDetail;