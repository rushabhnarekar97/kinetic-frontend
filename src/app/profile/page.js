"use client";
import { useState } from "react";
import {
  FaRegEdit,
  FaUser,
  FaKey,
  FaUserAlt,
  FaEnvelope,
  FaRunning,
  FaBullseye,
  FaSave,
  FaCamera,
} from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [form, setForm] = useState({
    firstName: "Lincoln",
    lastName: "Herwitz",
    email: "LincolnHerwitz@gmail.com",
    sport: "Football",
    position: "Running Back",
    movementFocus: ["Striking mechanics", "Serve technique"],
    primaryGoal: "-",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
        Profile
      </h1>
      <span className="text-sm">
        Manage your personal information and view your progress
      </span>
      <div className="w-full bg-[#FAF6F5] flex flex-col items-center py-8 pt-4 pb-0">
        <div className="w-full bg-white rounded-xl border border-[#EBEBEB] p-3 md:p-4 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaUser className="text-[#E94F1D]" /> Profile Information
            </h2>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E94F1D] text-[#E94F1D] font-medium hover:bg-[#FFF3ED] text-sm transition"
              onClick={() => setEditMode((v) => !v)}
            >
              <FaRegEdit /> Edit Profile
            </button>
          </div>

          <div className="gap-8 mb-8">
            <div className="flex items-center border-b border-gray-100 pb-4 mb-4 md:items-start gap-2 min-w-[180px]">
              <div className="relative">
                <img
                  src="/images/authbg.jpg"
                  alt="Profile"
                  className="h-24 w-24 rounded-xl object-cover border-4 border-[#E94F1D]"
                />
                <button className="absolute -bottom-2 right-7 bg-[#E94F1D] text-white p-2 rounded-full border-2 border-white shadow">
                  <FaCamera size={16} />
                </button>
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold mt-2">
                  Lincoln Herwitz
                </div>
                <div className="text-[#E94F1D] text-sm">Athlete</div>
                <div className="text-xs text-gray-400">
                  Member since January 2023
                </div>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs font-bold text-[#E94F1D] mb-1">
                  ABOUT YOU
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="relative w-full">
                    <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      disabled={!editMode}
                      className="pl-10 w-full rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036]"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="relative w-full">
                    <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      disabled={!editMode}
                      className="pl-10 w-full rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036]"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="relative w-full mb-3">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled
                    className="pl-10 w-full rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036]"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-[#E94F1D] mb-1">
                  SPORT & POSITION
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="relative w-full">
                    <FaRunning className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      name="sport"
                      value={form.sport}
                      onChange={handleChange}
                      disabled={!editMode}
                      className="pl-10 w-full rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036]"
                    >
                      <option>Football</option>
                      <option>Tennis</option>
                      <option>Swimming</option>
                      <option>Volleyball</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    disabled={!editMode}
                    className="w-full rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036]"
                    placeholder="Position/Role"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <div className="text-xs font-bold text-[#E94F1D] mb-1">
                  MOVEMENT FOCUS & GOAL
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {form.movementFocus.map((focus, idx) => (
                    <span
                      key={idx}
                      className="bg-[#F9F9F9] border border-[#EBEBEB] rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
                <div className="mb-2 relative">
                  <FaBullseye className="absolute left-3 top-3 text-gray-400" />
                  <div className="pl-8 w-full rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] px-3 py-2 text-base">
                    {form.primaryGoal}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Change Password Section */}
        <div className="w-full bg-white rounded-xl border border-[#EBEBEB] p-3 md:p-4 mt-2">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <FaKey className="text-[#E94F1D]" /> Change Password
          </h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
  {["current", "new", "confirm"].map((type) => (
    <div key={type}>
      <label className="block text-sm font-medium mb-1">
        {type === "current"
          ? "Current password"
          : type === "new"
          ? "New password"
          : "Confirm new password"}
      </label>
      <div className="relative">
        <input
          type={showPassword[type] ? "text" : "password"}
          name={`${type}Password`}
          value={form[`${type}Password`]}
          onChange={handlePasswordChange}
          className="w-full rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#f46036] pr-10"
          placeholder="************"
        />
        <button
          type="button"
          className="absolute right-2 top-2 text-gray-400"
          onClick={() =>
            setShowPassword((p) => ({ ...p, [type]: !p[type] }))
          }
        >
          {!showPassword[type] ? (
            <FaEyeSlash className="w-5 h-5" />
          ) : (
            <FaEye className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  ))}

  <div className="col-span-1 md:col-span-3 flex justify-end gap-3 mt-4">
    <button
      type="button"
      className="flex items-center gap-2 px-6 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white font-medium hover:bg-gray-100 transition"
    >
      <MdCancel /> Cancel
    </button>
    <button
      type="submit"
      className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#d7263d] to-[#f46036] text-white font-semibold hover:opacity-90 transition"
    >
      <FaSave /> Change Password
    </button>
  </div>
</form>

        </div>
      </div>
    </>
  );
}
