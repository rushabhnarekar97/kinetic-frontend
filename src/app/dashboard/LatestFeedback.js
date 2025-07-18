import { FiCalendar, FiThumbsUp } from 'react-icons/fi';
import { IoBasketballOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";

export default function LatestFeedback() {
  return (
<div className="bg-white rounded-lg border border-[#EBEBEB] p-4 md:p-6">

      <div className="font-semibold text-base md:text-lg mb-4">Latest Feedback</div>
      <div className="flex gap-3 md:gap-4 items-center flex-col md:flex-row">
        <img src="/images/authbg.jpg" alt="Feedback" className="w-full md:w-[122px] h-[142px] object-cover rounded-lg" />
        <div className="flex-1 w-full space-y-6">
          <div>
          <div className="font-semibold text-sm md:text-base">Basketball Free Throw Practice</div>
          <div className="flex items-center gap-2 text-xs text-black mt-1 text-sm">
            <IoBasketballOutline className="text-[#E94F1D]" size={18}/> Football
            <FiCalendar className="text-[#E94F1D]" size={18}/> 28 June
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-[#398C09] text-white px-2 py-0.5 rounded text-xs font-semibold">Good</span>
            <span className="text-xs text-gray-500 flex gap-1 items-center"><GoStarFill className="text-[#FFCA28]" size={14}/>(4.2/5)</span>
          </div>
          </div>
          <div className="text-xs text-black mt-1">"Good tempo overall. Let's challenge.."</div>
        </div>
      </div>
    </div>
  );
} 