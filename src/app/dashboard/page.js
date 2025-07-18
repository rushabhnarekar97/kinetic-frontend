import StatCards from './StatCards';
import PerformanceChart from './PerformanceChart';
import LatestFeedback from './LatestFeedback';
import RecentActivity from './RecentActivity';
import UploadedVideos from './UploadedVideos';
import { MdAdd } from 'react-icons/md';

export const metadata = {
  title: "Dashboard | Kinetic AIU",
  description: "View your sports performance dashboard, stats, and recent activity on Kinetic AIU.",
  openGraph: {
    title: "Dashboard | Kinetic AIU",
    description: "View your sports performance dashboard, stats, and recent activity on Kinetic AIU.",
    url: "https://yourdomain.com/dashboard",
    siteName: "Kinetic AIU",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Kinetic AIU Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | Kinetic AIU",
    description: "View your sports performance dashboard, stats, and recent activity on Kinetic AIU.",
    images: ["/images/logo.png"],
  },
};


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className='flex items-center justify-between mb-1'>
           <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
        Dashboard
      </h1>
            <button
        type="submit"
        className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white font-medium text-sm border-none cursor-pointer hover:opacity-90 transition duration-200"
      >
        <MdAdd size={20}/>
    Upload Video
      </button>
      </div>
      {/* Stat Cards Row */}
      <StatCards />

      {/* Main Content Row: Chart + Feedback/Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Chart (2/3 width) */}
        <div className="xl:col-span-2">
          <PerformanceChart />
        </div>
        {/* Feedback + Activity (1/3 width) */}
        <div className="flex flex-col gap-4">
          <LatestFeedback />
          <RecentActivity />
        </div>
      </div>

      {/* Uploaded Videos Full Width */}
      <UploadedVideos />
    </div>
  );
} 