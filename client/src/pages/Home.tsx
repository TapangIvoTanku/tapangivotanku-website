/* ═══════════════════════════════════════════════════════════════
   DESIGN: "Deep Field" — Dark Academic Cosmos
   Deep navy bg, electric blue accent, Fraunces + DM Sans
   ═══════════════════════════════════════════════════════════════ */

import { useEffect, useRef, useState } from "react";

/* ─── Data ───────────────────────────────────────────────────── */
const PROFILE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663351461221/LRS8ryh6ETstbnQmQHyTcw/tapang-profile_57489805.png";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663351461221/kN578GQbnHP6g8pG6QHmC8/hero-bg-c3z9AJZ8SNJ2bAHAPTTrtt.webp";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const INTERESTS = [
  "International Security",
  "AI & Strategic Deception",
  "Crisis Bargaining Theory",
  "Deterrence & Compellence",
  "Computational Social Science",
  "Political Economy of AI",
];

const EDUCATION = [
  { degree: "PhD in Political Science & Data Science", institution: "University at Buffalo, SUNY", year: "In Progress", focus: "International Security, AI, Crisis Bargaining" },
  { degree: "MSc in Statistics", institution: "National University", year: "2014", focus: "" },
];

const PROJECTS = [
  {
    name: "The Bluffing Machine",
    description: "Peer-reviewed research on generative AI, strategic deception, and the limits of deterrence theory. Under review at the Journal of Global Security Studies.",
    tags: ["AI", "Deterrence Theory", "Game Theory", "NLP"],
    url: "https://ssrn.com/abstract=5138435",
    highlight: true,
    badge: "Under Review — JGSS",
  },
  {
    name: "Epstein Files Research Assistant",
    description: "Semantic search across 2.4 million pages of declassified DOJ documents. Built with 3.3M+ vectors indexed using advanced NLP and document intelligence pipelines.",
    tags: ["NLP", "Semantic Search", "Vector DB", "Python"],
    url: "https://www.chomskytanku.com/epstein-files-research-tool",
    highlight: false,
    badge: "",
  },
];

const EXPERIENCE = [
  {
    title: "PhD Researcher",
    company: "University at Buffalo, SUNY",
    period: "2022 – Present",
    location: "Buffalo, NY",
    bullets: [
      "Conducting original research on AI-driven strategic deception and its implications for international security and deterrence theory.",
      "Developing computational models of crisis bargaining using game-theoretic and machine learning approaches.",
      "Authoring peer-reviewed manuscripts on the intersection of generative AI and geopolitical stability.",
    ],
  },
  {
    title: "Senior Data Scientist",
    company: "Fortune 100 Company (Marketing Industry)",
    period: "2017 – 2022",
    location: "USA",
    bullets: [
      "Developed statistical models to optimize marketing spend and measure campaign effectiveness.",
      "Built customer segmentation frameworks that improved targeting precision by 40%.",
      "Led a team of analysts and junior data scientists on high-impact projects.",
    ],
  },
  {
    title: "Data Scientist",
    company: "Fortune 100 Company (Banking Industry)",
    period: "2014 – 2017",
    location: "USA",
    bullets: [
      "Designed risk models and behavioral analytics systems for consumer banking products.",
      "Implemented machine learning pipelines for fraud detection and credit scoring.",
      "Translated complex data insights into actionable recommendations for executive stakeholders.",
    ],
  },
];

const SKILLS = [
  { category: "Languages & Tools", items: ["Python", "R", "SQL", "Spark", "Scala", "Git", "Docker", "AWS"] },
  { category: "Machine Learning", items: ["Deep Learning", "NLP", "Computer Vision", "Causal Inference", "Bayesian Statistics", "Time Series"] },
  { category: "Frameworks", items: ["TensorFlow", "PyTorch", "scikit-learn", "Hugging Face", "LangChain", "Pandas", "NumPy"] },
  { category: "Data & Cloud", items: ["AWS SageMaker", "Redshift", "Athena", "Databricks", "Snowflake", "Tableau"] },
];

