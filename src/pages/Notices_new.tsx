import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Loading, ErrorMessage, EmptyState } from '../components/common';
import { useUserNotices } from '../hooks/useApi';
import { useUserStore, TEMP_USER_ID } from '../store/userStore';
import iconSvg from '../assets/icon.svg';
import noticeIconSvg from '../assets/NoticeIcon.svg';

const Notices: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  // API 호출
  const { data: noticesData, isLoading, error } = useUserNotices(user?.id || TEMP_USER_ID, 1, 20);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\./g, '.').replace(/\s/g, '');
    } catch {
      return dateString;
    }
  };

  const isNewNotice = (dateString: string) => {
    try {
      const noticeDate = new Date(dateString);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - noticeDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7; // 7일 이내면 새 공지
    } catch {
      return false;
    }
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
          <h1 className="text-lg font-semibold text-gray-900">공지사항</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>
        <Loading text="공지사항을 불러오는 중..." />
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
          <h1 className="text-lg font-semibold text-gray-900">공지사항</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>
        <ErrorMessage
          title="데이터 로드 실패"
          message="공지사항을 불러오는 데 실패했습니다."
          onRetry={() => window.location.reload()}
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
          <h1 className="text-lg font-semibold text-gray-900">공지사항</h1>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-6 h-6" />
          </div>
        </div>

        {/* Notice List */}
        <div className="px-4 py-6">
          {noticesData?.data && noticesData.data.length > 0 ? (
            <div className="space-y-3">
              {noticesData.data.map((notice: any) => (
                <div
                  key={notice.id}
                  className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => navigate(`/notices/${notice.id}`)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <img src={noticeIconSvg} alt="Notice" className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-gray-900 truncate">
                          {notice.title}
                        </h3>
                        {isNewNotice(notice.created_at) && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            NEW
                          </span>
                        )}
                        {notice.is_important && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            중요
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                          {formatDate(notice.created_at)}
                        </p>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      
                      {notice.content && (
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {notice.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="공지사항이 없습니다"
              message="등록된 공지사항이 없습니다."
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Notices;
