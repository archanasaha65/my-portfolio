"use client";

import Image from "next/image";
import { contactInfo } from "@/data/portfolio";

export default function Footer() {
  const handleScrollToTop = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const section = document.getElementById(id);

    if (section) {
      const headerOffset = 80;

      const elementPosition =
        section.getBoundingClientRect().top +
        window.pageYOffset;

      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
    }
  };

  const navigation = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#F8F7F4] border-t border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-14">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Brand */}
          <div className="max-w-sm space-y-4">

            {/* Logo */}
            <a
              href="#"
              onClick={handleScrollToTop}
              className="inline-flex items-center"
              aria-label="Archana Saha - Home"
            >
              <Image
                src="/images/logo_archana.png"
                alt="Archana Saha"
                width={170}
                height={40}
                className="w-[120px] md:w-[170px] h-auto"
              />
            </a>

            <p className="text-sm text-[#666666]">
              Senior Frontend & WordPress Developer
            </p>

            <p className="text-sm text-[#777777] leading-relaxed max-w-xs">
              Building digital experiences that work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xs tracking-[0.15em] uppercase text-[#171717] mb-4">
              QUICK LINKS
            </h3>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) =>
                    handleScrollToSection(e, item.id)
                  }
                  className="text-sm text-[#666666] hover:text-[#0F766E] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#E5E5E5] flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Copyright */}
          <p className="text-xs text-[#777777]">
            © 2026 Archana Saha. All rights reserved.
          </p>

          {/* Social / Contact */}
          <div className="flex items-center gap-5 text-xs font-semibold text-[#666666]">

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F766E] transition-colors"
            >
              LinkedIn
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F766E] transition-colors"
            >
              GitHub
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-[#0F766E] transition-colors"
            >
              Email
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}