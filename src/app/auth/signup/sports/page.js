"use client";

import { useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

export default function SignupSportsPage() {
  const [sport, setSport] = useState("");
  const [position, setPosition] = useState("");

  return (
    <AuthLayout activeTab="signup">
      <div className="py-6 sm:py-8 px-2 sm:px-0 max-w-md min-w-md mx-auto">
        <h2 className="font-bold text-xl sm:text-2xl mb-2 text-center">Select Sport & Position</h2>
        <p className="text-black mb-4 sm:mb-6 text-base sm:text-lg text-center">
          Select your sport and position.
        </p>

        {/* Sport Dropdown */}
        <div className="mb-4">
          <label className="font-medium text-sm">Sport</label>
          <select
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            className="w-full mt-1 px-3 py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] text-base focus:outline-none focus:ring-2 focus:ring-[#f46036]"
          >
            <option value="">Select a sport</option>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="cricket">Cricket</option>
            <option value="tennis">Tennis</option>
            <option value="badminton">Badminton</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Position Dropdown */}
        <div className="mb-6">
          <label className="font-medium text-sm">Position/Role</label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full mt-1 px-3 py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] text-base focus:outline-none focus:ring-2 focus:ring-[#f46036]"
          >
            <option value="">Select a Position/Role</option>
            <option value="forward">Forward</option>
            <option value="goalkeeper">Goalkeeper</option>
            <option value="midfielder">Midfielder</option>
            <option value="defender">Defender</option>
            <option value="coach">Coach</option>
            {/* Add more positions as needed */}
          </select>
        </div>


        {/* Next Button */}
        <button
          className="w-full mt-0 py-3 rounded-lg bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white font-bold text-base sm:text-lg"
        >
          Next
        </button>
      </div>
    </AuthLayout>
  );
}
