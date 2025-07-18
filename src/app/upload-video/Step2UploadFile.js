import React from "react";
import { MdOutlineVideoSettings } from "react-icons/md";

export default function Step2UploadFile({
  onNext,
  onBack,
  analyzeText,
  setAnalyzeText,
  trainingGoals,
  setTrainingGoals,
  analyzeOption,
  setAnalyzeOption,
  notes,
  setNotes,
}) {
  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-8 py-10 w-full">
      <span className="mb-4 flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFF3F1]">
      <MdOutlineVideoSettings size={24} className="text-[#CB282A]"/>
      </span>
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">What would you like to analyze?</h2>
      <p className="text-gray-600 text-center mb-8 text-sm">Describe your training goals to get personalized AI feedback</p>
      <form className="w-full max-w-4xl flex flex-col gap-6" onSubmit={e => { e.preventDefault(); onNext(); }}>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">What to analyze?</label>
          <textarea
            className="px-4 py-3 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] text-base focus:outline-none focus:ring-2 focus:ring-[#398C09] placeholder:text-gray-400 min-h-[80px]"
            placeholder="Describe what you want to analyze (e.g., shooting, passing, defense)"
            value={analyzeText}
            onChange={e => setAnalyzeText(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">Notes or comments</label>
          <textarea
            className="px-4 py-3 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] text-base focus:outline-none focus:ring-2 focus:ring-[#398C09] placeholder:text-gray-400 min-h-[80px]"
            placeholder="What are your training goals? (e.g., improve accuracy, increase power, make better decisions)"
            value={trainingGoals}
            onChange={e => setTrainingGoals(e.target.value)}
          />
        </div>
    
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