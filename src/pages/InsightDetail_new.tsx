import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout, Loading, ErrorMessage } from '../components/common';
import { useInsightDetail } from '../hooks/useApi';
import iconSvg from '../assets/icon.svg';
import backIcon from '../assets/back.svg';
import lightbulb from '../assets/lightbulb.svg';

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
  const { id } = useParams<{ id: string }>();

  // API 호출
  const { data: insightData, isLoading, error } = useInsightDetail(id!);

  if (isLoading) {
    return (
      <Layout showBottomTab={false}>
        <div className="flex items-center justify-between px-7 py-4 z-10 border-b border-gray-100">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center w-8 h-8">
            <img src={backIcon} alt="뒤로 가기" className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">AI 인사이트</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-8 h-8" />
          </div>
        </div>
        <Loading text="인사이트 상세 정보를 불러오는 중..." />
      </Layout>
    );
  }

  if (error || !insightData) {
    return (
      <Layout showBottomTab={false}>
        <div className="flex items-center justify-between px-7 py-4 z-10 border-b border-gray-100">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center w-8 h-8">
            <img src={backIcon} alt="뒤로 가기" className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">AI 인사이트</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-8 h-8" />
          </div>
        </div>
        <ErrorMessage
          title="데이터 로드 실패"
          message="인사이트 상세 정보를 불러오는 데 실패했습니다."
          onRetry={() => window.location.reload()}
        />
      </Layout>
    );
  }

  const data = insightData;

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
              <div className="flex justify-center">
                <img src={lightbulb} alt="인사이트 아이콘" className="w-15 h-15" />
              </div>

              <section className="flex flex-col items-center gap-2 text-center">

                {/* tag */}
                {data.tags && data.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {data.tags.map((tag: any, index: number) => (
                      <span 
                        key={index}
                        className={`text-xs font-medium rounded-full px-3 py-1.5 ${getTagClasses(tag.type || 'growth')}`}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>
                )}

                {/* title */}
                <h2 className="text-2xl font-bold text-[#121212] break-keep">
                  {data.title}
                </h2>

                {/* summary */}
                <p className="text-l text-[#121212] leading-relaxed">
                  {data.summary || '인사이트 요약 정보'}
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
                        AI 분석 근거
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {data.analysis?.items && data.analysis.items.length > 0 ? (
                      data.analysis.items.map((item: any, index: number) => (
                        <AnalysisCard 
                          key={index} 
                          icon={item.icon || '📊'} 
                          title={item.title || `분석 항목 ${index + 1}`}
                          description={item.description || '분석 내용이 없습니다.'}
                        />
                      ))
                    ) : (
                      <AnalysisCard 
                        icon="📊" 
                        title="데이터 분석"
                        description={data.summary || "상세한 분석 근거가 제공되지 않았습니다."}
                      />
                    )}
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
                        추천 실행 계획
                      </h3>
                    </div>
                  </div>
                      
                  <div className="rounded-2xl bg-[#FFFBEA] p-4 space-y-2 shadow-[0_1px_3px_0_rgba(18,18,18,0.08)]">
                    <div className="flex items-center gap-2">
                      <span role="img" aria-label="추천 아이콘" className="text-lg">
                        {data.recommendation?.item?.icon || '🎯'}
                      </span>
                      <p className="font-semibold text-[#121212]">
                        {data.recommendation?.item?.title || data.title}
                      </p>
                    </div>
                    <p className="text-sm text-[#767676] whitespace-pre-line leading-relaxed">
                      {data.recommendation?.item?.description || '구체적인 실행 계획이 제공되지 않았습니다.'}
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
          onClick={() => navigate('/campaigns/new')}
          className="w-full text-black font-semibold py-4 rounded-full"
          style={{ background: 'linear-gradient(-98deg, #FFE082 0%, #FFC400 100%)' }}>
          캠페인 만들기
        </button>
      </footer>
    </Layout>
  );
};

export default InsightDetail;
