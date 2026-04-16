export const content = {
  name: "Strategic Engineering Services India LLP",
  shortName: "SESIL",
  tagline: "Your Strategic Partner for India Market Entry & Global Engineering Excellence",
  hero: {
    title: "Strategic Engineering Services India LLP",
    subtitle: "Strategic Engineering · Global Sourcing · India Market Entry",
    description: "Empowering global enterprises to navigate the Indian market and optimize engineering operations through strategic partnerships, sourcing support, and technical alliances.",
    cta: "Discuss Your Requirements",
    experienceBlock: {
      title: "Decades of Industrial Expertise",
      description: "Leveraging over 38 years of leadership in engineering and manufacturing to provide world-class services for international and domestic clients.",
      buttons: [
        { name: "Our Services", href: "/services" },
        { name: "Get In Touch", href: "#contact" }
      ]
    }
  },
  about: {
    title: "Enabling Global Engineering Excellence in India",
    description: "Strategic Engineering Services India LLP (SESIL) is a premier consultancy based in Ahmedabad, Gujarat, dedicated to bridging the gap between global industrial standards and Indian market opportunities.",
    extendedDescription: "We specialize in helping international companies enter the Indian market, find reliable suppliers, and manage complex engineering partnerships. Our team brings decades of cross-border experience in R&D, manufacturing, and operational excellence.",
    mediaCaption: "Building sustainable engineering partnerships across borders.",
    ceo: {
      name: "Rajesh Sampat",
      role: "Founder & Strategic Lead",
      bio: "A seasoned Mechanical Engineer with 38+ years of leadership experience in manufacturing, international business expansion, and operational excellence. Formerly COO/CSO at Inspiron Engineering, he now leads SESIL in driving strategic growth for global clients.",
      image: "/ceo/rajesh-sampat.png"
    }
  },
  industries: {
    title: "Industries We Serve",
    subtitle: "Specialized Expertise Across Key Industrial Sectors",
    items: [
      { title: "Aerospace", icon: "Plane", description: "Precision engineering and compliance for aerospace components." },
      { title: "Oil & Gas", icon: "Fuel", description: "Strategic sourcing and inspection for energy infrastructure." },
      { title: "Automation", icon: "Cpu", description: "Enabling Industry 4.0 and smart manufacturing across sectors." },
      { title: "Heavy Machinery", icon: "HardHat", description: "Technical alliances and manufacturing support for large-scale equipment." },
      { title: "EV Mobility", icon: "Zap", description: "Driving the future of green transportation with sustainable supply chains." },
      { title: "Defense", icon: "Shield", description: "High-integrity engineering services for defense and strategic sectors." },
      { title: "Capital Equipment", icon: "Settings", description: "Market entry and joint ventures for industrial machinery." },
      { title: "Energy & Infrastructure", icon: "Wind", description: "Strategic planning and sourcing for global infrastructure projects." }
    ]
  },
  services: {
    title: "Core Services",
    subtitle: "Comprehensive Solutions for Global Engineering Operations",
    description: "We provide high-impact services designed to optimize your global supply chain and accelerate your entry into the Indian market.",
    items: [
      {
        id: 1,
        icon: "Globe",
        title: "India Market Entry for Overseas Companies",
        shortTitle: "India Market Entry",
        description: "Comprehensive support for international firms looking to establish a presence in India, from regulatory navigation to market analysis.",
        highlights: ["Regulatory navigation", "Market feasibility studies", "Entity setup support", "Strategic roadmap"],
        tag: "Expansion"
      },
      {
        id: 2,
        icon: "Search",
        title: "Global Sourcing Support",
        shortTitle: "Global Sourcing",
        description: "Identifying and qualifying high-quality Indian suppliers for global requirements, ensuring cost-effectiveness and reliability.",
        highlights: ["Supplier identification", "Cost optimization", "Quality assurance", "Logistic coordination"],
        tag: "Sourcing"
      },
      {
        id: 3,
        icon: "CheckCircle",
        title: "Third-Party Inspection & Quality Audit",
        shortTitle: "Quality Audit",
        description: "Conducting rigorous inspections and compliance audits to ensure that suppliers meet international quality standards.",
        highlights: ["In-process inspections", "Final quality checks", "Compliance auditing", "Technical verification"],
        tag: "Quality"
      },
      {
        id: 4,
        icon: "Users",
        title: "Joint Ventures & Technical Alliance",
        shortTitle: "Alliances",
        description: "Facilitating strategic partnerships and technology transfers between Indian and global enterprises.",
        highlights: ["Partner matching", "Negotiation facilitation", "Tech transfer management", "Alliance governance"],
        tag: "Partnerships"
      },
      {
        id: 5,
        icon: "TrendingUp",
        title: "International Business Expansion",
        shortTitle: "Global Growth",
        description: "Helping Indian companies scale their products and services to international markets in Europe, Asia, and beyond.",
        highlights: ["Export strategy", "Global distributor network", "International marketing", "Trade compliance"],
        tag: "Growth"
      },
      {
        id: 6,
        icon: "Briefcase",
        title: "Mergers & Acquisition Facilitation",
        shortTitle: "M&A Support",
        description: "Providing strategic advice and due diligence support for industrial companies seeking M&A opportunities in India.",
        highlights: ["Target identification", "Due diligence", "Valuation support", "Integration planning"],
        tag: "M&A"
      }
    ]
  },
  contact: {
    title: "Get In Touch",
    description: "Ready to discuss your engineering requirements or India market entry strategy? Reach out to our expert team today.",
    location: "Ahmedabad, Gujarat, India",
    email: "contact@sesil.in",
    linkedin: "linkedin.com/company/sesil"
  },
  headerNavLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "#contact" },
  ],
};

export const siteContent = `
Name: ${content.name}
Tagline: ${content.tagline}
Core Services: ${content.services.items.map(i => i.title).join(", ")}
Industries: ${content.industries.items.map(i => i.title).join(", ")}
CEO: ${content.about.ceo.name} - ${content.about.ceo.role}
`;

