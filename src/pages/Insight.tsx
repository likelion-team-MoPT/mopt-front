import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common';
import { getInsights } from '../api/insightAPI';
import type { NewStrategy, RecommendedStrategy } from '../types';

import iconSvg from '../assets/icon.svg'; 
import backIcon from '../assets/back.svg'; 
import chevronRightIcon from '../assets/chevron-right.svg'; 


const Insight: React.FC = () => {
  const navigate = useNavigate();

  const [newStrategies, setNewStrategies] = useState<NewStrategy[]>([]);
  const [recommendedStrategies, setRecommendedStrategies] = useState<RecommendedStrategy[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true);
        const data = await getInsights();
        setNewStrategies(data.new_strategies);
        setRecommendedStrategies(data.recommended_strategies);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

   const handleCardClick = (id: string) => {
    navigate(`/insight/${id}`);
   };

   const getTagClasses = (type: 'growth' | 'retention' | 'expansion') => {
    switch (type) {
      case 'growth':
        return 'font-semibold text-[#E4A700] bg-[#FEF8D8]'; 
      case 'retention':
        return 'font-semibold text-[#3892E3] bg-[#E2F1FF]'; 
      case 'expansion':
        return 'font-semibold text-[#FF7171] bg-[#F5F5F5]'; 
    }
  };

  if (loading) {
    return <Layout showBottomTab={false}><div className="p-7 text-center">로딩 중...</div></Layout>;
  }

  if( error) {
    return <Layout showBottomTab={false}><div className="p-7 text-center">데이터를 불러오는 데 실패했습니다.</div></Layout>;
  }

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
        
      <div className="min-h-screen bg-gray2">
        <div className="p-7 space-y-6">
          <div className="space-y-8">

            
            <section>
              <div className="flex justify-between items-center self-stretch mb-4">
                <h2 className="text-[#121212] text-lg font-bold leading-[150%] tracking-[-0.18px]">
                  새로운 AI 추천 전략
                </h2>
                <p className="text-[#121212] text-xs font-medium leading-[150%]">
                  총 <span className="text-[#3892E3] font-bold">{newStrategies.length}</span>건
                </p>
              </div>

              
              <div className="flex flex-col gap-2">
                {newStrategies.map((strategy) => (
                  <div 
                    key={strategy.id} 
                    onClick={() => handleCardClick(strategy.id)}
                    className="flex items-start justify-between p-4 gap-4 rounded-xl bg-[#FFF8E1] shadow-[0_1px_3px_0_rgba(18,18,18,0.08)] cursor-pointer active:bg-[#fdeec9] transition-colors"
                  >
                    <div className="flex flex-col flex-grow gap-1"> 
                      <p className="text-[#767676] text-[10px] font-medium leading-[140%] tracking-[0.1px]">
                        생성일 {strategy.created_at.substring(0, 10 )}
                      </p>

                      
                      <div className="flex items-center gap-2 self-stretch"> 
                        <span className="text-sm text-[#767676]">{strategy.reason_summary.icon}</span>
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
                        {strategy.reason_summary.text}
                      </p>
                    </div>
                    
                    <div className="w-[18px] h-[18px] flex-shrink-0 self-center">
                      <img src={chevronRightIcon} alt="자세히 보기" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            
            <section className="pb-4">
                  <h2 className="text-[#121212] text-lg font-bold leading-[150%] tracking-[-0.18px] mb-4">AI 추천 전략</h2>
                  
                  
                  <div className="bg-[#FFFEFB] rounded-2xl p-2 shadow-[0_1px_3px_0_rgba(18,18,18,0.08)]">

                    <div className="divide-y divide-gray-100">
                      {recommendedStrategies.map((strategy) => (
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