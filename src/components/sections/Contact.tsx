"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@vanguarddigitalagency.com",
    link: "mailto:hello@vanguarddigitalagency.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(956) 495-2908",
    link: "tel:+19561234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Harlingen, TX",
    link: "https://maps.google.com/?q=Harlingen,TX",
  },
];

const contactOptions = [
  {
    title: "Web Development",
    description:
      "Need a new website or want to redesign your existing one? Let's discuss how we can create a beautiful, high-performing website for your business.",
  },
  {
    title: "Mobile App Development",
    description:
      "Looking to create a mobile app for your business? We can help you design and develop a custom solution for iOS and Android platforms.",
  },
  {
    title: "Digital Marketing",
    description:
      "Want to improve your online presence and reach more customers? Our digital marketing strategies can help you grow your business.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-neutral-900 text-white"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
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
          <span className="text-blue-400/60 font-mono">05 / 05</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            Let's Create
            <br />
            <span className="text-blue-400">Something Great</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mt-6">
            Ready to transform your digital presence? Whether you need a
            website, mobile app, or complete digital strategy, we're here to
            bring your vision to life with our proven approach.
          </p>
        </div>

        {/* Featured Contact Form */}
        <div className="mb-16" data-animation="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group relative p-8 md:p-12 border border-neutral-800 rounded-2xl hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/20">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono">
                    01
                  </div>
                  <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                </div>

                <h3 className="text-2xl md:text-3xl font-light mb-6 group-hover:text-neutral-100 transition-colors">
                  Get in Touch
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm text-neutral-400"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm text-neutral-400"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-sm text-neutral-400"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-sm text-neutral-400"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 text-sm group bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 hover:bg-blue-500/20 transition-colors"
                  >
                    <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      Send Message
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </button>
                </form>
              </div>

              <div className="hidden md:block mt-8">
                <p className="text-neutral-500 italic">
                  "We're excited to learn about your project and how we can help
                  bring your vision to life."
                </p>
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 flex items-center justify-center overflow-hidden">
                  {/* Abstract Design Elements */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-500/5 blur-2xl"></div>
                  <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-blue-500/5 blur-2xl"></div>

                  {/* Diagonal Lines */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform -rotate-45 translate-y-12"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -rotate-45 translate-y-24"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -rotate-45 translate-y-36"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform rotate-45 translate-y-12"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform rotate-45 translate-y-24"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform rotate-45 translate-y-36"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 w-full">
                    <div className="text-center mb-8">
                      <div className="inline-block p-3 rounded-lg bg-blue-500/10 mb-4">
                        <Mail className="w-8 h-8 text-blue-400" />
                      </div>
                      <h4 className="text-2xl font-light text-white mb-2">
                        Get Connected
                      </h4>
                      <p className="text-neutral-400 text-sm">
                        Reach out through any of these channels
                      </p>
                    </div>

                    <div className="space-y-5">
                      {contactInfo.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="flex items-center gap-4 py-3 px-5 border border-neutral-800 rounded-lg group hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                        >
                          <item.icon className="w-5 h-5 text-blue-400" />
                          <div>
                            <span className="text-sm text-neutral-500 block mb-0.5">
                              {item.label}
                            </span>
                            <span className="text-base font-light text-white group-hover:text-blue-300 transition-colors">
                              {item.value}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Border accent */}
                <div className="absolute -inset-px rounded-2xl border border-neutral-800 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-blue-500/40 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-24 h-1 bg-gradient-to-l from-blue-500/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <h3 className="text-2xl font-light mb-8 text-center">
          How can we help you?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactOptions.map((option, i) => (
            <div
              key={i}
              className="group relative p-8 border border-neutral-800 rounded-2xl hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/20"
              data-animation="animate-slide-up"
              data-delay={100 * (i + 1)}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm">
                  0{i + 1}
                </div>
                <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
              </div>

              <h4 className="text-xl font-light mb-3 group-hover:text-neutral-100 transition-colors">
                {option.title}
              </h4>

              <p className="text-neutral-500 mb-6">{option.description}</p>

              <a
                href="#contact"
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Contact Info */}
        <div className="mt-16 grid grid-cols-1 gap-4 lg:hidden" data-stagger>
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center gap-4 p-4 border border-neutral-800 rounded-xl group hover:border-neutral-700 transition-colors"
              data-animation="animate-slide-up"
              data-delay={100 * (index + 1)}
            >
              <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <span className="text-sm text-neutral-500 block mb-1">
                  {item.label}
                </span>
                <span className="text-lg font-light group-hover:text-neutral-300 transition-colors">
                  {item.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
