import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-15 md:py-20 bg-[#ffffff]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Eyebrow and Main Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-heading font-bold text-xs tracking-[0.15em] text-[#0F766E] uppercase">
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
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {personalInfo.stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="w-full min-h-[170px] bg-white p-6 rounded-[16px] border border-[#E5E5E5] flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.8}
                      className="text-[#0F766E] mb-3"
                    />

                    <span className="font-heading font-extrabold text-xl md:text-2xl text-[#0F766E] tracking-tight">
                      {stat.value}
                    </span>

                    <span className="font-heading font-semibold text-sm text-[#171717] uppercase tracking-wider mt-1">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
