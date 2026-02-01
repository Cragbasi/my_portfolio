import vers from "../assets/portfolio/vers.png";
import smc from "../assets/portfolio/smc.jpg";
import cummins2 from "../assets/portfolio/cummins2.jpg";
import RBC from "../assets/portfolio/RBC.jpeg";
import RBC2 from "../assets/portfolio/RBC2.jpeg";
import rock from "../assets/portfolio/rock.webp";
import BMW from "../assets/portfolio/BMW.jpg";
import Extern from "../assets/portfolio/Externship.png";
export const mechanical = [
  {
    imageURL: vers,
    title: "VersaTally – A bluetooth-enabled dual-button tracking device",
    description:
      "Engineered the plastic injection-molded body, push button, and internal structure, ensuring a secure assembly through snap-fits and snap-hooks, eliminating the need for screws.",
    techStack: ["SolidWorks", "3D Printing", "Injection Molding"],
    demoURL:
      "https://www.linkedin.com/posts/agbasi_custom-push-button-design-for-handheld-activity-7334663763792449536-mB9U?utm_source=share&utm_medium=member_desktop&rcm=ACoAABE3dCYBCbVs0yf0fPVH5OkRHwQmoazj9PI",
    deployedURL: "versatally.com",
  },
  {
    imageURL: smc,
    title: "Lead Mechanical Engineer at SMC Corporation of America",
    description:
      "Patented Valve Technology & Automation: Led the development of patented valve technology for automation applications, specializing in electro-pneumatic systems. Designed and delivered a pinch valve featuring precision-engineered plastic injection-molded components, including the housing, hinged cover, and pinch blade. Engineered the plastic injection-molded body, push button, and internal structure, ensuring a secure assembly through snap-fits and snap-hooks, eliminating the need for screws.",
    techStack: [
      "SolidWorks",
      "3D Printing",
      "Injection Molding",
      "Patents",
      "Automation",
      "Electro-Pneumatic Systems",
      "Valve Technology",
    ],
    demoURL: "https://www.smcworld.com/newproducts/en-jp/21/lpv/",
    deployedURL: "smc.com",
  },
  {
    imageURL: rock,
    title: "Senior Applied Mechanics Engineer & Technical Lead at Cummins Inc.",
    description:
      "Led a cross-functional team in diagnosing and resolving historic engine component failures through rigorous Failure Mode and Effects Analysis (FMEA). Spearheaded the redesign of a 60 in × 34 in engine guard, incorporating optimized sheet metal, rail, and bracket assemblies, achieving a 98% reduction in failure rate. ",
    techStack: [
      "Creo Parametric",
      "3Sheet Metal Design",
      "Ansys",
      "DFMEA",
      "Vibration Analysis",
      "Digital Image Correlation (DIC)",
      "Vibration Testing",
      "Six Sigma",
      "Root Cause Analysis (RCA)",
    ],
    demoURL:
      "https://s1partscenter.com/brands/cummins/shield/3098957?absrc=Bing&abid=76828576932467&abcampid=486310712&bclid=443e0c981ed11db8fc4364058027a9d4&campaignid=486310712&adgroupid=1229255086520100&keyword=&device=c&msclkid=443e0c981ed11db8fc4364058027a9d4",
    deployedURL:
      "https://s1partscenter.com/brands/cummins/shield/3003152?absrc=Bing&abid=76828576932467&abcampid=486310712&bclid=ea53746ccad21b9c4df61cf15743f84e&campaignid=486310712&adgroupid=1229255086520100&keyword=&device=c&msclkid=ea53746ccad21b9c4df61cf15743f84e",
  },
  {
    imageURL: cummins2,
    title: "Applied Mechanics Engineer at Cummins Inc.",
    description:
      "Validated 100+ engine components (crankshaft, turbo-compressor, piston, cylinder head, flywheel, connecting rod, rocker, etc.), including thermal systems, using best practices. Designed test fixtures in CREO, led static/fatigue/vibration testing, and drove upgrades via data analysis. Authored technical docs to support design and reliability improvements. ",
    techStack: [
      "Finite Element Analysis (FEA)",
      "Creo Parametric",
      "Sheet Metal Design",
      "Ansys",
      "DFMEA",
      "Vibration, Fatigue, and Thermal Analysis",
      "Digital Image Correlation (DIC)",
      "Vibration, Fatigue, and Thermal Testing",
      "LMS SCADAS",
      "LMS Test.Lab",
      "Six Sigma",
      "Root Cause Analysis (RCA)",
      "Shaker Table Testing",
      "Test Fixture Design",
      "Technical Documentation",
    ],
    demoURL:
      "https://www.cummins.com/news/releases/2023/02/13/cummins-announces-new-x10-engine-next-fuel-agnostic-series-launching-north",
    deployedURL: "Cummins.com",
  },
  {
    imageURL: RBC,
    title: "Mechanical Design Engineer of Bearing Validation Systems",
    description:
      "Design & Quality Inspection Engineer – Bearing Validation Systems: Developed and installed a quality-inspection rotating equipment for RBC bearing validation using current transduction and torque sensing. Networked devices to capture torque measurements, process data, and display key performance indicators. Implemented cost-saving measures, reducing expenses by over $150,000.",
    techStack: [
      "ELectrical Design",
      "Test Equipment Design",
      "Sheet Metal Design",
      "DFMEA",
      "Torqe Measurement",
      "Mechanical Design",
      "Concept Generation",
      "Six Sigma",
      "Test Fixture Design",
      "Technical Documentation",
    ],
    demoURL: "",
    deployedURL: "",
  },
  {
    imageURL: RBC2,
    title: "Electrical Design Engineer of Bearing Validation Systems",
    description:
      "When cam-followers are put under loading, they undergo tensile and compressive forces. To meet quality specifications, the bearing of the cam-follower must turn smoothly under loading. My team's task was to design an automated device that accomplished the full rotation test of the cam follower for quality inspection. We were requested to quantify the torque it took to rotate each cam-follower. We successfully accomplished the project and saved RBC bearings over $150,000.",
    techStack: [
      "ELectrical Design",
      "Test Equipment Design",
      "DFMEA",
      "Torqe Measurement",
      "Concept Generation",
      "Six Sigma",
      "Test Fixture Design",
      "Technical Documentation",
    ],
    demoURL: "",
    deployedURL: "",
  },
  {
    imageURL: BMW,
    title: "Product & Process Engineer at BMW Manufacturing Co.",
    description:
      "Accomplished high-precision body-in-white (BIW) process optimization for the BMW X4 launch, as evidenced by the design and implementation of efficient robotic welding stations, fixtures, and conveyor systems by using kinematic motion analysis through cardboard simulation and PackAssist to validate alignment and packaging logistics in CATIA V5",
    techStack: [
      "CATIA V5",
      "Robotic Welding",
      "PackAssist",
      "Kinematic Motion Analysis",
      "Cardboard Simulation",
      "Conveyor Systems",
      "Fixture Design",
      "Process Optimization",
      "Quality Control",
      "Lean Manufacturing",
      "Automation",
      "Product Engineering",
      "Continuous Improvement",
    ],
    demoURL: "",
    deployedURL: "",
  },
];

