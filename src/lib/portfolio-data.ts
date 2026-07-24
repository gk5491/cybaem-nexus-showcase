import asthaImg from "../assets/website/astha.png";
import bataraImg from "../assets/website/batara.png";
import carbonhiveImg from "../assets/website/carbonhive.png";
import oonetechnologiesImg from "../assets/website/oonetechnologies.png";
import pioneermanufacturingImg from "../assets/website/pioneermanufacturing.png";
import rasaImg from "../assets/website/rasa.png";
import shrisatImg from "../assets/website/shrisat.png";
import smartservImg from "../assets/website/smartserv.png";
import suryaImg from "../assets/website/surya.png";
import voltindusevImg from "../assets/website/voltindusev.png";

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
  image?: string;
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
    name: "Volt Indus EV",
    category: "Corporate",
    industry: "Electric Vehicles",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "Advanced engineering and R&D showcase portal for electric vehicles, embedded systems, and mechanical CAD modeling.",
    liveUrl: "https://voltindusev.com/",
    screenshotPrompt: "volt indus ev homepage",
    gradient: "from-[#2563EB] to-[#3B82F6]",
    year: 2026,
    image: voltindusevImg,
  },
  {
    id: "p2",
    name: "Astha Foundation",
    category: "Landing Pages",
    industry: "NGO & Rural Development",
    technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    description: "Sustainable rural development and community empowerment platform for Astha Foundation, supporting women farmers, youth, and elderly.",
    liveUrl: "https://www.astharural.org/",
    screenshotPrompt: "astha rural ngo homepage",
    gradient: "from-[#1E3A8A] to-[#3B82F6]",
    year: 2025,
    image: asthaImg,
  },
  {
    id: "p3",
    name: "Pioneer MFG Services",
    category: "Corporate",
    industry: "EV Powertrain & Batteries",
    technologies: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
    description: "Professional digital presence showcasing advanced EV powertrain solutions, battery systems, and customized power solutions.",
    liveUrl: "https://pioneermanufacturing.co.in/",
    screenshotPrompt: "pioneer manufacturing systems",
    gradient: "from-[#0D9488] to-[#14B8A6]",
    year: 2025,
    image: pioneermanufacturingImg,
  },
  {
    id: "p4",
    name: "Smart Services",
    category: "CRM",
    industry: "HR & Facilities",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    description: "Comprehensive facilities management and manpower consultancy web platform facilitating payroll, security, and staffing.",
    liveUrl: "https://smartserv.co.in/",
    screenshotPrompt: "smartserv facilities portal",
    gradient: "from-[#4F46E5] to-[#6366F1]",
    year: 2024,
    image: smartservImg,
  },
  {
    id: "p5",
    name: "Oone Technologies",
    category: "Corporate",
    industry: "IT Services",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    description: "High-end enterprise IT service management and consultancy website demonstrating optimized digital transformation strategies.",
    liveUrl: "https://www.oonetechnologies.com/",
    screenshotPrompt: "oone technologies software homepage",
    gradient: "from-[#0F172A] to-[#1E293B]",
    year: 2025,
    image: oonetechnologiesImg,
  },
  {
    id: "p6",
    name: "Shri Sat Astro Vastu",
    category: "Landing Pages",
    industry: "Consulting",
    technologies: ["React", "Tailwind CSS", "Vite"],
    description: "Scientific and result-oriented Vedic astrology, Vastu Shastra consultation, and energy healing consultancy portal.",
    liveUrl: "https://shrisatastrovastu.com/",
    screenshotPrompt: "shrisat astro vastu consulting",
    gradient: "from-[#D97706] to-[#F59E0B]",
    year: 2025,
    image: shrisatImg,
  },
  {
    id: "p7",
    name: "CarbonHive",
    category: "ERP",
    industry: "Engineering",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    description: "Bulk solid handling and industrial processing equipment engineering portal detailing Air Classifying Mills, blenders, and conveyors.",
    liveUrl: "https://www.carbonhive.in/",
    screenshotPrompt: "carbonhive engineering solid handling",
    gradient: "from-[#059669] to-[#10B981]",
    year: 2025,
    image: carbonhiveImg,
  },
  {
    id: "p8",
    name: "Batara Techno Solutions",
    category: "Corporate",
    industry: "Engineering",
    technologies: ["React", "Tailwind CSS", "Vite"],
    description: "Manufacturing engineering site for Body-in-White (BIW) fixturing, injection mould design, and precision sheet metal engineering.",
    liveUrl: "https://bataratechnosolutions.com/",
    screenshotPrompt: "batara techno solutions mechanical design",
    gradient: "from-[#0284C7] to-[#06B6D4]",
    year: 2025,
    image: bataraImg,
  },
  {
    id: "p9",
    name: "Suryamrit",
    category: "eCommerce",
    industry: "Health & Wellness",
    technologies: ["React", "Shopify", "Tailwind CSS"],
    description: "Ayurvedic health and wellness store offering Vitamin D3-infused A2 ghee supplements for Lokpeeth Foundation.",
    liveUrl: "https://suryamrit.org/",
    screenshotPrompt: "suryamrit wellness supplements",
    gradient: "from-[#EA580C] to-[#F97316]",
    year: 2025,
    image: suryaImg,
  },
  {
    id: "p10",
    name: "Rasaior",
    category: "Landing Pages",
    industry: "Luxury Design",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    description: "Immersive luxury interior space planning, high-end bespoke furniture manufacturing, and architectural design portfolio.",
    liveUrl: "https://rasaior.com/",
    screenshotPrompt: "rasaior lifestyle luxury interior",
    gradient: "from-[#1E293B] to-[#475569]",
    year: 2025,
    image: rasaImg,
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
