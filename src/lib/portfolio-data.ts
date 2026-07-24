export type Project = {
  id: string;
  name: string;
  category: string;
  industry: string;
  technologies: string[];
  description: string;
  liveUrl: string;
  screenshotPrompt: string;
  gradient: string;
  year: number;
};

export const categories = [
  "All",
  "Corporate",
  "Construction",
  "Healthcare",
  "Education",
  "CRM",
  "ERP",
  "eCommerce",
  "Landing Pages",
  "Mobile Apps",
];

export const projects: Project[] = [
  {
    id: "p1",
    name: "Meridian Corporate Suite",
    category: "Corporate",
    industry: "Finance",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    description: "A modern investor-relations platform with real-time reporting dashboards and compliance workflows.",
    liveUrl: "#",
    screenshotPrompt: "corporate finance dashboard",
    gradient: "from-[#0F4C81] to-[#1E88C8]",
    year: 2025,
  },
  {
    id: "p2",
    name: "BuildCore ERP",
    category: "Construction",
    industry: "Construction",
    technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
    description: "End-to-end construction ERP covering procurement, site tracking, billing and vendor management.",
    liveUrl: "#",
    screenshotPrompt: "construction ERP",
    gradient: "from-[#0F4C81] to-[#4B9CD3]",
    year: 2025,
  },
  {
    id: "p3",
    name: "PulseCare EMR",
    category: "Healthcare",
    industry: "Healthcare",
    technologies: ["React", "FastAPI", "MongoDB", "Azure"],
    description: "HIPAA-ready electronic medical records with tele-consult, prescriptions and lab integrations.",
    liveUrl: "#",
    screenshotPrompt: "healthcare EMR",
    gradient: "from-[#0F4C81] to-[#5AAED8]",
    year: 2024,
  },
  {
    id: "p4",
    name: "LearnSphere LMS",
    category: "Education",
    industry: "EdTech",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    description: "Interactive learning platform with adaptive assessments, live classes and analytics for institutions.",
    liveUrl: "#",
    screenshotPrompt: "LMS learning platform",
    gradient: "from-[#0F4C81] to-[#3B82F6]",
    year: 2025,
  },
  {
    id: "p5",
    name: "Relay CRM",
    category: "CRM",
    industry: "SaaS",
    technologies: ["React", "Node.js", "PostgreSQL", "Firebase"],
    description: "Sales pipeline CRM with automations, WhatsApp/email sequencing and deal intelligence.",
    liveUrl: "#",
    screenshotPrompt: "CRM sales pipeline",
    gradient: "from-[#0F4C81] to-[#2C7BB6]",
    year: 2025,
  },
  {
    id: "p6",
    name: "Forge Manufacturing ERP",
    category: "ERP",
    industry: "Manufacturing",
    technologies: ["Laravel", "MySQL", "Vue"],
    description: "Production planning, inventory, and shop-floor control for mid-sized manufacturing plants.",
    liveUrl: "#",
    screenshotPrompt: "manufacturing ERP",
    gradient: "from-[#0F4C81] to-[#1D6FB8]",
    year: 2024,
  },
  {
    id: "p7",
    name: "Nova Commerce",
    category: "eCommerce",
    industry: "Retail",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    description: "Headless eCommerce storefront with personalization, subscriptions and unified checkout.",
    liveUrl: "#",
    screenshotPrompt: "ecommerce store",
    gradient: "from-[#0F4C81] to-[#4098D7]",
    year: 2025,
  },
  {
    id: "p8",
    name: "Vertex Landing",
    category: "Landing Pages",
    industry: "SaaS",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    description: "High-converting SaaS launch page with animated hero, pricing calculator and CMS integration.",
    liveUrl: "#",
    screenshotPrompt: "SaaS landing page",
    gradient: "from-[#0F4C81] to-[#63B3ED]",
    year: 2025,
  },
  {
    id: "p9",
    name: "TrailFit Mobile",
    category: "Mobile Apps",
    industry: "Health & Fitness",
    technologies: ["React Native", "FastAPI", "PostgreSQL"],
    description: "Cross-platform fitness app with adaptive plans, wearable sync and community challenges.",
    liveUrl: "#",
    screenshotPrompt: "fitness mobile app",
    gradient: "from-[#0F4C81] to-[#2A80C4]",
    year: 2024,
  },
];

export const technologies = [
  "React", "Next.js", "Angular", "Node.js", "Spring Boot", "PHP", "Laravel",
  "Python", "FastAPI", "MySQL", "MongoDB", "PostgreSQL", "Docker", "AWS",
  "Azure", "Firebase", "Supabase", "Tailwind CSS", "Material UI", "Framer Motion",
];

export type TechnologyCategory = {
  title: string;
  icon: string;
  items: string[];
};