/* ─── Fade-up hook ───────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
    >
      {children}
    </div>
  );
}

/* ─── Sticky Nav ─────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["about", "research", "experience", "skills", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,17,32,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="font-display text-white font-semibold text-lg tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>
          Tapang Ivo Tanku
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono-label text-xs tracking-widest uppercase transition-colors duration-200"
              style={{
                color: active === l.href.slice(1) ? "var(--cobalt)" : "rgba(240,244,255,0.6)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-white/70 transition-all" style={{ transform: menuOpen ? "rotate(45deg) translate(2px,2px)" : "" }} />
          <span className="block w-5 h-px bg-white/70 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-px bg-white/70 transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translate(2px,-2px)" : "" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(11,17,32,0.97)" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono-label text-xs tracking-widest uppercase py-2"
              style={{ color: "rgba(240,244,255,0.7)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        background: `linear-gradient(135deg, rgba(11,17,32,0.97) 0%, rgba(15,30,60,0.92) 100%), url(${HERO_BG}) center/cover no-repeat`,
      }}
    >
      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #0B1120)" }} />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

          {/* Text block */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 font-mono-label text-xs"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(240,244,255,0.75)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for collaboration
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Fraunces', serif" }}
              itemProp="name"
            >
              Tapang Ivo Tanku
            </h1>

            <p
              className="font-mono-label text-base mb-6"
              style={{ color: "rgba(74,158,255,0.9)", letterSpacing: "0.04em" }}
              itemProp="jobTitle"
            >
              PhD Researcher · University at Buffalo, SUNY
            </p>

            <p
              className="text-base leading-relaxed mb-4 max-w-xl"
              style={{ color: "rgba(240,244,255,0.8)" }}
            >
              I study how artificial intelligence reshapes the strategic landscape of international security. My research sits at the intersection of crisis bargaining theory, generative AI, and computational social science.
            </p>

            <p
              className="text-base leading-relaxed mb-8 max-w-xl"
              style={{ color: "rgba(240,244,255,0.65)" }}
            >
              I'm passionate about democratizing knowledge in a way that is accessible to everyone, regardless of background.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#research"
                className="px-6 py-3 rounded-md font-semibold text-sm text-white transition-all hover:opacity-90 hover:translate-y-[-1px]"
                style={{ background: "var(--cobalt)" }}
              >
                View My Research
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-md font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: "rgba(255,255,255,0.08)", color: "rgba(240,244,255,0.85)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex-shrink-0">
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 0 1px rgba(74,158,255,0.2), 0 24px 64px rgba(0,0,0,0.6)",
              }}
            >
              <img
                src={PROFILE_IMG}
                alt="Tapang Ivo Tanku"
                className="w-full h-full object-cover"
                itemProp="image"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(74,158,255,0.08) 0%, transparent 60%)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ──────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-24" style={{ background: "#0B1120" }}>
      <div className="container">
        <FadeIn>
          <div className="mb-10">
            <p className="section-label mb-3">01 — About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              Research & Background
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={100}>
            <div>
              <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(240,244,255,0.75)" }}>
                I am a PhD Researcher at the University at Buffalo, SUNY, where my work sits at the convergence of political science, data science, and artificial intelligence. My primary research examines how generative AI systems alter the strategic calculus of state and non-state actors in international crises.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(240,244,255,0.75)" }}>
                Prior to my doctoral studies, I spent nearly a decade as a data scientist in industry — building machine learning systems at Fortune 100 companies in marketing and banking. That experience grounds my research in practical computational methods.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(240,244,255,0.65)" }}>
                My current manuscript, <em className="text-white">The Bluffing Machine</em>, is under review at the <em>Journal of Global Security Studies</em>. It argues that generative AI fundamentally undermines classical deterrence theory by enabling credible strategic deception at scale.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <h3 className="text-sm font-semibold mb-5 font-mono-label tracking-widest uppercase" style={{ color: "rgba(74,158,255,0.8)" }}>
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {INTERESTS.map((i) => (
                  <span key={i} className="tag-pill">{i}</span>
                ))}
              </div>

              <h3 className="text-sm font-semibold mb-4 font-mono-label tracking-widest uppercase" style={{ color: "rgba(74,158,255,0.8)" }}>
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {EDUCATION.map((e) => (
                  <div key={e.degree} className="glow-card p-4">
                    <p className="text-white font-semibold text-sm mb-0.5" style={{ fontFamily: "'Fraunces', serif" }}>{e.degree}</p>
                    <p className="font-mono-label text-xs mb-1" style={{ color: "rgba(74,158,255,0.8)" }}>{e.institution} · {e.year}</p>
                    {e.focus && <p className="text-xs" style={{ color: "rgba(240,244,255,0.5)" }}>{e.focus}</p>}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Research / Projects ────────────────────────────────────── */
function Research() {
  return (
    <section id="research" className="py-24" style={{ background: "#0D1628" }}>
      <div className="container">
        <FadeIn>
          <div className="mb-10">
            <p className="section-label mb-3">02 — Research & Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              Featured Work
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 120}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block glow-card p-6 h-full"
                style={p.highlight ? { borderColor: "rgba(74,158,255,0.2)", background: "rgba(74,158,255,0.04)" } : {}}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span
                      className="flex-shrink-0 font-mono-label text-xs px-2 py-1 rounded-full"
                      style={{ background: "rgba(126,203,161,0.12)", color: "#7ECBA1", border: "1px solid rgba(126,203,161,0.25)", whiteSpace: "nowrap" }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(240,244,255,0.65)" }}>
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ─────────────────────────────────────────────── */
function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="experience" className="py-24" style={{ background: "#0B1120" }}>
      <div className="container">
        <FadeIn>
          <div className="mb-10">
            <p className="section-label mb-3">03 — Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              Career Timeline
            </h2>
          </div>
        </FadeIn>

        <div className="relative pl-6 md:pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(74,158,255,0.5), rgba(74,158,255,0.1))" }}
          />

          <div className="flex flex-col gap-6">
            {EXPERIENCE.map((e, i) => (
              <FadeIn key={e.title + e.company} delay={i * 100}>
                <div className="relative">
                  {/* Dot */}
                  <div
                    className="absolute -left-[1.6rem] md:-left-[2.1rem] top-5 w-3 h-3 rounded-full border-2"
                    style={{
                      background: i === 0 ? "var(--cobalt)" : "#0B1120",
                      borderColor: i === 0 ? "var(--cobalt)" : "rgba(74,158,255,0.4)",
                      boxShadow: i === 0 ? "0 0 10px rgba(74,158,255,0.5)" : "none",
                    }}
                  />

                  <button
                    className="w-full text-left glow-card p-5 md:p-6"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-white font-bold text-base mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                          {e.title}
                        </h3>
                        <p className="font-mono-label text-xs mb-1" style={{ color: "rgba(74,158,255,0.85)" }}>
                          {e.company}
                        </p>
                        <p className="font-mono-label text-xs" style={{ color: "rgba(240,244,255,0.4)" }}>
                          {e.period} · {e.location}
                        </p>
                      </div>
                      <span
                        className="text-lg transition-transform duration-200 flex-shrink-0 mt-1"
                        style={{
                          color: "rgba(74,158,255,0.6)",
                          transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        ↓
                      </span>
                    </div>

                    {open === i && (
                      <ul className="mt-4 flex flex-col gap-2.5 border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                        {e.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "rgba(240,244,255,0.7)" }}>
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--cobalt)", opacity: 0.7 }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Skills ─────────────────────────────────────────────────── */
function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: "#0D1628" }}>
      <div className="container">
        <FadeIn>
          <div className="mb-10">
            <p className="section-label mb-3">04 — Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              Technical Toolkit
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((s, i) => (
            <FadeIn key={s.category} delay={i * 80}>
              <div className="glow-card p-5 h-full">
                <h3 className="font-mono-label text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(74,158,255,0.8)" }}>
                  {s.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{ background: "rgba(255,255,255,0.05)", color: "rgba(240,244,255,0.75)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:tapangiv@buffalo.edu?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24" style={{ background: "#0B1120" }}>
      <div className="container max-w-2xl">
        <FadeIn>
          <div className="mb-10">
            <p className="section-label mb-3">05 — Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              Get in Touch
            </h2>
            <p className="mt-3 text-base" style={{ color: "rgba(240,244,255,0.6)" }}>
              I'm open to research collaborations, speaking invitations, and academic discussions.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="mailto:tapangiv@buffalo.edu"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90"
              style={{ background: "rgba(74,158,255,0.1)", color: "rgba(74,158,255,0.9)", border: "1px solid rgba(74,158,255,0.2)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              tapangiv@buffalo.edu
            </a>
            <a
              href="https://ssrn.com/author=tapangivotanku"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90"
              style={{ background: "rgba(126,203,161,0.08)", color: "rgba(126,203,161,0.85)", border: "1px solid rgba(126,203,161,0.18)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              SSRN Profile
            </a>
            <a
              href="https://github.com/TapangIvoTanku"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.05)", color: "rgba(240,244,255,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          {sent ? (
            <div
              className="glow-card p-8 text-center"
              style={{ borderColor: "rgba(126,203,161,0.25)", background: "rgba(126,203,161,0.05)" }}
            >
              <p className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Fraunces', serif" }}>Message sent!</p>
              <p className="text-sm" style={{ color: "rgba(240,244,255,0.6)" }}>Your email client should have opened. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono-label text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(240,244,255,0.5)" }}>Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(240,244,255,0.9)",
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-mono-label text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(240,244,255,0.5)" }}>Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(240,244,255,0.9)",
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block font-mono-label text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(240,244,255,0.5)" }}>Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(240,244,255,0.9)",
                  }}
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="self-start px-7 py-3 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90 hover:translate-y-[-1px]"
                style={{ background: "var(--cobalt)" }}
              >
                Send Message
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-8" style={{ background: "#080E1C", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono-label text-xs" style={{ color: "rgba(240,244,255,0.3)" }}>
          © {new Date().getFullYear()} Tapang Ivo Tanku · University at Buffalo, SUNY
        </p>
        <div className="flex items-center gap-5">
          <a href="mailto:tapangiv@buffalo.edu" className="font-mono-label text-xs transition-colors hover:opacity-80" style={{ color: "rgba(240,244,255,0.35)" }}>
            tapangiv@buffalo.edu
          </a>
          <a href="https://tapangivotanku.com" className="font-mono-label text-xs transition-colors hover:opacity-80" style={{ color: "rgba(74,158,255,0.5)" }}>
            tapangivotanku.com
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen" itemScope itemType="https://schema.org/Person">
      <Nav />
      <Hero />
      <About />
      <Research />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
