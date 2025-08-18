import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common';
import iconSvg from '../assets/icon.svg';
import profileSvg from '../assets/profile.svg';

const Profile: React.FC = () => {
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

        {/* User Profile Section */}
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 mx-4 mt-6 p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <img src={profileSvg} alt="Profile" className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">안녕하세요</p>
                <p className="text-lg font-semibold text-gray-900">소라식당</p>
              </div>
            </div>
            <button 
              className="p-2"
              onClick={() => navigate('/business-info')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Settings Section */}
        <div className="mt-8 px-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">계정</h2>
          
          <div className="bg-white rounded-xl overflow-hidden">
            <button 
              className="flex items-center justify-between p-4 border-b border-gray-100 w-full"
              onClick={() => navigate('/connected-accounts')}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">연결된 계정</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              className="flex items-center justify-between p-4 border-b border-gray-100 w-full"
              onClick={() => navigate('/notification-settings')}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">알림 설정</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              className="flex items-center justify-between p-4 w-full"
              onClick={() => navigate('/payment')}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#EAB308" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="#EAB308" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="#EAB308" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">결제 및 구독</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 px-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">도움말 및 정보</h2>
          
          <div className="bg-white rounded-xl overflow-hidden">
            <button 
              className="flex items-center justify-between p-4 border-b border-gray-100 w-full"
              onClick={() => navigate('/notices')}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-600 text-sm">📢</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-medium">공지사항</span>
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">N</span>
                  </div>
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              className="flex items-center justify-between p-4 border-b border-gray-100 w-full"
              onClick={() => {/* TODO: Navigate to customer service */}}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-600 text-sm">❓</span>
                </div>
                <span className="text-gray-900 font-medium">고객센터</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              className="flex items-center justify-between p-4 w-full"
              onClick={() => navigate('/terms')}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-600 text-sm">📋</span>
                </div>
                <span className="text-gray-900 font-medium">이용약관 및 개인정보처리방침</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8 px-4 pb-8">
          <button className="w-full py-3 border border-yellow-400 rounded-xl text-yellow-600 font-medium">
            로그아웃
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
