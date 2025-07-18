'use client'
import { useState } from "react";
import UploadStepper from "./UploadStepper";
import Step1VideoDetails from "./Step1VideoDetails";
import Step2UploadFile from "./Step2UploadFile";
import Step3Review from "./Step3Review";
import Step4Success from "./Step4Success";

export default function UploadVideoForm({ onExtractFrames }) {
  const [step, setStep] = useState(1);
  const [videoTitle, setVideoTitle] = useState("");
  const [sportType, setSportType] = useState("");
  const [discipline, setDiscipline] = useState("Bowling");
  const [skill, setSkill] = useState("Bowling");
  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState("");
  const [step2SportType, setStep2SportType] = useState("");
  const [hideStepper, setHideStepper] = useState(false);

  return (
    <div className="w-full">
      {(step !== 4 || !hideStepper) && <UploadStepper step={step} />}
      {step === 1 && (
        <Step1VideoDetails
          videoTitle={videoTitle}
          setVideoTitle={setVideoTitle}
          sportType={sportType}
          setSportType={setSportType}
          discipline={discipline}
          setDiscipline={setDiscipline}
          skill={skill}
          setSkill={setSkill}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <Step2UploadFile
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
          videoFile={videoFile}
          setVideoFile={setVideoFile}
          videoURL={videoURL}
          setVideoURL={setVideoURL}
          step2SportType={step2SportType}
          setStep2SportType={setStep2SportType}
        />
      )}
      {step === 3 && <Step3Review onNext={() => setStep(4)} onBack={() => setStep(2)} />}
      {step === 4 && <Step4Success onDone={() => setStep(1)} onBack={() => setStep(3)} setHideStepper={setHideStepper} onExtractFrames={onExtractFrames} />}
    </div>
  );
} 