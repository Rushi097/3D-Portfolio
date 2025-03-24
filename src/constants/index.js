import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  // meta,
  studykosh,
  PrimaThink,
  Leopardruns,
  portfolio,
  metaverse,
  nikeshoessite,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  // {
  //   id: "Footer",
  //   title: "Footer",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DevOps Developer",
    icon: mobile,
  },
  {
    title: "React js Developer",
    icon: backend,
  },
  {
    title: "software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Digital Marketing with AI",
    company_name: "StudyKosh",
    icon: studykosh,
    iconBg: "#383E56",
    date: "Aug 2023 - Jan 2024",
    points: [
      "Assisted in AI-driven marketing strategies to optimize online education outreach.",
      "Analyzed data trends to enhance digital marketing campaigns.",
      "Worked with SEO, content marketing, and social media automation.",
      "Gained hands-on experience with AI tools for audience engagement and analytics.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "PrimaThink Technologies Private Limited",
    icon: PrimaThink,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developing 3D Animation wesites.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "LeopardRuns Innovation & Technology",
    icon: Leopardruns,
    iconBg: "#383E56",
    date: "Mar 2024 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Manvi Sharma",
    designation: "HR Manager",
    company: "StudyKosh",
    image: "src/assets/company/studykosh.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Shantanu",
    designation: "Team Lead",
    company: "PrimaThink Technologies Pvt. Ltd.",
    image: "src/assets/company/PrimaThink.png",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Abhishek soni",
    designation: "HR Manager",
    company: "LeopardRuns Innovation & Technology",
    image: "src/assets/company/Leopardruns.png",
  },
];

const projects = [
  {
    name: "3D-Portfolio",
    description:
      "Web-based platform that allows users to open links to another projects, links, and add information of yourself and i added lot of animation balls, panels, computer, earths.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Rushi097/3D-Portfolio",
  },
  {
    name: "Metaverse Madness",
    description:
      "Web application that has 3D animations and a user-friendly UI with modern design.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
     

    ],
    image: metaverse,
    source_code_link: "https://github.com/Rushi097/metaverse",
  },
  {
    name: "Nike Shoes Site",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: nikeshoessite,
    source_code_link: "https://github.com/Rushi097/nike_shoes_site",
  },
];

export { services, technologies, experiences, testimonials, projects };
