import axiosInstance from './axiosInstance'; 
import type { InsightsResponse, InsightDetail } from '../types'; 

export const getInsights = async (): Promise<InsightsResponse> => {
  try {
    const response = await axiosInstance.get<InsightsResponse>('/api/v1/insights');
    
    return response.data;
  } catch (error) {
    console.error("인사이트 목록을 불러오는 중 오류 발생:", error);
    throw error;
  }
};

/**
 * @param {string} insightId - 조회할 인사이트 ID
 */
export const getInsightById = async (insightId: string): Promise<InsightDetail> => {
  try {
    const response = await axiosInstance.get<InsightDetail>(`/api/v1/insights/${insightId}`);
  
    return response.data;
  } catch (error) {
    console.error(`${insightId}번 인사이트 상세 정보를 불러오는 중 오류 발생:`, error);
    throw error;
  }
};