import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, FeatureIcon } from '../components/common';
import iconSvg from '../assets/icon.svg';
import mobilePng from '../assets/mobile.png';
import sliceSvg from '../assets/Slice.svg';
import fantasySvg from '../assets/Fantasy.svg';
import webadSvg from '../assets/webad.svg';
import top5Svg from '../assets/top5.svg';
import writingBroSvg from '../assets/writing-bro.svg';
import facebookSvg from '../assets/Facebook.svg';
import instagramSvg from '../assets/instagram.svg';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 bg-white">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-8 h-8" />
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.2569 21.1875C21.5911 18.3077 19.0241 16.2427 16.0283 15.2637C19.0741 13.4505 20.5332 9.82578 19.5929 6.40805C18.6526 2.99031 15.5447 0.622024 12 0.622024C8.45528 0.622024 5.34742 2.99031 4.40712 6.40805C3.46682 9.82578 4.92586 13.4505 7.97172 15.2637C4.97594 16.2416 2.40891 18.3066 0.743125 21.1875C0.576821 21.4587 0.570782 21.7987 0.727353 22.0756C0.883924 22.3525 1.17844 22.5226 1.49653 22.5199C1.81462 22.5172 2.10617 22.342 2.25797 22.0625C4.31859 18.5012 7.96078 16.375 12 16.375C16.0392 16.375 19.6814 18.5012 21.742 22.0625C21.8938 22.342 22.1854 22.5172 22.5035 22.5199C22.8216 22.5226 23.1161 22.3525 23.2726 22.0756C23.4292 21.7987 23.4232 21.4587 23.2569 21.1875ZM5.875 8.5C5.875 5.11726 8.61726 2.375 12 2.375C15.3827 2.375 18.125 5.11726 18.125 8.5C18.125 11.8827 15.3827 14.625 12 14.625C8.61875 14.6214 5.87862 11.8812 5.875 8.5Z"
                fill="#637387"
              />
            </svg>
          </div>
        </div>

        {/* Main Banner */}
        <div className="px-7 py-6 bg-gradient-to-r from-yellow-50 via-yellow-50 to-orange-50 relative overflow-hidden">
          <div className="relative z-10">
            <div className="justify-start text-neutral-900 text-3xl font-bold font-['Pretendard'] leading-10">
              이제 마케팅은
              <br />
              모피티에게 맡기세요.
            </div>
            <p className="text-sm text-neutral-900 py-1">
              가장 효과적인 AI 마케팅 솔루션
            </p>
            <div className="flex items-center gap-10 lg:justify-between">
              <button className="h-10 px-6 bg-yellow-400 rounded-[200px] shadow-[0px_4px_8px_0px_rgba(18,18,18,0.12)] flex items-center justify-center hover:bg-yellow-500 transition-colors flex-shrink-0">
                <span className="text-white text-base font-['Pretendard'] whitespace-nowrap">
                  내 매출 확인하기
                </span>
              </button>

              {/* Mobile Image */}
              <div className="flex-shrink-0">
                <img
                  src={mobilePng}
                  alt="Mobile"
                  className="w-[133px] h-[133px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-around py-6 px-4 relative">
          <FeatureIcon
            image={sliceSvg}
            label="리포트"
            onClick={() => navigate('/analytics')}
          />
          <FeatureIcon image={fantasySvg} label="AI 인사이트" />
          <FeatureIcon image={webadSvg} label="캠페인" />
        </div>

        {/* Monthly Sales */}
        <div className="px-4 py-6">
          <div className="px-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold text-gray-900">
                주간 매출 동향
              </h2>
              <span className="text-xs text-gray-500">더보기 &gt;</span>
            </div>
            <p className="text-xs text-gray-500 mb-3">최근 7일간의 매출</p>
            <div className="flex items-end mb-2">
              <span className="text-2xl font-bold text-gray-900">₩12,345</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm">
                <span className="text-gray-500">이번 주 </span>
                <span className="text-blue-600">+12%</span>
              </span>
              <div className="ml-2 h-8 flex-1 bg-gray-100 rounded relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-yellow-400 rounded"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <section className="px-4 py-6">
          <div className="p-4">
            <header className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-gray-900">
                AI 인사이트
              </h3>
              <span className="text-xs text-gray-500">더보기 &gt;</span>
            </header>

            <p className="flex items-baseline text-md text-gray-900 py-2">
              <span>새로운 AI 추천 전략 </span>
              <span className="ml-1 rounded-full bg-yellow-50 px-2 py-0.5 text-base font-semibold text-red-400">
                3건
              </span>
            </p>

            <div className="size- px-4 py-0.5 bg-yellow-400 rounded-[200px] inline-flex justify-center items-center gap-2 overflow-hidden">
              <div className="text-center justify-start text-white text-[10px] font-medium font-['Pretendard'] leading-3 tracking-tight">
                미리보기
              </div>
            </div>

            <div className="w-full p-4 bg-yellow-50 rounded-xl shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <div className="text-neutral-500 text-[10px] font-medium leading-3 tracking-tight">
                    생성일
                  </div>
                  <div className="flex-1 text-neutral-500 text-[10px] font-medium leading-3 tracking-tight">
                    2025.08.01.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-neutral-500 text-sm font-normal leading-snug">
                    �
                  </div>
                  <div className="flex-1 flex items-center gap-1">
                    <div className="flex-1 text-neutral-900 text-base font-semibold leading-normal">
                      주말 점심 할인 캠페인 제안
                    </div>
                    <div className="px-1 py-px bg-red-400 rounded-[200px] flex justify-center items-center">
                      <div className="text-yellow-50 text-[10px] font-medium leading-3 tracking-tight">
                        N
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <div className="text-neutral-500 text-[10px] font-medium leading-3 tracking-tight">
                    생성일
                  </div>
                  <div className="flex-1 text-neutral-500 text-[10px] font-medium leading-3 tracking-tight">
                    2025.07.30.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-neutral-500 text-sm font-normal leading-snug">
                    �
                  </div>
                  <div className="flex-1 flex items-center gap-1">
                    <div className="flex-1 text-neutral-900 text-base font-semibold leading-normal">
                      SNS 광고 예산 확대 필요
                    </div>
                    <div className="px-1 py-px bg-red-400 rounded-[200px] flex justify-center items-center">
                      <div className="text-yellow-50 text-[10px] font-medium leading-3 tracking-tight">
                        N
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <div className="text-neutral-500 text-[10px] font-medium leading-3 tracking-tight">
                    생성일
                  </div>
                  <div className="flex-1 text-neutral-500 text-[10px] font-medium leading-3 tracking-tight">
                    2025.08.05.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-neutral-500 text-xs font-normal leading-none">
                    🥐
                  </div>
                  <div className="flex-1 flex items-center gap-1">
                    <div className="flex-1 text-neutral-900 text-base font-semibold leading-normal">
                      브런치 세트 프로모션 제안
                    </div>
                    <div className="px-1 py-px bg-red-400 rounded-[200px] flex justify-center items-center">
                      <div className="text-yellow-50 text-[10px] font-medium leading-3 tracking-tight">
                        N
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trend Keywords */}
        <div className="px-4 py-6">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                상권 트렌드 키워드
              </h2>
              <img src={top5Svg} alt="Top 5" className="w-15 h-15" />
            </div>
            <div className="self-stretch inline-flex flex-col justify-start items-start gap-2">
              <div className="w-full inline-flex justify-between items-center">
                <div className="px-4 py-1.5 bg-orange-100 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] flex justify-center items-center gap-2 overflow-hidden">
                  <div className="text-center justify-start text-yellow-500 text-xs font-medium font-['Pretendard'] leading-none">
                    #피크닉 도시락
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-orange-100 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] flex justify-center items-center gap-2 overflow-hidden">
                  <div className="text-center justify-start text-yellow-500 text-xs font-medium font-['Pretendard'] leading-none">
                    #혼밥 맛집
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-orange-100 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] flex justify-center items-center gap-2 overflow-hidden">
                  <div className="text-center justify-start text-yellow-500 text-xs font-medium font-['Pretendard'] leading-none">
                    #SNS 인기 메뉴
                  </div>
                </div>
              </div>
              <div className="w-full inline-flex justify-center items-center gap-6">
                <div className="px-4 py-1.5 bg-orange-100 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] flex justify-center items-center gap-2 overflow-hidden">
                  <div className="text-center justify-start text-yellow-500 text-xs font-medium font-['Pretendard'] leading-none">
                    #여름 음료
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-orange-100 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] flex justify-center items-center gap-2 overflow-hidden">
                  <div className="text-center justify-start text-yellow-500 text-xs font-medium font-['Pretendard'] leading-none">
                    #가성비 식당
                  </div>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex justify-center py-4">
              <div className="rounded-lg flex items-center justify-center">
                <img
                  src={writingBroSvg}
                  alt="Writing illustration"
                  className="w-72 h-auto object-contain"
                />
              </div>
            </div>

            <div className="text-center">
              <select className="w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-600">
                <option>조회할 상권을 선택해주세요</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Campaigns */}
        <div className="px-4 py-6">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                진행 중인 캠페인
              </h2>
              <span className="text-sm text-gray-500">더보기 &gt;</span>
            </div>

            <p className="flex items-baseline text-md text-gray-900 py-2">
              <span>현재 진행 중</span>
              <span className="ml-1 rounded-full bg-yellow-50 px-2 py-0.5 text-base font-semibold text-red-400">
                2건
              </span>
            </p>

            <div className="space-y-3">
              <div className="w-80 h-[92px] p-4 bg-gradient-to-r from-yellow-400 to-amber-200/90 rounded-xl shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] relative">
                <div>
                  <div className="text-neutral-900 text-base font-semibold">
                    점심 세트 프로모션
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-0.5 bg-yellow-50 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] flex justify-center items-center">
                      <div className="text-center text-yellow-400 text-[10px] font-medium font-['Pretendard'] leading-3 tracking-tight">
                        ROAS
                      </div>
                    </div>
                    <div className="text-white text-[28px] font-bold">328%</div>
                  </div>
                </div>
                <img
                  src={instagramSvg}
                  alt="Instagram"
                  className="w-8 h-8 absolute bottom-4 right-4"
                />
              </div>

              <div className="w-80 h-[92px] p-4 bg-gradient-to-r from-yellow-400 to-amber-200/90 rounded-xl shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] relative">
                <div>
                  <div className="text-neutral-900 text-base font-semibold">
                    신메뉴 런칭 이벤트
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-0.5 bg-yellow-50 rounded-[200px] shadow-[0px_1px_3px_0px_rgba(18,18,18,0.08)] flex justify-center items-center">
                      <div className="text-center text-yellow-400 text-[10px] font-medium font-['Pretendard'] leading-3 tracking-tight">
                        ROAS
                      </div>
                    </div>
                    <div className="text-white text-[28px] font-bold">328%</div>
                  </div>
                </div>
                <img
                  src={facebookSvg}
                  alt="Facebook"
                  className="w-8 h-8 absolute bottom-4 right-4"
                />
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
                <p className="text-sm font-medium text-gray-900">
                  8월 정기 점검 안내
                </p>
                <p className="text-xs text-gray-500">공지사항 2025.08.01</p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
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
