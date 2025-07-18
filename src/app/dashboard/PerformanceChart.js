"use client"; // ✅ This makes it a client component

import dynamic from 'next/dynamic';
import { FiChevronDown } from 'react-icons/fi';

// Dynamically import ApexCharts with SSR disabled
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function PerformanceChart() {
const activeIndex = 1; // Feb

const chartSeries = [
  {
    name: 'Performance',
    data: [100, 200, 80, 120, 180, 160, 200, 190, 100, 140, 180, 150],
  },
];

const chartOptions = {
  chart: {
    type: 'bar',
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      columnWidth: '40%',
      borderRadius: 0,
      distributed: true, // <-- Key to set individual bar colors
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: chartSeries[0].data.map((_, i) =>
    i === activeIndex ? '#CB282A' : '#FEEDED' // Red for active, light gray for others
  ),
  xaxis: {
    categories: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ],
    labels: {
      style: {
        colors: '#9CA3AF',
        fontSize: '12px',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#9CA3AF',
        fontSize: '12px',
      },
    },
  },
  grid: {
    strokeDashArray: 4,
  },
};


  return (
    <div className="bg-white rounded-lg border border-[#EBEBEB] p-4 md:p-6 mt-4 md:mt-0 h-full min-h-[340px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold text-base md:text-lg">Performance Overview</div>
        <div className="flex items-center border rounded px-2 py-1 text-sm gap-1 cursor-pointer">
          <span>Month</span>
          <FiChevronDown />
        </div>
      </div>

      <div className="flex-1">
        <ApexCharts
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height="100%"
        />
      </div>
    </div>
  );
}
