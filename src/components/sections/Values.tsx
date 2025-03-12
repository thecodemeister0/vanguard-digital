"use client";

import React from "react";
import { Code, ShoppingCart, Layers, BarChart } from "lucide-react";

export default function Expertise() {
  // Define expertise areas data structure
  const expertiseAreas = [
    {
      id: "01",
      title: "Web Development",
      meta: "DIGITAL SOLUTIONS",
      icon: Code,
      skills: [
        {
          title: "Custom Websites",
          description:
            "We craft bespoke websites that serve as the perfect digital embodiment of your brand, with carefully considered user experience and sleek, modern design.",
        },
        {
          title: "E-commerce Solutions",
          description:
            "We build online stores that not only showcase your products beautifully but also provide seamless purchasing experiences that convert browsers into buyers.",
        },
        {
          title: "Web Applications",
          description:
            "We develop sophisticated web applications with robust backends and intuitive interfaces that help businesses streamline operations and serve users effectively.",
        },
      ],
    },
    {
      id: "02",
      title: "Mobile App Development",
      meta: "CROSS-PLATFORM",
      icon: ShoppingCart,
      skills: [
        {
          title: "iOS Applications",
          description:
            "We create stunning, high-performance iOS applications that deliver exceptional user experiences on iPhone and iPad, leveraging the latest Apple technologies.",
        },
        {
          title: "Android Applications",
          description:
            "Our Android apps combine beautiful design with powerful functionality, ensuring your mobile presence reaches the world's largest mobile operating system.",
        },
        {
          title: "Cross-Platform Solutions",
          description:
            "Using React Native and other cutting-edge frameworks, we build apps that work seamlessly across multiple platforms while maintaining native-quality performance.",
        },
      ],
    },
    {
      id: "03",
      title: "UI/UX Design",
      meta: "USER EXPERIENCE",
      icon: Layers,
      skills: [
        {
          title: "User Interface Design",
          description:
            "We craft visually stunning interfaces that align with your brand identity and create a memorable impression while providing intuitive navigation and interaction.",
        },
        {
          title: "User Experience Design",
          description:
            "Our UX design process ensures your digital products are not only beautiful but genuinely useful, creating seamless journeys that keep users engaged and satisfied.",
        },
        {
          title: "Design Systems",
          description:
            "We build comprehensive design systems that ensure consistency across all your digital touchpoints while enabling efficient scaling of your digital products.",
        },
      ],
    },
    {
      id: "04",
      title: "Strategic Consulting",
      meta: "BUSINESS GROWTH",
      icon: BarChart,
      skills: [
        {
          title: "Technical Strategy",
          description:
            "We provide expert guidance on technology selection, architecture planning, and roadmap development to ensure your digital investments align with long-term business goals.",
        },
        {
          title: "Digital Transformation",
          description:
            "We help established businesses evolve their digital presence, modernizing legacy systems and processes to meet today's technological standards and user expectations.",
        },
        {
          title: "Analytics & Optimization",
          description:
            "We implement robust analytics and data-driven optimization strategies to continuously improve performance, user engagement, and conversion rates.",
        },
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="relative py-24 md:py-32 overflow-hidden bg-neutral-900 text-white"
    >
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
            We specialize in creating digital solutions that combine form and
            function.
          </p>
        </div>

        {/* Featured Expertise Area (Web Development) */}
        <div className="mb-16" data-animation="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group relative p-8 md:p-12 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20">
            {/* Content Column */}
            <div className="flex flex-col justify-between h-full">
              <div>
                {/* Header with Number */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono">
                    {expertiseAreas[0].id}
                  </div>
                  <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    {React.createElement(expertiseAreas[0].icon, {
                      className: "w-5 h-5 text-blue-400",
                    })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light group-hover:text-neutral-100 transition-colors">
                    {expertiseAreas[0].title}
                  </h3>
                </div>

                {/* Mobile Visual Element (Only visible on mobile) */}
                <div className="lg:hidden mb-8">
                  <div className="relative rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 overflow-hidden border border-neutral-800">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        {React.createElement(expertiseAreas[0].icon, {
                          className: "w-8 h-8 text-blue-400",
                        })}
                      </div>
                    </div>

                    <div className="mb-4 text-center">
                      <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                        {expertiseAreas[0].meta}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-400">
                      {expertiseAreas[0].skills[0].description}
                    </p>
                  </div>
                </div>

                {/* Expertise Skills */}
                <div className="space-y-5">
                  {expertiseAreas[0].skills.map((skill, i) => (
                    <div
                      key={i}
                      className="group/skill transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="flex items-start gap-3">
                        {/* Numbered indicator for each skill */}
                        <div className="w-6 h-6 mt-1 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                          <span className="text-blue-400 text-xs">{i + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-xl mb-2 group-hover/skill:text-blue-400 transition-colors">
                            {skill.title}
                          </h4>
                          <p className="text-neutral-400">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="hidden md:block mt-8 pl-14">
                <div className="text-sm text-blue-400 uppercase tracking-wide mb-2">
                  Our Approach
                </div>
                <div className="text-neutral-500 italic">
                  "Your website is the digital foundation of your brand. We
                  build websites that not only look beautiful but deliver
                  results."
                </div>
              </div>
            </div>

            {/* Visual Column */}
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
                      {React.createElement(expertiseAreas[0].icon, {
                        className: "w-10 h-10 text-blue-400",
                      })}
                    </div>

                    <span className="px-5 py-2 bg-blue-500/10 text-blue-400 text-sm rounded-full mb-6">
                      {expertiseAreas[0].meta}
                    </span>

                    {/* Simple expertise indicator */}
                    <div className="flex items-center justify-center space-x-2">
                      {expertiseAreas.map((_, i) => (
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

        {/* Secondary Expertise Areas - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.slice(1).map((area, i) => (
            <div
              key={area.id}
              className="group relative p-8 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20"
              data-animation="animate-slide-up"
              data-delay={100 * (i + 1)}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm">
                  {area.id}
                </div>
                <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  {React.createElement(area.icon, {
                    className: "w-5 h-5 text-blue-400",
                  })}
                </div>
                <h3 className="text-xl font-light group-hover:text-neutral-100 transition-colors">
                  {area.title}
                </h3>
              </div>

              {/* Skills (showing only titles) */}
              <div className="mb-6 pl-14 space-y-2">
                {area.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 group/feature transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-neutral-400 text-sm group-hover/feature:text-blue-400 transition-colors">
                      {skill.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pl-14">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                  {area.meta}
                </span>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 overflow-hidden transition-opacity duration-700">
                <div className="absolute -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 top-0 left-0 h-[100%] w-[40%] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform -skew-x-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .perspective-element {
          perspective: 800px;
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
