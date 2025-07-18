"use client";
import Link from "next/link";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function ProfileSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10 sm:py-16 px-2">
      <div className="bg-gradient-to-r from-[#d7263d] to-[#f46036] bg-opacity-90 rounded-3xl px-4 sm:px-10 py-10 sm:py-14 flex flex-col items-center w-full max-w-xl shadow-lg">
        <VscVerifiedFilled size={70} className="text-[#06B300] text-center mx-auto flex my-5" />
        <h2 className="font-bold text-white text-2xl sm:text-3xl max-w-xl mb-2 text-center">Congratulations! Your profile has been successfully Set!</h2>
        <Link href="/auth/login" className="w-full max-w-xs mt-6">
          <button className="w-full py-3 rounded-lg bg-white text-black font-semibold text-base sm:text-lg shadow transition hover:bg-gray-100">Back to Login</button>
        </Link>
      </div>
    </div>
  );
} 