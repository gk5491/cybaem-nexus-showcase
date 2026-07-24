import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useSpring, useInView } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Check, ChevronUp, ExternalLink, Mail,
  Phone, Search, Star, X, Linkedin, Twitter, Github, Instagram,
  Sparkles, Shield, Zap, Layers, Rocket, HeartHandshake,
} from "lucide-react";
import logoAsset from "@/assets/cybaem-logo.png.asset.json";
import {
  categories, projects, technologies, testimonials, stats,
  processSteps, whyUs, type Project,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cybaem Tech — Digital Portfolio & Enterprise Solutions" },
      {
        name: "description",
        content:
          "Explore Cybaem Tech's portfolio of premium websites, enterprise software, CRM, ERP, eCommerce and mobile apps built for clients worldwide.",
      },
      { property: "og:title", content: "Cybaem Tech — Digital Portfolio" },
      {
        property: "og:description",
        content:
          "Showcasing innovative websites, enterprise applications and digital experiences developed by Cybaem Tech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

/* -------------------------------------------------------------------------- */
/*  Small building blocks                                                     */
/* -------------------------------------------------------------------------- */

function Counter({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function SectionHeading({
  eyebrow, title, subtitle, center = true,
}: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-14`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-primary`}>
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                    */
/* -------------------------------------------------------------------------- */

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Websites", href: "#portfolio" },
  { label: "Enterprise Solutions", href: "#portfolio" },
  { label: "Mobile Apps", href: "#portfolio" },
  { label: "UI Designs", href: "#portfolio" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1180px,calc(100%-2rem))] transition-all duration-300 rounded-2xl ${
        scrolled ? "glass-strong shadow-soft" : "glass"
      }`}
    >
      <nav className="flex items-center justify-between px-4 md:px-6 py-3">
        <a href="#home" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Cybaem Tech" className="h-8 w-auto" />
        </a>
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-surface transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95 transition"
        >
          Let's Talk <ArrowRight className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header (logo, title, right cards)                                         */
/* -------------------------------------------------------------------------- */

function TopHeader() {
  return (
    <section id="home" className="pt-32 md:pt-36 pb-6 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_auto] gap-8 items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Portfolio · 2026
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
            Our Digital <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg text-muted-foreground">
            Showcasing innovative websites, enterprise applications, and digital
            experiences developed by Cybaem Tech.
          </p>
        </div>
        <div className="flex flex-row md:flex-col gap-3">
          <div className="glass-strong rounded-2xl shadow-soft px-5 py-4 min-w-[180px]">
            <div className="text-xs text-muted-foreground">Total Projects Completed</div>
            <div className="mt-1 text-3xl font-semibold text-primary">
              <Counter to={50} suffix="+" />
            </div>
          </div>
          <div className="glass-strong rounded-2xl shadow-soft px-5 py-4 flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-foreground">Client Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative px-6 pt-8 pb-20 md:pb-28 gradient-hero">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground">
            Building digital experiences that{" "}
            <span className="text-gradient">deliver results.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            Explore our collection of modern websites, enterprise software,
            eCommerce platforms, CRM solutions, ERP systems, mobile applications
            and custom digital products developed for clients across industries.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elevated hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              View Portfolio <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        <HeroIllustration />
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative h-[420px] md:h-[520px]">
      {/* Ambient gradient */}
      <div className="absolute inset-0 rounded-3xl gradient-primary opacity-[0.06] blur-2xl" />

      {/* Laptop */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="absolute inset-x-4 bottom-6 rounded-2xl bg-white shadow-elevated border border-border overflow-hidden animate-float-slow"
      >
        <div className="h-6 flex items-center gap-1.5 px-3 bg-surface border-b border-border">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        </div>
        <div className="p-4 grid grid-cols-6 gap-3">
          <div className="col-span-2 rounded-xl gradient-primary h-28" />
          <div className="col-span-4 space-y-2">
            <div className="h-3 rounded-full bg-surface w-3/4" />
            <div className="h-3 rounded-full bg-surface w-1/2" />
            <div className="h-3 rounded-full bg-surface w-2/3" />
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-16 rounded-lg bg-surface" />
              <div className="h-16 rounded-lg bg-primary/10" />
              <div className="h-16 rounded-lg bg-surface" />
            </div>
          </div>
          <div className="col-span-6 grid grid-cols-4 gap-2">
            <div className="h-10 rounded-lg bg-surface" />
            <div className="h-10 rounded-lg bg-surface" />
            <div className="h-10 rounded-lg bg-primary/10" />
            <div className="h-10 rounded-lg bg-surface" />
          </div>
        </div>
      </motion.div>

      {/* Tablet */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="absolute -right-2 top-8 w-40 md:w-48 rounded-2xl bg-white shadow-elevated border border-border overflow-hidden animate-float-med"
      >
        <div className="p-3 space-y-2">
          <div className="h-16 rounded-lg gradient-primary" />
          <div className="h-2 w-2/3 rounded-full bg-surface" />
          <div className="h-2 w-1/2 rounded-full bg-surface" />
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="h-10 rounded-lg bg-surface" />
            <div className="h-10 rounded-lg bg-primary/10" />
          </div>
        </div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="absolute left-0 top-16 w-28 md:w-32 rounded-3xl bg-white shadow-elevated border border-border overflow-hidden animate-float-fast"
      >
        <div className="p-2 space-y-2">
          <div className="h-3 rounded-full bg-surface w-2/3 mx-auto" />
          <div className="h-20 rounded-2xl gradient-primary" />
          <div className="h-2 rounded-full bg-surface" />
          <div className="h-2 rounded-full bg-surface w-3/4" />
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="h-8 rounded-lg bg-surface" />
            <div className="h-8 rounded-lg bg-primary/10" />
            <div className="h-8 rounded-lg bg-surface" />
          </div>
        </div>
      </motion.div>

      {/* Floating stat card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="absolute right-4 bottom-0 glass-strong rounded-2xl shadow-soft px-4 py-3 animate-float-med"
      >
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Uptime</div>
        <div className="text-lg font-semibold text-primary">99.99%</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="absolute left-6 top-0 glass-strong rounded-2xl shadow-soft px-4 py-3 animate-float-slow"
      >
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl gradient-primary" />
          <div>
            <div className="text-xs text-muted-foreground">Deploys today</div>
            <div className="text-sm font-semibold text-foreground">128</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Portfolio (filter + grid + modal)                                         */
/* -------------------------------------------------------------------------- */

function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-3xl bg-card border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 hover:scale-[1.005] transition-all duration-300 overflow-hidden flex flex-col"
    >
      <button
        type="button"
        onClick={() => onOpen(p)}
        className="relative aspect-[16/10] w-full overflow-hidden text-left"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
        {/* Mock browser */}
        <div className="absolute inset-4 rounded-xl bg-white/95 shadow-lg overflow-hidden">
          <div className="h-5 flex items-center gap-1 px-2 bg-surface border-b border-border">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="p-3 grid grid-cols-4 gap-2">
            <div className="col-span-1 rounded-md bg-surface h-full min-h-16" />
            <div className="col-span-3 space-y-2">
              <div className="h-2.5 rounded-full bg-surface w-2/3" />
              <div className="h-2.5 rounded-full bg-surface w-1/2" />
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-6 rounded bg-surface" />
                <div className="h-6 rounded bg-primary/15" />
                <div className="h-6 rounded bg-surface" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
          <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-primary inline-flex items-center gap-1">
            View Details <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </button>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-xs text-muted-foreground">{p.industry}</div>
            <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
          </div>
          <span className="rounded-full bg-primary/10 text-primary px-2.5 py-1 text-[10px] font-medium">
            {p.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {p.technologies.slice(0, 4).map((t) => (
            <span key={t} className="rounded-md bg-surface text-foreground/70 px-2 py-0.5 text-[11px]">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-3 flex gap-2">
          <a
            href={p.liveUrl}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-95 transition"
          >
            Live Demo <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => onOpen(p)}
            className="flex-1 inline-flex items-center justify-center rounded-full border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-surface transition"
          >
            Case Study
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function PortfolioSection() {
  const [cat, setCat] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [tech, setTech] = useState<string>("All");
  const [sort, setSort] = useState<"latest" | "oldest">("latest");
  const [open, setOpen] = useState<Project | null>(null);

  const allTechs = ["All", ...Array.from(new Set(projects.flatMap((p) => p.technologies)))];

  const filtered = projects
    .filter((p) => cat === "All" || p.category === cat)
    .filter((p) => tech === "All" || p.technologies.includes(tech))
    .filter((p) =>
      query.trim() === ""
        ? true
        : (p.name + p.description + p.industry).toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => (sort === "latest" ? b.year - a.year : a.year - b.year));

  return (
    <section id="portfolio" className="px-6 py-24 bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Work"
          title="Featured projects, crafted with care."
          subtitle="Every project represents our commitment to quality, innovation and business growth."
        />

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-xs font-medium border transition-all ${
                cat === c
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-white text-foreground/70 border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Search + tech + sort */}
        <div className="glass-strong rounded-2xl shadow-soft p-3 md:p-4 mb-10 grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <div className="flex items-center gap-2 rounded-full bg-white border border-border px-4 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects by name, industry…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <select
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="rounded-full bg-white border border-border px-4 py-2 text-sm text-foreground"
          >
            {allTechs.map((t) => (
              <option key={t} value={t}>Tech: {t}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "latest" | "oldest")}
            className="rounded-full bg-white border border-border px-4 py-2 text-sm text-foreground"
          >
            <option value="latest">Sort: Latest</option>
            <option value="oldest">Sort: Oldest</option>
          </select>
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} onOpen={setOpen} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-16">
            No projects match those filters.
          </div>
        )}
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl rounded-3xl bg-card shadow-glow overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/90 border border-border p-2 hover:bg-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className={`h-56 md:h-72 bg-gradient-to-br ${project.gradient} relative`}>
              <div className="absolute inset-6 md:inset-8 rounded-2xl bg-white/95 shadow-lg" />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-primary/10 text-primary px-2.5 py-1 font-medium">
                  {project.category}
                </span>
                <span className="text-muted-foreground">{project.industry}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{project.year}</span>
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="mt-6">
                <div className="text-xs font-medium text-foreground/60 uppercase tracking-wider mb-2">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="rounded-md bg-surface px-2.5 py-1 text-xs text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  Visit Website <ExternalLink className="h-4 w-4" />
                </a>
                <button
                  onClick={onClose}
                  className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-surface"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stats                                                                     */
/* -------------------------------------------------------------------------- */

function StatsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="By the numbers"
          title="A track record enterprises trust."
          subtitle="Consistent delivery across industries, geographies and technologies."
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl bg-card border border-border shadow-soft p-6 text-center hover:shadow-elevated hover:-translate-y-0.5 transition-all"
            >
              <div className="text-3xl md:text-4xl font-semibold text-primary">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Technologies                                                              */
/* -------------------------------------------------------------------------- */

function TechnologiesSection() {
  return (
    <section className="px-6 py-24 bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technologies"
          title="Modern stack, chosen for the job."
          subtitle="We pick tools that make products faster to build, safer to run and easier to evolve."
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3">
          {technologies.map((t) => (
            <div
              key={t}
              className="aspect-square rounded-2xl bg-white border border-border shadow-soft flex items-center justify-center px-2 text-center text-xs md:text-[13px] font-medium text-foreground/80 hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Process                                                                   */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="How we work"
          title="A calm, considered process."
          subtitle="From first conversation to long-term partnership, every step is transparent."
        />
        <ol className="relative border-l-2 border-dashed border-border ml-4 space-y-6">
          {processSteps.map((s) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="pl-8 relative"
            >
              <span className="absolute -left-[18px] top-1 flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-white text-xs font-semibold shadow-soft">
                {s.n}
              </span>
              <div className="rounded-2xl bg-card border border-border shadow-soft p-5 hover:shadow-elevated transition-shadow">
                <h4 className="text-base font-semibold text-foreground">{s.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why Choose                                                                */
/* -------------------------------------------------------------------------- */

const whyIcons = [Shield, Sparkles, Layers, Shield, Zap, HeartHandshake];

function WhySection() {
  return (
    <section id="why" className="px-6 py-24 bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Cybaem Tech"
          title="Enterprise-grade, obsessively crafted."
          subtitle="Six reasons teams choose us for their most important digital products."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => {
            const Icon = whyIcons[i] ?? Rocket;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-3xl bg-white border border-border shadow-soft p-6 hover:shadow-elevated hover:-translate-y-1 transition-all"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground">{w.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */

function TestimonialsSection() {
  return (
    <section className="px-6 py-24 gradient-hero">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Client Reviews"
          title="Words from the teams we've partnered with."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="glass-strong rounded-3xl shadow-soft p-6 md:p-8 hover:shadow-elevated transition-shadow"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                “{t.review}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-semibold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA                                                                       */
/* -------------------------------------------------------------------------- */

function CtaSection() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl gradient-primary text-white p-10 md:p-16 shadow-glow">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs">
              <Sparkles className="h-3.5 w-3.5" /> Start a project
            </div>
            <h3 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
              Ready to build your next digital product?
            </h3>
            <p className="mt-4 text-white/85 md:text-lg">
              Let's turn your idea into a premium, production-ready experience — from
              first prototype to global launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@cybaemtech.com"
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/95 transition"
              >
                Schedule Meeting <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@cybaemtech.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="px-6 pt-16 pb-8 bg-surface border-t border-border">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logoAsset.url} alt="Cybaem Tech" className="h-9 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Cybaem Tech Pvt. Ltd. builds premium websites, enterprise platforms
            and mobile products for ambitious teams.
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full bg-white border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {navLinks.slice(0, 6).map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-primary transition">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground mb-3">Services</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Web Development</li>
            <li>Enterprise Software</li>
            <li>CRM & ERP</li>
            <li>Mobile Applications</li>
            <li>UI / UX Design</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@cybaemtech.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 90000 00000</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-3">
        <div>© 2026 Cybaem Tech Pvt. Ltd. All rights reserved.</div>
        <div>Built with care in India.</div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scroll progress + Back-to-top                                             */
/* -------------------------------------------------------------------------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 30, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] gradient-primary origin-left z-[70]"
    />
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-[65] h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-elevated hover:shadow-glow flex items-center justify-center"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <TopHeader />
        <Hero />
        <PortfolioSection />
        <StatsSection />
        <TechnologiesSection />
        <ProcessSection />
        <WhySection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
