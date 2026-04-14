export const content = {
  name: "Rajesh Sampat",
  hero: {
    title: "Rajesh Sampat",
    subtitle: "Independent Director · Senior Executive · Mechanical Engineer",
    description: "Driving growth, operational excellence, and global expansion for manufacturing and engineering enterprises with over 38 years of leadership experience.",
    cta: "Collaborate With Me",
    experienceBlock: {
      title: "38+ Years Experience",
      description: "Three decades of leadership across manufacturing, die casting, plastics, textile machinery, and consumer durable industries.",
      buttons: [
        { name: "View Experience", href: "#agenda" },
        { name: "Contact", href: "#contact" }
      ]
    }
  },
  about: {
    title: "Driving operational excellence and global business growth",
    description: "I am a seasoned Mechanical Engineer and senior executive with a strong track record of translating high-level strategy into flawless execution.",
    extendedDescription: "I specialize in building scalable systems and enabling sustainable growth in competitive global markets, with leadership experience across R&D, manufacturing, and international business development in Europe and Asia.",
    mediaCaption: "Leadership, innovation, and execution built over decades of real-world experience.",
  },
  featureCards: [
    {
      title: "Board Advisory & Governance",
      description: "Providing strategic direction and governance at leadership level"
    },
    {
      title: "Operational Excellence (Lean & PQDSCM)",
      description: "Driving efficiency, performance, and process optimization"
    },
    {
      title: "Technology Transfer & Industry 4.0",
      description: "Enabling innovation and modern industrial transformation"
    }
  ],
  featuredExpert: {
    name: "Rajesh Sampat",
    role: "Independent Director · Senior Executive · Mechanical Engineer",
    description: "A seasoned leader with 38+ years of experience driving operational excellence, scaling businesses, and leading global expansion across multiple industries.",
    keyExpertise: [
      "Board Advisory & Governance",
      "Lean Operations & PQDSCM",
      "Industry 4.0 & Technology Transformation",
      "Value Engineering & Cost Optimization",
      "Leadership Development"
    ]
  },
  competencies: {
    title: "Core Competencies",
    items: [
      "Board Advisory & Governance",
      "Operational Excellence (Lean & PQDSCM)",
      "Technology Transfer & Industry 4.0",
      "Value Engineering & Cost Optimization",
      "Leadership Development & Mentoring"
    ]
  },
  journey: {
    title: "Professional Journey",
    sessions: [
      {
        id: 1,
        title: "Partner – Stratosync Engineering Service India LLP",
        time: "August 2025 – Present",
        description: "Leading engineering service initiatives from Ahmedabad, Gujarat.",
        speaker: "Rajesh Sampat"
      },
      {
        id: 2,
        title: "Consultant – Modern Metal Cast",
        time: "December 2024 – June 2025",
        description: "Provided strategic consultancy for casting operations.",
        speaker: "Rajesh Sampat"
      },
      {
        id: 3,
        title: "COO / CSO – Inspiron Engineering",
        time: "November 1992 – October 2024",
        description: "Led operational and strategic initiatives for over three decades, driving long-term value creation.",
        speaker: "Rajesh Sampat"
      }
    ]
  },
  credentials: {
    title: "Specialized expertise & certifications",
    items: [
      {
        title: "Governance",
        text: "Certified Independent Director"
      },
      {
        title: "Artificial Intelligence",
        text: "AI Generalist & Agentic AI Specialist"
      },
      {
        title: "Value Analysis",
        text: "Professional Value Analyst (PVA)"
      },
      {
        title: "Industry 4.0",
        text: "Foundation of Fourth Industrial Revolution"
      }
    ]
  },
  education: {
    title: "Education",
    degree: "Bachelor of Engineering (Mechanical Engineering)",
    university: "MS University of Vadodara",
    duration: "1983 – 1988"
  },
  contact: {
    title: "Get In Touch",
    description: "Currently engaging as a consultant, advisor, and board member for organizations seeking transformation.",
    location: "Ahmedabad, Gujarat, India",
    email: "rajeshsampat2016@gmail.com",
    linkedin: "linkedin.com/in/rajeshsampat"
  },
  headerNavLinks: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#agenda" },
    { name: "Expertise", href: "#credentials" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],
};

export const siteContent = `
Name: ${content.name}
Role: ${content.hero.subtitle}
Summary: ${content.hero.description}

Professional Journey:
${content.journey.sessions.map(s => `- ${s.title} (${s.time}): ${s.description}`).join("\n")}

Core Competencies:
${content.competencies.items.join(", ")}

Education: ${content.education.degree} from ${content.education.university} (${content.education.duration})
`;
