"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import AuthLayout from "../../components/AuthLayout";

export default function SignupRegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to the Terms and Privacy Policy.");
      return;
    }

    // Handle signup logic
    console.log({ email, password, remember, agreed });
  };

  return (
    <AuthLayout activeTab="signup" showTabs={true}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto px-2 sm:px-0"
      >
        <h2 className="font-bold text-center max-w-xs flex justify-center mx-auto text-xl sm:text-2xl mb-2">
          Looks like you're new here!
        </h2>
        <p className="text-black mb-6 text-base sm:text-lg max-w-md text-center px-1 sm:px-0">
          Join us today and embark on an exciting adventure!
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="font-medium text-sm">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-3 py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] mt-1 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036]"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="font-medium text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="***********"
              required
              className="w-full px-3 py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] mt-1 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036] pr-10"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-500 hover:text-[#f46036] transition duration-200"
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
        </div>


        {/* Terms and Privacy Policy */}
        <div className="flex items-start my-4">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 mr-2"
            required
          />
          <label className="text-sm">
            I agree to the{" "}
            <Link href="/terms" className="text-[#d7263d] underline font-medium">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#d7263d] underline font-medium">
              Privacy Policy
            </Link>
            .
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white font-medium text-base sm:text-lg border-none mb-4 cursor-pointer hover:opacity-90 transition duration-200"
        >
          Sign Up
        </button>

        {/* Login instead */}
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-[#d7263d] font-semibold underline"
          >
            Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
