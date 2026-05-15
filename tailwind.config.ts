"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Step6Success() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-10 py-8"
    >
      {/* Subtle mark */}
      <div className="w-8 h-px bg-mint/40" />

      <div className="space-y-5">
        <p className="text-mint/40 text-xs tracking-[0.25em] uppercase font-sans">
          Application received
        </p>
        <h2 className="font-serif text-petal leading-tight"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
          Thank you for applying.
        </h2>
        <p className="text-mint/70 font-sans font-light text-base leading-relaxed max-w-md">
          NOMI Studio reviews every application manually to ensure genuine
          alignment and fit. We do not rush this process.
        </p>
        <p className="text-mint/50 font-sans font-light text-sm leading-relaxed max-w-md">
          If there is alignment between your goals and our strategic focus,
          someone from our team will reach out through your preferred contact
          within a few days.
        </p>
        <p className="text-blush/50 font-serif italic text-base">
          &ldquo;Quiet intelligence.&rdquo;
        </p>
      </div>

      <div className="pt-4">
        <Link
          href="/"
          className="text-mint/30 text-xs tracking-[0.15em] uppercase font-sans hover:text-mint/60 transition-colors duration-300"
        >
          ← Return to NOMI Studio
        </Link>
      </div>
    </motion.div>
  );
}
