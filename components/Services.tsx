import {
  Globe,
  Layout,
  Cpu,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

import { services } from "@/data/portfolio";

const iconMap: {
  [key: string]: React.ComponentType<{
    className?: string;
    size?: number;
    strokeWidth?: number;
  }>;
} = {
  Globe,
  Layout,
  Cpu,
  Wrench,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-15 md:py-20 bg-[#F8F7F4] border-t border-[#E5E5E5]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mb-7 md:mb-8">

          <span className="font-heading font-bold text-xs tracking-[0.15em] text-[#0F766E] uppercase">
            WHAT I DO
          </span>

          <h2 className="mt-3 font-heading font-bold text-section-heading text-[#171717] tracking-tight leading-[1.1]">
            Web solutions built around your needs.
          </h2>

          <p className="mt-5 text-base md:text-lg text-[#666666] leading-relaxed max-w-2xl">
            From WordPress websites to modern web applications, I build,
            improve and maintain digital experiences that work.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;

            return (
              <div
                key={index}
                className="
                  group
                  h-full
                  bg-white
                  p-7
                  rounded-[16px]
                  border border-[#E5E5E5]
                  shadow-sm
                  hover:-translate-y-1
                  hover:border-[#0F766E]/20
                  hover:shadow-lg
                  transition-all
                  duration-300
                  flex
                  flex-col
                "
              >

                {/* Top */}
                <div className="flex items-center justify-between">

                  <span className="text-xs font-semibold tracking-[0.15em] text-[#A3A3A3]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="w-11 h-11 rounded-full bg-[#0F766E]/5 text-[#0F766E] flex items-center justify-center border border-[#0F766E]/10">
                    <IconComponent
                      size={21}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                </div>

                {/* Content */}
                <div className="mt-3">

                  <h3 className="font-heading font-bold text-xl text-[#171717] leading-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm md:text-base text-[#666666] leading-relaxed">
                    {service.description}
                  </p>

                </div>

                {/* Tags */}
                <div className="mt-auto pt-6">

                  <div className="border-t border-[#E5E5E5] pt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          inline-flex
                          items-center
                          text-xs
                          font-medium
                          px-2.5
                          py-1
                          rounded-full
                          bg-[#F8F7F4]
                          text-[#666666]
                          border border-[#E5E5E5]
                          transition-colors
                          duration-200
                          group-hover:border-[#0F766E]/20
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}