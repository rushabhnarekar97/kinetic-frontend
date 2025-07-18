"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children, activeTab, showTabs = false }) {
    const pathname = usePathname();
const isSuccessPage = pathname === "/auth/password-success" || pathname === "/auth/signup/profile-success";
  return (
    <div
      className="min-h-screen w-full flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-end bg-cover bg-center font-sans px-2 sm:px-0"
      style={{ backgroundImage: "url('/images/authbg.jpg')" }}
    >
 <div
      className={`w-full max-w-3xl min-w-[280px] sm:min-w-[320px] min-h-[calc(100vh-100px)] flex flex-col items-center justify-center sm:mr-20 mr-0 sm:p-0 p-2 sm:rounded-3xl rounded-2xl sm:shadow-xl shadow-md ${
        isSuccessPage ? "bg-gradient-to-r from-[#d7263d] to-[#f46036] opacity-90" : "bg-white"
      }`}
    >      
        {/* Logo */}
{!isSuccessPage && (
  <div className="flex flex-col items-center gap-2 mt-8 sm:mt-10 mb-6 sm:mb-8 w-full px-2">
    <img src="/images/logo.svg" alt="Kinetic AIU" className="h-12 sm:h-14 mb-2" />
    <span className="font-bold text-2xl sm:text-3xl text-gray-900 leading-tight text-center tracking-tight"></span>
  </div>
)}

        {/* Login/Signup buttons (tab style, but not tabs) */}
        {showTabs && (
          <div className="flex w-full max-w-xs mx-auto mb-6 sm:mb-8 bg-[#fff] rounded-xl border border-[#EBEBEB] p-1 sm:p-1.5">
            <Link href="/auth/login" legacyBehavior>
              <a
                className={`flex-1 py-2 rounded-xl text-center font-medium transition-all text-sm sm:text-base ${
                  activeTab === "login"
                    ? "bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white"
                    : "text-gray-900"
                } ${activeTab === "login" ? "" : "hover:bg-gray-200"}`}
                style={{ transition: "background 0.2s" }}
              >
                Login
              </a>
            </Link>
            <Link href="/auth/signup/role" legacyBehavior>
              <a
                className={`flex-1 py-2 rounded-xl text-center font-medium transition-all text-sm sm:text-base ${
                  activeTab === "signup"
                    ? "bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white"
                    : "text-gray-900"
                } ${activeTab === "signup" ? "" : "hover:bg-gray-200"}`}
                style={{ transition: "background 0.2s" }}
              >
                Sign Up
              </a>
            </Link>
          </div>
        )}
        {/* Main content */}
        <div className="w-full max-w-xl flex flex-col items-center justify-center pb-8 sm:pb-10 px-1 sm:px-0">
          {children}
        </div>
      </div>
    </div>
  );
}
