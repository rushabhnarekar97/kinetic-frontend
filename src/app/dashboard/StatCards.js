import { FiBarChart2, FiActivity } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import { CiYoutube } from "react-icons/ci";
import { LuBicepsFlexed } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import { LiaBurnSolid } from "react-icons/lia";

const stats = [
  {
    label: 'Total videos upload',
    value: 80,
    change: '+12% from last month',
    icon: <CiYoutube size={26} />,
    iconBg: 'bg-[#ffff]',
    iconColor: 'text-[#F0540B]',
    bg: 'bg-[#E94F1D]',
    text: 'text-white',
    highlight: true,
  },
  {
    label: 'Strength gain',
    value: '8%',
    change: '+0.3 this week',
    icon: <LuBicepsFlexed size={26} />,
    iconBg: 'bg-[#FFEEF7]',
    iconColor: 'text-[#D60079]',
    bg: 'bg-white',
    text: 'text-[#E94F1D]',
    highlight: false,
  },
  {
    label: 'Workouts/week',
    value: '04',
    change: '+0.3 this week',
    icon: <CgGym size={26} />,
    iconBg: 'bg-[#F4F4FF]',
    iconColor: 'text-[#0900FF]',
    bg: 'bg-white',
    text: 'text-[#E94F1D]',
    highlight: false,
  },
  {
    label: 'Arg.calories',
    value: 180,
    change: 'Last 30 days',
    icon: <LiaBurnSolid size={28} />,
    iconBg: 'bg-[#FFFBEE]',
    iconColor: 'text-[#FCBF04]',
    bg: 'bg-white',
    text: 'text-[#E94F1D]',
    highlight: false,
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-lg p-5 md:p-4.5 ${stat.bg} ${
            stat.highlight
              ? 'border border-[#E94F1D] text-white'
              : 'border border-[#EBEBEB] text-[#000]'
          } flex flex-col gap-3`}
        >
          {/* Label */}
          <div className="font-medium text-base md:text-lg">{stat.label}</div>

          {/* Value + Icon */}
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl md:text-3xl">{stat.value}</div>
            <div
              className={`h-10 w-10 flex items-center justify-center rounded-lg ${stat.iconBg} ${stat.iconColor}`}
            >
              {stat.icon}
            </div>
          </div>

          {/* Change Info */}
          <div
            className={`text-xs ${
              stat.highlight ? 'text-white/80' : 'text-[#000]/80'
            }`}
          >
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
}
