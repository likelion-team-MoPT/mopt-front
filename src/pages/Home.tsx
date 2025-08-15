import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common';
import iconSvg from '../assets/icon.svg';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 bg-white">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-8 h-8" />
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.2569 21.1875C21.5911 18.3077 19.0241 16.2427 16.0283 15.2637C19.0741 13.4505 20.5332 9.82578 19.5929 6.40805C18.6526 2.99031 15.5447 0.622024 12 0.622024C8.45528 0.622024 5.34742 2.99031 4.40712 6.40805C3.46682 9.82578 4.92586 13.4505 7.97172 15.2637C4.97594 16.2416 2.40891 18.3066 0.743125 21.1875C0.576821 21.4587 0.570782 21.7987 0.727353 22.0756C0.883924 22.3525 1.17844 22.5226 1.49653 22.5199C1.81462 22.5172 2.10617 22.342 2.25797 22.0625C4.31859 18.5012 7.96078 16.375 12 16.375C16.0392 16.375 19.6814 18.5012 21.742 22.0625C21.8938 22.342 22.1854 22.5172 22.5035 22.5199C22.8216 22.5226 23.1161 22.3525 23.2726 22.0756C23.4292 21.7987 23.4232 21.4587 23.2569 21.1875ZM5.875 8.5C5.875 5.11726 8.61726 2.375 12 2.375C15.3827 2.375 18.125 5.11726 18.125 8.5C18.125 11.8827 15.3827 14.625 12 14.625C8.61875 14.6214 5.87862 11.8812 5.875 8.5Z" fill="#637387"/>
            </svg>
          </div>
        </div>

        {/* Main Banner */}
        <div className="px-4 py-6 bg-gradient-to-r from-yellow-50 via-yellow-50 to-orange-50 relative overflow-hidden">
          <div className="relative z-10">
            <div className="justify-start text-neutral-900 text-3xl font-bold font-['Pretendard'] leading-10">이제 마케팅은<br/>모피티에게 맡기세요.</div>
            <p className="text-sm text-gray-600 mb-4">
              가성 효과적인 AI 마케팅 솔루션
            </p>
            <div data-property-1="true" className="size- px-4 py-1.5 bg-yellow-400 rounded-[200px] shadow-[0px_4px_8px_0px_rgba(18,18,18,0.12)] inline-flex justify-center items-center gap-2 overflow-hidden">
              <div className="text-center justify-start text-white text-base font-semibold font-['Pretendard'] leading-normal">내 매출 확인하기</div>
            </div>
          </div>
          
          
        </div>

        {/* Feature Icons */}
        <div className="flex justify-around py-6 bg-white mx-4 rounded-xl shadow-sm -mt-6 relative z-10">
          <button 
            onClick={() => navigate('/analytics')}
            className="text-center hover:bg-gray-50 rounded-xl p-2 transition-colors"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-xs text-gray-600 font-medium">리포트</span>
          </button>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-xs text-gray-600 font-medium">AI 인사이트</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <span className="text-xs text-gray-600 font-medium">캠페인</span>
          </div>
        </div>

        {/* Monthly Sales */}
        <div className="px-4 py-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-900">주간 매출 동향</h3>
              <span className="text-sm text-gray-500">더보기 &gt;</span>
            </div>
            <p className="text-xs text-gray-500 mb-3">최근 7일간의 매출</p>
            <div className="flex items-end mb-2">
              <span className="text-2xl font-bold text-gray-900">₩12,345</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-blue-600">어제 대비 +12%</span>
              <div className="ml-2 h-8 flex-1 bg-gray-100 rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-400 rounded" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="px-4 py-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">AI 인사이트</h3>
              <span className="text-sm text-gray-500">더보기 &gt;</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">새로운 AI 추천 전략 3건</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-lg mr-3">📝</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">주말 점심 할인 캠페인 제안</p>
                    <p className="text-xs text-gray-500">예상 매출 2025.06.01</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-lg mr-3">📱</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">SNS 광고 예산 확대 필요</p>
                    <p className="text-xs text-gray-500">예상 매출 2025.06.01</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-lg mr-3">💰</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">브랜치 세트 프로모션 제안</p>
                    <p className="text-xs text-gray-500">예상 매출 2025.06.01</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Trend Keywords */}
        <div className="px-4 py-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">상권 트렌드 키워드</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">#라면 오징어</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">#송후 안쪽</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">#취업 잇기 채용</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">#업찍 솔직</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">#카카톡 아핏</span>
            </div>
            
            {/* Illustration */}
            <div className="flex justify-center py-4">
              <div className="w-32 h-32 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-4xl">💼</span>
              </div>
            </div>
            
            <div className="text-center">
              <select className="w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-600">
                <option>오늘의 상권을 선택해주세요</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Campaigns */}
        <div className="px-4 py-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">진행 중인 캠페인</h3>
              <span className="text-sm text-gray-500">더보기 &gt;</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">현재 진행 중 2건</p>
            
            <div className="space-y-3">
              <div className="p-4 bg-yellow-400 rounded-lg">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="font-semibold">점심 세트 프로모션</p>
                    <p className="text-sm opacity-90">현재 328%</p>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">f</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-yellow-400 rounded-lg">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="font-semibold">신메뉴 한정 이벤트</p>
                    <p className="text-sm opacity-90">현재 145%</p>
                  </div>
                  <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">📷</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Announcements */}
        <div className="px-4 py-6 pb-24">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">공지사항</h3>
              <button 
                onClick={() => navigate('/notices')}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                더보기 &gt;
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">최신 공지사항 1건</p>
            
            <button 
              onClick={() => navigate('/notices/1')}
              className="flex items-center p-3 bg-yellow-100 rounded-lg w-full text-left hover:bg-yellow-200 transition-colors"
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">8월 정기 점검 안내</p>
                <p className="text-xs text-gray-500">공지사항 2025.08.01</p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
