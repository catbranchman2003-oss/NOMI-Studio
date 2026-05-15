"use client";

import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

const beliefs = [
  {
    statement: "Attention is not loyalty.",
    detail: "Views and traffic do not automatically create emotional investment.",
  },
  {
    statement: "Retention compounds income.",
    detail: "Creators who keep fans earn more consistently than those who constantly replace them.",
  },
  {
    statement: "Fans spend emotionally.",
    detail: "People spend for connection, familiarity, and identity — rarely for content alone.",
  },
  {
    statement: "Branding affects monetisation.",
    detail: "The strongest creators feel emotionally recognisable. Identity directly impacts revenue.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-petal py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left — sticky philosophy */}
          <FadeIn className="md:sticky md:top-32">
            <p className="text-sage/60 text-xs tracking-[0.25em] uppercase font-sans mb-6">
              How we think
            </p>
            <h2
              className="font-serif text-deep-fern leading-tight mb-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Quiet intelligence.
              <br />
              <em className="text-rose">Measured strategy.</em>
            </h2>
            <p className="text-fern/70 font-sans font-light text-sm leading-relaxed mb-12">
              NOMI Studio exists at the intersection of psychology and creator
              strategy. We believe the most sustainable monetisation systems are
              built on emotional intelligence, not algorithmic obsession.
            </p>
            <Link
              href="/apply"
              className="inline-block border border-rose/40 text-rose px-8 py-3.5 text-xs tracking-[0.15em] uppercase font-sans font-medium hover:bg-rose/5 hover:border-rose/70 transition-all duration-500"
            >
              Apply to Work Together
            </Link>
          </FadeIn>

          {/* Right — beliefs */}
          <div className="space-y-0">
            {beliefs.map((b, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="py-10 border-b border-deep-fern/10 last:border-b-0">
                  <h3 className="font-serif text-deep-fern text-lg md:text-xl mb-3">
                    {b.statement}
                  </h3>
                  <p className="text-fern/60 font-sans font-light text-sm leading-relaxed">
                    {b.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
