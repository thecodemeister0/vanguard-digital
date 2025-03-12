"use client";

import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-neutral-900 text-white overflow-x-hidden">
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

      {/* Abstract Design Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-500/5 to-transparent opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent opacity-60 pointer-events-none"></div>

      {/* Diagonal Lines */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform -rotate-45 translate-y-[30vh]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -rotate-45 translate-y-[60vh]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform rotate-45 translate-y-[20vh]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent transform rotate-45 translate-y-[50vh]"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="container max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="text-xl font-light group">
              <span className="inline-block relative">
                Vanguard
                <span className="text-blue-400">Digital</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#expertise"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Our Approach
              </a>
              <a
                href="#reasons"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#contact"
                className="text-sm bg-blue-500/10 border border-blue-500/20 px-5 py-2 rounded-full hover:bg-blue-500/20 transition-all duration-300 text-blue-400"
              >
                Get in touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute left-0 right-0 top-full bg-neutral-900 border-t border-neutral-800 px-4 py-6 space-y-4 transition-all duration-300 ${
              mobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <a
              href="#expertise"
              className="block text-sm hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#process"
              className="block text-sm hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Approach
            </a>
            <a
              href="#reasons"
              className="block text-sm hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a
              href="#contact"
              className="block text-sm hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container relative max-w-[1400px] mx-auto px-4 pt-20 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-12 pt-20 items-start md:items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Main Content */}
          <div className="col-span-1 md:col-span-5 lg:col-span-5">
            <div className="space-y-6">
              {/* Slide Counter */}
              <div
                className="flex items-center gap-4"
                data-animation="animate-fade-in"
              >
                <span className="text-blue-400/60 font-mono">01 / 05</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4" data-stagger>
                <div
                  className="flex items-center space-x-4 mb-2"
                  data-animation="animate-slide-left"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm">
                    01
                  </div>
                  <div className="h-px flex-grow bg-neutral-800"></div>
                </div>

                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
                  data-animation="animate-slide-left"
                >
                  We Craft
                  <br />
                  <span className="text-blue-400">Digital</span>
                  <br />
                  Experiences
                </h1>
              </div>

              {/* Description */}
              <p
                className="text-neutral-400 text-base md:text-lg max-w-[90%]"
                data-animation="animate-slide-left"
                data-delay="300"
              >
                Specializing in web development, mobile apps, and UI/UX design
                with a strategic approach. We build digital products that solve
                real business challenges and create measurable growth.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4 pt-4"
                data-animation="animate-slide-left"
                data-delay="400"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full hover:bg-blue-500/20 transition-all duration-300 text-blue-400 group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#expertise"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-800 rounded-full hover:border-neutral-700 transition-all duration-300 text-neutral-400 hover:text-neutral-300 group"
                >
                  <span>Explore Services</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Large Text & Stats */}
          <div className="col-span-1 md:col-span-7 relative mt-12 md:mt-0">
            <div className="space-y-8 md:space-y-12">
              {/* Featured Highlight Card */}
              <div
                className="relative p-8 md:p-10 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-all duration-300 group overflow-hidden"
                data-animation="animate-fade-in"
                data-delay="200"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="text-sm tracking-[0.2em] text-blue-400 block mb-2">
                      ESTABLISHED
                    </span>
                    <span className="text-2xl md:text-3xl font-light block mb-4">
                      Harlingen, TX
                    </span>
                    <p className="text-neutral-400">
                      Founded with a mission to bring world-class digital
                      services to businesses of all sizes. Our local roots and
                      global perspective give us a unique advantage.
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="text-8xl md:text-9xl font-light text-neutral-800 select-none group-hover:text-neutral-700 transition-colors duration-500 parallax-medium">
                      2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                data-stagger
              >
                <div
                  className="group relative p-8 border border-neutral-800 rounded-2xl hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/20"
                  data-animation="animate-slide-up"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                  </div>

                  <span className="block text-3xl md:text-4xl font-light mb-2 text-blue-400">
                    30+
                  </span>
                  <span className="text-sm text-neutral-400">
                    Projects Delivered
                  </span>
                </div>
                <div
                  className="group relative p-8 border border-neutral-800 rounded-2xl hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/20"
                  data-animation="animate-slide-up"
                  data-delay="100"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                  </div>

                  <span className="block text-3xl md:text-4xl font-light mb-2 text-blue-400">
                    8 years+
                  </span>
                  <span className="text-sm text-neutral-400">
                    Industry Experience
                  </span>
                </div>
                <div
                  className="group relative p-8 border border-neutral-800 rounded-2xl hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/20"
                  data-animation="animate-slide-up"
                  data-delay="200"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-px flex-grow bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                  </div>

                  <span className="block text-3xl md:text-4xl font-light mb-2 text-blue-400">
                    95%
                  </span>
                  <span className="text-sm text-neutral-400">
                    Client Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-xs text-neutral-500">Scroll Down</span>
          <ChevronDown className="w-4 h-4 text-neutral-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
