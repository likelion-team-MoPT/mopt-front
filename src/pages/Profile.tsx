import React from 'react';
import { Layout } from '../components/common';

const Profile: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">마이페이지</h1>
        <p className="text-gray-600">사용자 정보 및 설정 페이지입니다.</p>
      </div>
    </Layout>
  );
};

export default Profile;
