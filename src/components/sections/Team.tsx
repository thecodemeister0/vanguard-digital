"use client";

import React from "react";
import {
  BarChart,
  FileText,
  Layout,
  Code,
  Search,
  Compass,
} from "lucide-react";

// Define the process steps data structure
const processSteps = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We begin by deeply understanding your business, goals, and target audience. This discovery phase involves research, stakeholder interviews, and analyzing your competitive landscape to establish a solid foundation for the project.",
    meta: "FIRST STEP",
    deliverables: "Project Brief, Research Report, Competitive Analysis",
    icon: Compass,
  },
  {
    id: "02",
    title: "Strategy",
    description:
      "Based on our findings, we develop a comprehensive digital strategy that outlines the project's direction, key features, technical requirements, and measurable goals. This roadmap guides every decision moving forward.",
    meta: "PLANNING PHASE",
    deliverables: "Project Scope, Technical Specifications, Timeline",
    icon: BarChart,
  },
  {
    id: "03",
    title: "Design",
    description:
      "We create wireframes and visual designs that balance aesthetics with functionality. Our iterative design process involves client feedback at every stage, ensuring the final design aligns perfectly with your brand and objectives.",
    meta: "CREATIVE DEVELOPMENT",
    deliverables: "Wireframes, UI Mockups, Interactive Prototypes",
    icon: Layout,
  },
  {
    id: "04",
    title: "Development",
    description:
      "Our development phase transforms designs into functional digital products. We build with clean, efficient code and follow industry best practices to ensure your product is not only beautiful but also performant and secure.",
    meta: "BUILDING PHASE",
    deliverables: "Functional Product, Code Documentation, Technical Guide",
    icon: Code,
  },
  {
    id: "05",
    title: "Testing",
    description:
      "Rigorous testing ensures your digital product functions flawlessly across devices and browsers. We identify and fix bugs, optimize performance, and ensure your product meets the highest quality standards before launch.",
    meta: "QUALITY ASSURANCE",
    deliverables: "QA Report, Performance Metrics, Cross-browser Validation",
    icon: Search,
  },
  {
    id: "06",
    title: "Launch & Support",
    description:
      "We carefully deploy your project and provide ongoing support to ensure a successful launch. Our relationship doesn't end there—we continue to monitor, maintain, and optimize your digital assets for long-term success.",
    meta: "ONGOING PARTNERSHIP",
    deliverables: "Deployment Plan, Maintenance Schedule, Analytics Reports",
    icon: FileText,
  },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-900 text-white">
      <div className="container relative max-w-[1400px] mx-auto px-4">
        {/* Section Header */}
        <div
          className="space-y-4 max-w-2xl mb-16 md:mb-24"
          data-animation="animate-fade-in"
        >
          <span className="text-blue-400/60 font-mono">03 / 05</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            Our Approach to
            <br />
            <span className="text-blue-400">Digital Excellence</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mt-6">
            Our proven methodology for transforming ideas into exceptional
            digital experiences.
          </p>
        </div>

        {/* Featured first step - Leaner version */}
        <div className="mb-10 md:mb-14" data-animation="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 group relative p-5 md:p-6 lg:p-10 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm">
                    {processSteps[0].id}
                  </div>
                  <div className="flex-grow flex items-center justify-between">
                    <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                    <span className="ml-4 px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full hidden sm:block">
                      {processSteps[0].meta}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    {React.createElement(processSteps[0].icon, {
                      className: "w-5 h-5 text-blue-400",
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-light group-hover:text-neutral-100 transition-colors">
                      {processSteps[0].title}
                    </h3>
                    <span className="mt-1 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full inline-block sm:hidden">
                      {processSteps[0].meta}
                    </span>
                  </div>
                </div>

                {/* More concise description */}
                <p className="text-neutral-400 text-sm md:text-base transition-colors group-hover:text-neutral-300 pl-14 mb-5">
                  {processSteps[0].description.split(".")[0] + "."}
                </p>

                {/* Deliverables - More compact */}
                <div className="pl-14">
                  <div className="text-xs text-blue-400 uppercase tracking-wide mb-1">
                    Deliverables:
                  </div>
                  <div className="text-neutral-400 text-sm">
                    {processSteps[0].deliverables}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column - Consistent with Values */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-xs mx-auto">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 flex items-center justify-center overflow-hidden">
                  {/* Card-specific visual elements - Keep consistent with Values */}
                  <div className="absolute inset-0 bg-neutral-900">
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-blue-900/5 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-tl-full bg-blue-500/5 blur-xl"></div>
                  </div>

                  {/* Card-specific grid lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                    <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 border border-blue-500/20">
                      {React.createElement(processSteps[0].icon, {
                        className: "w-8 h-8 text-blue-400",
                      })}
                    </div>

                    <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                      {processSteps[0].meta}
                    </span>

                    {/* Removed indicator dots to avoid suggesting interactivity */}
                  </div>

                  {/* Card-specific decorative elements */}
                  <div className="absolute top-[15%] right-[15%] w-10 h-10 pointer-events-none">
                    <div className="absolute inset-0 border border-blue-500/10 rounded-md transform rotate-45"></div>
                    <div className="absolute inset-2 border border-blue-500/5 rounded-md transform rotate-45"></div>
                  </div>

                  <div className="absolute bottom-[15%] left-[15%] w-10 h-10 pointer-events-none">
                    <div className="absolute inset-0 border border-blue-500/10 rounded-full"></div>
                    <div className="absolute inset-2 border border-blue-500/5 rounded-full"></div>
                  </div>
                </div>

                {/* Border accent */}
                <div className="absolute -inset-px rounded-2xl border border-neutral-800 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-blue-500/10"></div>
                <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-blue-500/30 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining steps in grid - More compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.slice(1).map((step, i) => (
            <div
              key={i}
              className="group relative p-6 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20"
              data-animation="animate-slide-up"
              data-delay={100 * (i + 1)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-9 w-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm">
                  {step.id}
                </div>
                <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  {React.createElement(step.icon, {
                    className: "w-4 h-4 text-blue-400",
                  })}
                </div>
                <div>
                  <h3 className="text-lg font-medium group-hover:text-neutral-100 transition-colors">
                    {step.title}
                  </h3>
                  <span className="mt-1 px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded-full inline-block">
                    {step.meta}
                  </span>
                </div>
              </div>

              <p className="text-neutral-500 mb-0 pl-11 text-xs md:text-sm line-clamp-3 group-hover:text-neutral-400 transition-colors">
                {step.description.split(".")[0] + "."}
              </p>
            </div>
          ))}
        </div>

        {/* Simplified footer text */}
        <div className="mt-12 text-center text-blue-400/80 max-w-xl mx-auto">
          <p className="text-sm md:text-base">
            Our process ensures successful projects that exceed expectations and
            deliver measurable business results.
          </p>
        </div>
      </div>
    </section>
  );
}
