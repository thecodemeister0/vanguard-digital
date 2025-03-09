"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@vanguarddigitalagency.com",
    link: "mailto:info@vanguarddigitalagency.com",
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
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
              Let's Create
              <br />
              <span className="text-neutral-400">Something Great</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl">
              Have a project in mind? We'd love to discuss how we can help bring
              your vision to life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Contact Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-neutral-400" htmlFor="company">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full bg-transparent border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600"
                  placeholder="Your company name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-neutral-400" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full bg-transparent border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 text-sm group border border-neutral-800 rounded-full px-6 py-3 hover:border-neutral-600 transition-colors"
              >
                <span className="text-neutral-400 group-hover:text-white transition-colors">
                  Send Message
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-5">
            <div className="sticky top-32 space-y-12">
              {/* Contact Methods */}
              <div className="space-y-8">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 border border-neutral-800 rounded-full flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                      <item.icon className="w-5 h-5 text-neutral-500 group-hover:text-neutral-400 transition-colors" />
                    </div>
                    <div>
                      <span className="block text-sm text-neutral-500 mb-1">
                        {item.label}
                      </span>
                      <span className="text-lg text-white group-hover:text-neutral-400 transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
