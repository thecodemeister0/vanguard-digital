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
    <section className="relative py-24 md:py-32 bg-[#1C1C1C] text-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 parallax-slow"
          style={{
            backgroundImage:
              "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative max-w-[1400px] mx-auto px-4">
        {/* Section Header */}
        <div
          className="max-w-2xl mb-16 md:mb-24"
          data-animation="animate-fade-in"
        >
          <span className="text-sm tracking-[0.2em] text-neutral-500 block mb-6">
            02 / 04
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            Our Approach to
            <br />
            <span className="text-blue-400">Digital Excellence</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg">
            A systematic methodology that transforms complex challenges into
            elegant digital solutions with predictable, successful outcomes.
          </p>
        </div>

        {/* Approach Steps */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          data-stagger
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 border border-neutral-800 rounded-lg"
              data-animation="animate-slide-up"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl text-blue-400 font-light">
                  {step.number}
                </span>
                <div className="h-px bg-neutral-800 flex-grow"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-light mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-400 mb-6">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-neutral-300"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
