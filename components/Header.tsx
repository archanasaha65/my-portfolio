"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;

      for (const link of navLinks) {
        const el = document.getElementById(link.href.replace("#", ""));

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(link.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Logo / home
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setActiveSection("");
      return;
    }

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;

      const elementPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset;

      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });

      setActiveSection(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFFFF]/80 backdrop-blur-md border-b border-[#E5E5E5] py-4"
          : "bg-[#FFFFFF] border-b border-[#E5E5E5] py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, "#")}
          className="flex items-center shrink-0"
          aria-label="Archana Saha - Home"
        >
          <Image
            src="/images/logo_archana.png"
            alt="Archana Saha"
            width={190}
            height={40}
            priority
            className="w-[170px] md:w-[190px] h-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) =>
                handleLinkClick(e, link.href)
              }
              className={`font-heading font-semibold text-sm transition-colors hover:text-[#0F766E] ${
                activeSection === link.href
                  ? "text-[#0F766E]"
                  : "text-[#666666]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) =>
              handleLinkClick(e, "#contact")
            }
            className="inline-flex items-center justify-center font-heading font-semibold text-sm px-5 py-2.5 rounded-[8px] bg-[#0F766E] text-white hover:bg-[#115E59] transition-colors duration-200"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() =>
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }
          className="md:hidden p-2 text-[#0F766E] hover:text-[#115E59] focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#F8F7F4] border-b border-[#E5E5E5] px-6 py-6 shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) =>
                handleLinkClick(e, link.href)
              }
              className={`font-heading font-semibold text-base py-1 transition-colors hover:text-[#0F766E] ${
                activeSection === link.href
                  ? "text-[#0F766E]"
                  : "text-[#666666]"
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 border-t border-[#E5E5E5]">
            <a
              href="#contact"
              onClick={(e) =>
                handleLinkClick(e, "#contact")
              }
              className="inline-flex w-full items-center justify-center font-heading font-semibold text-base py-3 px-5 rounded-[8px] bg-[#171717] text-white hover:bg-[#0F766E] transition-colors"
            >
              Let's Talk
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}