"use client";

import React from "react";
import { Code, Smartphone, Layers, BarChart } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Building modern, scalable web applications with cutting-edge technologies.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development",
      "CMS Integration",
      "Performance Optimization",
    ],
    tech: "React • Next.js • Node.js",
    icon: Code,
    meta: "DIGITAL PRODUCTS",
  },
  {
    id: "02",
    title: "Mobile Apps",
    description:
      "Building mobile applications for iOS and Android using React Native.",
    features: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Automated Deployment",
    ],
    tech: "React Native • Expo • Supabase",
    icon: Smartphone,
    meta: "CROSS-PLATFORM",
  },
  {
    id: "03",
    title: "UI/UX Design",
    description:
      "Creating intuitive, engaging user experiences that elevate your brand.",
    features: [
      "User Interface Design",
      "User Experience Design",
      "Design Systems",
      "Interactive Prototypes",
      "Responsive Design",
      "User Testing",
    ],
    tech: "Figma • Adobe CC • Framer",
    icon: Layers,
    meta: "CREATIVE SOLUTIONS",
  },
  {
    id: "04",
    title: "Digital Strategy",
    description:
      "Developing comprehensive digital solutions to achieve your business goals.",
    features: [
      "Digital Transformation",
      "Technical Consulting",
      "Platform Selection",
      "Technology Roadmap",
      "Process Optimization",
      "Growth Strategy",
    ],
    tech: "Analytics • SEO • Marketing",
    icon: BarChart,
    meta: "BUSINESS GROWTH",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-900 text-white">
      {/* Background Elements */}
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
          <span className="text-blue-400/60 font-mono">02 / 05</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            Services that
            <br />
            <span className="text-blue-400">Drive Growth</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mt-6">
            Comprehensive digital solutions tailored to your unique business
            needs.
          </p>
        </div>

        {/* Featured first service */}
        <div className="mb-16" data-animation="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group relative p-8 md:p-12 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono">
                    {services[0].id}
                  </div>
                  <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    {React.createElement(services[0].icon, {
                      className: "w-5 h-5 text-blue-400",
                    })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light group-hover:text-neutral-100 transition-colors">
                    {services[0].title}
                  </h3>
                </div>

                {/* Mobile Visual Element (Only visible on mobile) */}
                <div className="lg:hidden mb-8">
                  <div className="relative rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 overflow-hidden border border-neutral-800">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        {React.createElement(services[0].icon, {
                          className: "w-8 h-8 text-blue-400",
                        })}
                      </div>
                    </div>

                    <div className="mb-4 text-center">
                      <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                        {services[0].meta}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-400">
                      {services[0].description}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-400 md:text-lg transition-colors group-hover:text-neutral-300 pl-14">
                  {services[0].description}
                </p>
              </div>

              <div className="mt-8 pl-14 space-y-5">
                {/* Features List */}
                <div className="space-y-4">
                  {services[0].features.slice(0, 3).map((feature, i) => (
                    <div
                      key={i}
                      className="group/skill transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 mt-0.5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                          <span className="text-blue-400 text-xs">{i + 1}</span>
                        </div>
                        <span className="text-neutral-300 group-hover/skill:text-blue-400 transition-colors">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <div className="text-sm text-blue-400 uppercase tracking-wide mb-2">
                    Technologies
                  </div>
                  <div className="text-neutral-400">{services[0].tech}</div>
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

                  {/* Grid lines */}
                  <div className="absolute inset-0">
                    <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                    <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-8 border border-blue-500/20">
                      {React.createElement(services[0].icon, {
                        className: "w-10 h-10 text-blue-400",
                      })}
                    </div>

                    <span className="px-5 py-2 bg-blue-500/10 text-blue-400 text-sm rounded-full mb-6">
                      {services[0].meta}
                    </span>

                    {/* Simple service indicator */}
                    <div className="flex items-center justify-center space-x-2">
                      {services.map((_, i) => (
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

                {/* Border accent */}
                <div className="absolute -inset-px rounded-2xl border border-neutral-800 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-blue-500/10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining services in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(1).map((service, i) => (
            <div
              key={i}
              className="group relative p-8 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20"
              data-animation="animate-slide-up"
              data-delay={100 * (i + 1)}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm">
                  {service.id}
                </div>
                <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  {React.createElement(service.icon, {
                    className: "w-5 h-5 text-blue-400",
                  })}
                </div>
                <h3 className="text-xl font-light group-hover:text-neutral-100 transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="text-neutral-500 mb-6 pl-14 line-clamp-3 group-hover:text-neutral-400 transition-colors">
                {service.description}
              </p>

              {/* Features with styled bullets */}
              <div className="mb-6 pl-14 space-y-2">
                {service.features.slice(0, 3).map((feature, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 group/feature transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-neutral-400 text-sm group-hover/feature:text-blue-400 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pl-14">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                  {service.meta}
                </span>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 overflow-hidden transition-opacity duration-700">
                <div className="absolute -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 top-0 left-0 h-[100%] w-[40%] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform -skew-x-12"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-blue-400 max-w-2xl mx-auto">
          <p className="text-lg">
            Our services encompass the full spectrum of digital needs, from
            strategy and design to development and ongoing support. Each
            solution is tailored to your specific goals and challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
