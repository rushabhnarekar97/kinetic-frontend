"use client";
import React, { useState, useRef, useEffect } from "react";
import { CiSearch, CiFilter } from "react-icons/ci";
import {
  FiPlayCircle,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { IoBasketballOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const sampleVideos = [
  {
    title: "Basketball Free Throw Practice",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    img: "/images/authbg.jpg",
    sport: "Basketball",
    date: "28 June",
    rating: 4.2,
    comment: "Good tempo overall. Let's challenge..",
    tag: "Good",
  },
  {
    title: "Football Dribbling Analysis",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    img: "/images/authbg.jpg",
    sport: "Football",
    date: "27 June",
    rating: 3.8,
    comment: "Decent control, needs more speed.",
    tag: "Average",
  },
  {
    title: "Basketball Free Throw Practice 2",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    img: "/images/authbg.jpg",
    sport: "Basketball",
    date: "28 June",
    rating: 4.7,
    comment: "Strong mechanics and great focus.",
    tag: "Excellent",
  },
  {
    title: "Football Passing Drill",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    img: "/images/authbg.jpg",
    sport: "Football",
    date: "27 June",
    rating: 2.4,
    comment: "Poor vision and communication.",
    tag: "Weak",
  },
];

export default function HistoryPage() {
  const [videos] = useState(sampleVideos);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sportFilter, setSportFilter] = useState("All Sports");
  const [scoreRange, setScoreRange] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [fromDate, setFromDate] = useState("2025-09-14");
  const [toDate, setToDate] = useState("2025-09-14");

  // Ref for filter menu
  const filterMenuRef = useRef(null);

  // Close filter menu on outside click
  useEffect(() => {
    if (!showFilters) return;
    function handleClickOutside(event) {
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target)
      ) {
        setShowFilters(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilters]);

  const filterVideos = videos.filter((video) => {
    const matchSearch = video.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchSport =
      sportFilter === "All Sports" || video.sport === sportFilter;
    const matchScore = (() => {
      if (scoreRange === "All") return true;
      if (scoreRange === "0-50") return video.rating * 20 <= 50;
      if (scoreRange === "51-75")
        return video.rating * 20 > 50 && video.rating * 20 <= 75;
      if (scoreRange === "76-100") return video.rating * 20 > 75;
      return true;
    })();
    return matchSearch && matchSport && matchScore;
  });

  const clearFilters = () => {
    setSportFilter("All Sports");
    setScoreRange("All");
    setFromDate("");
    setToDate("");
  };

  const activeFilterCount = [
    sportFilter !== "All Sports",
    scoreRange !== "All",
    fromDate,
    toDate,
  ].filter(Boolean).length;

  return (
    <div className="">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
        Feedback History
      </h1>
      <span className="text-xs sm:text-sm">
        Get AI-powered analysis of your performance
      </span>

      <div className="bg-white rounded-lg w-full shadow mt-4">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row border-b border-gray-100 p-2 sm:p-4 flex-wrap justify-between gap-2 items-center">
          <div className="flex gap-2 items-center relative w-full sm:w-auto">
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-[#EBEBEB] rounded-md px-3 pl-10 py-2 text-xs sm:text-sm w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <CiSearch className="absolute top-2.5 left-3 text-base sm:text-lg" />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1 bg-white text-black px-3 sm:px-4 py-1.5 rounded-md hover:opacity-70 border border-[#EBEBEB] transition text-xs sm:text-sm"
            >
              <CiFilter size={20} className="sm:text-[22px]" />
            </button>

            {showFilters && (
              <div
                ref={filterMenuRef}
                className="fixed sm:absolute bottom-0 sm:top-12 left-0 right-0 sm:left-auto sm:right-0 bg-white rounded-t-md sm:rounded-md border border-[#EBEBEB] shadow-lg w-full sm:w-[400px] h-[90vh] sm:h-[360px] p-4 space-y-4 z-50 overflow-y-auto transition-all"
              >
                {/* Header with title and close icon */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <h3 className="font-semibold text-md">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <RxCross2 className="text-gray-500 hover:text-gray-700 w-5 h-5" />
                  </button>
                </div>

                {/* Date Range Filter */}
                <div>
                  <label className="text-xs block mb-1">Date</label>
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <input
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="w-full border border-[#EBEBEB] rounded-lg p-2 sm:p-3 text-xs"
                    />
                    <input
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="w-full border border-[#EBEBEB] rounded-lg p-2 sm:p-3 text-xs"
                    />
                  </div>
                </div>

                {/* Sport Filter */}
                <div>
                  <label className="text-xs block mb-1">Sport</label>
                  <select
                    value={sportFilter}
                    onChange={(e) => setSportFilter(e.target.value)}
                    className="w-full border border-[#EBEBEB] rounded-lg p-2 text-xs sm:text-sm"
                  >
                    <option>All Sports</option>
                    <option>Football</option>
                    <option>Basketball</option>
                    <option>Tennis</option>
                  </select>
                </div>

                {/* Score Range Filter */}
                <div>
                  <label className="text-xs block mb-1">Score Range</label>
                  <select
                    value={scoreRange}
                    onChange={(e) => setScoreRange(e.target.value)}
                    className="w-full border border-[#EBEBEB] rounded-lg p-2 text-xs sm:text-sm"
                  >
                    <option value="All">All</option>
                    <option value="0-50">0-50</option>
                    <option value="51-75">51-75</option>
                    <option value="76-100">76-100</option>
                  </select>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-2 gap-2">
                  <button
                    onClick={clearFilters}
                    className="text-xs text-gray-600 hover:underline border w-full sm:w-1/2 p-3 rounded-lg border-[#EBEBEB]"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white p-3 py-3 rounded-lg w-full sm:w-1/2 text-xs"
                  >
                    Apply Filter
                    {activeFilterCount > 0 && ` (${activeFilterCount})`}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-wrap w-full sm:w-auto items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
            <label className="text-xs sm:text-sm">Sort By</label>
            <select
              value={sportFilter}
              onChange={(e) => setSportFilter(e.target.value)}
              className="border border-[#EBEBEB] rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Sports</option>
              <option>Football</option>
              <option>Basketball</option>
              <option>Tennis</option>
            </select>
            <select
              value={scoreRange}
              onChange={(e) => setScoreRange(e.target.value)}
              className="border border-[#EBEBEB] rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">Score range</option>
              <option value="0-50">0-50</option>
              <option value="51-75">51-75</option>
              <option value="76-100">76-100</option>
            </select>
            <select className="border border-[#EBEBEB] rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Today</option>
              <option>Yesterday</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-2 sm:p-4">
          {filterVideos.length === 0 ? (
            <div className="col-span-full flex flex-col items-center mx-auto text-center py-8">
              <img src="/images/nofeed.svg" alt="Video Preview" className="" />{" "}
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                No feedback found
              </h2>
              <p className="text-sm text-gray-500">
                No feedback has been added to this video yet. Please check back
                soon.
              </p>
            </div>
          ) : (
            filterVideos.map((video, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow group relative bg-white"
              >
                {playingIndex === i ? (
                  <video
                    src={video.videoUrl}
                    controls
                    autoPlay
                    className="w-full min-h-[180px] sm:min-h-[240px] object-cover"
                  />
                ) : (
                  <>
                    <img
                      src={video.img}
                      alt={video.title}
                      className="w-full min-h-[180px] sm:min-h-[240px] object-cover group-hover:scale-105 transition"
                    />
                    <button
                      onClick={() => setPlayingIndex(i)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/1 bg-white/80 rounded-full p-2"
                    >
                      <FiPlayCircle className="text-[#E94F1D] text-2xl sm:text-3xl" />
                    </button>
                  </>
                )}

                <div className="p-2 sm:p-4 space-y-1 sm:space-y-2">
                  <div className="font-semibold text-xs sm:text-sm md:text-base">
                    {video.title}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-black mt-1">
                    <IoBasketballOutline className="text-[#E94F1D]" size={16} />
                    {video.sport}
                    <FiCalendar className="text-[#E94F1D]" size={16} />
                    {video.date}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-[#398C09] text-white px-2 py-0.5 rounded text-xs font-semibold">
                      {video.tag}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <GoStarFill className="text-[#FFCA28]" size={12} /> (
                      {video.rating}/5)
                    </span>
                  </div>
                  <div className="text-xs text-gray-700 mt-1">
                    "{video.comment}"
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <ol className="flex flex-wrap justify-center sm:justify-end text-xs font-medium space-x-1 p-2 sm:p-4 pt-3 ">
          <li>
            <a
              href="/?page=1"
              className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded hover:bg-gray-100"
            >
              <FiChevronLeft className="w-4 h-4" />
            </a>
          </li>
          {[1, 2, 3, 4].map((n) => (
            <li key={n}>
              <a
                href={`/?page=${n}`}
                className={`block w-8 h-8 text-center border border-gray-100 rounded leading-8 hover:bg-gray-100 ${
                  n === 2 ? "bg-[#CB282A] text-white" : ""
                }`}
              >
                {n}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/?page=3"
              className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded hover:bg-gray-100"
            >
              <FiChevronRight className="w-4 h-4" />
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
