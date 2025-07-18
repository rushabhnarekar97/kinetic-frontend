"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function ResetCodeForm() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("Verifying code:", code);
    // TODO: Add verification logic
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto px-1 sm:px-0">
      <h2 className="font-bold text-xl sm:text-2xl mb-2 text-center">Password reset code</h2>
      <p className="text-black text-center max-w-md mb-6 text-base sm:text-lg">
        We’ve sent an email with an activation code to your email{" "}
        <b className="hover:underline cursor-pointer">contact@abc.com</b>
      </p>

      <div className="flex justify-center gap-2 sm:gap-3 mb-6 flex-wrap">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={digit || "-"}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-10 h-10 sm:w-16 sm:h-16 text-center text-base sm:text-lg bg-[#F9F9F9] border border-[#EBEBEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f46036] font-mono tracking-widest"
          />
        ))}
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg cursor-pointer bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white font-medium text-sm border-none mb-4"
      >
        Verify
      </button>

      <div className="text-center text-base">
        Didn’t receive the code?{" "}
        <Link href="#" className="text-[#d7263d] font-semibold underline">
          Resend
        </Link>
      </div>
    </form>
  );
}
