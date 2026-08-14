"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  const handleScrollToContact = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const headerOffset = 80;
      const elementPosition =
        contactSection.getBoundingClientRect().top;

      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="
        relative
        py-20 md:py-24
        bg-[#171717]
        text-white
        overflow-hidden
        border-t border-[#E5E5E5]/10
      "
    >
      {/* Subtle decorative glow */}
      <div
        className="
          absolute
          -top-40
          right-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#0F766E]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          left-0
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#0F766E]/5
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          max-w-[1280px]
          mx-auto
          px-6 md:px-12
          text-center
        "
      >
        <div className="max-w-2xl mx-auto space-y-5">
          <span
            className="
              font-heading
              font-bold
              text-xs
              tracking-[0.15em]
              text-[#5BB8B0]
              uppercase
            "
          >
            LET'S WORK TOGETHER
          </span>

          <h2
            className="
              font-heading
              font-extrabold
              text-3xl
              md:text-5xl
              text-white
              tracking-tight
              leading-tight
            "
          >
            Have a project in mind?
          </h2>

          <p
            className="
              text-base
              md:text-lg
              text-[#A3A3A3]
              leading-relaxed
              max-w-xl
              mx-auto
            "
          >
            From building a new website to improving an existing
            application, I can help turn your requirements into a
            reliable, responsive web solution.
          </p>

          <div className="pt-3">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                font-heading
                font-semibold
                text-sm
                md:text-base
                px-7
                py-3.5
                rounded-[8px]
                bg-[#0F766E]
                text-white
                hover:bg-[#115E59]
                transition-all
                duration-200
                group
                shadow-sm
                hover:shadow-md
              "
            >
              <span>Let's Talk</span>

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}