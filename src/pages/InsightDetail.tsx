// src/pages/InsightDetail.tsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../components/common';
import iconSvg from '../assets/icon.svg';
import backIcon from '../assets/back.svg';

const InsightDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  return (
    <Layout showBottomTab={false}>
      {/* Header */}
      <div className="flex items-center justify-between px-7 py-4 sticky top-0 z-10 border-b border-gray-100">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center w-8 h-8">
            <img src={backIcon} alt="뒤로 가기" className="w-6 h-6" />
          </button>
          
          <h1 className="text-lg font-semibold text-gray-900">AI 인사이트</h1>
          
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-8 h-8" />
          </div>
      </div>

      {/* Body */}
      <div className="min-h-screen bg-gray-50">
        <div className="p-7 space-y-6">
          {/* 상단 */}
          <section className="space-y-2">
          </section>

          {/* 제목*/}
          <section className="space-y-2">
            <h2 className=" text-xl font-bold text-[#121212]">아직 하는 중...
              주말 점심 할인 캠페인 제안</h2>

          </section>

          {/* 사유*/}
          <section className="rounded-2xl bg-white p-4 shadow-[0_1px_3px_0_rgba(18,18,18,0.08)] space-y-2">
            <div className="flex items-center gap-2">
              <span role="img" aria-label="icon" className="text-xl">📈</span>
              <p className="font-semibold text-gray-900">매출 데이터</p>
            </div>
            <p className="text-sm text-gray-600">
              최근 3주간 점심 시간대 매출이 평균 대비 18% 상승하였습니다.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default InsightDetail;
