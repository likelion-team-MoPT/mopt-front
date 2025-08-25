import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Loading, ErrorMessage, EmptyState } from '../components/common';
import { useInsights } from '../hooks/useApi';
import iconSvg from '../assets/icon.svg'; 
import backIcon from '../assets/back.svg'; 
import chevronRightIcon from '../assets/chevron-right.svg'; 

const Insight: React.FC = () => {
  const navigate = useNavigate();
  
  // API 호출
  const { data: newInsights, isLoading: newLoading, error: newError } = useInsights('new');
  const { data: recommendedInsights, isLoading: recommendedLoading, error: recommendedError } = useInsights('recommended');

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

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\./g, '.').replace(/\s/g, '');
    } catch {
      return dateString;
    }
  };

  const isLoading = newLoading || recommendedLoading;
  const hasError = newError || recommendedError;

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
        <Loading text="인사이트 데이터를 불러오는 중..." />
      </Layout>
    );
  }

  if (hasError) {
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
          message="인사이트 데이터를 불러오는 데 실패했습니다."
          onRetry={() => window.location.reload()}
        />
      </Layout>
    );
  }

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
                  총 <span className="text-[#3892E3] font-bold">{(newInsights && 'data' in newInsights ? newInsights.data?.length : 0) || 0}</span>건
                </p>
              </div>

              {/* 카드 리스트 */}
              <div className="flex flex-col gap-2">
                {newInsights && 'data' in newInsights && newInsights.data && newInsights.data.length > 0 ? (
                  newInsights.data.map((strategy: any) => (
                    <div 
                      key={strategy.id} 
                      onClick={() => handleCardClick(strategy.id)}
                      className="flex items-start justify-between p-4 gap-4 rounded-xl bg-[#FFF8E1] shadow-[0_1px_3px_0_rgba(18,18,18,0.08)] cursor-pointer active:bg-[#fdeec9] transition-colors"
                    >
                      <div className="flex flex-col flex-grow gap-1">
                        <p className="text-[#767676] text-[10px] font-medium leading-[140%] tracking-[0.1px]">
                          생성일 {formatDate(strategy.created_at)}
                        </p>

                        <div className="flex items-center gap-2 self-stretch"> 
                          <span className="text-sm text-[#767676]">
                            {strategy.reason_summary?.icon || '💡'}
                          </span>
                          <div className="flex justify-center items-center py-[1px] px-1 rounded-full bg-[#FF7171]">
                            <span className="text-white text-[10px] font-bold">N</span>
                          </div>
                          <h3 className="text-[#121212] text-base font-semibold leading-[150%]">
                            {strategy.title}
                          </h3>
                        </div>

                        <p className="text-[#767676] text-sm font-normal leading-[160%] self-stretch">
                          {strategy.reason_summary?.text || strategy.summary || '인사이트 요약 정보가 없습니다.'}
                        </p>
                      </div>
                      
                      <div className="w-[18px] h-[18px] flex-shrink-0 self-center">
                        <img src={chevronRightIcon} alt="자세히 보기" />
                      </div>
                    </div>
                  ))
                ) : (
                  <EmptyState
                    title="새로운 인사이트가 없습니다"
                    message="새로운 AI 추천 전략이 생성되면 여기에 표시됩니다."
                  />
                )}
              </div>
            </section>

            {/* AI 추천 전략 섹션 */}
            <section className="pb-4">
              <h2 className="text-[#121212] text-lg font-bold leading-[150%] tracking-[-0.18px] mb-4">AI 추천 전략</h2>
              
              {/* 모든 카드를 감싸는 외부 컨테이너를 추가 */}
              <div className="bg-[#FFFEFB] rounded-2xl p-2 shadow-[0_1px_3px_0_rgba(18,18,18,0.08)]">
                {recommendedInsights && 'data' in recommendedInsights && recommendedInsights.data && recommendedInsights.data.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {recommendedInsights.data.map((strategy: any) => (
                      <div 
                        key={strategy.id}
                        onClick={() => handleCardClick(strategy.id)}
                        className="flex items-center justify-between cursor-pointer py-4 px-2 active:bg-[#faf8f0] transition-colors"
                      >
                        <div className="flex flex-col flex-1 gap-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">
                              {strategy.reason_summary?.icon || strategy.icon || '💡'}
                            </span>
                            <p className="font-semibold text-gray-800 text-base">{strategy.title}</p>
                          </div>
                          
                          {strategy.tags && strategy.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {strategy.tags.map((tag: any, index: number) => (
                                <span 
                                  key={index} 
                                  className={`text-xs font-medium rounded-full px-2.5 py-1 ${getTagClasses(tag.type || 'growth')}`}
                                >
                                  {tag.text}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <img src={chevronRightIcon} alt="자세히 보기" className="w-[18px] h-[18px] flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8">
                    <EmptyState
                      title="추천 전략이 없습니다"
                      message="AI가 분석한 추천 전략이 아직 없습니다."
                    />
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Insight;
