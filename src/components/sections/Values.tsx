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
      <div className="container relative max-w-[1400px] mx-auto px-4">
        {/* Section Header */}
        <div
          className="space-y-4 max-w-2xl mb-12 md:mb-20"
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

        {/* Featured Expertise Area (Web Development) - Leaner version */}
        <div className="mb-10 md:mb-14" data-animation="animate-fade-in">
          <div className="group relative p-5 md:p-6 lg:p-10 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Content Column */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Header with Number and Meta Tag */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm">
                      {expertiseAreas[0].id}
                    </div>
                    <div className="flex-grow flex items-center justify-between">
                      <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                      <span className="ml-4 px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full hidden sm:block">
                        {expertiseAreas[0].meta}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      {React.createElement(expertiseAreas[0].icon, {
                        className: "w-5 h-5 text-blue-400",
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-light group-hover:text-neutral-100 transition-colors">
                        {expertiseAreas[0].title}
                      </h3>
                      <span className="mt-1 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full inline-block sm:hidden">
                        {expertiseAreas[0].meta}
                      </span>
                    </div>
                  </div>

                  {/* Description Text - More concise */}
                  <p className="text-neutral-400 text-sm md:text-base transition-colors group-hover:text-neutral-300 pl-14 mb-5">
                    Advanced web solutions with a focus on performance,
                    usability, and scalability.
                  </p>

                  {/* Expertise Skills - More compact presentation */}
                  <div className="space-y-4">
                    {expertiseAreas[0].skills.map((skill, i) => (
                      <div
                        key={i}
                        className="group/skill transition-all duration-300 hover:translate-x-1"
                      >
                        <div className="flex items-start gap-3">
                          {/* Numbered indicator for each skill */}
                          <div className="w-5 h-5 mt-0.5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                            <span className="text-blue-400 text-xs">
                              {i + 1}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-base font-medium group-hover/skill:text-blue-400 transition-colors">
                              {skill.title}
                            </h4>
                            <p className="text-neutral-400 text-xs md:text-sm line-clamp-2">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote section removed for leaner look */}
              </div>

              {/* Visual Column - More balanced size */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-xs mx-auto">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 flex items-center justify-center overflow-hidden">
                    {/* Card-specific visual elements - keep these even though global backgrounds moved */}
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
                        {React.createElement(expertiseAreas[0].icon, {
                          className: "w-8 h-8 text-blue-400",
                        })}
                      </div>

                      <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 text-xs rounded-full mb-4">
                        {expertiseAreas[0].meta}
                      </span>

                      {/* Indicator dots removed to avoid suggesting interactivity */}
                    </div>

                    {/* Card-specific decorative elements - smaller */}
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
        </div>

        {/* Secondary Expertise Areas - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertiseAreas.slice(1).map((area, i) => (
            <div
              key={area.id}
              className="group relative p-6 md:p-8 border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/20"
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
                <div>
                  <h3 className="text-xl font-light group-hover:text-neutral-100 transition-colors">
                    {area.title}
                  </h3>
                  <span className="mt-1 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full inline-block">
                    {area.meta}
                  </span>
                </div>
              </div>

              {/* Skills (showing only titles) - More compact for mobile */}
              <div className="mb-6 pl-14 space-y-2">
                {area.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 group/feature transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-neutral-400 text-xs sm:text-sm group-hover/feature:text-blue-400 transition-colors">
                      {skill.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card-specific hover effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 overflow-hidden rounded-2xl transition-opacity duration-700">
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
