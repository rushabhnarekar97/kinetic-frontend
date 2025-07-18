"use client";
import AuthLayout from "../../components/AuthLayout";

export default function SignupSuccessPage() {
  return (
    <AuthLayout activeTab="signup">
      <div className="flex flex-col items-center justify-center w-full h-full py-10 sm:py-16 px-2">
        <div className="bg-gradient-to-r from-[#d7263d] to-[#f46036] bg-opacity-90 rounded-3xl px-4 sm:px-10 py-10 sm:py-14 flex flex-col items-center w-full max-w-xl shadow-lg">
          <h2 className="font-bold text-white text-2xl sm:text-3xl mb-2 text-center">Profile Updated Successfully!</h2>
          <p className="text-white text-base sm:text-lg text-center">Your profile has been created and updated successfully.</p>
        </div>
      </div>
    </AuthLayout>
  );
} 