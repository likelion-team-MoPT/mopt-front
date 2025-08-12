import React from "react";
import { useNavigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import Button from './components/common/Button';
import KakaoSvg from './assets/kakao.svg';
import WelcomeIllust from './assets/welcome-illust.svg';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    // 카카오 로그인 로직
    navigate('/welcome');
  };

  const handleGoogleLogin = () => {
    // 구글 로그인 로직
    navigate('/welcome');
  };

  return (
    <Layout>
      <div className="flex flex-col flex-1 px-6 pt-16">
        {/* 일러스트 영역 */}
        <div className="flex-1 flex items-center justify-center mb-8">
          <div className="w-[280px] h-[260px] flex items-center justify-center">
            <img 
              src={WelcomeIllust} 
              alt="환영 일러스트" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 텍스트 영역 */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4 text-black leading-tight">
            비용은 적게,<br />
            효과는 크게
          </h1>
          <p className="text-lg text-gray-600">
            AI 마케팅 파트너, 모피티
          </p>
        </div>

        {/* 버튼 영역 */}
        <div className="space-y-4 pb-8">
          <Button onClick={handleKakaoLogin} className="bg-[#FEE500] text-black">
            <div className="flex items-center justify-center space-x-2">
              <img src={KakaoSvg} alt="kakao" className="w-5 h-5" />
              <span>카카오계정으로 시작하기</span>
            </div>
          </Button>
          
          <Button onClick={handleGoogleLogin} variant="secondary">
            <div className="flex items-center justify-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>구글 계정으로 시작하기</span>
            </div>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Onboarding;
