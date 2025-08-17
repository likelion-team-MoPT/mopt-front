import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../components/common';
import iconSvg from '../assets/icon.svg';

interface NoticeDetail {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  isNew?: boolean;
}

const NoticeDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // 공지사항 데이터 (실제로는 API에서 가져올 데이터)
  const noticeDetails: { [key: string]: NoticeDetail } = {
    '1': {
      id: '1',
      title: '8월 정기 점검 안내',
      date: '2025.08.01',
      category: '공지일',
      content: `안녕하세요,

8월 10일 새벽 1시부터 3시까지 시스템 정기 점검이 예정되어 있습니다.

• 점검 일시 : 2025년 8월 10일 (토) 새벽 1시 ~ 3시
• 점검 내용 : 시스템 안정화 개선을 위한 정기 점검
• 영향 범위 : 점검 시간 동안 일부 서비스 이용이 제한될 수 있습니다.

보다 안정적이고 편리한 서비스를 제공해드리기 위한 발소 점검이오니, 이용에 불편을 드리는 점검이 양해 부탁드리며,

서비스 이용에 참고 부탁드립니다.

항상 저희 서비스를 이용해 주셔서 감사합니다.
앞으로도 더 나은 환경을 제공할 수 있도록 노력하겠습니다.

감사합니다.`,
      isNew: true,
    },
    '2': {
      id: '2',
      title: '서비스 기능 업데이트 안내',
      date: '2025.07.25',
      category: '공지일',
      content: `안녕하세요,

새로운 기능 업데이트를 안내드립니다.

• 업데이트 일시 : 2025년 7월 25일
• 주요 업데이트 내용 :
  - AI 인사이트 기능 개선
  - 캠페인 분석 성능 향상
  - 사용자 인터페이스 개선

더 나은 서비스를 제공하기 위해 지속적으로 개선해나가겠습니다.

감사합니다.`,
    },
    '3': {
      id: '3',
      title: '개인정보처리방침 개정 사전 안내',
      date: '2025.07.15',
      category: '공지일',
      content: `안녕하세요,

개인정보처리방침 개정에 대해 안내드립니다.

• 시행일 : 2025년 8월 1일
• 주요 변경사항 :
  - 개인정보 수집 및 이용 목적 명확화
  - 개인정보 보관 기간 조정
  - 제3자 제공 관련 내용 추가

자세한 내용은 홈페이지에서 확인하실 수 있습니다.

감사합니다.`,
    },
    '4': {
      id: '4',
      title: '7월 정기 점검 안내',
      date: '2025.07.01',
      category: '공지일',
      content: `안녕하세요,

7월 정기 점검을 안내드립니다.

• 점검 일시 : 2025년 7월 5일 (금) 새벽 2시 ~ 4시
• 점검 내용 : 서버 안정화 및 성능 개선
• 영향 범위 : 점검 시간 동안 서비스 이용 불가

이용에 불편을 드려 죄송합니다.

감사합니다.`,
    },
    '5': {
      id: '5',
      title: '6월 정기 점검 안내',
      date: '2025.06.01',
      category: '공지일',
      content: `안녕하세요,

6월 정기 점검을 안내드립니다.

• 점검 일시 : 2025년 6월 10일 (월) 새벽 1시 ~ 3시
• 점검 내용 : 시스템 업데이트 및 보안 강화
• 영향 범위 : 전체 서비스 일시 중단

양해 부탁드립니다.

감사합니다.`,
    },
    '6': {
      id: '6',
      title: '5월 정기 점검 안내',
      date: '2025.05.01',
      category: '공지일',
      content: `안녕하세요,

5월 정기 점검을 안내드립니다.

• 점검 일시 : 2025년 5월 15일 (수) 새벽 2시 ~ 4시
• 점검 내용 : 데이터베이스 최적화
• 영향 범위 : 일부 기능 제한

이용에 참고 부탁드립니다.

감사합니다.`,
    },
  };

  const notice = id ? noticeDetails[id] : null;

  if (!notice) {
    return (
      <Layout showBottomTab={false}>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              공지사항을 찾을 수 없습니다
            </h2>
            <button
              onClick={() => navigate('/notices')}
              className="text-yellow-500 hover:text-yellow-600"
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
        <div className="flex items-center justify-between px-4 py-4 bg-zinc-50">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-8 h-8"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <h1 className="text-lg font-semibold text-gray-900">공지사항</h1>

          <div className="w-9 h-9 flex items-center justify-center">
            <img src={iconSvg} alt="MoPT Logo" className="w-9 h-9" />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-6">
          {/* Title Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex-1">
                {notice.title}
              </h2>
              {notice.isNew && (
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center ml-2">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              )}
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">{notice.category}</span>
              <span>{notice.date}</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="prose prose-sm max-w-none">
              {notice.content.split('\n').map((line, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {line || '\u00A0'}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NoticeDetail;
