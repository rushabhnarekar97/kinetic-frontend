import { FiCheckCircle } from 'react-icons/fi';

const activities = [
  { text: 'Upload new video', date: '28 June' },
  { text: 'Received feedback from trainer', date: '20 June' },
  { text: 'Completed project milestone', date: '22 June' },
  { text: 'Conducted user testing sessions', date: '25 June' },
  { text: 'Finalized design revisions', date: '28 June' },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg border border-[#EBEBEB] p-4 md:p-6">
      <div className="font-semibold text-base md:text-lg mb-4">Recent Activity</div>
      <ul className="space-y-2">
        {activities.map((a, i) => (
          <li key={i} className="flex items-center justify-between text-sm">
            <div className="flex  items-center gap-2">
              <FiCheckCircle className="bg-[#F5F9F3] h-6 w-6 p-1 rounded-sm text-[#398C09] text-base" />
              {a.text}
            </div>
            <span className="text-gray-400 text-xs">{a.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 