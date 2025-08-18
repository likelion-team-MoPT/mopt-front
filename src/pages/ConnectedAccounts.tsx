import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common';
import iconSvg from '../assets/icon.svg';
import facebookSvg from '../assets/Facebook.svg';
import instagramSvg from '../assets/instagram.svg';

const ConnectedAccounts: React.FC = () => {
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
          <h1 className="text-lg font-semibold text-gray-900">나의 정보</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>

        {/* Connected Accounts Section */}
        <div className="mt-6 px-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">연결된 계정</h2>
          
          <div className="space-y-4">
            {/* Facebook Account */}
            <div className="bg-white rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={facebookSvg} alt="Facebook" className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">Facebook</p>
                  <p className="text-sm text-gray-500">지윤 윤(Ji-Yoon Jung)</p>
                </div>
              </div>
              <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                연결 해제
              </button>
            </div>

            {/* Instagram Account */}
            <div className="bg-white rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={instagramSvg} alt="Instagram" className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">Instagram</p>
                  <p className="text-sm text-gray-500">@jiyoon.marketer</p>
                </div>
              </div>
              <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                연결 해제
              </button>
            </div>
          </div>

          {/* Add New Account Button */}
          <div className="mt-6">
            <button 
              className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-medium flex items-center justify-center gap-2 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
              onClick={() => navigate('/connect-services')}
            >
              <span className="text-xl">+</span>
              새 계정 연결하기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConnectedAccounts;
