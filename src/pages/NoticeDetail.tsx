import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout, Header, Loading } from '../components/common';
import { useNoticeDetail } from '../hooks/useApi';
import { useUserStore, TEMP_USER_ID } from '../store/userStore';

const NoticeDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { user } = useUserStore();

  // API 호출
  const {
    data: notice,
    isLoading,
    error,
  } = useNoticeDetail(user?.id || TEMP_USER_ID, id || '');

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date
        .toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/\./g, '.')
        .replace(/\s/g, '');
    } catch {
      return dateString;
    }
  };

  if (isLoading) {
    return (
      <Layout showBottomTab={false}>
        <Header title="공지사항" />
        <Loading text="공지사항을 불러오는 중..." />
      </Layout>
    );
  }

  if (error || !notice) {
    return (
      <Layout showBottomTab={false}>
        <Header title="공지사항" />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              공지사항을 찾을 수 없습니다
            </h2>
            <p className="text-gray-600 mb-4">
              요청하신 공지사항이 존재하지 않거나 삭제되었습니다.
            </p>
            <button
              onClick={() => navigate('/notices')}
              className="bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              공지사항 목록으로 돌아가기
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header title="공지사항" backgroundColor="bg-zinc-50" />

        {/* Content */}
        <div className="px-4 py-6">
          {/* Title Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex-1">
                {notice.title}
              </h2>
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">공지일</span>
              <span>{formatDate(notice.created_at)}</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="prose prose-sm max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {notice.content}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <button
              onClick={() => navigate('/notices')}
              className="w-full py-3 px-4 bg-yellow-400 text-white font-medium rounded-lg hover:bg-yellow-500 transition-colors"
            >
              공지사항 목록으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NoticeDetail;
