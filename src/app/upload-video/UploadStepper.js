export default function UploadStepper({ step }) {
  const steps = ["01", "02", "03", "04"];
  return (
    <div className="flex items-center px-8 pt-10 pb-6 border-b border-[#F3F3F3]">
      {steps.map((label, idx) => {
        const isCompleted = step > idx + 1;
        const isActive = step === idx + 1;
        // flex-1 for steps 1,2,3; not for last step
        const containerClass = idx !== steps.length - 1 ? "flex-1 flex items-center" : "flex items-center";
        return (
          <div key={label} className={containerClass}>
            {/* Step Circle */}
            <div
              className={
                `flex items-center justify-center w-[50px] h-[50px] rounded-full border-2 text-sm font-semibold transition-all duration-200 ` +
                (isCompleted
                  ? "bg-[#398C09] border-[#398C09] text-white"
                  : isActive
                  ? "bg-[#398C09] border-[#398C09] text-white"
                  : "bg-white border-[#E5E7EB] text-[#222]")
              }
            >
              {isCompleted ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10.5L9 14.5L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                label
              )}
            </div>
            {/* Connecting Line (except after last step) */}
            {idx !== steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-1 ${
                  step > idx + 1
                    ? "bg-[#398C09]"
                    : step === idx + 1
                    ? "bg-[#398C09]"
                    : "bg-[#E5E7EB]"
                }`}
                style={{ minWidth: 24 }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
} 