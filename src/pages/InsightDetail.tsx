import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../components/common';
import { getInsightById } from '../api/insightAPI';
import type { InsightDetail as InsightDetailType } from '../types';

import iconSvg from '../assets/icon.svg';
import backIcon from '../assets/back.svg';
import lightbulb from '../assets/lightbulb.svg';


const getTagClasses = (type: 'growth' | 'retention' | 'expansion') => {
    switch (type) {
      case 'growth':
        return 'text-[#E4A700] bg-[#FFF8E1]'; 
      case 'retention':
        return 'text-[#3892E3] bg-[#E2F1FF]'; 
      case 'expansion':
        return 'text-[#FF7171] bg-[#F5F5F5]'; 
    }
};

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
  const [insightDetail, setInsightDetail] = useState<InsightDetailType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchInsightsDetail = async () => {
      try {
        setLoading(true);
        const data = await getInsightById(id);
        setInsightDetail(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInsightsDetail();
  }, [id]);

  if (loading) {
    return <Layout showBottomTab={false}><div className="p-7 text-center">상세 정보를 불러오는 중...</div></Layout>;
  }

  if (error) {
    return <Layout showBottomTab={false}><div className="p-7 text-center">정보를 불러오는 데 실패했습니다.</div></Layout>;
  }
  if (!insightDetail) {
    return <Layout showBottomTab={false}><div className="p-7 text-center">죄송하지만 AI가 제공하지 않는 인사이트입니다.</div></Layout>;
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

            
            <div className="space-y-6">
              <div className = "flex justify-center">
                <img src={lightbulb} alt="인사이트 아이콘" className="w-15 h-15" />
              </div>

              <section className="flex flex-col items-center gap-2 text-center">

                
                <div className="flex flex-wrap justify-center gap-2">
                  {insightDetail.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`text-xs font-medium rounded-full px-3 py-1.5 ${getTagClasses(tag.type as any)}`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>

                
                <h2 className="text-2xl font-bold text-[#121212] break-keep">
                  {insightDetail.title}
                </h2>

                
                <p className="text-l text-[#121212] leading-relaxed">
                  {insightDetail.summary}
                </p>
              </section>
            </div>

            
            <section>
               <div className="flex flex-col gap-8">

                
                <div className='flex flex-col gap-2'>
                    <div className="flex flex-row gap-4 items-start">

                      <div className="flex-shrink-0 w-6 flex justify-center">
                        <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs font-bold">1</div>
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">
                          {insightDetail.analysis.title}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-2">
                        {insightDetail.analysis.items.map((item, index) => (
                          <AnalysisCard key={index} {...item} />
                        ))}
                    </div>
                </div>
                
                
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

                
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row gap-4 items-start">

                    <div className="flex-shrink-0 w-6 flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs font-bold">2</div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                          {insightDetail.recommendation.title}
                      </h3>
                    </div>
                  </div>
                      
                  <div className="rounded-2xl bg-[#FFFBEA] p-4 space-y-2 shadow-[0_1px_3px_0_rgba(18,18,18,0.08)]">
                    <div className="flex items-center gap-2">
                       <span role="img" aria-label="추천 아이콘" className="text-lg">{insightDetail.recommendation.item.icon}</span>
                       <p className="font-semibold text-[#121212]">{insightDetail.recommendation.item.title}</p>
                    </div>
                    <p className="text-sm text-[#767676] whitespace-pre-line leading-relaxed">
                            {insightDetail.recommendation.item.description}
                    </p>
                  </div>     
                </div>                                
              </div>

            </section>
          </div>
        </div>
      </div>

    
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