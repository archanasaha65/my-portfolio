import { Briefcase, Code2, Wrench } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-15 md:py-20 bg-[#ffffff]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Eyebrow and Main Content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-heading font-bold text-xs tracking-[0.15em] text-[#0F766E] uppercase bg-[#0F766E]/5 px-3 py-1.5 rounded-full border border-[#0F766E]/10 inline-block">
              ABOUT ME
            </span>
            <h2 className="font-heading font-bold text-section-heading text-[#171717] tracking-tight leading-[1.1] max-w-[600px]">
              {personalInfo.aboutHeading}
            </h2>
            <div className="space-y-4 text-body-custom text-[#666666] font-normal leading-relaxed">
              {personalInfo.aboutDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Card 1: 15+ Years (Takes 5 columns on desktop, full on mobile) */}
              <div
                className="
                  md:col-span-5
                  bg-gradient-to-br from-[#0F766E] to-[#115E59]
                  text-white
                  p-8
                  rounded-2xl
                  flex
                  flex-col
                  justify-between
                  min-h-[240px]
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  relative
                  overflow-hidden
                  group
                "
              >
                {/* Abstract background glow/circle */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-500" />
                
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <span className="text-xs font-semibold bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Seniority
                  </span>
                </div>
                
                <div className="mt-8 relative z-10">
                  <span className="block font-heading font-extrabold text-5xl lg:text-6xl tracking-tight leading-none">
                    15+
                  </span>
                  <span className="block font-heading font-semibold text-xs lg:text-sm text-teal-100 uppercase tracking-widest mt-3">
                    Years Experience
                  </span>
                </div>
              </div>

              {/* Cards 2 & 3 Container (Takes 7 columns on desktop, full on mobile) */}
              <div className="md:col-span-7 flex flex-col gap-6">

                {/* Card 2: Frontend & CMS */}
                <div
                  className="
                    bg-white
                    p-6
                    rounded-2xl
                    border border-[#E5E5E5]
                    flex
                    flex-col
                    justify-between
                    flex-grow
                    shadow-sm
                    hover:shadow-md
                    hover:border-[#0F766E]/20
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    group
                  "
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#0F766E]/5 text-[#0F766E] rounded-xl border border-[#0F766E]/10 group-hover:bg-[#0F766E] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <Code2 size={22} />
                    </div>
                    <div>
                      <span className="font-heading font-extrabold text-sm text-[#171717] tracking-wider uppercase">
                        FRONTEND & CMS EXPERTISE
                      </span>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {[
                          { name: "React", hoverClass: "hover:bg-[#00d8ff]/10 hover:text-[#008ba3] hover:border-[#00d8ff]/30" },
                          { name: "Next.js", hoverClass: "hover:bg-neutral-900/5 hover:text-neutral-950 hover:border-neutral-900/20" },
                          { name: "Angular", hoverClass: "hover:bg-red-50 hover:text-red-600 hover:border-red-500/20" },
                          { name: "WordPress", hoverClass: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-500/20" }
                        ].map((tech) => (
                          <span
                            key={tech.name}
                            className={`
                              text-xs 
                              bg-[#F8F7F4] 
                              text-[#666666] 
                              border 
                              border-[#E5E5E5] 
                              px-3 
                              py-1 
                              rounded-full 
                              font-medium 
                              transition-all 
                              duration-200
                              ${tech.hoverClass}
                            `}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Build, Fix, Improve */}
                <div
                  className="
                    bg-white
                    p-6
                    rounded-2xl
                    border border-[#E5E5E5]
                    flex
                    flex-col
                    justify-between
                    flex-grow
                    shadow-sm
                    hover:shadow-md
                    hover:border-[#0F766E]/20
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    group
                  "
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#0F766E]/5 text-[#0F766E] rounded-xl border border-[#0F766E]/10 group-hover:bg-[#0F766E] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <Wrench size={22} />
                    </div>
                    <div>
                      <span className="font-heading font-extrabold text-sm text-[#171717] tracking-wider uppercase">
                        BUILD · FIX · IMPROVE
                      </span>
                      
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] flex-shrink-0" />
                          <span className="text-xs text-[#666666] font-medium"><strong className="text-[#171717] font-bold">Build</strong> clean apps</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] flex-shrink-0" />
                          <span className="text-xs text-[#666666] font-medium"><strong className="text-[#171717] font-bold">Fix</strong> bugs & issues</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] flex-shrink-0" />
                          <span className="text-xs text-[#666666] font-medium"><strong className="text-[#171717] font-bold">Improve</strong> speed & SEO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
