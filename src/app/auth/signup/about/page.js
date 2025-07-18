"use client";
import { useState } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { PiCameraPlusBold } from "react-icons/pi";

export default function SignupAboutPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploaded = e.target.files[0];
    if (uploaded) {
      setFile(uploaded);
    }
  };

  return (
    <div className="py-6 sm:py-8 px-2 sm:px-0 mx-auto max-w-md min-w-md">
      <h2 className="flex font-bold text-xl sm:text-2xl mb-2  text-center flex justify-center">
        Tell Us About You
      </h2>

      <div className="flex flex-col items-center justify-center">
        {/* Upload Box */}
        <label
          htmlFor="upload"
          className="block h-[120px] w-[120px] my-4 border-2 border-dashed border-black rounded-2xl bg-[#F9F9F9] flex items-center justify-center mx-auto text-gray-400 text-sm cursor-pointer hover:border-[#f46036] transition duration-200 relative"
        >
          {/* Camera Icon */}
          <PiCameraPlusBold className="text-3xl text-[#CB282A]" />

          {/* Hidden Input */}
          <input
            type="file"
            id="upload"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        <p className="text-black mb-4 sm:mb-6 text-sm max-w-sm text-center">
          Upload a clear photo of yourself. Click the upload button to
          continue.
        </p>
      </div>

        {/* First Name */}
        <div className="mb-4">
          <label className="font-medium text-sm">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your First name"
            required
            className="w-full px-3 py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] mt-1 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036]"
          />
        </div>

        {/* Last Name */}
        <div className="mb-6">
          <label className="font-medium text-sm">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your Last name"
            required
            className="w-full px-3 py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] mt-1 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036]"
          />
        </div>

        {/* Next Button */}
        <button className="w-full mt-0 py-3 rounded-lg bg-gradient-to-r from-[#d7263d] to-[#f46036] cursor-pointer text-white font-bold text-sm">
          Next
        </button>
    </div>
  );
}
