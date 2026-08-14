import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-15 md:py-20 bg-[#F8F7F4] border-t border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-7 md:mb-8 space-y-4">
          <span className="font-heading font-bold text-xs tracking-[0.15em] text-[#0F766E] uppercase">
            TECHNOLOGIES
          </span>
          <h2 className="font-heading font-bold text-section-heading text-[#171717] tracking-tight leading-tight">
            Technologies I work with
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#666666] leading-relaxed max-w-2xl">A practical stack built through years of building, maintaining
and improving real-world web projects.</p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-white p-6 rounded-[16px] border border-[#E5E5E5] shadow-sm flex flex-col space-y-6"
            >
              <h3 className="font-heading font-bold text-sm tracking-widest text-[#171717] uppercase border-b border-[#E5E5E5] pb-3">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`inline-flex items-center text-sm md:text-sm px-3 py-1.5 rounded-full border font-medium transition-all duration-200 select-none hover:text-[#0F766E] hover:border-[#0F766E]/30 hover:bg-[#0F766E]/5 ${
                      skill.isPrimary
                        ? "bg-[#0F766E]/5 text-[#0F766E] border-[#0F766E]/25 text-sm font-medium shadow-xs"
                        : "bg-[#F8F7F4] text-[#666666] border-[#E5E5E5] hover:border-[#666666]/30 hover:text-[#171717]"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
