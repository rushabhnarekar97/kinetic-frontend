import { MdOutlineVideoSettings } from "react-icons/md";

export default function Step1VideoDetails({ videoTitle, setVideoTitle, sportType, setSportType, discipline, setDiscipline, skill, setSkill, onNext }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 xs:px-2 sm:px-8 py-10 xs:py-4 w-full">
      {/* Video Icon */}
      <span className="mb-4 flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFF3F1]">
      <MdOutlineVideoSettings size={24} className="text-[#CB282A]"/>
      </span>
      <h2 className="text-xl xs:text-base sm:text-2xl font-bold text-center mb-2">Video details</h2>
      <p className="text-gray-600 text-center mb-8 text-sm xs:text-xs">Get AI-powered analysis of your performance</p>
      <form className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-3 mb-8 xs:mb-4" onSubmit={e => { e.preventDefault(); onNext(); }}>
        <div className="flex flex-col">
          <label className="mb-2 text-sm xs:text-xs font-medium text-gray-700">Video title</label>
          <input type="text" placeholder="Enter video title" value={videoTitle} onChange={e => setVideoTitle(e.target.value)} className="px-4 xs:px-2 py-3 xs:py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] text-base xs:text-sm focus:outline-none focus:ring-2 focus:ring-[#398C09] placeholder:text-gray-400" />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm xs:text-xs font-medium text-gray-700">Sport Type</label>
          <select value={sportType} onChange={e => setSportType(e.target.value)} className="px-4 xs:px-2 py-3 xs:py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] text-base xs:text-sm focus:outline-none focus:ring-2 focus:ring-[#398C09]">
            <option value="">Enter sport Type</option>
            <option value="Cricket">Cricket</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Tennis">Tennis</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm xs:text-xs font-medium text-gray-700">Discipline</label>
          <select value={discipline} onChange={e => setDiscipline(e.target.value)} className="px-4 xs:px-2 py-3 xs:py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] text-base xs:text-sm focus:outline-none focus:ring-2 focus:ring-[#398C09]">
            <option value="Bowling">Bowling</option>
            <option value="Batting">Batting</option>
            <option value="Fielding">Fielding</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm xs:text-xs font-medium text-gray-700">Skill</label>
          <select value={skill} onChange={e => setSkill(e.target.value)} className="px-4 xs:px-2 py-3 xs:py-2 rounded-lg border border-[#EBEBEB] bg-[#F9F9F9] text-sm focus:outline-none focus:ring-2 focus:ring-[#398C09]">
            <option value="Bowling">Bowling</option>
            <option value="Spin">Spin</option>
            <option value="Pace">Pace</option>
          </select>
        </div>
      </form>
      <button type="button" onClick={onNext} className="w-full xs:w-full max-w-xs py-3 rounded-lg bg-gradient-to-r from-[#E94F1D] to-[#F46036] text-white font-bold text-sm xs:text-xs shadow-md hover:opacity-90 transition">Next</button>
    </div>
  );
} 