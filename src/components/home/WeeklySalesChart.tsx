import React from 'react';

// 차트에 표시될 데이터의 타입을 정의합니다.
interface ChartData {
  day: string; // 요일 (예: '월')
  sales: number; // 매출액
}

interface WeeklySalesChartProps {
  data: ChartData[];
}

const WeeklySalesChart = ({ data }: WeeklySalesChartProps) => {
  // 데이터 중 가장 높은 매출액을 찾아 막대 높이의 기준으로 사용합니다.
  const maxSales = Math.max(...data.map(d => d.sales), 1); // 0으로 나누는 것을 방지

  return (
    <div className="flex h-36 w-full flex-col">
      {/* Y축 (가로선) - 이 부분은 단순화를 위해 생략하거나 필요 시 추가할 수 있습니다. */}

      {/* X축 (막대그래프와 요일) */}
      <div className="flex h-full items-end justify-around border-b border-gray-200 px-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex h-full w-4 flex-col items-center justify-end gap-2"
          >
            {/* 막대 바 */}
            <div
              className="w-full rounded-sm bg-yellow-400 transition-all duration-500"
              // 매출액 비율에 따라 높이를 동적으로 설정
              style={{ height: `${(item.sales / maxSales) * 100}%` }}
            ></div>
            {/* 요일 라벨 */}
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklySalesChart;
