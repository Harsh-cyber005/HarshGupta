import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    next,
    mern,
    vanilla,
    leaderboard,
    portfolio,
    threejs,
    harsh,
    rupam,
    vishnu,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "testimonials",
      title: "feedbacks",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Gaming Enthusiast",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Next JS",
      icon: next
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Vanilla JS Developer",
      company_name: "On my Own",
      icon: vanilla,
      iconBg: "#383E56",
      date: "Jan 2021 - July 2022",
      points: [
        "Developing and maintaining web applications using HTML, CSS and Vanilla Javascript.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Mern Stack Developer",
      company_name: "Developers' Society, IIT Kharagpur",
      icon: mern,
      iconBg: "#E6DEDD",
      date: "July 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js, Node.js, MongoDb and Express.js.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Bet he is one of the best developers aspiring to be a full stack developer. He is a great team player and a great friend.",
      name: "Harsh Raj Gupta",
      designation: "Student",
      company: "IIT Kharagpur",
      image: harsh,
    },
    {
      testimonial:
        "He is a really good person and a successfull upcoming full stack developer. He works really hard and very dedicated towards his work.",
      name: "Rupam Mahato",
      designation: "Student",
      company: "IIT Kharagpur",
      image: rupam,
    },
    {
      testimonial:
        "I was really impressed with his work on the codeforces leaderboard he created within such a less amount of time.",
      name: "Vishnu Kumar",
      designation: "Student",
      company: "IIT Kharagpur",
      image: vishnu,
    },
  ];
  
  const projects = [
    {
      name: "CodeForces Leaderboard",
      description:
        "Web-based platform that allows users to search and view CodeForces user profiles and their ratings, and compare their ratings with other users around the work and in the campus.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Vanilla-JS",
          color: "pink-text-gradient",
        },
      ],
      image: leaderboard,
      source_code_link: "https://github.com/Harsh-cyber005/The-Development-Task",
    },
    {
      name: "3d Portfolio Website",
      description:
        "This is a website that showcases my skills and experience. Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
      tags: [
        {
          name: "React-JS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind-CSS",
          color: "green-text-gradient",
        },
        {
          name: "Three-JS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Harsh-cyber005/The-Development-Task",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };