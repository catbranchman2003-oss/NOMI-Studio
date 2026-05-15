"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "./FormContext";
import { supabase } from "@/lib/supabase";

type ReviewRow = { label: string; value: string | undefined };

function ReviewSection({ title, rows }: { title: string; rows: ReviewRow[] }) {
  return (
    <div className="space-y-4">
      <p className="text-mint/40 text-xs tracking-[0.2em] uppercase font-sans border-b border-fern/15 pb-3">
        {title}
      </p>
      {rows.map((row, i) => (
        <div key={i} className="grid grid-cols-[160px_1fr] gap-4">
          <span className="text-mint/40 font-sans font-light text-xs leading-relaxed pt-0.5">
            {row.label}
          </span>
          <span className="text-petal/80 font-sans font-light text-sm leading-relaxed">
            {row.value || <span className="text-mint/25 italic">Not provided</span>}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Step5Review() {
  const { formData, setStep, setIsSubmitting, isSubmitting } = useForm();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      const { error: dbError } = await supabase
        .from("submissions")
        .insert([{ ...formData, submitted_at: new Date().toISOString() }]);

      if (dbError) throw dbError;

      setStep(6);
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-10"
    >
      <div>
        <h2 className="font-serif text-petal text-2xl md:text-3xl mb-3">
          Review your application.
        </h2>
        <p className="text-mint/50 font-sans font-light text-sm leading-relaxed">
          Take a moment to review before submitting. Once sent, our team will
          review your application manually.
        </p>
      </div>

      <div className="space-y-8">
        <ReviewSection
          title="Creator Information"
          rows={[
            { label: "Creator name", value: formData.creator_name },
            { label: "Platform links", value: formData.platform_links },
            { label: "Audience size", value: formData.audience_size },
            { label: "Subscription price", value: formData.subscription_price },
            { label: "Biggest challenge", value: formData.biggest_challenge },
            { label: "Want help with", value: formData.want_help_with },
          ]}
        />
        <ReviewSection
          title="Strategy"
          rows={[
            { label: "Audience description", value: formData.audience_description },
            { label: "Limiting growth", value: formData.limiting_growth },
            { label: "Struggling with", value: formData.struggling_with },
            { label: "Why NOMI", value: formData.why_nomi },
          ]}
        />
        <ReviewSection
          title="Contact"
          rows={[
            { label: "Email", value: formData.email },
            { label: "Instagram", value: formData.instagram },
            { label: "Telegram", value: formData.telegram },
            { label: "Discord", value: formData.discord },
          ]}
        />
      </div>

      {error && <p className="text-rose/70 text-xs font-sans">{error}</p>}

      <div className="flex gap-6 items-center">
        <button
          onClick={() => setStep(4)}
          disabled={isSubmitting}
          className="text-mint/30 text-xs tracking-[0.1em] uppercase font-sans hover:text-mint/60 transition-colors duration-300 disabled:opacity-30"
        >
          ← Edit
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="border border-blush/40 text-petal px-10 py-3.5 text-xs tracking-[0.15em] uppercase font-sans font-medium hover:bg-blush/8 hover:border-blush/70 transition-all duration-500 disabled:opacity-40"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </motion.div>
  );
}
