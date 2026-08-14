"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-18 md:pt-36 flex items-center justify-center overflow-hidden">
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
          <span className="font-heading font-bold text-xs md:text-sm tracking-[0.15em] text-[#0F766E] uppercase">
            {personalInfo.title}
          </span>
          
          <h1 className="font-heading font-extrabold text-hero text-[#171717] tracking-tight leading-tight leading-[1.05] max-w-[700px]">
            {personalInfo.heroSubtitle}
          </h1>

          <p className="text-body-custom text-[#666666] max-w-[650px] leading-relaxed mb-2">
            {personalInfo.heroDescription}
          </p>
          <p className="text-base md:text-lg font-medium text-[#171717]">
            {personalInfo.heroSubDescription}
          </p>
          
          {/* Technology Line */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-sm font-medium text-[#666666]">
            {personalInfo.techLine.map((tech, i) => (
              <span key={tech} className="flex items-center">
                <span className="hover:text-[#0F766E] transition-colors">{tech}</span>
                {i < personalInfo.techLine.length - 1 && (
                  <span className="mx-2 text-[#E5E5E5] select-none">•</span>
                )}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className="inline-flex gap-2 items-center justify-center font-heading font-semibold text-base px-7 py-3.5 rounded-[8px] bg-[#0F766E] text-white hover:bg-[#115E59] transition-all duration-200 shadow-sm"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center font-heading font-semibold text-base px-7 py-3.5 rounded-[8px] border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#F8F7F4] hover:border-[#666666] transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right Side: Portrait Visual Frame */}
        <div className="lg:col-span-6 flex justify-center items-center w-full animate-[fadeIn_1s_ease-out_0.2s_both]">
          <div className="relative w-full max-w-[600px] aspect-[4/3] p-4">
            {/* Elegant Background Grid / Accent Decoration */}
            {/* <div className="absolute inset-0 bg-radial-[circle_at_bottom_right] from-[#0F766E]/5 via-transparent to-transparent pointer-events-none" /> */}
            
            
              <Image
                src="/images/hero-image.png"
                alt="Archana Saha"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, auto"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
