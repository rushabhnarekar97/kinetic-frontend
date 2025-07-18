"use client";
import { useState } from "react";
import { FaChevronDown, FaDownload, FaShieldAlt } from "react-icons/fa";

const metadata = {
  title: "Settings | Kinetic AIU",
  description: "Manage your Kinetic AIU account settings and preferences.",
  openGraph: {
    title: "Settings | Kinetic AIU",
    description: "Manage your Kinetic AIU account settings and preferences.",
    url: "https://yourdomain.com/settings",
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
    title: "Settings | Kinetic AIU",
    description: "Manage your Kinetic AIU account settings and preferences.",
    images: ["/images/logo.png"],
  },
};

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      className={`w-10 h-6 flex items-center rounded-full transition-colors duration-200 focus:outline-none px-1 ${
        checked ? "bg-[#D7263D]" : "bg-gray-300"
      }`}
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
    >
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform duration-200 ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function SettingsPage() {
  // Notification toggles state
  const [feedbackNotif, setFeedbackNotif] = useState(true);
  const [uploadConf, setUploadConf] = useState(true);
  const [trainingRem, setTrainingRem] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="min-h-[80vh] w-full  flex flex-col gap-3 ">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
        Settings
      </h1>
      {/* Top Row: Notifications & Appearance */}
      <div className="flex flex-col lg:flex-row gap-3">
        {/* Notifications Card */}
        <div className="flex-1 bg-white rounded-xl border border-[#EBEBEB] p-6 min-w-[340px]">
          <h2 className="text-xl font-semibold mb-1">Notifications</h2>
          <p className="text-gray-500 mb-4 text-sm">
            Manage your personal information and view your progress
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Performance Updates */}
            <div className="flex-1">
              <div className="text-[#D7263D] font-semibold mb-2 uppercase text-sm tracking-wide">
                Performance Updates
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">
                        Feedback notifications
                      </div>
                      <div className="text-xs text-gray-500">
                        Get notified when AI feedback is ready
                      </div>
                    </div>
                    <Toggle
                      checked={feedbackNotif}
                      onChange={setFeedbackNotif}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Upload confirmations</div>
                      <div className="text-xs text-gray-500">
                        Confirm when videos are uploaded
                      </div>
                    </div>
                    <Toggle checked={uploadConf} onChange={setUploadConf} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Training reminders</div>
                      <div className="text-xs text-gray-500">
                        Daily practice reminders
                      </div>
                    </div>
                    <Toggle checked={trainingRem} onChange={setTrainingRem} />
                  </div>
                </div>
              </div>
            </div>
            {/* Communication */}
            <div className="flex-1">
              <div className="text-[#D7263D] font-semibold mb-2 uppercase text-sm tracking-wide">
                Communication
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Email notifications</div>
                      <div className="text-xs text-gray-500">
                        Receive updates via email
                      </div>
                    </div>
                    <Toggle checked={emailNotif} onChange={setEmailNotif} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Push notifications</div>
                      <div className="text-xs text-gray-500">
                        Browser push notifications
                      </div>
                    </div>
                    <Toggle checked={pushNotif} onChange={setPushNotif} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Newsletter</div>
                      <div className="text-xs text-gray-500">
                        Tips and updates from coaches
                      </div>
                    </div>
                    <Toggle checked={newsletter} onChange={setNewsletter} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Appearance & Language Card */}
        <div className="w-full lg:w-[420px] bg-white rounded-xl border border-[#EBEBEB] p-6 flex flex-col gap-4 min-w-[320px]">
          <h2 className="text-xl font-semibold mb-1">Appearance & Language</h2>
          <p className="text-gray-500 mb-4 text-sm">
            Customize how the app looks and feels
          </p>
          <div>
            <div className="text-[#D7263D] font-semibold mb-2 uppercase text-sm tracking-wide">
              Sport & Position
            </div>
            <label className="block text-sm font-medium mb-1">Language</label>
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] text-base focus:outline-none focus:ring-2 focus:ring-[#D7263D] appearance-none"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <FaChevronDown />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Privacy & Security */}
      <div className="bg-white rounded-xl border border-[#EBEBEB] p-6 flex flex-col">
        <h2 className="text-xl font-semibold mb-1">Privacy & Security</h2>
        <p className="text-gray-500 mb-4 text-sm">
          Manage your privacy and security settings
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Privacy Policy Card */}
          <div className="flex-1 min-w-[220px] bg-[#F9F9F9] rounded-lg border border-[#EBEBEB] flex items-center gap-4 p-5">
            <span className="bg-white rounded-lg p-3 flex items-center justify-center">
              <FaShieldAlt className="text-2xl text-[#D7263D]" />
            </span>
            <div>
              <div className="font-semibold">Privacy Policy</div>
              <div className="text-xs text-gray-500">
                View our privacy policy
              </div>
            </div>
          </div>
          {/* Download Data Card 1 */}
          <div className="flex-1 min-w-[220px] bg-[#F9F9F9] rounded-lg border border-[#EBEBEB] flex items-center gap-4 p-5">
            <span className="bg-white rounded-lg p-3 flex items-center justify-center">
              <FaDownload className="text-2xl text-[#D7263D]" />
            </span>
            <div>
              <div className="font-semibold">Download Data</div>
              <div className="text-xs text-gray-500">
                Export your personal data
              </div>
            </div>
          </div>
          {/* Download Data Card 2 */}
          <div className="flex-1 min-w-[220px] bg-[#F9F9F9] rounded-lg border border-[#EBEBEB] flex items-center gap-4 p-5">
            <span className="bg-white rounded-lg p-3 flex items-center justify-center">
              <FaDownload className="text-2xl text-[#D7263D]" />
            </span>
            <div>
              <div className="font-semibold">Download Data</div>
              <div className="text-xs text-gray-500">
                Export your personal data
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
