"use client";

import { Star, Clock, PenTool, Users, Code, Settings } from "lucide-react";
import React from "react";

const reasons = [
  {
    id: "01",
    title: "Technical Excellence",
    description:
      "Our websites are built with clean, efficient code that ensures optimal performance, security, and scalability for your business.",
    stat1: { value: "2.9s", label: "Average Load Time" },
    stat2: { value: "99.9%", label: "Uptime" },
    icon: Code,
  },
  {
    id: "02",
    title: "Design-Led Approach",
    description:
      "We create beautiful, intuitive user interfaces that reflect your brand identity and guide users toward their goals.",
    stat1: { value: "36%", label: "Conversion Increase" },
    stat2: { value: "28%", label: "Bounce Rate Reduction" },
    icon: PenTool,
  },
  {
    id: "03",
    title: "Agile Development",
    description:
      "Our iterative approach means you'll see progress at every stage, with the flexibility to make adjustments as we go.",
    stat1: { value: "4x", label: "Faster Deployment" },
    stat2: { value: "92%", label: "First-Time Approval" },
    icon: Settings,
  },
  {
    id: "04",
    title: "Long-Term Partnership",
    description:
      "We don't just build and leave. We offer ongoing support and optimization to ensure your website continues to perform.",
    stat1: { value: "3yrs+", label: "Avg. Client Relationship" },
    stat2: { value: "88%", label: "Client Retention" },
    icon: Users,
  },
  {
    id: "05",
    title: "Future-Proof Technology",
    description:
      "We use cutting-edge technology that scales with your business, adapting to new devices and browsing behaviors.",
    stat1: { value: "30%", label: "Maintenance Cost Reduction" },
    stat2: { value: "24mo", label: "Avg. Time to Redesign" },
    icon: Star,
  },
  {
    id: "06",
    title: "Rapid Delivery",
    description:
      "Our streamlined processes mean you'll have a high-quality website in weeks, not months, without sacrificing quality.",
    stat1: { value: "6wk", label: "Average Delivery" },
    stat2: { value: "100%", label: "On-Time Completion" },
    icon: Clock,
  },
];

export default function Reasons() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-900 text-white">
      <div className="container relative max-w-[1400px] mx-auto px-4">
        <div
          className="space-y-4 max-w-2xl mb-16 md:mb-24"
          data-animation="animate-fade-in"
        >
          <span className="text-blue-400/60 font-mono">04 / 05</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            Why Choose
            <br />
            <span className="text-blue-400">Our Agency</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mt-6">
            There are countless web development agencies out there, but here's
            why our clients consistently choose to work with us.
          </p>
        </div>

        {/* Featured first reason - Leaner version */}
        <div className="mb-10 md:mb-14" data-animation="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 group relative p-5 md:p-6 lg:p-10 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm">
                    {reasons[0].id}
                  </div>
                  <div className="flex-grow flex items-center justify-between">
                    <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                    <span className="ml-4 px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full hidden sm:block">
                      OPTIMIZED PERFORMANCE
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    {React.createElement(reasons[0].icon, {
                      className: "w-5 h-5 text-blue-400",
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-light group-hover:text-neutral-100 transition-colors">
                      {reasons[0].title}
                    </h3>
                    <span className="mt-1 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full inline-block sm:hidden">
                      OPTIMIZED PERFORMANCE
                    </span>
                  </div>
                </div>

                {/* More concise description */}
                <p className="text-neutral-400 text-sm md:text-base transition-colors group-hover:text-neutral-300 pl-14 mb-5">
                  {reasons[0].description}
                </p>

                {/* Stats - More compact */}
                <div className="grid grid-cols-2 gap-4 pl-14">
                  <div className="space-y-1">
                    <div className="text-blue-400 font-mono text-lg md:text-xl">
                      {reasons[0].stat1.value}
                    </div>
                    <div className="text-neutral-500 text-xs">
                      {reasons[0].stat1.label}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-blue-400 font-mono text-lg md:text-xl">
                      {reasons[0].stat2.value}
                    </div>
                    <div className="text-neutral-500 text-xs">
                      {reasons[0].stat2.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column - Consistent with Values and Process */}
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
                      <Code className="w-8 h-8 text-blue-400" />
                    </div>

                    <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                      OPTIMIZED PERFORMANCE
                    </span>
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

        {/* Remaining reasons in grid - More compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.slice(1).map((reason, i) => (
            <div
              key={i}
              className="group relative p-6 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20"
              data-animation="animate-slide-up"
              data-delay={100 * (i + 1)}
            >
              {/* Remove visual indicator dots */}

              <div className="flex items-center space-x-4 mb-4">
                <div className="h-9 w-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm">
                  {reason.id}
                </div>
                <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  {React.createElement(reason.icon, {
                    className: "w-4 h-4 text-blue-400",
                  })}
                </div>
                <h3 className="text-lg font-medium group-hover:text-neutral-100 transition-colors">
                  {reason.title}
                </h3>
              </div>

              <p className="text-neutral-500 mb-4 pl-11 text-xs md:text-sm line-clamp-2">
                {reason.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pl-11">
                <div>
                  <div className="text-blue-400 font-mono text-base mb-0.5">
                    {reason.stat1.value}
                  </div>
                  <div className="text-neutral-500 text-xs">
                    {reason.stat1.label}
                  </div>
                </div>
                <div>
                  <div className="text-blue-400 font-mono text-base mb-0.5">
                    {reason.stat2.value}
                  </div>
                  <div className="text-neutral-500 text-xs">
                    {reason.stat2.label}
                  </div>
                </div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 overflow-hidden transition-opacity duration-700">
                <div className="absolute -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 top-0 left-0 h-[100%] w-[40%] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform -skew-x-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
