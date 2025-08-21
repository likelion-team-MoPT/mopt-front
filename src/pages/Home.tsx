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
import profileSvg from '../assets/profile.svg';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-8 h-8" />
          </div>
          <div 
            className="w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => navigate('/profile')}
          >
            <img src={profileSvg} alt="Profile" className="w-5 h-5" />
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
          <FeatureIcon image={fantasySvg} label="AI 인사이트" onClick = {() => navigate('/insight')} />
          <FeatureIcon
            image={webadSvg}
            label="캠페인"
            onClick={() => navigate('/campaigns')}
          />
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
                  src={facebookSvg}
                  alt="Facebook"
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
                    <div className="text-white text-[28px] font-bold">145%</div>
                  </div>
                </div>
                <img
                  src={instagramSvg}
                  alt="Instagram"
                  className="w-8 h-8 absolute bottom-4 right-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Announcements */}
        <div className="px-4 py-6">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">공지사항</h2>
              <span className="text-sm text-gray-500">더보기 &gt;</span>
            </div>

            <p className="flex items-baseline text-md text-gray-900 py-2">
              <span>최신 공지사항</span>
              <span className="ml-1 rounded-full bg-yellow-50 px-2 py-0.5 text-base font-semibold text-red-400">
                1건
              </span>
            </p>

            <button
              // 실제로는 useNavigate를 사용해 상세 페이지로 이동시킵니다.
              // onClick={() => navigate('/notices/1')}
              className="flex w-full items-center gap-4 rounded-xl bg-yellow-50 p-4 text-left shadow-sm transition-colors hover:bg-yellow-100"
            >
              {/* 왼쪽 아이콘 */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400">
                {/* 아이콘 SVG 코드 */}
                <svg
                  className="h-6 w-6 text-white"
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5 9.03418C20.4974 6.54997 18.4842 4.53676 16 4.53418H12.2688C11.9959 4.51824 7.24187 4.18355 2.71469 0.38668C2.26836 0.0118277 1.64529 -0.0705311 1.11689 0.175479C0.588491 0.421489 0.250443 0.95132 0.25 1.53418V16.5342C0.250079 17.1172 0.58799 17.6474 1.11646 17.8936C1.64494 18.1399 2.26823 18.0576 2.71469 17.6826C6.25562 14.7126 9.93344 13.8614 11.5 13.6232V16.597C11.4994 17.099 11.7499 17.5681 12.1675 17.8467L13.1987 18.5339C13.6032 18.8038 14.1134 18.861 14.5676 18.6872C15.0217 18.5134 15.3635 18.1302 15.4844 17.6592L16.5878 13.5004C18.8269 13.2025 20.4995 11.293 20.5 9.03418ZM1.75 16.5276V1.53418C5.76344 4.90074 9.87156 5.75293 11.5 5.96293V12.1017C9.87344 12.3154 5.76625 13.1657 1.75 16.5276ZM14.0312 17.2776V17.2879L13 16.6007V13.5342H15.025L14.0312 17.2776ZM16 12.0342H13V6.03418H16C17.6569 6.03418 19 7.37733 19 9.03418C19 10.691 17.6569 12.0342 16 12.0342Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* 중간 텍스트 영역 */}
              <div className="flex-1">
                <p className="text-[10px] text-gray-500">공지일 2025.08.01.</p>
                <div className="flex items-center gap-1">
                  <span className="rounded-full bg-red-400 px-1 py-px text-[10px] font-medium text-yellow-50">
                    N
                  </span>
                  <p className="text-base font-semibold text-gray-900">
                    8월 정기 점검 안내
                  </p>
                </div>
              </div>

              {/* 오른쪽 화살표 아이콘 */}
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.4501 9.78379L6.5251 6.85879C6.3876 6.72129 6.31885 6.54629 6.31885 6.33379C6.31885 6.12129 6.3876 5.94629 6.5251 5.80879C6.6626 5.67129 6.8376 5.60254 7.0501 5.60254C7.2626 5.60254 7.4376 5.67129 7.5751 5.80879L11.0251 9.25879C11.1001 9.33379 11.1532 9.41504 11.1845 9.50254C11.2157 9.59004 11.2313 9.68379 11.2313 9.78379C11.2313 9.88379 11.2157 9.97754 11.1845 10.065C11.1532 10.1525 11.1001 10.2338 11.0251 10.3088L7.5751 13.7588C7.4376 13.8963 7.2626 13.965 7.0501 13.965C6.8376 13.965 6.6626 13.8963 6.5251 13.7588C6.3876 13.6213 6.31885 13.4463 6.31885 13.2338C6.31885 13.0213 6.3876 12.8463 6.5251 12.7088L9.4501 9.78379Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