export const technologyCategories: TechnologyCategory[] = [
  {
    title: "Frontend Development",
    icon: "Layout",
    items: [
      "React.js", "Next.js", "Angular", "Vue.js", "HTML5", "CSS3",
      "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Bootstrap",
      "Material UI", "Framer Motion",
    ],
  },
  {
    title: "Backend Development",
    icon: "Server",
    items: [
      "Node.js", "Express.js", "Spring Boot", "Java", "PHP", "Laravel",
      "Python", "FastAPI", ".NET",
    ],
  },
  {
    title: "Database",
    icon: "Database",
    items: [
      "MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Firebase Firestore",
      "Supabase", "Redis",
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: "Cloud",
    items: [
      "AWS", "Microsoft Azure", "Google Cloud Platform", "DigitalOcean",
      "Hostinger VPS", "Vercel", "Netlify", "Render", "Railway", "Docker",
      "Nginx", "Cloudflare", "GitHub Actions",
    ],
  },
  {
    title: "System Design",
    icon: "Shield",
    items: [
      "Monolithic", "Microservices", "REST APIs", "API Gateway",
      "Authentication", "Caching", "CDN", "Message Queues",
      "WebSockets", "Scalability", "High Availability", "Monitoring",
      "Security",
    ],
  },
  {
    title: "Mobile Development",
    icon: "Smartphone",
    items: [
      "Android Development", "iOS Development", "React Native", "Flutter",
      "Expo", "Kotlin", "Java (Android)", "Swift (iOS)",
      "App Store Deployment", "Google Play Deployment",
    ],
  },
  {
    title: "UI/UX Design",
    icon: "Palette",
    items: [
      "Figma", "Adobe XD", "Responsive Design", "Wireframing", "Prototyping",
      "Design Systems", "Accessibility (WCAG)",
    ],
  },
  {
    title: "AI & Automation",
    icon: "Sparkles",
    items: [
      "OpenAI API", "Google Gemini API", "OCR Solutions", "AI Chatbots",
      "Document Processing", "Prescription Scanner", "Workflow Automation",
    ],
  },
  {
    title: "DevOps & Security",
    icon: "Lock",
    items: [
      "Docker", "Docker Compose", "CI/CD Pipelines", "GitHub Actions",
      "GitLab CI", "SSL Certificates", "Firewall Configuration", "Backup & Recovery",
      "Monitoring", "Performance Optimization",
    ],
  },
];


export const industries = [
  "Finance", "Construction", "Healthcare", "EdTech", "SaaS",
  "Manufacturing", "Retail", "Health & Fitness",
];

export const testimonials = [
  {
    company: "Meridian Capital",
    name: "Ananya Rao",
    role: "VP, Product",
    review: "Cybaem shipped our investor portal in half the time we budgeted — polished, secure and genuinely a joy to use.",
  },
  {
    company: "BuildCore",
    name: "Rahul Menon",
    role: "COO",
    review: "They understood our on-site workflows before writing a line of code. The ERP has become the backbone of every project.",
  },
  {
    company: "PulseCare",
    name: "Dr. Maya Iyer",
    role: "Chief Medical Officer",
    review: "The team's attention to compliance and clinician UX is exceptional. Our doctors adopted the platform on day one.",
  },
  {
    company: "LearnSphere",
    name: "Ethan Park",
    role: "Founder",
    review: "From branding to analytics, Cybaem behaved like a true product partner — not a vendor.",
  },
];

export const stats = [
  { label: "Projects Delivered", value: 52, suffix: "+" },
  { label: "Clients Served", value: 38, suffix: "+" },
  { label: "Industries", value: 12, suffix: "" },
  { label: "Countries", value: 9, suffix: "" },
  { label: "Years Experience", value: 7, suffix: "+" },
];

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    desc: "Understand your goals and requirements.",
    icon: "Search",
    color: "blue",
  },
  {
    n: "02",
    title: "Plan",
    desc: "Define the strategy and create a clear roadmap.",
    icon: "FileText",
    color: "purple",
  },
  {
    n: "03",
    title: "Design",
    desc: "Craft intuitive UI/UX that delivers great experiences.",
    icon: "Paintbrush",
    color: "green",
  },
  {
    n: "04",
    title: "Build",
    desc: "Develop scalable, secure and high-performance solutions.",
    icon: "Code2",
    color: "blue",
  },
  {
    n: "05",
    title: "Test",
    desc: "Ensure quality, security and seamless performance.",
    icon: "ShieldCheck",
    color: "purple",
  },
  {
    n: "06",
    title: "Launch",
    desc: "Deploy your solution smoothly and with confidence.",
    icon: "Rocket",
    color: "green",
  },
  {
    n: "07",
    title: "Support",
    desc: "Provide continuous support and drive long-term success.",
    icon: "Headphones",
    color: "blue",
  },
];

export const whyUs = [
  { title: "Enterprise Quality", desc: "Battle-tested patterns, strict code reviews and production observability by default." },
  { title: "Modern UI/UX", desc: "Interfaces that feel as premium as Apple, Stripe and Linear." },
  { title: "Scalable Architecture", desc: "Cloud-native designs that grow from MVP to millions of users." },
  { title: "Secure Applications", desc: "OWASP-aligned, RBAC, encryption at rest and in transit." },
  { title: "Fast Delivery", desc: "Weekly demos and transparent sprints — no black boxes." },
  { title: "Dedicated Support", desc: "A named team from kickoff through post-launch iteration." },
];
