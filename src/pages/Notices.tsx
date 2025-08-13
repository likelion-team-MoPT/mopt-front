import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common';

interface NoticeItem {
  id: string;
  title: string;
  date: string;
  isNew?: boolean;
  isImportant?: boolean;
}

const Notices: React.FC = () => {
  const navigate = useNavigate();

  const notices: NoticeItem[] = [
    {
      id: '1',
      title: '8월 정기 점검 안내',
      date: '2025.08.01',
      isNew: true,
      isImportant: true
    },
    {
      id: '2',
      title: '서비스 기능 업데이트 안내',
      date: '2025.07.25',
      isImportant: true
    },
    {
      id: '3',
      title: '개인정보처리방침 개정 사전 안내',
      date: '2025.07.15'
    },
    {
      id: '4',
      title: '7월 정기 점검 안내',
      date: '2025.07.01'
    },
    {
      id: '5',
      title: '6월 정기 점검 안내',
      date: '2025.06.01',
      isImportant: true
    },
    {
      id: '6',
      title: '5월 정기 점검 안내',
      date: '2025.05.01'
    }
  ];

  const latestNotice = notices.find(notice => notice.isNew);
  const regularNotices = notices.filter(notice => !notice.isNew);

  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 bg-white">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-8 h-8"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <h1 className="text-lg font-semibold text-gray-900">공지사항</h1>
          
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center shadow-sm">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
        </div>

        {/* Notice Count */}
        <div className="px-4 py-3 bg-white border-b border-gray-100">
          <p className="text-sm text-gray-600">총 {notices.length}건</p>
        </div>

        <div className="px-4 py-4 space-y-4">
          {/* Latest Notice Section */}
          {latestNotice && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">최신 공지사항</h2>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">N</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <p className="text-sm font-medium text-gray-900">{latestNotice.title}</p>
                    </div>
                    <p className="text-xs text-gray-500">공지사항 {latestNotice.date}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Regular Notices Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">공지사항</h2>
            <div className="space-y-3">
              {regularNotices.map((notice) => (
                <div key={notice.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <div className="flex items-center flex-1">
                      {notice.isImportant && (
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 mb-1">{notice.title}</p>
                        <p className="text-xs text-gray-500">{notice.date}</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notices;
