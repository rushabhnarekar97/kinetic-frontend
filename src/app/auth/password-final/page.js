"use client";
import Link from "next/link";

export default function PasswordFinalPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10 sm:py-16 px-2">
      <div className="bg-gradient-to-r from-[#d7263d] to-[#f46036] bg-opacity-90 rounded-3xl px-4 sm:px-10 py-10 sm:py-14 flex flex-col items-center w-full max-w-xl shadow-lg">
        <span className="mb-6">
          {/* Green checkmark SVG */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#22C55E"/>
            <path d="M56 32L37 51L24 38" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <h2 className="font-bold text-white text-2xl sm:text-3xl mb-2 text-center">Your Password Has Been<br/>Updated Successfully!</h2>
        <p className="text-white text-base sm:text-lg mb-8 text-center">Your password has been changed successfully</p>
        <Link href="/auth/login" className="w-full max-w-xs">
          <button className="w-full py-3 rounded-lg bg-white text-black font-semibold text-base sm:text-lg shadow transition hover:bg-gray-100">Back to login</button>
        </Link>
      </div>
    </div>
  );
} 