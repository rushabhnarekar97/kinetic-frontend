"use client";
import { useState } from "react";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle login logic
    console.log("Logging in with", email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto px-2 sm:px-0">
      <h2 className="font-bold text-center text-xl sm:text-2xl mb-2">
        Welcome Back!
        <br />
        Glad To See You, Again!
      </h2>
      <p className="text-black mb-6 text-base sm:text-lg max-w-md text-center px-1 sm:px-0">
        Welcome back! Please enter your credentials to access your account.
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
            {!showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
      </div>

      {/* Remember me and forgot */}
      <div className="flex flex-col sm:flex-row items-center justify-between my-4 gap-2 sm:gap-0 w-full">
        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="mr-2"
          />
          Remember Me
        </label>
        <Link
          href="/auth/forgot-password"
          className="text-[#d7263d] font-semibold text-sm underline"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white font-medium text-sm border-none mb-4 cursor-pointer hover:opacity-90 transition duration-200"
      >
        Login
      </button>

      {/* Sign up */}
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/signup/role"
          className="text-[#d7263d] font-semibold underline"
        >
          Sign Up
        </Link>
      </div>
    </form>
  );
}
