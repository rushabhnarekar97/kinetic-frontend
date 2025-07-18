"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle forgot password logic
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto px-1 sm:px-0">
      <h2 className="font-bold text-center text-xl sm:text-2xl mb-2">Forgot Password?</h2>
      <p className="mb-6 text-base sm:text-lg max-w-sm text-center text-black">We’ve sent an mail with an activation code to your email address.</p>
      <div className="mb-6">
        <label className="font-medium text-sm">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="w-full px-3 py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] mt-1 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036]"
        />
      </div>
      <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r cursor-pointer from-[#d7263d] to-[#f46036] text-white font-medium text-base border-none mb-4">Continue</button>
      <div className="text-center text-base">
        <Link href="/auth/login" className="text-[#d7263d] font-semibold underline">Back to Login</Link>
      </div>
    </form>
  );
} 