import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common';
import iconSvg from '../assets/icon.svg';

const Payment: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 bg-white">
          <button 
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">구독</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>

        {/* Current Plan */}
        <div className="mt-6 px-4">
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-4 rounded-xl mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">베이직 플랜</h2>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold text-gray-900">₩19,900</span>
              <span className="text-gray-600">/ 월</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">다음 결제일 · 8월 15일</p>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg font-medium">
              플랜 변경
            </button>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">결제 수단</h3>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-6 bg-yellow-400 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">CARD</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">신한카드</p>
                    <p className="text-sm text-gray-500">**** **** **** 1234</p>
                  </div>
                </div>
                <button className="px-3 py-1 border border-yellow-400 text-yellow-600 rounded-lg text-sm">
                  변경하기
                </button>
              </div>
              
              <button className="w-full py-3 border-2 border-dashed border-yellow-300 rounded-xl text-yellow-600 font-medium flex items-center justify-center gap-2">
                <span className="text-xl">+</span>
                새 결제 수단
              </button>
            </div>
          </div>

          {/* Payment History */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 결제 내역</h3>
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">베이직 플랜 월간 구독</p>
                    <p className="text-sm text-gray-500">2024년 7월 15일</p>
                  </div>
                  <p className="font-semibold text-gray-900">₩19,900</p>
                </div>
              </div>
              
              <div className="p-4 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">베이직 플랜 월간 구독</p>
                    <p className="text-sm text-gray-500">2024년 6월 15일</p>
                  </div>
                  <p className="font-semibold text-gray-900">₩19,900</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">베이직 플랜 월간 구독</p>
                    <p className="text-sm text-gray-500">2024년 5월 15일</p>
                  </div>
                  <p className="font-semibold text-gray-900">₩19,900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
