import WelcomeIllust from './assets/welcome-illust.svg';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 메인 콘텐츠 영역 */}
      <div className="flex flex-col flex-1 px-6 pt-8">
        {/* 텍스트 영역 */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6 text-black leading-tight">환영합니다!</h1>
          <div className="space-y-2">
            <p className="text-lg text-black font-medium leading-relaxed">
              이제 사장님의 비즈니스에<br />
              꼭 맞는 마케팅 전략을 찾아볼까요?
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              딱 2분만 투자하여 맞춤형 AI 분석을 시작해보세요.
            </p>
          </div>
        </div>

        {/* 일러스트 영역 */}
        <div className="flex-1 flex items-center justify-center mb-16">
          <div className="w-[280px] h-[260px] flex items-center justify-center">
            <img 
              src={WelcomeIllust} 
              alt="환영 일러스트" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="pb-8">
          <button
            onClick={() => navigate('/business-info')}
            className="w-full h-14 rounded-2xl bg-[#FFC800] text-black font-bold text-lg shadow-lg hover:bg-[#ffb700] active:bg-[#e6a800] transition-colors duration-200 flex items-center justify-center"
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
