"use client";

import { useEffect, useRef, useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";

const steps = [
  {
    title: "Shared",
    copy: "A common infrastructure connecting people, systems, and evidence."
  },
  {
    title: "Trusted",
    copy: "Verified information and accountable quality processes."
  },
  {
    title: "The Ecosystem",
    copy: "OpenDQM is a research project sponsored by the National Science Foundation Pathways for Open Source Ecosystems Phase 1 grant. The Global Open Source Quality Assurance System (GOSQAS), a project of Public Invention and central core of the OpenDQM ecosystem, gratefully partners with other open source community initiatives."
  }
];

export function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = section.querySelectorAll<HTMLElement>(".vertical-story-card");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
        }),
      { rootMargin: "-34% 0px -34% 0px", threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section vertical-story" id="why" ref={sectionRef}>
      <div className="container vertical-story-intro">
        <p className="section-kicker">Why OpenDQM exists</p>
        <GradientHeading
          lead="
          OpenDQM is researching the establishment of an"
          emphasis="open, shared, trusted, and interoperable ecosystem."
        />
        <div className="why-copy">
          <p>that supports democratized quality control, distributed quality assurance, 
          verification, liability, and continuous improvement across diverse stakeholders.
          </p>
        </div>
      </div>
      <div className="container vertical-story-list">
        {steps.map((step, index) => (
          <div className="vertical-story-slot" key={step.title}>
            <article
              className={`vertical-story-card ${active === index ? "active" : ""}`}
              data-step={index}
            >
              {/* <span>{step.number}</span> */}
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
