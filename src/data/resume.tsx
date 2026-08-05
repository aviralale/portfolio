import { Icons } from "@/components/icons";
import { HomeIcon, Instagram, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aviral Ale",
  initials: "AA",
  url: "https://abiralale.com.np",
  location: "Kathmandu, Nepal",
  locationLink: "https://www.google.com/maps/place/kathmandu",
  description:
    "Full-stack developer in Kathmandu, Nepal. I build React, Next.js and Django apps that actually ship — and run Ctrl Bits. Sometimes I design too.",
  summary:
    "I run [Ctrl Bits](https://ctrlbits.com) and build things for the web — mostly React, Next.js and Django, sometimes design, occasionally both at 2AM. Still a [BSc. CSIT student](/#education) on paper, but I've learned more shipping real projects than sitting through lectures. Got hooked [breaking things in hackathons](/#hackathons) over 48-hour weekends. Never really stopped.",
  avatarUrl: "/pfp.png",
  skills: [
    "Javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "React Native",
    "Tailwind",
    "Django",
    "Python",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Git",
    "VPS",
    "cPanel",
    "Linux",
    "C",
    "Sass",
    "C++",
    "Java",
    "Canva",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Adobe After Effects",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://fr.abiralale.com.np", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abiral@ctrlbits.com",
    tel: "+977-9862478661",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aviralale",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aviralale",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/aviralale",
        icon: Instagram,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:abiral@ctrlbits.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  experience: [
        {
      company: "Skill Spark",
      href: "https://www.skillspark.com.np/",
      role: "Tutor",
      logoUrl: "https://www.skillspark.com.np/favicon.ico?favicon.6bbb5435.ico",
      start: "Aug 2026",
      end: "Present",
    },
    {
      company: "Nextteen Media",
      href: "https://instagram.com/nextteenmedia",
      role: "Founder",
      logoUrl: "/nextteenmedia.png",
      start: "Jun 2026",
      end: "Present",
    },
        {
      company: "Kreösum.",
      href: "https://instagram.com/kreosum",
      role: "Founder",
      logoUrl: "/kreosum.png",
      start: "May 2026",
      end: "Present",
    },
        {
      company: "Ctrl Bits",
      href: "https://ctrlbits.com",
      role: "Founder | CEO",
      logoUrl: "https://cdn.ctrlbits.com/assets/2026/02/696e7bc1-082b-4117-a697-30929b74d0f1_new_logo_white_in_blue_grad.png",
      start: "Apr 2025",
      end: "Present",
    },
      {
      company: "Share Sanskar",
      href: "https://instagram.com/sharesanskar",
      role: "Graphic Designer",
      logoUrl: "/ss.png",
      start: "Nov 2025",
      end: "Feb 2026",
    },
    {
      company: "Digically / Firststep Overseas",
      href: "https://digically.in",
      role: "Full-stack Developer",
      logoUrl: "/digically.png",
      start: "Jul 2025",
      end: "Nov 2025",
    },
    {
      company: "Sabitri Foundation",
      href: "https://sabitrifoundation.org",
      role: "Full-stack Developer",
      logoUrl: "https://www.sabitrifoundation.org/assets/images/SF-Logo.svg",
      start: "Apr 2025",
      end: "Jun 2025",
    },
    {
      company: "Gglamorous",
      href: "https://gglamorous.com",
      role: "Full-stack developer",
      logoUrl: "https://gglamorous.com/assets/logo-CTwv0n0M.png",
      start: "Aug 2024",
      end: "Dec 2024",
    },
    {
      company: "Karnali Yaks Restaurant & Bar",
      href: "https://karnaliyaksrestaurant.com",
      role: "Full-stack developer",
      logoUrl: "https://karnaliyaksrestaurant.com/assets/logo-Dr-riFo5.png",
      start: "Mar 2024",
      end: "Dec 2023",
    },
  ],

  education: [
    {
      school: "Himalaya College of Engineering",
      href: "https://hcoe.edu.np",
      degree:
        "Bachelors in Science, Computer Science and Information Technology(BSc. CSIT)",
      logoUrl: "/hcoe.jpg",
      start: "2023",
      end: "Present",
    },
    {
      school: "Shree Mahendra Secondary School",
      href: "#",
      degree: "Diploma in Civil Engineering",
      logoUrl: "/mss.png",
      start: "2019",
      end: "2022",
    },
    {
      school: "Shree Mountain E.M.B School",
      href: "#",
      degree: "Basic Level Examination(B.L.E)",
      logoUrl: "/membs.png",
      start: "2014",
      end: "2019",
    },
    {
      school: "Cambridge Public School",
      href: "#",
      degree: "Grade 1, Grade 2",
      logoUrl: "/cps.png",
      start: "2013",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "Hisaab Plus",
      href: "https://hisaabplus.ctrlbits.xyz",
      dates: "March 2025 - May 2025",
      active: true,
      description:
        "Inventory management for small businesses that doesn't need a manual. Stock, sales and reports in one place — no spreadsheet chaos.",
      technologies: [
        "React.js",
        "Typescript",
        "MySQL",
        "TailwindCSS",
        "Django",
        "djoser",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://hisaabplus.ctrlbits.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aviralale?tab=repositories&q=hisaabplus&type=&language=&sort=",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Screenshot 2025-05-24 at 16-50-28 Dashboard Hisaab Plus.png",
      video: "",
    },
    {
      title: "gglamorous",
      href: "https://gglamorous.com",
      dates: "Sept 2024 - Oct 2024",
      active: true,
      description:
        "A full online clothing store — storefront, cart, checkout, and an admin dashboard the owners can actually run themselves.",
      technologies: [
        "React.js",
        "Typescript",
        "MySQL",
        "TailwindCSS",
        "Django",
        "djoser",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://gglamorous.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aviralale?tab=repositories&q=gglamorous&type=&language=&sort=",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gglamorous.png",
      video: "",
    },
    {
      title: "Karnali Yaks Restaurant & Bar",
      href: "https://kyrab.abiralale.com.np",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Full-stack site for an Asian–Mexican restaurant in Spain. Menu, reservations, the whole thing.",
      technologies: [
        "React.js",
        "Typescript",
        "MySQL",
        "Django",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://kyrab.abiralale.com.np",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aviralale?tab=repositories&q=karnali-yaks-restaurant-and-bar&type=&language=&sort=",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kyrab.png",
      video: "",
    },
    {
      title: "PENNED",
      href: "#",
      dates: "August 2024 -  September 2024",
      active: true,
      description:
        "An open-source blog platform with a UI I actually wanted to write in. No bloat, no page builder.",
      technologies: ["React.js", "Javascript", "CSS", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aviralale/penned-blog-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/penned.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "KathCode",
      dates: "July 2024",
      location: "Balkumari, Lalitpur",
      description:
        "A tourism platform to keep track of tourists and where they actually go.",
      image:
        "https://www.kathcode.kathford.edu.np/assets/kathcode_logo_small-GfrTBfac.png",
      links: [],
    },

    {
      title: "TechTrix",
      dates: "September 18th - 19th, 2023",
      location: "Shantinagar, Kathmandu",
      description:
        "A patient-referral platform — book doctor appointments online or offline, plus emergency pandemic alerts.",
      icon: "public",
      image: "",
      links: [],
    },
    {
      title: "HExGenius",
      dates: "July 19th - 21th, 2023",
      location: "Chyasal, Lalitpur",
      description:
        "Live tracking for trash trucks — schedules and routes based on where you actually live.",
      image: "/hcoe.jpg",
      links: [],
    },
  ],
} as const;
