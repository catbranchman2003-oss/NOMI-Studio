"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-deep-fern">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #6BAE61 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-mint/50 text-xs tracking-[0.25em] uppercase font-sans font-medium mb-10"
        >
          N O M I &nbsp; S T U D I O
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-petal leading-[1.15] mb-8"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          Attention alone
          <br />
          <em className="text-blush not-italic">does not create loyalty.</em>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-mint/70 font-sans font-light text-base md:text-lg leading-relaxed mb-14 max-w-lg mx-auto"
        >
          We help creators build emotionally invested, long-term paying audiences
          through retention strategy, monetisation psychology, and fan loyalty systems.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <Link
            href="/apply"
            className="inline-block border border-blush/40 text-petal px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans font-medium hover:bg-blush/10 hover:border-blush/70 transition-all duration-500"
          >
            Apply to Work Together
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-mint/30 text-xs tracking-widest uppercase"
        >
          scroll
        </motion.p>
      </div>
    </section>
  );
}
