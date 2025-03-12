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
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

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

        {/* Featured first step */}
        <div className="mb-16" data-animation="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group relative p-8 md:p-12 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono">
                    {processSteps[0].id}
                  </div>
                  <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    {React.createElement(processSteps[0].icon, {
                      className: "w-5 h-5 text-blue-400",
                    })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light group-hover:text-neutral-100 transition-colors">
                    {processSteps[0].title}
                  </h3>
                </div>

                {/* Mobile Visual Element (Only visible on mobile) */}
                <div className="lg:hidden mb-8">
                  <div className="relative rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 overflow-hidden border border-neutral-800">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        {React.createElement(processSteps[0].icon, {
                          className: "w-8 h-8 text-blue-400",
                        })}
                      </div>
                    </div>

                    <div className="mb-4 text-center">
                      <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                        {processSteps[0].meta}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-400">
                      {processSteps[0].description}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-400 md:text-lg transition-colors group-hover:text-neutral-300 pl-14">
                  {processSteps[0].description}
                </p>
              </div>

              <div className="mt-8 pl-14 space-y-2">
                <div className="text-sm text-blue-400 uppercase tracking-wide">
                  Deliverables:
                </div>
                <div className="text-neutral-400">
                  {processSteps[0].deliverables}
                </div>
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md h-full">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 flex items-center justify-center overflow-hidden">
                  {/* Simplified Abstract Design Elements */}
                  <div className="absolute inset-0 bg-neutral-900">
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-blue-900/5 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-tl-full bg-blue-500/5 blur-3xl"></div>
                  </div>

                  {/* Simplified grid lines */}
                  <div className="absolute inset-0">
                    <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                    <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-8 border border-blue-500/20">
                      {React.createElement(processSteps[0].icon, {
                        className: "w-10 h-10 text-blue-400",
                      })}
                    </div>

                    <span className="px-5 py-2 bg-blue-500/10 text-blue-400 text-sm rounded-full mb-6">
                      {processSteps[0].meta}
                    </span>

                    {/* Simple step indicator */}
                    <div className="flex items-center justify-center space-x-2">
                      {processSteps.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i === 0 ? "bg-blue-500" : "bg-neutral-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Simplified Border accent */}
                <div className="absolute -inset-px rounded-2xl border border-neutral-800 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-blue-500/10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining steps in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.slice(1).map((step, i) => (
            <div
              key={i}
              className="group relative p-8 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20"
              data-animation="animate-slide-up"
              data-delay={100 * (i + 1)}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm">
                  {step.id}
                </div>
                <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  {React.createElement(step.icon, {
                    className: "w-5 h-5 text-blue-400",
                  })}
                </div>
                <h3 className="text-xl font-light group-hover:text-neutral-100 transition-colors">
                  {step.title}
                </h3>
              </div>

              <p className="text-neutral-500 mb-6 pl-14 line-clamp-3 group-hover:text-neutral-400 transition-colors">
                {step.description}
              </p>

              <div className="pl-14">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                  {step.meta}
                </span>
              </div>

              {/* Simple Hover effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 overflow-hidden transition-opacity duration-700">
                <div className="absolute -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 top-0 left-0 h-[100%] w-[40%] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform -skew-x-12"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-blue-400 max-w-2xl mx-auto">
          <p className="text-lg">
            Our proven process has been refined through years of successful
            projects. Each step is essential to delivering digital solutions
            that exceed expectations and achieve measurable business results.
          </p>
        </div>
      </div>
    </section>
  );
}
