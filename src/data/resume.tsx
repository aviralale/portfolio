import { Icons } from "@/components/icons";
import { HomeIcon, Instagram, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aviral Ale",
  initials: "AA",
  url: "http://localhost:3000",
  location: "Kathmandu, Nepal",
  locationLink: "https://www.google.com/maps/place/kathmandu",
  description:
    "React, Django Developer and rarely a Graphics Designer. I love building things and helping people.",
  summary:
    "Currently a student [pursuing degree in Bachelors in Science, Computer Science and Information Technology](/#education), and [competed in hackathons for fun](/#hackathons).",
  avatarUrl: "/pfp.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Django",
    "Python",
    "PostgreSQL",
    "MySQL",
    "SQL",
    "C",
    "Sass",
    "C++",
    "Tailwind",
    "Javascript",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aviralale@gmail.com",
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
        url: "https://linkedin.com/in/aviral-ale",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/aviral.who_",
        icon: Instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aviralale@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

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
      description: "Inventory Management Simplified.",
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
      description: "Online clothing store with admin dashboard.",
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
        "Developed a fullstack website for a Asian and Mexican restaurant in Spain.",
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
        "Developed an open-source blog website with a better and manual UI.",
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
    {
      title: "NSU | Ratna RajyaLaxmi Campus",
      href: "https://binodrajjoshi.com",
      dates: "August 2024 -  September 2024",
      active: true,
      description:
        "Developed a NSU Manifesto page for NSU at Ratna RajyaLaxmi Campus.",
      technologies: [
        "React.js",
        "Typescript",
        "Framer Motion",
        "CSS",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://binodrajjoshi.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aviralale/nsu-manifesto-rr",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nsu.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "KathCode",
      dates: "July 2024",
      location: "Balkumari, Lalitpur",
      description:
        "Developed a web platform on tourism for better management of tourists.",
      image:
        "https://www.kathcode.kathford.edu.np/assets/kathcode_logo_small-GfrTBfac.png",
      links: [],
    },

    {
      title: "TechTrix",
      dates: "September 18th - 19th, 2023",
      location: "Shantinagar, Kathmandu",
      description:
        "Developed a web platform to refer patients, set online and offline appointments with doctors and set emergency alerts about pandemics.",
      icon: "public",
      image: "",
      links: [],
    },
    {
      title: "HExGenius",
      dates: "July 19th - 21th, 2023",
      location: "Chyasal, Lalitpur",
      description:
        "Developed a web application which lets user track the live location of trashtrucks with schedule and route based on the user's location.",
      image: "/hcoe.jpg",
      links: [],
    },
  ],
} as const;
