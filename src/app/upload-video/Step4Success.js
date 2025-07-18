import React, { useState, useEffect } from "react";
import { Range } from "react-range";
import { SiTicktick } from "react-icons/si";

export default function Step4Success({ onDone, onBack, videoUrl = "https://youtu.be/kPa7bsKwL-c?si=HDRTM1oC-sf9FofR", setHideStepper, onExtractFrames }) {
  // Double-thumb slider state
  const [segment, setSegment] = useState([2, 5]);
  const [showFinalSuccess, setShowFinalSuccess] = useState(false);
  const min = 0;
  const max = 10;
  const step = 0.01;

  useEffect(() => {
    if (showFinalSuccess && setHideStepper) {
      setHideStepper(true);
    } else if (!showFinalSuccess && setHideStepper) {
      setHideStepper(false);
    }
  }, [showFinalSuccess, setHideStepper]);

  if (showFinalSuccess) {
    return (
      <div className="flex flex-col items-center justify-center px-6 sm:px-16 py-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Through the contact point</h2>
        {/* Tick Icon */}
        <SiTicktick className="text-[#398C09] mb-4" size={80} />
        {/* Image below tick icon */}
        <img
          src="/images/authbg.jpg" // Update this path to your actual success image if needed
          alt="Success"
          className="w-[650px] h-[500px] object-cover rounded-md mb-6 shadow"
        />
        <button
          type="button"
          onClick={onDone}
          className="w-48 py-3 rounded-lg bg-gradient-to-r from-[#E94F1D] to-[#F46036] text-white font-bold text-sm shadow-md hover:opacity-90 transition"
        >
          Extract Frames
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-16 py-10">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Video Segment</h2>
      <p className="text-gray-400 text-center mb-8 text-sm">Manage Important Clips with Ease</p>
      {/* Video Player */}
      <div className="w-full max-w-xl mb-6">
        <video src={videoUrl} controls className="w-full rounded-lg shadow" />
      </div>
      {/* Add Video Segment */}
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="font-semibold mb-2">Add Video Segment</div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Start: {segment[0].toFixed(2)}s</span>
            <span>End: {segment[1].toFixed(2)}s</span>
          </div>
          <Range
            values={segment}
            step={step}
            min={min}
            max={max}
            onChange={setSegment}
            renderTrack={({ props, children }) => {
              const [start, end] = segment;
              const percentStart = ((start - min) / (max - min)) * 100;
              const percentEnd = ((end - min) / (max - min)) * 100;
              return (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    background: `linear-gradient(to right, #eee ${percentStart}%, #E94F1D ${percentStart}%, #E94F1D ${percentEnd}%, #eee ${percentEnd}%)`,
                    borderRadius: "4px",
                    margin: "0 8px"
                  }}
                >
                  {children}
                </div>
              );
            }}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "24px",
                  width: "24px",
                  backgroundColor: "#E94F1D",
                  borderRadius: "50%",
                  boxShadow: "0 2px 6px #AAA"
                }}
              />
            )}
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>{min.toFixed(2)}</span>
            <span>{max.toFixed(2)}</span>
          </div>
        </div> 
      </div>
      <div className="flex gap-4 mt-4 w-full justify-between max-w-4xl pt-5 border-t border-gray-100">
        <button type="button" onClick={onBack} className="w-32 py-3 rounded-lg border border-[#E94F1D] text-[#E94F1D] font-bold text-sm bg-white shadow hover:bg-[#FFF3F1] transition">Back</button>
        <button type="button" onClick={onExtractFrames} className="w-48 py-3 rounded-lg bg-gradient-to-r from-[#E94F1D] to-[#F46036] text-white font-bold text-sm shadow-md hover:opacity-90 transition">Extract Frames</button>
      </div>
    </div>
  );
} 