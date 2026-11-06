export type Project = {
  id: string;
  title: string;
  description: string;
  /** file inside /public */
  thumbnail: string;
  alt: string;
  tags?: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "Smooth, flowing gradients blending rich reds and blues in an abstract swirl.",
    thumbnail: "gallery-1.PNG",
    alt: "Screenshot of the personal portfolio website homepage",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    github: "https://github.com/shambelmekuria/my_portfolio",
    demo: "https://shambel-dev.vercel.app/",
  },
];
