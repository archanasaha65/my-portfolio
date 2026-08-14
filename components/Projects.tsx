"use client";

import Image from "next/image";
import {
  ExternalLink,
  LockKeyhole,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";

import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-[#FFFFFF] border-t border-[#E5E5E5]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* ================= SECTION HEADER ================= */}

        <div className="max-w-3xl mb-12 md:mb-16 space-y-4">

          <span className="font-heading font-bold text-xs tracking-[0.15em] text-[#0F766E] uppercase">
            SELECTED WORK
          </span>

          <h2 className="font-heading font-bold text-section-heading text-[#171717] tracking-tight leading-tight">
            Projects I&apos;ve worked on.
          </h2>

          <p className="text-base md:text-lg text-[#666666] leading-relaxed max-w-2xl">
            A selection of professional websites, freelance work and personal
            projects I&apos;ve worked on across different technologies and
            business requirements.
          </p>

        </div>


        {/* ================= PROJECT GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <article
              key={index}
              className="
                group
                bg-white
                rounded-[16px]
                border border-[#E5E5E5]
                overflow-hidden
                flex flex-col
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* ================= PROJECT IMAGE ================= */}

              <div
                className="
                  relative
                  aspect-[16/10]
                  overflow-hidden
                  bg-[#F8F7F4]
                  border-b border-[#E5E5E5]
                "
              >

                <Image
                  src={project.image}
                  alt={`${project.title} project`}
                  fill
                  priority={index === 0}
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    380px
                  "
                />


                {/* ================= PROJECT NUMBER ================= */}

                <div
                  className="
                    absolute
                    top-4
                    left-4
                    w-9
                    h-9
                    rounded-full
                    bg-white/95
                    backdrop-blur-sm
                    border border-[#E5E5E5]
                    flex
                    items-center
                    justify-center
                    shadow-sm
                  "
                >
                  <span className="text-xs font-bold text-[#666666]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>


                {/* ================= PROJECT TYPE BADGE ================= */}

                <div
                  className="
                    absolute
                    top-4
                    right-4
                    inline-flex
                    items-center
                    gap-1.5
                    px-3
                    py-1.5
                    rounded-full
                    bg-white/95
                    backdrop-blur-sm
                    border border-[#E5E5E5]
                    shadow-sm
                  "
                >

                  {project.projectLabelType === "personal" ? (
                    <UserRound
                      size={12}
                      className="text-[#0F766E]"
                    />
                  ) : project.projectLabelType === "freelance" ? (
                    <BriefcaseBusiness
                      size={12}
                      className="text-[#0F766E]"
                    />
                  ) : (
                    <LockKeyhole
                      size={12}
                      className="text-[#0F766E]"
                    />
                  )}

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      text-[#666666]
                      uppercase
                      tracking-wide
                    "
                  >
                    {project.projectLabel}
                  </span>

                </div>

              </div>


              {/* ================= CONTENT ================= */}

              <div
                className="
                  p-6
                  md:p-7
                  flex
                  flex-col
                  flex-grow
                "
              >

                {/* Project Type */}

                <span
                  className="
                    font-heading
                    font-semibold
                    text-xs
                    tracking-[0.12em]
                    text-[#0F766E]
                    uppercase
                  "
                >
                  {project.type}
                </span>


                {/* Project Title */}

                <h3
                  className="
                    mt-2
                    font-heading
                    font-bold
                    text-xl
                    md:text-[22px]
                    text-[#171717]
                    leading-tight
                  "
                >
                  {project.title}
                </h3>


                {/* Description */}

                <p
                  className="
                    mt-4
                    text-sm
                    md:text-[15px]
                    text-[#666666]
                    leading-relaxed
                  "
                >
                  {project.description}
                </p>


                {/* ================= HIGHLIGHTS ================= */}

                <div className="mt-6">

                  <p
                    className="
                      text-xs
                      font-bold
                      text-[#171717]
                      uppercase
                      tracking-wider
                      mb-3
                    "
                  >
                    Key Highlights
                  </p>


                  <ul className="space-y-2">

                    {project.highlights
                      .slice(0, 4)
                      .map((highlight, idx) => (

                        <li
                          key={idx}
                          className="
                            flex
                            items-start
                            gap-2
                            text-xs
                            md:text-sm
                            text-[#666666]
                          "
                        >

                          <span
                            className="
                              mt-[6px]
                              w-1.5
                              h-1.5
                              rounded-full
                              bg-[#0F766E]
                              flex-shrink-0
                            "
                          />

                          <span>
                            {highlight}
                          </span>

                        </li>

                      ))}

                  </ul>

                </div>


                {/* ================= BOTTOM ================= */}

                <div className="mt-auto pt-6">

                  <div className="border-t border-[#E5E5E5] mb-5" />


                  {/* Technologies */}

                  <div className="flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                          inline-flex
                          items-center
                          px-2.5
                          py-1
                          rounded-full
                          bg-[#F8F7F4]
                          border border-[#E5E5E5]
                          text-[11px]
                          font-medium
                          text-[#666666]
                          transition-colors
                          duration-200
                          group-hover:border-[#0F766E]/30
                          group-hover:text-[#0F766E]
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>


                  {/* ================= PROJECT FOOTER ================= */}

                  <div className="mt-5 flex items-center justify-between gap-3">

                    {/* Project Label */}

                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-heading
                        font-semibold
                        text-[#777777]
                      "
                    >

                      {project.projectLabelType === "personal" ? (
                        <UserRound
                          size={15}
                          className="text-[#0F766E]"
                        />
                      ) : project.projectLabelType === "freelance" ? (
                        <BriefcaseBusiness
                          size={15}
                          className="text-[#0F766E]"
                        />
                      ) : (
                        <LockKeyhole
                          size={15}
                          className="text-[#0F766E]"
                        />
                      )}

                      <span>
                        {project.projectLabel}
                      </span>

                    </div>


                    {/* Website Link */}

                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          text-sm
                          font-heading
                          font-semibold
                          text-[#0F766E]
                          hover:text-[#115E59]
                          transition-colors
                        "
                      >

                        <span>View Website</span>

                        <ExternalLink size={14} />

                      </a>
                    )}

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}