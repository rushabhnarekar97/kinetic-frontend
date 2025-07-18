"use client";

import { useRef, useState } from "react";
import AuthLayout from "../../components/AuthLayout";

export default function SignupInvitePage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <AuthLayout activeTab="signup">
      <div className="py-6 sm:py-8 px-2 sm:px-0 max-w-md min-w-md mx-auto">
        <h2 className="font-bold text-xl sm:text-2xl mb-2 text-center">
          Invite Your Coach
        </h2>
        <p className="text-black mb-4 sm:mb-6 text-base sm:text-lg text-center">
          Invite your coach to join the platform.
        </p>

        {/* Email Search */}
     <label className="block text-sm font-medium mb-1">
  Search by email
</label>
<div className="flex items-center gap-2 mb-4">
  <input
    type="email"
    placeholder="Invite by email address"
    className="flex-1 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f46036]"
  />
  <button className="p-2 bg-gradient-to-r from-[#d7263d] to-[#f46036] hover:bg-[#d7263d] text-white h-[40px] rounded-lg transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>
  </button>
</div>


        {/* Coach Code Label */}
        <label className="block text-sm font-medium mb-4 text-center">
          Or Enter Coach code
        </label>

        {/* OTP-style Code Entry */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6 flex-wrap">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-10 sm:w-16 sm:h-16 text-center text-base sm:text-lg bg-[#F9F9F9] border border-[#EBEBEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f46036] font-mono"
            />
          ))}
        </div>

        {/* Skip Link */}
        <div className="text-center mb-6">
          <button className="text-sm text-[#f46036] font-medium underline hover:text-[#d7263d] transition">
            Skip for now
          </button>
        </div>

        {/* Next Button */}
        <button className="w-full mb-6 py-3 cursor-pointer rounded-lg bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white font-bold text-sm">
          Next
        </button>
      </div>
    </AuthLayout>
  );
}
