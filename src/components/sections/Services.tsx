"use client";
const services = [
  {
    number: "01",
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
  },
  {
    number: "02",
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
  },
  {
    number: "03",
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
  },
  {
    number: "04",
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
  },
];

export default function Services() {
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
            03 / 04
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            Services that
            <br />
            <span className="text-neutral-400">Drive Growth</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg">
            Comprehensive digital solutions tailored to your unique business
            needs.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {services.map((service, i) => (
            <div key={i} className="group">
              <div className="flex items-start gap-6 mb-6">
                <span className="text-2xl md:text-3xl font-light text-neutral-500">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-light mb-6 group-hover:text-neutral-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-base md:text-lg mb-6">
                    {service.description}
                  </p>
                  <span className="text-sm text-neutral-500 font-mono">
                    {service.tech}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
                {/* Service Features */}
                {/* <div className="md:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="p-6 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
                      >
                        <span className="text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
