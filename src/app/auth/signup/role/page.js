"use client";
import { MdSportsHandball } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbUserSquare } from "react-icons/tb";

export default function SignupRolePage() {
  return (
    <div className="py-6 sm:py-8 sm:pt-0 px-2 sm:px-0 max-w-lg w-full">
      <h2 className="font-bold text-xl sm:text-2xl mb-2 text-center">Select Your Role</h2>
      <p className="text-black mb-6 text-base max-w-md text-center px-1 sm:px-0 flex mx-auto justify-center">Choose your role from the following list.</p>
      {/* TODO: Add role selection UI */}
      <div className="space-y-3 sm:space-y-4">
        <div className="p-3 sm:p-4 rounded-lg border border-gray-200 bg-[#F9F9F9] flex items-center gap-3 sm:gap-4 cursor-pointer hover:bg-gray-50">
          <span className="min-h-[48px] min-w-[48px] flex items-center justify-center bg-white rounded-lg text-lg sm:text-xl"><MdSportsHandball size={24}/></span>
          <div>
            <div className="font-semibold">Athlete</div>
            <div className="text-xs sm:text-sm text-gray-400">An athlete competes in sports, demonstrating strength, agility, and skill.</div>
          </div>
        </div>
        <div className="p-3 sm:p-4 rounded-lg border border-gray-200 bg-[#F9F9F9] flex items-center gap-3 sm:gap-4 cursor-pointer hover:bg-gray-50">
          <span className="min-h-[48px] min-w-[48px] flex items-center justify-center bg-white rounded-lg text-lg sm:text-xl"><FaChalkboardTeacher size={24}/></span>
          <div>
            <div className="font-semibold">Coach</div>
            <div className="text-xs sm:text-sm text-gray-400">An athlete competes in sports, demonstrating strength, agility, and skill.</div>
          </div>
        </div>
      </div>
    </div>
  );
} 