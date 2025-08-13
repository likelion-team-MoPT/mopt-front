import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Button from '../components/common/Button';
import type { ConnectData } from '../types';
import IconSvg from '../assets/icon.svg';

interface ConnectServicesProps {
  showModal?: boolean;
}

const ConnectServices: React.FC<ConnectServicesProps> = ({ showModal = false }) => {
  const navigate = useNavigate();
  const [connections, setConnections] = useState<ConnectData>({
    posConnected: false,
    facebookConnected: false,
    instagramConnected: false,
  });
  const [showPermissionModal, setShowPermissionModal] = useState(false);

  const handleConnectionToggle = (service: keyof ConnectData) => {
    // POS 연결은 바로 완료로 변경
    setConnections(prev => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  const handlePermissionAccept = () => {
    setConnections(prev => ({ ...prev, posConnected: true }));
    setShowPermissionModal(false);
  };

  const handlePermissionDecline = () => {
    setShowPermissionModal(false);
    navigate('/analyzing');
  };

  const handleNext = () => {
    navigate('/analyzing');
  };

  const handleSkip = () => {
    setShowPermissionModal(true);
  };

  return (
    <Layout showBottomTab={false} className={showPermissionModal ? 'relative' : ''}>
      {showPermissionModal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <div className="text-center mb-6">
              <div className="text-2xl mb-2">😊</div>
              <h3 className="text-lg font-bold mb-2">아쉬워요</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                데이터 연동 없이도 서비스를<br />
                이용할 수 있지만, 정확한 분석을 위해<br />
                언제든 '마이페이지'에서 연동해주세요.
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handlePermissionDecline}
                className="flex-1 h-12 rounded-xl border border-gray-300 text-gray-600 font-medium"
              >
                확인
              </button>
              <button
                onClick={handlePermissionAccept}
                className="flex-1 h-12 rounded-xl bg-yellow-400 text-black font-medium"
              >
                연동하기
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 px-6 pt-4">
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm text-gray-500">3 / 3</span>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={IconSvg} alt="icon" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4 text-black">
            모피티에 비즈니스를<br />
            연결하세요.
          </h1>
          <p className="text-base text-gray-600">
            데이터를 연결하면 마케팅 성공확률이 높아져요.
          </p>
        </div>

        <div className="flex-1">
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 text-black">실제 매출 및 트렌드 분석</h3>
            <p className="text-sm text-gray-600 mb-4">
              • 실제 매출을 분석하여 사장님만의 맞춤 전략을 찾아드려요.
            </p>

            {/* POS 연결 */}
            <div className="bg-yellow-50 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-black mb-1">POS 매출 데이터 연결</h4>
                  {connections.posConnected && (
                    <p className="text-xs text-orange-600">데이터 업로드 예정이에요!</p>
                  )}
                </div>
                <button
                  onClick={() => handleConnectionToggle('posConnected')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm ${
                    connections.posConnected
                      ? 'bg-yellow-400 text-black'
                      : 'border border-yellow-400 text-yellow-600'
                  }`}
                >
                  {connections.posConnected ? '완료 ✓' : '연결하기'}
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-4">
              • SNS 트렌드를 분석하여 점포 고객의 관심사를 알려드려요.
            </p>

            {/* Facebook 연결 */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="font-medium">페이스북 페이지 계정</span>
              </div>
              <button
                onClick={() => handleConnectionToggle('facebookConnected')}
                className={`px-4 py-2 rounded-lg font-medium text-sm ${
                  connections.facebookConnected
                    ? 'bg-yellow-400 text-black'
                    : 'border border-yellow-400 text-yellow-600'
                }`}
              >
                {connections.facebookConnected ? '완료 ✓' : '연결하기'}
              </button>
            </div>

            {/* Instagram 연결 */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="font-medium">인스타그램 비즈니스 계정</span>
              </div>
              <button
                onClick={() => handleConnectionToggle('instagramConnected')}
                className={`px-4 py-2 rounded-lg font-medium text-sm ${
                  connections.instagramConnected
                    ? 'bg-yellow-400 text-black'
                    : 'border border-yellow-400 text-yellow-600'
                }`}
              >
                {connections.instagramConnected ? '완료 ✓' : '연결하기'}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-3 pb-8">
          <Button onClick={handleNext}>
            분석 시작하기
          </Button>
          <button
            onClick={handleSkip}
            className="w-full text-gray-500 text-base py-2"
          >
            나중에 할래요
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ConnectServices;
