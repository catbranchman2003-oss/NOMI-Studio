"use client";

import { useForm } from "./FormContext";

const TOTAL_STEPS = 5; // steps 1-5 (6 = success)

export default function ProgressBar() {
  const { step } = useForm();
  const progress = Math.min((step / TOTAL_STEPS) * 100, 100);

  return (
    <div className="w-full mb-12">
      <div className="flex justify-between items-center mb-3">
        <span className="text-mint/40 text-xs tracking-[0.2em] uppercase font-sans">
          Application
        </span>
        <span className="text-mint/40 text-xs font-sans">
          {Math.min(step, TOTAL_STEPS)} / {TOTAL_STEPS}
        </span>
      </div>
      <div className="w-full h-px bg-fern/20">
        <div
          className="h-px bg-mint/60 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
