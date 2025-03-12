"use client";

import { BarChart, FileText, Layout, Code, Search } from "lucide-react";
import React from "react";

const steps = [
  {
    id: "01",
    letter: "A",
    title: "We analyze your business",
    subtitle: "and competitive environment",
    description:
      "We perform a comprehensive analysis of your business needs, goals, and competitive landscape to identify the key opportunities for your digital presence.",
    stat1: { value: "A", label: "Process Letter" },
    stat2: { value: "01", label: "Step Number" },
    icon: BarChart,
  },
  {
    id: "02",
    letter: "P",
    title: "We plan the strategy",
    subtitle: "and tactics of creating a website",
    description:
      "Based on our analysis, we develop a detailed strategy and implementation plan that outlines the specific tactics we'll use to create an effective website.",
    stat1: { value: "P", label: "Process Letter" },
    stat2: { value: "02", label: "Step Number" },
    icon: FileText,
  },
  {
    id: "03",
    letter: "U",
    title: "We develop USP",
    subtitle: "and positioning, we write unique texts",
    description:
      "We craft your unique selling proposition, defining clear positioning and developing compelling content that resonates with your target audience.",
    stat1: { value: "U", label: "Process Letter" },
    stat2: { value: "03", label: "Step Number" },
    icon: Layout,
  },
  {
    id: "04",
    letter: "C",
    title: "We create the structure",
    subtitle: "and design of the website according to the text support",
    description:
      "We design the information architecture and visual elements of your website, ensuring they support your content strategy and brand messaging.",
    stat1: { value: "C", label: "Process Letter" },
    stat2: { value: "04", label: "Step Number" },
    icon: Layout,
  },
  {
    id: "05",
    letter: "P",
    title: "We program, fill",
    subtitle: "and test the website",
    description:
      "We build out your website with clean code, implement all content, and thoroughly test functionality across devices and browsers.",
    stat1: { value: "P", label: "Process Letter" },
    stat2: { value: "05", label: "Step Number" },
    icon: Code,
  },
  {
    id: "06",
    letter: "S",
    title: "We carry out",
    subtitle: "SEO-optimization of the website",
    description:
      "We optimize your website for search engines, ensuring it's structured to attract organic traffic and reach your target audience effectively.",
    stat1: { value: "S", label: "Process Letter" },
    stat2: { value: "06", label: "Step Number" },
    icon: Search,
  },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-900 text-white">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-600/5 rounded-full blur-2xl"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

        {/* Light beam effect */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-blue-500/3 via-transparent to-transparent transform -rotate-12"></div>
      </div>

      <div className="container relative max-w-[1400px] mx-auto px-4">
        <div
          className="space-y-4 max-w-2xl mb-16 md:mb-24"
          data-animation="animate-fade-in"
        >
          <span className="text-blue-400/60 font-mono">03 / 05</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            How We
            <br />
            <span className="text-blue-400">Build Solutions</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mt-6">
            This is our proven process for delivering exceptional websites that
            drive results for your business.
          </p>
        </div>

        {/* Enhanced Featured first step */}
        <div className="mb-16" data-animation="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group relative p-8 md:p-12 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono">
                    {steps[0].id}
                  </div>
                  <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-500">
                    {React.createElement(steps[0].icon, {
                      className: "w-5 h-5 text-blue-400",
                    })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light group-hover:text-neutral-100 transition-colors">
                    {steps[0].title}
                  </h3>
                </div>

                {/* Enhanced Mobile Visual Element (Only visible on mobile) */}
                <div className="lg:hidden mb-8">
                  <div className="relative rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 overflow-hidden border border-neutral-800">
                    {/* Enhanced Animated Dots */}
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-400/50 animate-pulse"></div>
                    <div
                      className="absolute top-3 right-8 w-2 h-2 rounded-full bg-blue-400/30 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute top-3 right-13 w-2 h-2 rounded-full bg-blue-400/20 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Animated glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow"></div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4 relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:shadow-glow transition-all">
                        {React.createElement(steps[0].icon, {
                          className: "w-8 h-8 text-blue-400",
                        })}
                      </div>
                    </div>

                    {/* Performance Metrics - Enhanced */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-3 text-center border border-neutral-700/20 hover:border-blue-500/20 transition-colors">
                        <div className="text-lg text-blue-400 font-mono mb-1">
                          {steps[0].stat1.value}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {steps[0].stat1.label}
                        </div>
                      </div>
                      <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-3 text-center border border-neutral-700/20 hover:border-blue-500/20 transition-colors">
                        <div className="text-lg text-blue-400 font-mono mb-1">
                          {steps[0].stat2.value}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {steps[0].stat2.label}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Description with subtle highlight */}
                    <p className="text-sm text-neutral-400 mb-4 relative">
                      <span className="bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 px-2 py-1 rounded">
                        {steps[0].description}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-neutral-400 md:text-lg transition-colors group-hover:text-neutral-300 pl-14">
                  {steps[0].description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8 pl-14">
                <div className="space-y-1 relative group/stat overflow-hidden rounded-lg p-3 bg-neutral-800/20 hover:bg-neutral-800/30 transition-all border border-transparent hover:border-blue-500/20">
                  <div className="absolute inset-0 opacity-0 group-hover/stat:opacity-100 bg-gradient-to-r from-blue-600/5 to-transparent transition-opacity"></div>
                  <div className="text-blue-400 font-mono text-xl md:text-2xl relative z-10">
                    {steps[0].stat1.value}
                  </div>
                  <div className="text-neutral-500 text-sm relative z-10">
                    {steps[0].stat1.label}
                  </div>
                </div>
                <div className="space-y-1 relative group/stat overflow-hidden rounded-lg p-3 bg-neutral-800/20 hover:bg-neutral-800/30 transition-all border border-transparent hover:border-blue-500/20">
                  <div className="absolute inset-0 opacity-0 group-hover/stat:opacity-100 bg-gradient-to-r from-blue-600/5 to-transparent transition-opacity"></div>
                  <div className="text-blue-400 font-mono text-xl md:text-2xl relative z-10">
                    {steps[0].stat2.value}
                  </div>
                  <div className="text-neutral-500 text-sm relative z-10">
                    {steps[0].stat2.label}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md h-full">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 flex items-center justify-center overflow-hidden">
                  {/* Enhanced Abstract Design Elements */}
                  <div className="absolute inset-0 bg-neutral-900">
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-tl-full bg-blue-500/10 blur-3xl"></div>

                    {/* Added glowing orb effect */}
                    <div className="absolute left-1/4 top-1/4 w-16 h-16 rounded-full bg-blue-400/20 blur-xl"></div>
                    <div className="absolute right-1/4 bottom-1/3 w-20 h-20 rounded-full bg-blue-400/10 blur-xl"></div>
                  </div>

                  {/* Enhanced grid lines */}
                  <div className="absolute inset-0">
                    <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                    <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                    <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                    <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

                    {/* Added vertical lines */}
                    <div className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
                    <div className="absolute left-[80%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-500/5 flex items-center justify-center mb-8 border border-blue-500/30 backdrop-blur-sm group-hover:shadow-glow transition-all duration-500">
                      {React.createElement(steps[0].icon, {
                        className: "w-10 h-10 text-blue-400",
                      })}
                    </div>

                    <div className="bg-neutral-800/40 backdrop-blur-md rounded-full px-6 py-2 border border-neutral-700/40 group-hover:border-blue-500/30 transition-all">
                      <div className="text-sm text-blue-400 font-mono">
                        {steps[0].letter} - BUSINESS ANALYSIS
                      </div>
                    </div>

                    {/* Added progress indicator */}
                    <div className="mt-8 w-full max-w-[200px]">
                      <div className="flex justify-between text-xs text-neutral-500 mb-2">
                        <span>Process Stage</span>
                        <span>Step 1/6</span>
                      </div>
                      <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                          style={{ width: "16.6%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Geometric elements */}
                  <div className="absolute top-[15%] right-[15%] w-16 h-16 animate-float-slow">
                    <div className="absolute inset-0 border border-blue-500/30 rounded-md transform rotate-45"></div>
                    <div className="absolute inset-3 border border-blue-500/20 rounded-md transform rotate-45"></div>
                  </div>

                  <div
                    className="absolute bottom-[15%] left-[15%] w-16 h-16 animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="absolute inset-0 border border-blue-500/20 rounded-full"></div>
                    <div className="absolute inset-3 border border-blue-500/30 rounded-full"></div>
                  </div>

                  {/* Enhanced ping animations */}
                  <div
                    className="absolute top-[30%] right-[30%] w-2 h-2 rounded-full bg-blue-400 animate-ping opacity-70"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute bottom-[40%] left-[20%] w-2 h-2 rounded-full bg-blue-400 animate-ping opacity-70"
                    style={{ animationDuration: "4s" }}
                  ></div>
                </div>

                {/* Enhanced Border accent */}
                <div className="absolute -inset-px rounded-2xl border border-neutral-800 group-hover:border-blue-500/20 transition-colors duration-500 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/10 via-blue-500/50 to-blue-500/10"></div>
                <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-blue-500/30 blur-sm"></div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/20 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/20 rounded-br-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Remaining steps in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.slice(1).map((step, i) => (
            <div
              key={i}
              className="group relative p-8 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20"
              data-animation="animate-slide-up"
              data-delay={100 * (i + 1)}
            >
              {/* Enhanced Visual indicator with subtle animation */}
              <div className="absolute top-4 right-4 flex space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-400/60 transition-colors"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500/30 group-hover:bg-blue-400/50 transition-colors delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500/20 group-hover:bg-blue-400/40 transition-colors delay-150"></div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-neutral-700 group-hover:border-blue-500/30 transition-colors rounded-tl-lg"></div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm group-hover:scale-110 transition-transform">
                  {step.id}
                </div>
                <div className="h-px flex-grow bg-neutral-800 group-hover:bg-gradient-to-r from-neutral-800 via-blue-500/30 to-neutral-800 transition-all duration-500"></div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-500">
                  {React.createElement(step.icon, {
                    className: "w-5 h-5 text-blue-400",
                  })}
                </div>
                <h3 className="text-xl font-light group-hover:text-blue-100 transition-colors">
                  {step.title}
                </h3>
              </div>

              <p className="text-neutral-500 mb-6 pl-14 line-clamp-3 group-hover:text-neutral-400 transition-colors">
                {step.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pl-14">
                <div className="group/stat space-y-1 relative overflow-hidden rounded p-2 hover:bg-neutral-800/30 transition-all">
                  <div className="absolute inset-0 opacity-0 group-hover/stat:opacity-100 bg-gradient-to-r from-blue-500/5 to-transparent transition-opacity"></div>
                  <div className="text-blue-400 font-mono text-lg mb-1 relative z-10">
                    {step.stat1.value}
                  </div>
                  <div className="text-neutral-500 text-xs relative z-10">
                    {step.stat1.label}
                  </div>
                </div>
                <div className="group/stat space-y-1 relative overflow-hidden rounded p-2 hover:bg-neutral-800/30 transition-all">
                  <div className="absolute inset-0 opacity-0 group-hover/stat:opacity-100 bg-gradient-to-r from-blue-500/5 to-transparent transition-opacity"></div>
                  <div className="text-blue-400 font-mono text-lg mb-1 relative z-10">
                    {step.stat2.value}
                  </div>
                  <div className="text-neutral-500 text-xs relative z-10">
                    {step.stat2.label}
                  </div>
                </div>
              </div>

              {/* Enhanced Hover shine effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 overflow-hidden transition-opacity duration-700">
                <div className="absolute -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 top-0 left-0 h-[100%] w-[40%] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-x-12"></div>
              </div>

              {/* Progress indicator dot */}
              <div className="absolute bottom-4 right-4 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full border border-blue-500/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-blue-400 max-w-2xl mx-auto">
          <p className="text-lg">
            This is our proven process for creating effective websites, tailored
            for each project's unique requirements. Our priority remains the
            same for all clients – ensuring high performance and exceptional
            results.
          </p>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-8px) rotate(45deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .shadow-glow {
          box-shadow: 0 0 15px 2px rgba(59, 130, 246, 0.3);
        }

        .bg-grid-pattern {
          background-size: 20px 20px;
          background-image: linear-gradient(
              to right,
              rgb(59 130 246 / 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgb(59 130 246 / 0.05) 1px,
              transparent 1px
            );
        }
      `}</style>
    </section>
  );
}
