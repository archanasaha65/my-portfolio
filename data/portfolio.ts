import type { LucideIcon } from "lucide-react";
import { Briefcase, Code2, Wrench } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export interface Service {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; isPrimary?: boolean }[];
}

export interface Project {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  projectUrl?: string;
  isPrivate?: boolean;
  projectLabel?: string;
  projectLabelType?: "professional" | "personal" | "freelance";
}

export interface ExperienceArea {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  availability: string;
  description: string;
}

export const personalInfo = {
  name: "Archana Saha",
  title: "Senior Frontend & WordPress Developer",
  heroSubtitle: "Building digital experiences that work.",
  heroDescription: "I help businesses build, improve and maintain responsive websites and modern web applications using WordPress, React, Next.js and Angular.",
  heroSubDescription: "15+ years of web development experience.",
  techLine: ["WordPress", "React", "Next.js", "Angular"],
  aboutHeading: "15+ years of building for the web.",
  aboutDescription: [
    "I'm a Senior Frontend & WordPress Developer with 15+ years of experience building responsive websites, business solutions and modern web applications.",
    "My experience spans frontend development, WordPress, Elementor, React, Angular and Next.js. I enjoy solving complex website issues just as much as building new digital experiences from the ground up.",
    "Clean interfaces. Reliable solutions. Thoughtful development."
  ],
  stats: [
    { value: "15+", label: "Years Experience", icon: Briefcase },
    { value: "FRONTEND + CMS", label: "React · Next.js · Angular · WordPress ", icon: Code2 },
    { value: "BUILD · FIX · IMPROVE", label: "Websites · Apps · Solutions", icon: Wrench }
  ]
};

export const services: Service[] = [
  {
    title: "WordPress Development",
    description: "Professional websites, Elementor builds, WooCommerce and custom WordPress solutions.",
    tags: ["WordPress", "Elementor", "WooCommerce"],
    icon: "Globe"
  },
  {
    title: "Frontend Development",
    description: "Responsive, accessible interfaces that work smoothly across devices.",
    tags: ["HTML / CSS", "JavaScript", "React", "Angular"],
    icon: "Layout"
  },
  {
    title: "React & Next.js",
    description: "Modern web applications and dashboards built with reusable components and API integrations.",
    tags: ["React", "Next.js", "TypeScript", "REST APIs"],
    icon: "Cpu"
  },
  {
    title: "Maintenance & Bug Fixing",
    description: "Fix existing website issues, improve performance and keep your site reliable.",
    tags: ["Bug Fixing", "Performance", "SMTP / Email", "Maintenance"],
    icon: "Wrench"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", isPrimary: false },
      { name: "CSS", isPrimary: false },
      { name: "JavaScript", isPrimary: false },
      { name: "React", isPrimary: true },
      { name: "Next.js", isPrimary: true },
      { name: "Angular", isPrimary: false },
      { name: "Bootstrap", isPrimary: false },
      { name: "jQuery", isPrimary: false }
    ]
  },
  {
    category: "CMS",
    skills: [
      { name: "WordPress", isPrimary: true },
      { name: "Elementor", isPrimary: false },
      { name: "Joomla", isPrimary: false },
      { name: "WooCommerce", isPrimary: false }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "PHP", isPrimary: false },
      { name: "Node.js", isPrimary: false },      
      { name: "REST API", isPrimary: false },
      { name: "MySQL", isPrimary: false },
      { name: "Swagger", isPrimary: false }
    ]
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git", isPrimary: false },
      { name: "Cypress", isPrimary: false },
      { name: "Figma", isPrimary: false },
      { name: "VS Code", isPrimary: false }
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Aahar – The Food Legacy",
    type: "Restaurant Website",
    description:
      "A modern restaurant website developed to showcase the brand, menu, customer feedback and online ordering experience.",
    technologies: [
      "WordPress",
      "Elementor",
      "PHP",
      "JavaScript"
    ],
    highlights: [
      "Responsive website",
      "Restaurant menu",
      "Feedback forms",
      "Multilingual support",
      "Online ordering integration"
    ],
    image: "/images/projects/aahar.webp",
    projectLabel: "Professional Project",
    projectLabelType: "professional"
  },

  {
    title: "Femme Propre",
    type: "Freelance Website",
    description:
      "Designed and developed selected pages of a professional cleaning company website in Wix as part of a freelance engagement. The work included page design, WhatsApp integration, Google Reviews integration and a custom popup.",
    technologies: [
      "Wix",
      "UI Design",
      "Responsive Design",
      "WhatsApp Integration",
      "Google Reviews"
    ],
    highlights: [
      "Designed selected website pages",
      "Responsive Wix layouts",
      "WhatsApp integration",
      "Google Reviews integration",
      "Popup implementation"
    ],
    image: "/images/projects/femme-propre.webp",
    projectLabel: "Freelance Contribution",
    projectLabelType: "freelance",
    projectUrl: "https://www.femmepropre.co.uk/"
  },

  {
    title: "Restaurant Management Dashboard",
    type: "Next.js Web Application",
    description:
      "A personal project currently under development for managing restaurant categories, food types, products and other restaurant data through an administrative dashboard.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MySQL",
      "REST API"
    ],
    highlights: [
      "Authentication",
      "Admin dashboard",
      "Category management",
      "Product management",
      "CRUD operations",
      "REST API integration"
    ],
    image: "/images/projects/restaurant-admin.svg",
    isPrivate: true,
    projectLabel: "Personal Project",
    projectLabelType: "personal"
  },

  {
    title: "Enterprise Web Application",
    type: "Frontend / Business Application",
    description:
      "Frontend development for a business application with responsive interfaces, data-driven screens and integration with backend services.",
    technologies: [
      "Angular",
      "JavaScript",
      "HTML",
      "CSS",
      "REST APIs"
    ],
    highlights: [
      "Responsive UI",
      "Reusable components",
      "API integration",
      "Data-driven interfaces"
    ],
    image: "/images/projects/enterprise.svg",
    isPrivate: true,
    projectLabel: "Professional Project",
    projectLabelType: "professional"
  }
];

