"use client";
import { useState } from "react";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle password reset logic
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto px-1 sm:px-0">
      <h2 className="font-bold text-xl sm:text-2xl mb-2 text-center">Reset Password</h2>
      <p className="text-black mb-6 text-base sm:text-lg text-center">Reset your password securely and easily.</p>

      {/* New Password Field */}
      <div className="mb-4">
        <label className="font-medium text-sm">New Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="***********"
            required
            className="w-full px-3 py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] mt-1 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036] pr-10"
          />
          <span
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg text-gray-500"
            title={showPassword ? "Hide" : "Show"}
          >
            {!showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="mb-6">
        <label className="font-medium text-sm">Confirm Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            placeholder="***********"
            required
            className="w-full px-3 py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] mt-1 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036] pr-10"
          />
          <span
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-3 top-4 cursor-pointer text-lg text-gray-500"
            title={showPassword ? "Hide" : "Show"}
          >
            {!showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white font-medium text-base border-none mb-4"
      >
        Reset Password
      </button>

      <div className="text-center text-base">
        <Link href="/auth/login" className="text-[#d7263d] font-semibold underline">
          Back to Login
        </Link>
      </div>
    </form>
  );
}
