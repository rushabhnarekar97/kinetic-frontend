import React, { useState } from "react";
import { PiFilePdf, PiBasketballLight } from "react-icons/pi";
import { SlArrowRight } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { IoCalendarOutline, IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function AIFeedback() {
  const [showHighlightFrame, setShowHighlightFrame] = useState(false);
  const [openFrame, setOpenFrame] = useState(null);

  const highlightFrames = [
    { id: 1, title: 'Frame 1', img: '/images/thumb1.jpg' },
    { id: 2, title: 'Frame 2', img: '/images/thumb1.jpg' },
    { id: 3, title: 'Frame 3', img: '/images/thumb1.jpg' },
    { id: 4, title: 'Frame 4', img: '/images/thumb1.jpg' },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex w-full justify-between items-center mb-4 border-b border-gray-100 pb-3">
        <h1 className="text-xl font-semibold text-gray-900">AI Feedback</h1>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex gap-2 items-center px-3 py-3 rounded-lg bg-white text-black border border-[#EBEBEB] font-medium text-sm hover:opacity-90 transition duration-200"
            onClick={() => setShowHighlightFrame((prev) => !prev)}
          >
            Highlight Frames(4)
            <SlArrowRight size={14} />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-3 rounded-lg bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white font-medium text-sm hover:opacity-90 transition duration-200"
            onClick={() => alert('PDF download triggered')} // Replace with actual handler
          >
            <PiFilePdf size={20} />
            Download PDF
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Panel: Highlight Frames or Video */}
        <div
          className={`col-span-1 overflow-hidden max-h-[400px] flex ${
            showHighlightFrame ? 'rounded-none' : 'rounded-2xl'
          }`}
        >
          {showHighlightFrame ? (
            <div className="w-full">
              <div className="flex flex-col w-full">
                <div className="font-semibold text-base mb-2">Highlight Frames(4)</div>
                {highlightFrames.map((frame) => (
                  <div key={frame.id} className="mb-2 border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center px-4 py-3 bg-white hover:bg-gray-100"
                      onClick={() => setOpenFrame(openFrame === frame.id ? null : frame.id)}
                    >
                      <span className="text-sm font-medium">{frame.title}</span>
                      {openFrame === frame.id ? (
                        <IoChevronUp size={16} />
                      ) : (
                        <IoChevronDown size={16} />
                      )}
                    </button>
                    {openFrame === frame.id && (
                      <div className="p-4 bg-white flex justify-center items-center">
                        <img
                          src={frame.img}
                          alt={`Highlight ${frame.title}`}
                          className="object-contain max-h-48 rounded-md border"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <img
              src="/images/thumb1.jpg"
              alt="Video Preview"
              className="object-cover max-h-[400px] rounded-2xl w-full"
            />
          )}
        </div>

        {/* Right Panel */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Drill Details & Assessment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Drill Details */}
            <div className="bg-white border border-[#EBEBEB] rounded-2xl p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Midfield Passing Drill</h2>
              <div className="flex items-center gap-2 mb-2 pt-4 border-t border-dashed border-black">
                <div className="flex gap-2 items-center rounded-4xl p-2 bg-[#fdf4f5]">
                  <PiBasketballLight size={18} className="text-[#d7263d]" />
                  <span className="text-xs font-medium">Football</span>
                </div>
                <div className="flex gap-2 items-center rounded-4xl p-2 bg-[#fdf4f5]">
                  <IoCalendarOutline className="text-[#d7263d]" />
                  <span className="text-xs font-medium">28 June</span>
                </div>
                <div className="flex gap-2 items-center rounded-4xl p-2 bg-[#fdf4f5]">
                  <GoClock className="text-[#0900FF]" />
                  <span className="text-xs font-medium">10 Min</span>
                </div>
              </div>
              <div className="text-sm text-black">
                <p><span className="font-medium">Position Trained:</span> Central Midfielder</p>
                <p><span className="font-medium">Source:</span> Video Upload (Analyzed by Sport AI Engine)</p>
              </div>
            </div>

            {/* Overall Assessment */}
            <div className="bg-white border border-[#EBEBEB] rounded-2xl p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold mb-2 border-b border-dashed border-black pb-2">Overall Assessment</h2>
              <div className="flex flex-col items-center gap-2">
                <span className="text-base font-medium">Performance Score</span>
                <span className="flex items-center ml-2">
                  {[1, 2, 3, 4].map((i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  <FaStar className="text-gray-300" />
                  <span className="ml-2 text-gray-600 text-sm">(4.2/5)</span>
                </span>
              </div>
              <div className="text-sm text-center text-gray-600 mt-1">
                “Solid rhythm and awareness in transitions. Improve first-touch precision under pressure.”
              </div>
            </div>
          </div>

          {/* Motion Metrics */}
          <div className="bg-white border border-[#EBEBEB] rounded-2xl p-4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold mb-2 border-b border-dashed border-black pb-2">Motion Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {[
                ['Average Pass Completion Time', '1.2 sec'],
                ['First Touch Direction Accuracy', '85%'],
                ['Off-the-ball Movement Score', '91%'],
                ['Pass Range', '6m to 18m'],
                ['Max Acceleration (during reset)', '3.1 m/s²'],
              ].map(([title, value], idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#EBEBEB] rounded-2xl p-3 flex flex-col items-center"
                >
                  <span className="text-xs text-gray-800 font-medium text-center">{title}</span>
                  <span className="text-lg font-bold w-full text-left">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Breakdown & Suggestions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Breakdown */}
            <div className="bg-white border border-[#EBEBEB] rounded-2xl p-4">
              <h2 className="text-lg font-semibold">Category Breakdown</h2>
              <div className="pt-4 border-t border-dashed border-black space-y-3 text-sm">
                {[
                  ['Passing Accuracy', '8.3/10'],
                  ['First Touch Control', '7.0/10'],
                  ['Vision & Awareness', '8.5/10'],
                  ['Positioning & Spacing', '9.0/10'],
                  ['Speed of Play', '7.8/10'],
                ].map(([label, score], idx) => (
                  <div key={idx} className={`flex justify-between ${idx < 4 ? 'border-b pb-1 border-dashed border-gray-200' : ''}`}>
                    <span>{label}</span>
                    <span className="font-semibold">{score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-white border border-[#EBEBEB] rounded-2xl p-4">
              <h2 className="text-lg font-semibold">Suggestions for Improvement</h2>
              <div className="pt-4 border-t border-dashed border-black">
                <ul className="flex flex-col gap-3 text-sm">
                  {[
                    'Practice 2-touch limitations under pressure',
                    'Improve first-touch control using inside/outside of foot',
                    'Work on disguising passes to delay opponent reactions',
                    'Focus on increasing passing accuracy while under pressure',
                    'Enhance dribbling skills with quick changes of direction',
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-black">
                      <BsCheckCircle className="text-green-500" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Coach Notes */}
          <div className="bg-white border border-[#EBEBEB] rounded-2xl p-4">
            <h2 className="text-lg font-semibold">Coach Notes</h2>
            <div className="pt-4 border-t border-dashed border-black text-center">
              <p className="text-base text-gray-700 italic mb-2">
                "Good tempo overall. Let's challenge with tighter space and time constraints next session."
              </p>
              <p className="text-sm font-semibold text-gray-500">– Coach A. Verma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
