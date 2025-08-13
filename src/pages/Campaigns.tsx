import React from 'react';
import { Layout } from '../components/common';

const Campaigns: React.FC = () => {
  return (
    <Layout showBottomTab={false}>
      <div className="min-h-screen bg-gray-50 p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">캠페인</h1>
        <p className="text-gray-600">캠페인 관리 페이지입니다.</p>
      </div>
    </Layout>
  );
};

export default Campaigns;
