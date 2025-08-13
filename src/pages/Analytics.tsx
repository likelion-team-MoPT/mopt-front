import React from 'react';
import { Layout } from '../components/common';

const Analytics: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">분석</h1>
        <p className="text-gray-600">분석 데이터를 확인하는 페이지입니다.</p>
      </div>
    </Layout>
  );
};

export default Analytics;
