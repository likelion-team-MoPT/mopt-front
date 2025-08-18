import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common';
import iconSvg from '../assets/icon.svg';

const NotificationSettings: React.FC = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    marketing: false,
    aiInsights: false,
    weeklyReports: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
          <h1 className="text-lg font-semibold text-gray-900">알림 설정</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>

        {/* Notification Settings */}
        <div className="mt-6 px-4">
          <div className="bg-white rounded-xl p-4">
            {/* Marketing Notifications */}
            <div className="flex items-center justify-between py-4 border-b border-gray-100">
              <div>
                <h3 className="text-base font-medium text-gray-900">마케팅 정보 알림 수신 여부</h3>
                <p className="text-sm text-gray-500 mt-1">
                  이벤트, 혜택, 신규 기능 등 다양한 소식을 받
                  <br />
                  아볼 수 있어요.
                </p>
              </div>
              <button
                onClick={() => handleToggle('marketing')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                  settings.marketing ? 'bg-yellow-400' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.marketing ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* AI Insights */}
            <div className="flex items-center justify-between py-4 border-b border-gray-100">
              <div>
                <h3 className="text-base font-medium text-gray-900">AI 인사이트 생성 알림</h3>
                <p className="text-sm text-gray-500 mt-1">
                  새로운 AI 인사이트가 도출되면 알려드려요.
                </p>
              </div>
              <button
                onClick={() => handleToggle('aiInsights')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                  settings.aiInsights ? 'bg-yellow-400' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.aiInsights ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Weekly Reports */}
            <div className="flex items-center justify-between py-4">
              <div>
                <h3 className="text-base font-medium text-gray-900">주간 리포트 알림</h3>
                <p className="text-sm text-gray-500 mt-1">
                  캠페인 성과 리포트를 매주 받아볼 수 있어
                  <br />
                  요.
                </p>
              </div>
              <button
                onClick={() => handleToggle('weeklyReports')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                  settings.weeklyReports ? 'bg-yellow-400' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.weeklyReports ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotificationSettings;
