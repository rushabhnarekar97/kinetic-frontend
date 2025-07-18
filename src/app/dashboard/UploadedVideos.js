'use client';

import { useState } from "react";
import { FiPlayCircle, FiCalendar } from "react-icons/fi";
import { IoBasketballOutline } from "react-icons/io5";

const videos = [
  {
    title: "Soccer Dribbling Skills Workshop",
    sport: "Soccer",
    date: "30 June",
    img: "/images/authbg.jpg",
    videoUrl: "/videos/soccer.mp4", // make sure this file exists in /public/videos/
  },
  {
    title: "Tennis Serve Technique Session",
    sport: "Tennis",
    date: "01 July",
    img: "/images/authbg.jpg",
    videoUrl: "/videos/tennis.mp4",
  },
  {
    title: "Swimming Stroke Improvement Clinic",
    sport: "Swimming",
    date: "03 July",
    img: "/images/authbg.jpg",
    videoUrl: "/videos/swimming.mp4",
  },
  {
    title: "Volleyball Team Strategy Meeting",
    sport: "Volleyball",
    date: "05 July",
    img: "/images/authbg.jpg",
    videoUrl: "/videos/volleyball.mp4",
  },
];

export default function UploadedVideos() {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <div className="bg-white rounded-lg border border-[#EBEBEB] p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold text-base md:text-lg">
          Uploaded Videos
        </div>
        <button className="text-[#E94F1D] text-sm font-semibold hover:underline border border-gray-200 p-2 px-4 rounded-4xl">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {videos.map((video, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow group relative"
          >
            {playingIndex === i ? (
              <video
                src={video.videoUrl}
                controls
                autoPlay
                className="w-full min-h-[240px] object-cover"
              />
            ) : (
              <>
                <img
                  src={video.img}
                  alt={video.title}
                  className="w-full min-h-[240px] object-cover group-hover:scale-105 transition"
                />
                <button
                  onClick={() => setPlayingIndex(i)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/1 bg-white/80 rounded-full p-2"
                >
                  <FiPlayCircle className="text-[#E94F1D] text-3xl" />
                </button>
              </>
            )}
            <div className="p-3 bg-white">
              <div className="font-semibold text-black text-sm mb-1">
                {video.title}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                <IoBasketballOutline size={16} className="text-[#E94F1D]" />
                {video.sport}
                <FiCalendar size={16} className="text-[#E94F1D]" /> {video.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
