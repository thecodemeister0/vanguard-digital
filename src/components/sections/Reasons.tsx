"use client";
const reasons = [
  {
    number: "01",
    title: "Modern Tech Stack",
    description:
      "We leverage cutting-edge technologies and frameworks to build future-proof solutions that scale.",
    stats: {
      value: "100%",
      label: "Performance Score",
    },
  },
  {
    number: "02",
    title: "User-Centric Design",
    description:
      "Every pixel is crafted with purpose, ensuring intuitive experiences that delight your users.",
    stats: {
      value: "2x",
      label: "Conversion Rate",
    },
  },
  {
    number: "03",
    title: "Rapid Development",
    description:
      "Agile methodology combined with efficient processes to deliver quality results faster.",
    stats: {
      value: "4x",
      label: "Faster Delivery",
    },
  },
  {
    number: "04",
    title: "Strategic Marketing",
    description:
      "We help you reach your audience through search engines, social media, and email marketing.",
    stats: {
      value: "5x",
      label: "Leads Generated",
    },
  },
];

export default function Reasons() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          <div>
            <span className="text-sm tracking-[0.2em] text-neutral-500 block mb-6">
              04 / 04
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
              Why Choose
              <br />
              <span className="text-neutral-400">Our Expertise</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-neutral-400 text-base md:text-lg max-w-xl">
              We combine technical excellence with creative innovation to
              deliver exceptional digital solutions that set you apart from the
              competition.
            </p>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group relative p-8 md:p-12 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-all duration-300"
            >
              {/* Number */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm tracking-[0.2em] text-neutral-500">
                  {reason.number}
                </span>
                <div className="h-px flex-1 bg-neutral-800 group-hover:bg-neutral-700 transition-colors" />
              </div>

              {/* Content */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-light group-hover:text-neutral-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-neutral-400">{reason.description}</p>
              </div>

              {/* Stats */}
              <div className="flex items-end justify-between">
                <div>
                  <span className="block text-3xl md:text-4xl font-light mb-2">
                    {reason.stats.value}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {reason.stats.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
