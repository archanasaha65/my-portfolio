"use client";

import {
  Briefcase,
  Lightbulb,
  Target,
  HeartHandshake,
} from "lucide-react";

import { whyWorkWithMe } from "@/data/portfolio";

const iconMap = {
  Briefcase,
  Lightbulb,
  Target,
  HeartHandshake,
};

export default function WhyWorkWithMe() {
  return (
    <section
      id="why-work-with-me"
      className="py-15 md:py-20 bg-[#F8F7F4] border-t border-[#E5E5E5]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="font-heading font-bold text-xs tracking-[0.15em] text-[#0F766E] uppercase">
            WHY WORK WITH ME
          </span>

          <h2 className="font-heading font-bold text-section-heading text-[#171717] tracking-tight leading-tight mt-2">
            More than just writing code.
          </h2>

          <p className="text-body-custom text-[#666666] leading-relaxed mt-4 max-w-2xl">
            I bring practical experience, problem-solving and a
            business-focused approach to every project — whether I'm
            building something new or improving something that already exists.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {whyWorkWithMe.map((item) => {
            const Icon =
              iconMap[item.icon as keyof typeof iconMap];

            return (
              <article
                key={item.number}
                className="
                  group
                  bg-white
                  border border-[#E5E5E5]
                  rounded-[14px]
                  p-6
                  min-h-[230px]
                  flex flex-col
                  justify-between
                  shadow-sm
                  hover:shadow-md
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* Top */}
                <div className="flex items-start justify-between">

                  <span className="font-heading font-bold text-xs tracking-[0.15em] text-[#AAAAAA]">
                    {item.number}
                  </span>

                  <div
                    className="
                      w-10 h-10
                      rounded-[10px]
                      bg-[#0F766E]/5
                      border border-[#0F766E]/10
                      flex items-center justify-center
                      text-[#0F766E]
                      group-hover:bg-[#0F766E]
                      group-hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                </div>

                {/* Content */}
                <div className="mt-8">

                  <h3
                    className="
                      font-heading
                      font-bold
                      text-lg
                      text-[#171717]
                      group-hover:text-[#0F766E]
                      transition-colors
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#666666] leading-relaxed mt-3">
                    {item.description}
                  </p>

                </div>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}