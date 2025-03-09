"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#1C1C1C] text-white">
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

      {/* Navigation */}
      <nav className="absolute top-4 left-0 right-0 z-50">
        <div className="container max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="text-lg font-light">
              Vanguard Digital
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/about"
                className="text-sm hover:text-neutral-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm hover:text-neutral-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/work"
                className="text-sm hover:text-neutral-400 transition-colors"
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="text-sm border border-neutral-800 px-4 py-1.5 rounded-full hover:border-neutral-600 transition-colors"
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute left-0 right-0 top-full bg-[#1C1C1C] border-t border-neutral-800 px-4 py-6 space-y-4 transition-all duration-300 ${
              mobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <Link
              href="/about"
              className="block text-sm hover:text-neutral-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-sm hover:text-neutral-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="block text-sm hover:text-neutral-400 transition-colors"
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="inline-block text-sm border border-neutral-800 px-4 py-1.5 rounded-full hover:border-neutral-600 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container relative max-w-[1400px] mx-auto px-4 pt-20 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-12 pt-20 items-start md:items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Main Content */}
          <div className="col-span-1 md:col-span-5">
            <div className="space-y-6">
              {/* Slide Counter */}
              <div className="hidden md:flex items-center gap-4">
                <span className="text-sm tracking-[0.2em] text-neutral-500">
                  01 / 04
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <span className="text-neutral-500 text-sm tracking-[0.2em] block">
                  DESIGN • DEVELOP • DELIVER
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1]">
                  We Craft
                  <br />
                  <span className="text-neutral-400">Digital</span>
                  <br />
                  Experiences
                </h1>
              </div>

              {/* Description */}
              <p className="text-neutral-400 text-base md:text-lg max-w-[90%]">
                Transforming visionary ideas into exceptional digital realities.
                We don't just build websites – we create digital experiences
                that captivate, convert, and drive growth.
              </p>
            </div>
          </div>

          {/* Right Column - Large Text */}
          <div className="col-span-1 md:col-span-7 relative mt-12 md:mt-0">
            <div className="space-y-8 md:space-y-12">
              {/* Large decorative text */}
              <div className="relative">
                <span className="text-8xl sm:text-2xl md:text-[12rem] leading-none font-light text-neutral-800 select-none">
                  2024
                </span>
                <div className="absolute top-1/2 -translate-y-1/2 left-24 md:left-48">
                  <span className="text-sm tracking-[0.2em] text-neutral-500 block mb-2">
                    ESTABLISHED
                  </span>
                  <span className="text-xl md:text-2xl font-light">
                    Harlingen, TX
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 border-t border-neutral-800 pt-8">
                <div
                  className={
                    "group relative p-8 md:p-10 border border-neutral-700 rounded-2xl hover:border-neutral-600 transition-all duration-300"
                  }
                >
                  <span className="block text-2xl md:text-3xl font-light mb-2">
                    30+
                  </span>
                  <span className="text-sm text-neutral-500">
                    Projects Delivered
                  </span>
                </div>
                <div
                  className={
                    "group relative p-8 md:p-10 border border-neutral-700 rounded-2xl hover:border-neutral-600 transition-all duration-300"
                  }
                >
                  <span className="block text-2xl md:text-3xl font-light mb-2">
                    8 years+
                  </span>
                  <span className="text-sm text-neutral-500">
                    Industry Experience
                  </span>
                </div>
                <div
                  className={
                    "group relative p-8 md:p-10 border border-neutral-700 rounded-2xl hover:border-neutral-600 transition-all duration-300"
                  }
                >
                  <span className="block text-2xl md:text-3xl font-light mb-2">
                    95%
                  </span>
                  <span className="text-sm text-neutral-500">
                    Client Satisfaction
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm group"
              >
                <span className="text-neutral-400 group-hover:text-white transition-colors">
                  Start a Project
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
