"use client";

import { useState } from "react";
import AuthLayout from "../../components/AuthLayout";

export default function SignupFocusPage() {
  const [focusAreas, setFocusAreas] = useState([]);

  const focusOptions = [
    "Striking mechanics",
    "Serve technique",
    "Bowling release",
    "Fielding strategy",
    "Batting stance",
  ];

  const handleCheckboxChange = (option) => {
    setFocusAreas((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <AuthLayout activeTab="signup">
      <div className="py-6 sm:py-8 px-2 sm:px-0 max-w-md mx-auto">
        <h2 className="font-bold text-xl sm:text-2xl mb-2">Define Movement Focus & Goal</h2>
        <p className="text-black mb-4 sm:mb-6 text-base sm:text-lg">
         Movement Focus 
        </p>

        {/* Movement Focus Checkboxes */}
        <div className="space-y-4 mb-6">
          {focusOptions.map((option) => (
            <label key={option} className="flex items-center text-sm font-semibold sm:text-base cursor-pointer">
              <input
                type="checkbox"
                checked={focusAreas.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                className="mr-2 accent-[#f46036] w-4 h-4 cursor-pointer"
              />
              {option}
            </label>
          ))}
        </div>


        {/* Next Button */}
        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d7263d] to-[#f46036] cursor-pointer text-white font-bold text-sm">
          Next
        </button>
      </div>
    </AuthLayout>
  );
}
