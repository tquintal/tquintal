import activcopylogo from "../assets/activcopy/activcopy.svg";
import activcopy from "../assets/activcopy/activcopy.png";
import codewin from "../assets/codewin.svg";

type Projects = {
  id: string;
  name: string;
  international?: boolean;
  tech: string[];
  description: string;
  contribution: string;
  link?: string;
};

export type Project = {
  id: string;
  name: string;
  projects?: Projects[];
  description: string;
  smallDescription: string;
  image?: string;
  logo?: string;
  hideImage?: boolean;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    name: "CodeWin",
    projects: [
      {
        id: "1",
        name: "HealthPaw",
        tech: ["ReactJS", "TypeScript", "NextJS", "TailwindCSS", "ReactQuery", "Zod", "i18", "Git"],
        description:
          "A web platform for veterinary clinics, focusing on scheduling appointments, attracting clients and treating conservation animals. And also an application for customers.",
        contribution:
          "HealthPaw allowed for methodological development and interaction with different teams. Here, I was responsible for implementing various CRUD functionalities, along with other navigation-related tasks. I was also accountable for analyzing code contributions from team colleagues.",
        link: "https://www.decode.pt/projects/healthpaw",
      },
      {
        id: "2",
        name: "XBC4IT",
        international: true,
        tech: ["T3 Stack", "ReactJS", "Prisma", "tRPC", "NextJS", "i18", "TailwindCSS", "Zod", "Git"],
        description:
          "In response to the need for improved information management, a tool has been implemented that enables XBC4IT to manage its consultants, their projects and salaries, contracts, financial matters, and time tracking. This project includes a dashboard with statistical graphs, filters, settings, and is easily scalable.",
        contribution:
          "Alongside the skills mentioned in the previous project, this one enabled a full-stack contribution using the 'T3 Stack' technologies.",
      },
      {
        id: "3",
        name: "Knower",
        international: true,
        tech: ["ReactJS", "ReactQuery", "Zod", "ChakraUI", "Git"],
        description:
          "With a purpose similar to the XBC4IT project, this initiative had a significantly larger scale, including additional features and holding up to four distinct user roles with varying permissions.",
        contribution:
          "This project allowed for a more efficient code reuse approach, as there were numerous shared screens between menus and user profiles. This allowed us to reduce the delivery time by 50%.",
      },
      {
        id: "4",
        name: "Celeiro",
        tech: ["ReactJS", "NextJS", "ReactQuery", "Zod", "ChakraUI", "Git"],
        description:
          "With this solution, Celeiro stores now have a platform to manage their products, menus, orders, and a section with statistics and filters.",
        contribution:
          "All the experience from previous projects enabled an uninterrupted, agile development of all tasks for the Celeiro",
      },
    ],
    description:
      "In my present role at CodeWin, I engage in collaborative work within a team, adhering to the agile methodology and leveraging cutting-edge technologies. I have experience working with the 'T3 Stack,' integrating tools like Prisma, tRPC, NextJS, and tailwindCSS.",
    smallDescription: "CodeWin - agile, team-work, full-stack, t3 stack, prisma, tRPC, nextJS, reactJs, typescript, git",
    logo: codewin,
    hideImage: true,
    link: "https://www.codewin.pt/",
  },
  {
    id: "2",
    name: "Activcopy",
    description:
      "I was in charge of designing, conceptualizing, developing, and implementing the website. This allowed me to incorporate essential React functionalities, manage forms, translations, and ensure responsiveness. I delivered Activcopy a contemporary, optimized solution that authentically represents the company, significantly enhancing its digital presence.",
    smallDescription: "reactJS, UX/UI, forms, translations, git",
    logo: activcopylogo,
    image: activcopy,
    link: "https://activcopy.pt/",
  },
];
