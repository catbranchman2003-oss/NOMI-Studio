"use client";

import FadeIn from "@/components/ui/FadeIn";
import Divider from "@/components/ui/Divider";

const weWorkWith = [
  "Value long-term audience loyalty over short-term spikes",
  "Care about emotional connection with their audience",
  "Want sustainable, compounding monetisation",
  "Are ready to think strategically about their positioning",
  "Understand that retention is more valuable than virality",
];

const notFocusedOn = [
  "Viral growth hacks or algorithm obsession",
  "Clipping farms or generic content volume",
  "Fake flex culture or inflated numbers",
  "Short-term traffic with no emotional depth",
  "Creators not ready to invest in strategy",
];

export default function Positioning() {
  return (
    <section className="bg-deep-fern py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-20">
          <p className="text-mint/40 text-xs tracking-[0.25em] uppercase font-sans mb-6">
            Who we work with
          </p>
          <h2 className="font-serif text-petal leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Strategy for creators who think{" "}
            <em className="text-blush">beyond the algorithm.</em>
          </h2>
        </FadeIn>

        <Divider className="mb-20" />

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <FadeIn delay={0.1}>
            <p className="text-sage/70 text-xs tracking-[0.2em] uppercase font-sans mb-8">
              We work best with creators who
            </p>
            <ul className="space-y-5">
              {weWorkWith.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-mint/40 mt-1 text-xs">—</span>
                  <span className="text-petal/80 font-sans font-light text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right */}
          <FadeIn delay={0.2}>
            <p className="text-rose/60 text-xs tracking-[0.2em] uppercase font-sans mb-8">
              We are not focused on
            </p>
            <ul className="space-y-5">
              {notFocusedOn.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-blush/30 mt-1 text-xs">—</span>
                  <span className="text-petal/40 font-sans font-light text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
