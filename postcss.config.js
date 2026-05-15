"use client";

import { AnimatePresence } from "framer-motion";
import { useForm } from "./FormContext";
import ProgressBar from "./ProgressBar";
import Step1AgeGate from "./Step1AgeGate";
import Step2CreatorInfo from "./Step2CreatorInfo";
import Step3Strategy from "./Step3Strategy";
import Step4Contact from "./Step4Contact";
import Step5Review from "./Step5Review";
import Step6Success from "./Step6Success";
import RejectionScreen from "./RejectionScreen";

export default function ApplicationForm() {
  const { step, isRejected } = useForm();

  if (isRejected) {
    return (
      <div className="min-h-screen bg-deep-fern flex items-center justify-center px-6">
        <div className="max-w-lg w-full">
          <RejectionScreen />
        </div>
      </div>
    );
  }

  if (step === 6) {
    return (
      <div className="min-h-screen bg-deep-fern flex items-center justify-center px-6">
        <div className="max-w-lg w-full">
          <Step6Success />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-fern px-6 py-20">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-16">
          <a
            href="/"
            className="text-mint/30 text-xs tracking-[0.2em] uppercase font-sans hover:text-mint/60 transition-colors duration-300"
          >
            ← NOMI Studio
          </a>
        </div>

        <ProgressBar />

        <AnimatePresence mode="wait">
          {step === 1 && <Step1AgeGate key="step1" />}
          {step === 2 && <Step2CreatorInfo key="step2" />}
          {step === 3 && <Step3Strategy key="step3" />}
          {step === 4 && <Step4Contact key="step4" />}
          {step === 5 && <Step5Review key="step5" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
