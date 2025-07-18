'use client'
import { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Header() {
  const [openNotif, setOpenNotif] = useState(false);
  const notifRef = useRef(null);
  const router = useRouter();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setOpenNotif(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between bg-white px-4 min-h-[80px] shadow-xs w-full">
      {/* Left: Greeting */}
      <div>
        <div className="text-black font-semibold text-base md:text-md">
          Good morning, Lincoln! <span className="ml-1">👋</span>
        </div>
        <div className="text-xs text-gray-400 font-normal">
          Here's your performance overview
        </div>
      </div>

      {/* Right: Notification + Profile */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Notification Button */}
        <div className="relative" ref={notifRef}>
          <button
            type="button"
            onClick={() => setOpenNotif(!openNotif)}
            className="relative p-2 rounded-lg hover:bg-gray-100 transition border border-[#EBEBEB]"
          >
            <IoIosNotificationsOutline className="text-2xl text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* Notification Dropdown */}
          {openNotif && (
            <div className="absolute right-0 mt-2 w-[350px] bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
              {/* Gradient Header */}
              <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-[#E94F1D] to-[#F15A29]">
                <span className="text-white font-semibold text-sm">Notification</span>
                <button
                  onClick={() => setOpenNotif(false)}
                  className="text-white text-2xl hover:opacity-80 focus:outline-none"
                  aria-label="Close notification menu"
                >
                  &times;
                </button>
              </div>
              {/* Notification List */}
              <div className="max-h-96 overflow-y-auto bg-white px-2 py-2">
                {[...Array(6)].map((_, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition mb-1">
                    <img
                      src="/images/logo.png"
                      alt="notif-thumb"
                      className="h-10 w-10 rounded-md object-cover border border-gray-200"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-800 font-medium truncate">
                        Tell us about the Nirvika Stainless Steel Servi... you recently bought.
                      </div>
                      <div className="text-xs text-gray-400 mt-1">15 Feb, 2025</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/profile')}>
          <img
            src="/images/logo.png"
            alt="User"
            className="h-[48px] w-[48px] object-cover object-center rounded-full border-2 border-[#E94F1D]"
          />
          <div>
            <div className="font-semibold hover:underline hover:text-[#E94F1D] text-black text-sm md:text-base">
              Lincoln Herwitz
            </div>
            <div className="text-xs text-[#E94F1D]">Athlete</div>
          </div>
        </div>
      </div>
    </header>
  );
}
