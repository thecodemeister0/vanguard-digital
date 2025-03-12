"use client";

import { Card } from "@/components/ui/card";
import { Brain, Cpu, Globe, Lightbulb, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to create smarter, more intuitive user experiences.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Build applications that perform flawlessly across continents with our distributed infrastructure.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security measures to protect your data and your users' privacy at every level.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Responsive applications that provide a seamless experience across all devices and screen sizes.",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description:
      "Utilize the latest in edge computing technology to deliver lightning-fast responses worldwide.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description:
      "Stay ahead of the curve with our forward-thinking approach to digital solutions.",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-primary/60 font-mono">02</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Next-Generation
            <br />
            Digital Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We combine cutting-edge technology with creative innovation to
            deliver exceptional digital experiences.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="p-6 group hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="relative h-full space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 text-sm text-primary/40 font-mono">
                  0{i + 1}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-1/4 h-1/2 bg-primary/5 -z-10 rounded-l-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 -z-10 rounded-tr-3xl"></div>
    </section>
  );
}
