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
      {/* Background Elements */}
      <div className="absolute left-0 right-0 h-full pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

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

        {/* Featured first reason */}
        <div className="mb-16" data-animation="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group relative p-8 md:p-12 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono">
                    {reasons[0].id}
                  </div>
                  <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    {React.createElement(reasons[0].icon, {
                      className: "w-5 h-5 text-blue-400",
                    })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light group-hover:text-neutral-100 transition-colors">
                    {reasons[0].title}
                  </h3>
                </div>

                {/* Mobile Visual Element (Only visible on mobile) */}
                <div className="lg:hidden mb-8">
                  <div className="relative rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 overflow-hidden border border-neutral-800">
                    {/* Animated Dots */}
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-400/50 animate-pulse"></div>
                    <div
                      className="absolute top-3 right-8 w-2 h-2 rounded-full bg-blue-400/30 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute top-3 right-13 w-2 h-2 rounded-full bg-blue-400/20 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <Code className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
                        <div className="text-lg text-blue-400 font-mono mb-1">
                          {reasons[0].stat1.value}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {reasons[0].stat1.label}
                        </div>
                      </div>
                      <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
                        <div className="text-lg text-blue-400 font-mono mb-1">
                          {reasons[0].stat2.value}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {reasons[0].stat2.label}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutral-400 mb-4">
                      {reasons[0].description}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-400 md:text-lg transition-colors group-hover:text-neutral-300 pl-14">
                  {reasons[0].description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8 pl-14">
                <div className="space-y-1">
                  <div className="text-blue-400 font-mono text-xl md:text-2xl">
                    {reasons[0].stat1.value}
                  </div>
                  <div className="text-neutral-500 text-sm">
                    {reasons[0].stat1.label}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-blue-400 font-mono text-xl md:text-2xl">
                    {reasons[0].stat2.value}
                  </div>
                  <div className="text-neutral-500 text-sm">
                    {reasons[0].stat2.label}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md h-full">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 flex items-center justify-center overflow-hidden">
                  {/* Abstract Design Elements */}
                  <div className="absolute inset-0 bg-neutral-900">
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-blue-900/5 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-tl-full bg-blue-500/5 blur-3xl"></div>
                  </div>

                  {/* Simple lines */}
                  <div className="absolute inset-0">
                    <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                    <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
                    <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                    <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 border border-blue-500/20">
                      <Code className="w-8 h-8 text-blue-400" />
                    </div>

                    <div className="bg-neutral-800/30 backdrop-blur-sm rounded-full px-6 py-2 border border-neutral-700/30">
                      <div className="text-sm text-blue-400 font-mono">
                        OPTIMIZED PERFORMANCE
                      </div>
                    </div>
                  </div>

                  {/* Geometric elements */}
                  <div className="absolute top-[15%] right-[15%] w-16 h-16">
                    <div className="absolute inset-0 border border-blue-500/20 rounded-md transform rotate-45"></div>
                    <div className="absolute inset-3 border border-blue-500/10 rounded-md transform rotate-45"></div>
                  </div>

                  <div className="absolute bottom-[15%] left-[15%] w-16 h-16">
                    <div className="absolute inset-0 border border-blue-500/10 rounded-full"></div>
                    <div className="absolute inset-3 border border-blue-500/20 rounded-full"></div>
                  </div>

                  {/* Subtle ping animations */}
                  <div
                    className="absolute top-[30%] right-[30%] w-1 h-1 rounded-full bg-blue-400 animate-ping opacity-70"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute bottom-[40%] left-[20%] w-1 h-1 rounded-full bg-blue-400 animate-ping opacity-70"
                    style={{ animationDuration: "4s" }}
                  ></div>
                </div>

                {/* Border accent */}
                <div className="absolute -inset-px rounded-2xl border border-neutral-800 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-blue-500/10"></div>
                <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-blue-500/30 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining reasons in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.slice(1).map((reason, i) => (
            <div
              key={i}
              className="group relative p-8 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20"
              data-animation="animate-slide-up"
              data-delay={100 * (i + 1)}
            >
              {/* Visual indicator */}
              <div className="absolute top-4 right-4 flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-blue-500/30"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500/20"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500/10"></div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm">
                  {reason.id}
                </div>
                <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  {React.createElement(reason.icon, {
                    className: "w-5 h-5 text-blue-400",
                  })}
                </div>
                <h3 className="text-xl font-light group-hover:text-neutral-100 transition-colors">
                  {reason.title}
                </h3>
              </div>

              <p className="text-neutral-500 mb-6 pl-14 line-clamp-3">
                {reason.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pl-14">
                <div>
                  <div className="text-blue-400 font-mono text-lg mb-1">
                    {reason.stat1.value}
                  </div>
                  <div className="text-neutral-500 text-xs">
                    {reason.stat1.label}
                  </div>
                </div>
                <div>
                  <div className="text-blue-400 font-mono text-lg mb-1">
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