import news from "../assets/portfolio/news-explorer.png";
import confahm from "../assets/portfolio/confahm.png";
import coffeeshop from "../assets/portfolio/coffeeshop.png";
import todo from "../assets/portfolio/ToDo.png";
import versatally from "../assets/portfolio/versatally.png";
import wtwr from "../assets/portfolio/wtwr.png";
import mywebsite from "../assets/portfolio/mywebsite.png";
import spots from "../assets/portfolio/spots.png";
import confahmLogo from "../assets/ConfahmLogo.jpeg";
export const software = [
  {
    imageURL: Extern,
    title: "Full-Stack Developer at BetterHunt",
    description:
      "Built the onboarding entry experience, delivering a polished, responsive welcome screen for a peer-support Health & Wellness Social App— Vura. Developed core backend features including secure authentication, CQRS-based user flows, and persistent real-time messaging (GroupChat / ChatMessage). Scoped and scaffolded an LLM-backed AI chatbot (AiChatSession/AiMessage) designed to stream responses over WebSockets for low-latency conversational UX.",
    techStack: [
      "React/Vite",
      "Node & TypeScript",
      "Keystone 6",
      "GraphQL",
      "Prisma",
      "MySQL",
      "WebSockets",
      "LLM integration",
    ],
  },
  {
    imageURL: news,
    title: "News Explorer",
    description:
      "Engineered a responsive full-stack web app for searching, saving, and managing news articles with user authentication and keyword tracking.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Vite", "CSS (BEM)"],
    demoURL: "",
    deployedURL: "https://cragbasi.github.io/news_explorer/",
  },
  {
    imageURL: wtwr,
    title: "What to Wear (WTWR)",
    description:
      "Developed What To Wear (WTWR) app; an app designed to help users manage a database of clothing items based on weather conditions. Users can organize clothing into categories for hot, warm, and cold weather, ensuring they always have the right outfit for any forecast.",
    techStack: [
      "Express.js",
      "React",
      "Vite",
      "MongoDB",
      "CSS Modules",
      "HTML",
      "JavaScript",
      "Nodemon",
      "PM2",
      "Google Cloud",
      "Node.js",
      "nginx",
      "Certbot, HTTPS, HTTP",
      "Git",
    ],
    demoURL: "Demo available upon request",
    deployedURL: "Server down",
  },
  {
    imageURL: spots,
    title: "Spots",
    description:
      "Designed the Spots front-end. Spots is a responsive social media profile and image gallery app I built using HTML, CSS (BEM), and JavaScript (OOP, modules). It features profile editing, form validation, modal popups, and an adaptive UI. I used CSS Grid, Flexbox, and JS interactions for seamless UX. A backend could include Node.js, Express, MongoDB, and JWT authentication for scalability.",
    techStack: [
      "React",
      "Vite",
      "CSS Modules",
      "HTML",
      "JavaScript",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    demoURL: "https://www.youtube.com/watch?v=jPSVqs236v4",
    deployedURL: "https://cragbasi.github.io/se_project_spots/",
  },
  {
    imageURL: todo,
    title: "Task Manager",
    description:
      "Developed a Simple To-Do App with a minimalist task management scope, designed for an intuitive user experience. I developed the front-end using HTML, CSS, and JavaScript, implementing form validation, modal popups, and object-oriented programming (OOP) with JS classes and modules for scalability. The app supports task creation, completion tracking, and interactive UI elements, ensuring seamless usability.",
    techStack: ["React", "Redux", "Firebase", "Material UI"],
    demoURL: "https://youtu.be/hWT_rC9YZSc",
    deployedURL: "https://cragbasi.github.io/se_project_todo-app/",
  },
  {
    imageURL: versatally,
    title: "VersaTally – A bluetooth-enabled dual-button tracking device",
    description:
      "VersaTally is a Bluetooth-enabled dual-button tracking device designed for precise data counting and analysis. Developed in partnership with Intellugo (UK), we developed the web and user interface, ensuring seamless integration between hardware and software for an optimized user experience.",
    techStack: ["React", "Node.js", "CSS Modules", "Google cloud"],
    demoURL: "",
    deployedURL: "versatally.com",
  },
  {
    imageURL: mywebsite,
    title: "Portfolio Website",
    description:
      "Designed my personal portfolio showcasing some of the engineering and software projects that I have built; built with modern web technologies and responsive design.",
    techStack: ["React", "Vite", "CSS Modules"],
    demoURL: "",
    deployedURL: "https://cragbasi.github.io/my_portfolio/",
  },

  {
    imageURL: confahm,
    title: "Confahm – Mechanical, Software, and Product Engineering Solutions",
    description:
      "Confahm is my ECOMAS website that I built in Shopify to provide multidisciplinary engineering services and products. It serves as a hub for mechanical, software, and product engineering solutions, showcasing my expertise in design, automation, and full-stack development. Additionally, I maintain a vlog featuring insights on product development, mechanical systems, and software engineering, bridging innovation across multiple disciplines. The website may be down now for subscription payment.",
    techStack: [
      "JavaScript",
      "Shopify E-commerce platform",
      "HTML & CSS",
      "Liquid",
    ],
    demoURL: "https://www.youtube.com/watch?v=o_n9t1Zc6v4",
    deployedURL: "Confahm.com",
  },
  {
    imageURL: coffeeshop,
    title: "Coffee Shop",
    description:
      "Created this webpage to serve as a digital front door for a coffee shop, offering: A welcoming introduction to the café and its mission. A **table booking form** with validation-ready fields. A curated list of **home-brew recipes** for coffee enthusiasts. A detailed **menu** featuring drinks and baked goods. Operating hours and location info. Social media links for community engagement.",
    techStack: ["HTML/CSS", "JavaScript", "Graphic Design"],
    demoURL: "https://www.youtube.com/watch?v=jPSVqs236v4&t=15s",
    deployedURL: "https://cragbasi.github.io/se_project_coffeeshop/",
  },

  {
    imageURL: confahmLogo,
    title: "Confahm Logo",
    description:
      "Designed the Confahm logo for my brand; as an intent of validation that reflects the confirmed quality of my multidisciplinary nature in engineering services, combining elements of mechanical, software, and product engineering.",
    techStack: ["Adobe Illustrator", "Graphic Design"],
    demoURL: "",
    deployedURL: "",
  },
];
import avatar from "../assets/Avatar.jpg";
import cummins from "../assets/About/cummins.webp";
import fullstack from "../assets/About/fullstack.png";
import bt from "../assets/About/bt.png";
export const slides = [
  {
    image: avatar,
    description: (
      <>
        " Hi, I’m Chijioke Agbasi, a multidisciplinary engineer—mechanical
        engineer and full-stack software developer, blending mechanical
        precision with digital creativity. I actively practice both mechanical
        and software engineering, bringing over a decade of experience in
        product development, automation, and scalable digital solutions."
      </>
    ),
  },
  {
    image: cummins,
    description: (
      <>
        "I began my career developing engines at Cummins Inc., where I
        specialized in applied mechanics, failure analysis, and system
        optimization. Over the years, I’ve led engineering initiatives at SMC
        Corporation of America and contributed to body-in-white manufacturing at
        BMW, designing custom machinery, integrating robotics, and streamlining
        production workflows. I hold a Master’s degree in Mechanical Engineering
        with a 3.9 GPA, and I’ve consistently applied rigorous engineering
        principles to solve complex, real-world problems."
      </>
    ),
  },
  {
    image: fullstack,
    description: (
      <>
        " In parallel, my passion for automation and robotics sparked a deep
        interest in coding. That drove me to complete an intensive 10 month long
        Software Engineering program at Tripleten and earn a certificate in
        Full-Stack Software Engineering, mastering JavaScript, React, Node.js,
        Express.js, and MongoDB. Today, I build intuitive, scalable
        applications, architect backend systems, and deliver software that
        complements and enhances physical systems."
      </>
    ),
  },
  {
    image: bt,
    description: (
      <>
        " Whether I’m prototyping a Bluetooth-enabled device or deploying a
        cloud-based dashboard, I thrive at the intersection of hardware and
        software—where innovation is both tangible and digital."
      </>
    ),
  },
];
export const AboutConfahmSlides = [
  {
    imageURL: confahmLogo,
    title: "A Mechanical and Software Engineering Service Company",
    description:
      "Confahm is a dynamic brand, founded by mechanical and software engineer Chijioke Agbasi, dedicated to delivering authentic, high-quality products and innovative engineering services. Our mission is to empower individuals and businesses with reliable solutions that prioritize integrity and excellence, ensuring every offering meets the highest standards of legitimacy. Join us as we redefine the marketplace with a commitment to quality and community!",
    techStack: [
      "Mechanical Engineering",
      "Software Engineering",
      "Product Engineering",
      "Full Stack Development",
    ],
    demoURL: "",
    deployedURL: "https://confahm.com",
  },
];
