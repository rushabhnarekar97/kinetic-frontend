import React, { useState } from "react";
import AIFeedback from "./AIFeedback";

function AIAnalysisFeedback() {
  return (
  <>
  <AIFeedback/>
  </>
  );
}

export default function AIAnalysis() {
  const [showFeedback, setShowFeedback] = useState(false);
  if (showFeedback) {
    return <AIAnalysisFeedback />;
  }
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl xs:text-base md:text-xl font-semibold text-gray-900 xs:mt-2 xs:mb-1 mt-0 mb-0">
          Select Frames for AI Analysis
        </h1>
        <span className="text-sm font-normal text-gray-500 xs:mt-2 xs:mb-1 mt-0 mb-0">
          Selected : 4 of 20
        </span>
      </div>

      {/* Card Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="relative rounded-lg overflow-hidden shadow-md group"
          >
            {/* Full-size image */}
            <img
              src="/images/thumb1.jpg"
              alt={`Frame ${item}`}
              className="w-full min-h-[272px] object-cover"
            />

            {/* Bottom-left checkbox overlay */}
            <div className="absolute bottom-2 right-2  bg-opacity-90 px-2 py-1 rounded flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-green-600 w-4 h-4"
              />
            </div>
            <div className="absolute top-2 right-2 border rounded-md border-white h-[50px] w-[50px] flex items-center justify-center">
              <img
                src="/images/skel.svg"
                className="object-cover flex mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end pt-5">
        <button
          type="button"
          className="px-3 py-3 rounded-lg bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white font-medium text-sm border-none cursor-pointer hover:opacity-90 transition duration-200"
          onClick={() => setShowFeedback(true)}
        >
          Submit for AI Feedback
        </button>
      </div>
    </div>
  );
}
