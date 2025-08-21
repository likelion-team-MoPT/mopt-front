import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Loading, ErrorMessage, EmptyState } from '../components/common';
import { useUserIntegrations, useDisconnectUserIntegration } from '../hooks/useApi';
import { useUserStore, TEMP_USER_ID } from '../store/userStore';
import iconSvg from '../assets/icon.svg';
import facebookSvg from '../assets/Facebook.svg';
import instagramSvg from '../assets/instagram.svg';

const ConnectedAccounts: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  
  // API 호출
  const { data: integrations, isLoading, error, refetch } = useUserIntegrations(user?.id || TEMP_USER_ID);
  const disconnectMutation = useDisconnectUserIntegration();

  const handleDisconnect = async (integrationId: string) => {
    if (window.confirm('이 계정의 연결을 해제하시겠습니까?')) {
      try {
        await disconnectMutation.mutateAsync({
          userId: user?.id || TEMP_USER_ID,
          integrationId
        });
        refetch();
      } catch (error) {
        console.error('연결 해제 실패:', error);
        alert('연결 해제에 실패했습니다. 다시 시도해주세요.');
      }
    }
  };

  const getPlatformIcon = (platform: string) => {
    const platformLower = platform.toLowerCase();
    if (platformLower.includes('facebook')) return facebookSvg;
    if (platformLower.includes('instagram')) return instagramSvg;
    return facebookSvg; // 기본값
  };

  const getPlatformName = (platform: string) => {
    const platformLower = platform.toLowerCase();
    if (platformLower.includes('facebook')) return 'Facebook';
    if (platformLower.includes('instagram')) return 'Instagram';
    return platform;
  };

  if (isLoading) {
    return (
      <Layout showBottomTab={false}>
        <div className="flex justify-between items-center px-4 py-3 bg-white">
          <button 
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">연결된 계정</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>
        <Loading text="연결된 계정 정보를 불러오는 중..." />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout showBottomTab={false}>
        <div className="flex justify-between items-center px-4 py-3 bg-white">
          <button 
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">연결된 계정</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>
        <ErrorMessage
          title="데이터 로드 실패"
          message="연결된 계정 정보를 불러오는 데 실패했습니다."
          onRetry={() => refetch()}
        />
      </Layout>
    );
  }

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
          <h1 className="text-lg font-semibold text-gray-900">연결된 계정</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>

        {/* Connected Accounts Section */}
        <div className="mt-6 px-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">연결된 계정</h2>
          
          <div className="space-y-4">
            {integrations?.data && integrations.data.length > 0 ? (
              integrations.data.map((integration: any) => (
                <div key={integration.id} className="bg-white rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={getPlatformIcon(integration.platform)} 
                        alt={getPlatformName(integration.platform)} 
                        className="w-10 h-10" 
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        {getPlatformName(integration.platform)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {integration.account_name || integration.username || '연결된 계정'}
                      </p>
                      {integration.connected_at && (
                        <p className="text-xs text-gray-400">
                          연결일: {new Date(integration.connected_at).toLocaleDateString('ko-KR')}
                        </p>
                      )}
                    </div>
                  </div>
                  <button 
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handleDisconnect(integration.id)}
                    disabled={disconnectMutation.isPending}
                  >
                    {disconnectMutation.isPending ? '해제 중...' : '연결 해제'}
                  </button>
                </div>
              ))
            ) : (
              <EmptyState
                title="연결된 계정이 없습니다"
                message="새 계정을 연결하여 광고 성과를 분석해보세요."
                action={{
                  label: "새 계정 연결하기",
                  onClick: () => navigate('/connect-services')
                }}
              />
            )}
          </div>

          {/* Add New Account Button */}
          {integrations?.data && integrations.data.length > 0 && (
            <div className="mt-6">
              <button 
                className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-medium flex items-center justify-center gap-2 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
                onClick={() => navigate('/connect-services')}
              >
                <span className="text-xl">+</span>
                새 계정 연결하기
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ConnectedAccounts;
