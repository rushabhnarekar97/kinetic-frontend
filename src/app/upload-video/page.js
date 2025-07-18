"use client";

import { useState } from "react";
import AIAnalysis from "./AIAnalysis";
import UploadStepper from "./UploadStepper";
import UploadVideoForm from "./UploadVideoForm";

// (metadata can remain if you're using it in a server layout or for static generation)
const metadata = {
  title: "Upload Video | Kinetic AIU",
  description: "Upload your training videos for AI-powered performance analysis on Kinetic AIU.",
  openGraph: {
    title: "Upload Video | Kinetic AIU",
    description: "Upload your training videos for AI-powered performance analysis on Kinetic AIU.",
    url: "https://yourdomain.com/upload-video",
    siteName: "Kinetic AIU",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Kinetic AIU Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upload Video | Kinetic AIU",
    description: "Upload your training videos for AI-powered performance analysis on Kinetic AIU.",
    images: ["/images/logo.png"],
  },
};

export default function UploadVideoPage() {
  const [showAIAnalysis, setShowAIAnalysis] = useState(false);
  return (
    <>
      <h1 className="text-xl xs:text-base md:text-2xl font-semibold text-gray-900 xs:mt-2 xs:mb-1 mt-0 mb-0">
        Upload Video
      </h1>
      <span className="text-sm xs:text-xs xs:mb-2 mb-0">Get AI-powered analysis of your performance</span>
      <div className="w-full xs:p-0 p-2">
        {!showAIAnalysis && (
          <div className="bg-white py-10 xs:py-4 my-5 xs:my-2 rounded-lg flex items-center justify-center w-full xs:rounded-md xs:shadow-none shadow">
            <div className="w-full max-w-4xl bg-white rounded-2xl xs:rounded-md border border-[#F3F3F3] p-0 sm:p-0 flex flex-col xs:p-2 xs:border xs:max-w-full">
              <UploadVideoForm onExtractFrames={() => setShowAIAnalysis(true)} />
            </div>
          </div>
        )}
        {showAIAnalysis && (
          <div className="bg-white py-5 xs:py-4 my-5 xs:my-2 rounded-lg flex items-center px-5 w-full xs:rounded-md xs:shadow-none shadow max-w-full">
            <AIAnalysis />
          </div>
        )}
      </div>
    </>
  );
}