export const experienceAreas: ExperienceArea[] = [
  {
    number: "01",
    title: "Frontend Development",
    subtitle: "Building responsive interfaces and user experiences",
    description:
      "Developing responsive and user-friendly web interfaces across desktop, tablet and mobile using modern frontend standards.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    number: "02",
    title: "WordPress & CMS Development",
    subtitle: "Building and customizing business websites",
    description:
      "Developing and customizing WordPress websites, Elementor layouts, WooCommerce solutions and Joomla-based websites.",
    technologies: ["WordPress", "Elementor", "WooCommerce", "Joomla"]
  },
  {
    number: "03",
    title: "Enterprise Applications",
    subtitle: "Building business-focused web applications",
    description:
      "Developing structured, data-driven interfaces for enterprise applications with reusable components and backend API integration.",
    technologies: ["Angular", "React", "REST APIs", "JavaScript"]
  },
  {
    number: "04",
    title: "Modern Web Applications",
    subtitle: "React, Next.js and reusable components",
    description:
      "Building modern web applications and dashboards using React, Next.js, TypeScript and API-driven architectures.",
    technologies: ["React", "Next.js", "TypeScript", "REST APIs"]
  },
  {
    number: "05",
    title: "Maintenance & Problem Solving",
    subtitle: "Fixing, improving and supporting existing systems",
    description:
      "Troubleshooting website issues, plugin conflicts, responsiveness, performance, integrations and other technical problems.",
    technologies: ["Bug Fixing", "Performance", "Integrations", "Maintenance"]
  }
];

export const whyWorkWithMe = [
  {
    number: "01",
    title: "Experience",
    description:
      "15+ years of hands-on web development experience across WordPress, frontend frameworks, CMS platforms and business applications.",
    icon: "Briefcase"
  },
  {
    number: "02",
    title: "Problem Solving",
    description:
      "I look beyond the obvious fix, identify the underlying issue and find practical solutions that keep websites and applications working reliably.",
    icon: "Lightbulb"
  },
  {
    number: "03",
    title: "Business Focus",
    description:
      "I build with real-world goals in mind — usability, responsiveness, maintainability and a smooth experience for the people using the product.",
    icon: "Target"
  },
  {
    number: "04",
    title: "Long-Term Support",
    description:
      "From updates and improvements to troubleshooting and maintenance, I can continue supporting a project after the initial development is complete.",
    icon: "HeartHandshake"
  }
];

export const contactInfo: ContactInfo = {
  email: "saha.archana765@gmail.com",
  linkedin: "https://linkedin.com/in/archana-saha-99176a1ab",
  github: "https://github.com/archanasaha65",
  availability: "Available for freelance projects",
  description:
    "Have a project, website issue, or development requirement? Send me a message and I'll get back to you."
};
