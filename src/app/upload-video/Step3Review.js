import React from "react";
import { MdOutlineVideoSettings } from "react-icons/md";
import { IoIosLink } from "react-icons/io";

export default function Step3Review({
  onNext,
  onBack,
  analyzeText,
  setAnalyzeText,
  trainingGoals,
  setTrainingGoals,
}) {
  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-8 py-10 w-full">
      <span className="mb-4 flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFF3F1]">
        <MdOutlineVideoSettings size={24} className="text-[#CB282A]" />
      </span>
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
        Upload Your Video
      </h2>
      <p className="text-gray-600 text-center mb-8 text-sm">
        Select a video file or provide a URL to your training footage
      </p>

      <form
        className="w-full max-w-4xl flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          onNext();
        }}
      >
        {/* Grid: File Upload + URL Upload */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* File Upload */}
          <div className="border-2 border-dashed border-[#E94F1D] rounded-lg p-6 text-center">
            <span className="mb-4 flex items-center justify-center mx-auto h-12 w-12 rounded-lg bg-[#FFF3F1]">
              <MdOutlineVideoSettings size={24} className="text-[#CB282A]" />
            </span>
            <h3 className="text-base font-semibold mb-2">Select Video File</h3>

            <p className="mt-2 text-xs text-gray-500">
              Maximum 10GB, Preferred format is MP4(H264) or WEBM(VPB,VP9)
            </p>
            <input
              type="file"
              accept="video/*"
              id="video-upload"
              className="hidden"
              onChange={(e) => console.log("File selected:", e.target.files[0])}
            />
            <label
              htmlFor="video-upload"
              className="cursor-pointer mt-2 inline-block px-6 py-2 text-sm bg-[#E94F1D] text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
            >
              Select a file
            </label>
          </div>

          {/* URL Upload */}
          <div className="border-2 border-dashed bg-[#FCFCFF] border-[#0900FF] rounded-lg p-6 text-center">
              <span className="mb-4 flex items-center justify-center mx-auto h-12 w-12 rounded-lg bg-[#fff]">
              <IoIosLink size={24} className="text-[#0900FF]" />
            </span>
            <h3 className="text-base font-semibold mb-2">Upload from URL</h3>
                <p className="mt-2 text-xs text-gray-500">
              Paste a link to your video from YouTube, Vimeo, or any public URL
            </p>
            <input
              type="url"
              placeholder="https://www.youtube.com/..."
              className="w-full mt-2 px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) => console.log("URL:", e.target.value)}
            />
        
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4  border-t border-gray-100 pt-5">
          <button
            type="button"
            onClick={onBack}
            className="w-32 py-3 rounded-lg border border-[#E94F1D] text-[#E94F1D] font-bold text-sm bg-white shadow hover:bg-[#FFF3F1] transition"
          >
            Back
          </button>
          <button
            type="submit"
            className="w-32 py-3 rounded-lg bg-gradient-to-r from-[#E94F1D] to-[#F46036] text-white font-bold text-sm shadow-md hover:opacity-90 transition"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
