import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/common/Layout';
import LoadingIllust from '../assets/loading-illust.svg';

const Analyzing: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 3초 후 Welcome 페이지로 이동 (분석 완료 후)
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout showBottomTab={false}>
      <div className="flex flex-col flex-1 items-center justify-center px-6 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-2xl font-bold mb-4 text-black">
            분석 중
          </h1>
          <p className="text-base text-gray-600">
            연결된 데이터를 AI가 분석하고 있습니다
          </p>
        </div>

        {/* 분석 일러스트 영역 */}
        <div className="w-[280px] h-[280px] flex items-center justify-center mb-16">
          <img 
            src={LoadingIllust} 
            alt="분석 중 일러스트" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="bg-yellow-100 px-4 py-2 rounded-full mb-4">
          <span className="text-sm font-medium text-yellow-800">💡 TIP</span>
        </div>
        
        <p className="text-center text-sm text-gray-600 leading-relaxed">
          AI가 추천하는 전략은 '인사이트' 페이지에서<br />
          언제든 다시 확인할 수 있어요.
        </p>
      </div>
    </Layout>
  );
};

export default Analyzing;
