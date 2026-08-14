import { experienceAreas } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-15 md:py-20 bg-[#F8F7F4] border-t border-[#E5E5E5]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:h-fit space-y-6">

            <span className="font-heading font-bold text-xs tracking-[0.15em] text-[#0F766E] uppercase">
              EXPERIENCE
            </span>

            <h2 className="font-heading font-bold text-section-heading text-[#171717] tracking-tight leading-tight">
              A career built around the web.
            </h2>

            <p className="text-body-custom text-[#666666] leading-relaxed">
              15+ years of professional experience building, maintaining and
              improving websites, business solutions and modern web applications.
            </p>

            {/* Experience Highlight */}
            <div className="pt-4">
              <div className="inline-flex flex-col border-l-2 border-[#0F766E] pl-5">
                <span className="font-heading font-extrabold text-3xl text-[#0F766E]">
                  15+
                </span>

                <span className="text-xs font-semibold tracking-wider uppercase text-[#666666] mt-1">
                  Years of Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8">

            <div className="relative">

              {/* Timeline Line */}
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[#DADADA]" />

              <div className="space-y-7">
                {experienceAreas.map((area) => (
                  <article
                    key={area.number}
                    className="relative pl-12 group"
                  >

                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#F8F7F4] border border-[#DADADA] flex items-center justify-center group-hover:border-[#0F766E] transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#0F766E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="bg-white border border-[#E5E5E5] rounded-[14px] p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">

                      {/* Number */}
                      <span className="text-xs font-bold tracking-[0.15em] text-[#0F766E]">
                        {area.number}
                      </span>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-lg md:text-xl text-[#171717] mt-2">
                        {area.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="font-medium text-sm text-[#444444] mt-1">
                        {area.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm md:text-base text-[#666666] leading-relaxed mt-3">
                        {area.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {area.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#F8F7F4] border border-[#E5E5E5] text-[#666666] group-hover:border-[#0F766E]/20 group-hover:text-[#0F766E] transition-colors"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}