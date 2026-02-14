import { Github, Linkedin, Mail, Layout, Server, Database, Cpu } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Jim Jin",
  title: "Software Engineer",
  subtitle:
    "I build reliable, user-facing software and contribute to open-source chess infrastructure. Looking for entry-level SWE roles where I can ship product and grow fast.",
  bio: "I'm a software engineer who loves building things that people actually use. My strongest work lives at the intersection of full-stack web development and open-source contribution. I've contributed 10+ merged PRs to Lichess, the largest free chess platform, working across Scala and TypeScript codebases. I've also shipped a production marketplace app for a freelance client and built data-driven dashboards and team management tools.",
  location: "Boston, MA",
  email: "jimjin135@gmail.com",
  resumeUrl: "/Jim_Jin_Resume_2026.pdf",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/realJimJin",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/guixuanjin/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:jimjin135@gmail.com",
      icon: Mail,
    },
  ],
};

export const SKILLS = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Python", "Django", "Scala", "REST APIs"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    category: "DevOps & Tools",
    icon: Cpu,
    items: ["Docker", "Git", "CI/CD", "Vercel", "Linux"],
  },
];

export const EXPERIENCE = [
  {
    company: "Lichess.org",
    role: "Open-Source Contributor",
    period: "2024 - Present",
    description:
      "Active contributor to the largest free and open-source chess platform serving 10M+ monthly users. Merged 10+ pull requests across the Scala/Play backend and TypeScript frontend, improving UI components and game logic. Collaborated asynchronously with maintainers via GitHub code reviews.",
    technologies: ["Scala", "Play Framework", "TypeScript", "MongoDB", "WebSockets"],
  },
  {
    company: "Hublyst.pro (Freelance)",
    role: "Full-Stack Developer",
    period: "2024",
    description:
      "Designed and shipped a full-stack marketplace web app connecting Boston-area renters with verified sublets and roommates. Built end-to-end with Django and PostgreSQL — from auth flows to listing CRUD, search/filter, and messaging. Implemented responsive, mobile-first UI and deployed to production.",
    technologies: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Lichess Contributions",
    description:
      "10+ merged PRs to the world's largest free chess platform. Worked on Scala backend services, TypeScript frontend components, and MongoDB aggregation pipelines.",
    image: "/images/lichess.png",
    tags: ["Scala", "TypeScript", "MongoDB", "Open Source"],
    demoUrl: "https://lichess.org",
    repoUrl: "https://github.com/lichess-org/lila/pulls?q=is%3Apr+author%3ArealJimJin",
  },
  {
    title: "Hublyst.pro",
    description:
      "Boston sublet & roommate marketplace. Full-stack Django app with auth, listing management, search/filter, image uploads, and user profiles.",
    image: "/images/hublyst.png",
    tags: ["Django", "Python", "PostgreSQL"],
    demoUrl: "https://hublyst.pro",
    repoUrl: "",
  },
  {
    title: "IMLEM Team Manager",
    description:
      "Web app for managing Intermediate Math League teams, schedules, and scoring. Role-based auth for coaches, real-time score tracking, and normalized PostgreSQL schema.",
    image: "",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    demoUrl: "",
    repoUrl: "https://github.com/realJimJin/imlem-team-manager",
  },
  {
    title: "QuickBooks Dashboard",
    description:
      "Interactive analytics dashboard for visualizing small-business financial data. Chart.js visualizations for P&L trends, expense breakdowns, and cash-flow forecasting.",
    image: "",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    demoUrl: "",
    repoUrl: "https://github.com/realJimJin/quickbooks-dashboard",
  },
];
