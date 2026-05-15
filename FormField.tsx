"use client";

import FadeIn from "@/components/ui/FadeIn";
import Divider from "@/components/ui/Divider";

const pillars = [
  {
    label: "01",
    title: "Audience Psychology",
    description:
      "Understanding what drives your fans emotionally — what creates attachment, what builds trust, and what makes them choose to stay and spend consistently.",
    services: [
      "Fan attachment systems",
      "Spending psychology",
      "Emotional retention mapping",
      "Parasocial connection strategy",
      "Audience segmentation",
    ],
  },
  {
    label: "02",
    title: "Retention & Monetisation",
    description:
      "Building the strategic infrastructure that converts casual subscribers into loyal, long-term paying fans with consistent and compounding revenue.",
    services: [
      "Subscriber retention systems",
      "Price optimisation",
      "Fan tier structuring",
      "Tip strategy",
      "Content tiering",
      "Posting strategy",
    ],
  },
  {
    label: "03",
    title: "Creator Positioning",
    description:
      "Developing a creator identity that feels emotionally recognisable — the kind that builds audience familiarity, trust, and long-term loyalty.",
    services: [
      "Emotional branding",
      "Creator identity development",
      "Page optimisation",
      "Content strategy",
      "Audience perception shaping",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-deep-fern py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-20">
          <p className="text-mint/40 text-xs tracking-[0.25em] uppercase font-sans mb-6">
            Strategic systems
          </p>
          <h2
            className="font-serif text-petal leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            What we build together.
          </h2>
        </FadeIn>

        <Divider className="mb-20" />

        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="group py-14 border-b border-fern/15 last:border-b-0">
                <div className="grid md:grid-cols-[120px_1fr_1fr] gap-8 md:gap-12 items-start">
                  {/* Number */}
                  <p className="font-serif text-fern/40 text-4xl">{pillar.label}</p>

                  {/* Title + description */}
                  <div>
                    <h3 className="font-serif text-petal text-xl md:text-2xl mb-4 group-hover:text-blush transition-colors duration-500">
                      {pillar.title}
                    </h3>
                    <p className="text-mint/60 font-sans font-light text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Services list */}
                  <ul className="space-y-2 pt-1">
                    {pillar.services.map((s, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-mint/30 flex-shrink-0" />
                        <span className="text-petal/50 font-sans font-light text-sm">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
