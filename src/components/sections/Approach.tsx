"use client";
const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding your vision, goals, and technical requirements to craft the perfect solution.",
    details: [
      "Business Analysis",
      "User Research",
      "Technical Planning",
      "Project Roadmap",
    ],
  },
  {
    number: "02",
    title: "Design",
    description:
      "Creating intuitive interfaces and experiences that align with your brand identity.",
    details: [
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Brand Integration",
    ],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building robust, scalable solutions using cutting-edge technologies.",
    details: [
      "Frontend Development",
      "Backend Systems",
      "API Integration",
      "Performance Optimization",
    ],
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Launching your project with comprehensive testing and ongoing support.",
    details: [
      "Quality Assurance",
      "Performance Testing",
      "Launch Strategy",
      "Maintenance Plan",
    ],
  },
];

export default function Approach() {
  return (
    <section className="relative py-24 md:py-32 bg-[#1C1C1C] text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative max-w-[1400px] mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-sm tracking-[0.2em] text-neutral-500 block mb-6">
            02 / 04
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            Our Approach to
            <br />
            <span className="text-neutral-400">Digital Excellence</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg">
            A systematic methodology that transforms complex challenges into
            elegant solutions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="group">
              {/* Step Header */}
              <div className="flex items-start gap-6 mb-6">
                <span className="text-2xl md:text-3xl font-light text-neutral-500">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-light mb-4 group-hover:text-neutral-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-base md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step Details */}
              {/* <div className="ml-14 pl-6 border-l border-neutral-800">
                <ul className="space-y-3">
                  {step.details.map((detail, index) => (
                    <li key={index} className="text-sm text-neutral-500">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
