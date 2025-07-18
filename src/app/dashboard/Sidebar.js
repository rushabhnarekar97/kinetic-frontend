"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUpload,
  FiClock,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { RiHistoryFill } from "react-icons/ri";

const navLinks = [
  { name: "Dashboard", href: "/dashboard", icon: <RxDashboard size={20} /> },
  { name: "Upload Video", href: "/upload-video", icon: <FiUpload size={20} /> },
  { name: "History", href: "/history", icon: <RiHistoryFill size={20} /> },
];

export default function SidebarWrapper() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Hamburger always visible on mobile, top right for best UX */}
      <button
        className="fixed top-6 right-6 z-[100] md:hidden bg-[#E94F1D] text-white p-3 rounded-full shadow-lg"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <span className="sr-only">Open sidebar</span>
        <FiHome size={24} />
      </button>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}

function Sidebar({ open, setOpen }) {
  const pathname = usePathname();
  return (
    <aside
      className={`
      fixed left-0 top-0 z-40 w-64 h-screen bg-white shadow-md flex-col justify-between p-4
      hidden md:flex
      md:flex
      max-md:fixed max-md:z-50 max-md:top-0 max-md:left-0 max-md:h-full max-md:transform
      ${open ? "max-md:translate-x-0" : "max-md:-translate-x-full"}
      transition-transform duration-200
    `}
    >
      <div>
        {/* Logo and mobile toggle */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex justify-center mx-auto items-center">
            <img src="/images/logo.png" alt="Kinetic AIU" className="mr-2" />
          </div>
          <button className="md:hidden" onClick={() => setOpen(false)} aria-label="Close sidebar">
            <span className="sr-only">Close sidebar</span>✕
          </button>
        </div>
        {/* Navigation */}
        <nav className="space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center px-4 text-sm  min-h-[50px] rounded-lg font-medium transition ${
                pathname === link.href
                  ? "bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white"
                  : "text-[#787878] hover:bg-[#FFF3ED]"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.icon}
              <span className="ml-3">{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="space-y-2 mt-10">
        <Link
          href="/settings"
          className={`flex items-center min-h-[50px] px-4  rounded-lg transition ${
            pathname === "/settings"
              ? "bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white"
              : "text-gray-500 hover:bg-[#FFF3ED]"
          }`}
          onClick={() => setOpen(false)}
        >
          <FiSettings size={20} className="mr-3" />
          Settings
        </Link>
        <a
          href="#"
          className="flex items-center px-4 py-2 rounded-lg text-[#E94F1D] hover:bg-[#FFF3ED]"
        >
          <FiLogOut size={20} className="mr-3" />
          Logout
        </a>
      </div>
    </aside>
  );
}
