import { useState, useEffect } from "react";
import { Mail, ExternalLink, ChevronDown, Award, BookOpen, Briefcase, Code2, Brain, Database, Cloud, Menu, X, ArrowRight, Zap, BarChart2 } from "lucide-react";

const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600&display=swap');`;

const C = {
  cream: "#fffdf8",
  surface: "#ffffff",
  altBg: "#fdf6ee",
  textPrimary: "#1c1009",
  textSecondary: "#44352a",   // was #78716c — much darker warm brown, clearly readable
  textMuted: "#6b5c52",       // was #9ca3af — warm dark gray, no more white-on-white
  accent: "#d97706",
  accentHover: "#b45309",
  accentLight: "#fef3c7",
  accentBorder: "#fde68a",
  border: "#e8d9c8",          // was #f0e8d8 — slightly darker so borders are visible
  tagBg: "#fef3c7",
  tagText: "#7c2d12",         // was #92400e — deeper for better contrast on pale bg
  gold: "#f59e0b",
};

function FadeIn({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Tag({ children }) {
  return (
    <span style={{ background: C.tagBg, color: C.tagText, border: `1px solid ${C.accentBorder}`, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, padding: "4px 12px", borderRadius: 999, display: "inline-block" }}>
      {children}
    </span>
  );
}

function Pill({ children, active, onClick }) {
  return (
    <button onClick={onClick} style={{ background: active ? C.accent : C.altBg, color: active ? "#fff" : C.tagText, border: `1px solid ${active ? C.accent : C.accentBorder}`, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, padding: "8px 20px", borderRadius: 999, cursor: "pointer", transition: "all 0.2s" }}>
      {children}
    </button>
  );
}

// ─── NAVBAR ────────────────────────────────────────────────────────────────
function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const links = ["About","Skills","Projects","Experience","Publications","Articles","Achievements","Contact"];
  const scrollTo = (id) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999, background: C.cream, borderBottom: `1px solid ${C.border}`, boxShadow: "0 1px 12px rgba(28,16,9,0.06)", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", opacity: 1, visibility: "visible" }}>
      <span style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontWeight: 700, fontSize: 20, color: C.textPrimary, letterSpacing: "-0.3px" }}>Sanskruti D.</span>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }} className="desktop-nav">
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l)} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: active === l.toLowerCase() ? C.accentHover : C.textMuted, background: "none", border: "none", cursor: "pointer", borderBottom: active === l.toLowerCase() ? `2px solid ${C.accent}` : "2px solid transparent", paddingBottom: 2, transition: "all 0.2s" }}>
            {l}
          </button>
        ))}
      </div>
      <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: C.textPrimary }} className="mobile-menu-btn">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <div style={{ position: "absolute", top: 64, left: 0, right: 0, background: C.cream, borderBottom: `1px solid ${C.border}`, padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: active === l.toLowerCase() ? C.accentHover : C.textSecondary, background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────
function Hero() {
  const roles = ["AI/ML Engineer", "Agentic AI Builder", "Data Scientist", "Full-Stack Engineer", "ML Researcher"];
  const [display, setDisplay] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    if (pausing) { const t = setTimeout(() => { setDeleting(true); setPausing(false); }, 2000); return () => clearTimeout(t); }
    const speed = deleting ? 38 : 75;
    const t = setTimeout(() => {
      const full = roles[roleIdx];
      if (!deleting) {
        if (display.length < full.length) setDisplay(full.slice(0, display.length + 1));
        else setPausing(true);
      } else {
        if (display.length > 0) setDisplay(display.slice(0, -1));
        else { setDeleting(false); setRoleIdx((roleIdx + 1) % roles.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [display, deleting, pausing, roleIdx]);

  const bounce = { animation: "bounce 1.6s infinite" };

  return (
    <section style={{ minHeight: "100vh", background: C.cream, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 64, position: "relative", textAlign: "center", padding: "64px 24px 0" }}>
      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .hero-badge { animation: fadeUp 0.6s ease 0.1s both; }
        .hero-name  { animation: fadeUp 0.6s ease 0.25s both; }
        .hero-role  { animation: fadeUp 0.6s ease 0.4s both; }
        .hero-bio   { animation: fadeUp 0.6s ease 0.55s both; }
        .hero-btns  { animation: fadeUp 0.6s ease 0.7s both; }
        .hero-cta   { animation: fadeUp 0.6s ease 0.85s both; }
        @media(max-width:640px){ .desktop-nav{display:none!important} .mobile-menu-btn{display:flex!important} }
        @media(min-width:641px){ .mobile-menu-btn{display:none!important} }
      `}</style>
      <div className="hero-badge" style={{ display: "inline-block", background: C.accentLight, color: C.tagText, border: `1px solid ${C.accentBorder}`, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, marginBottom: 24 }}>
        MS @ Stony Brook · AI/ML Engineer
      </div>
      <h1 className="hero-name" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(36px, 6vw, 64px)", color: C.textPrimary, letterSpacing: "-1px", marginBottom: 10, lineHeight: 1.1 }}>
        Sanskruti Deshmukh
      </h1>
      <div className="hero-role" style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "clamp(20px, 3vw, 28px)", color: C.accentHover, marginBottom: 20, minHeight: 40 }}>
        {display}<span style={{ borderRight: `2px solid ${C.accent}`, marginLeft: 2, animation: "blink 0.8s infinite" }}>&#8203;</span>
      </div>
      <p className="hero-bio" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: C.textSecondary, maxWidth: 520, lineHeight: 1.75, marginBottom: 28 }}>
        From CUDA kernels to production pipelines — I build end-to-end intelligent systems.
      </p>
      <div className="hero-btns" style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 28 }}>
        {[{ icon: <Github size={18} />, href: "https://github.com/emergingsana123" }, { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/sanskruti-d/" }, { icon: <Mail size={18} />, href: "mailto:sanskrutidhana.deshmukh@stonybrook.edu" }].map((b, i) => (
          <a key={i} href={b.href} target="_blank" rel="noopener noreferrer" style={{ width: 44, height: 44, borderRadius: "50%", border: `1.5px solid ${C.accentBorder}`, background: C.surface, color: C.accent, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", textDecoration: "none" }}
            onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.surface; e.currentTarget.style.color = C.accent; }}>
            {b.icon}
          </a>
        ))}
      </div>
      <div className="hero-cta" style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 64 }}>
        <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{ background: C.accent, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, padding: "11px 28px", borderRadius: 999, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "background 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.background = C.accentHover}
          onMouseLeave={e => e.currentTarget.style.background = C.accent}>
          View My Work <ArrowRight size={16} />
        </button>
        <button onClick={() => document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" })} style={{ background: C.accentLight, color: C.tagText, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, padding: "11px 28px", borderRadius: 999, border: `1px solid ${C.accentBorder}`, cursor: "pointer", transition: "all 0.2s" }}>
          Read Papers
        </button>
      </div>
      <div style={{ ...bounce, color: C.textMuted }}>
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

// ─── ABOUT ─────────────────────────────────────────────────────────────────
function StatCard({ end, suffix, label }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 16px", textAlign: "center" }}>
      <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 32, color: C.accent }}>{end}{suffix}</div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.textSecondary, marginTop: 4 }}>{label}</div>
    </div>
  );
}

function About() {
  const stats = [{ end: 15, suffix: "+", label: "Projects Built" }, { end: 4, suffix: "", label: "IEEE Publications" }, { end: 5, suffix: "", label: "Hackathon Awards" }, { end: 3, suffix: "", label: "Industry Internships" }];
  const domains = ["Research", "Agentic AI", "Data Engineering", "Full-Stack", "ML Systems"];
  return (
    <section id="about" style={{ background: C.altBg, padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="about-grid">
        <FadeIn>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: C.accent, marginBottom: 14 }}>About Me</div>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(24px,3vw,34px)", color: C.textPrimary, marginBottom: 20, lineHeight: 1.25 }}>
            Building at the intersection of<br /><em style={{ color: C.accentHover }}>research and production</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.textSecondary, lineHeight: 1.8, marginBottom: 28 }}>
            I'm a graduate researcher and engineer at Stony Brook University, pursuing my MS in Computer Science and Applied Mathematics (Data Science). I specialize in building end-to-end AI systems — from training custom CUDA kernels and quantized LLM inference pipelines to deploying full-stack agentic platforms used in production. My work spans ML research, distributed data engineering, and intelligent application development across healthcare, cybersecurity, and developer tooling.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[{ deg: "MS Computer Science & Applied Mathematics (Data Science)", school: "Stony Brook University", period: "Aug 2025 – May 2027", courses: "Data Analysis, Computer Vision, NLP, Big Data Algorithms" }, { deg: "BS Computer Science", school: "Savitribai Phule Pune University", period: "Jun 2021 – May 2025", courses: "Data Structures, Database Systems, OS, Networks, ML" }].map((e, i) => (
              <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "16px 18px" }}>
                <div style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: 15, color: C.textPrimary }}>{e.deg}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.accentHover, fontWeight: 500, marginTop: 2 }}>{e.school} · <span style={{ color: C.textMuted }}>{e.period}</span></div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.textMuted, marginTop: 4 }}>Coursework: {e.courses}</div>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
            {stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
          <div style={{ background: C.surface, border: `1px solid ${C.accentBorder}`, borderRadius: 12, padding: "16px 18px", marginBottom: 20 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: C.accent, marginBottom: 8 }}>Currently Working On</div>
            <div style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: 15, color: C.textPrimary }}>Quantization-aware RAG Benchmarking Pipeline</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.accentHover, marginTop: 3 }}>Robotic Systems Lab · Stony Brook University</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {domains.map(d => <Tag key={d}>{d}</Tag>)}
          </div>
        </FadeIn>
      </div>
      <style>{`.about-grid { @media(max-width:768px){ grid-template-columns:1fr!important; } }`}</style>
    </section>
  );
}

// ─── SKILLS ────────────────────────────────────────────────────────────────
function Skills() {
  const skillGroups = [
    { icon: <Code2 size={20} />, name: "Languages", tags: ["Python","C++","Java","TypeScript","JavaScript","HTML/CSS","Go"] },
    { icon: <Brain size={20} />, name: "ML & AI", tags: ["PyTorch","TensorFlow","Keras","Scikit-learn","NumPy","OpenCV","LangChain","MCP"] },
    { icon: <Zap size={20} />, name: "Agentic AI", tags: ["OpenAI API","Claude Code","Hugging Face","Ollama","vLLM","LlamaIndex","CrewAI","AutoGen"] },
    { icon: <Database size={20} />, name: "Databases", tags: ["PostgreSQL","MySQL","MongoDB","Pinecone","ChromaDB","Redis","ElasticSearch"] },
    { icon: <Cloud size={20} />, name: "Cloud & DevOps", tags: ["AWS","GCP","Azure","Docker","Kubernetes","Kafka","Apache Spark","Airflow","Databricks","Snowflake","Terraform","PySpark"] },
    { icon: <BarChart2 size={20} />, name: "Frameworks & Viz", tags: ["React","FastAPI","Flask","Django","Node.js","TailwindCSS","PowerBI","Tableau","Matplotlib","Seaborn"] },
  ];
  return (
    <section id="skills" style={{ background: C.cream, padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: C.accent, marginBottom: 12 }}>Technical Skills</div>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(26px,3vw,38px)", color: C.textPrimary }}>What I work with</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {skillGroups.map((g, i) => (
            <FadeIn key={g.name} delay={i * 80}>
              <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 20px", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.accentBorder; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ color: C.accent }}>{g.icon}</div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, color: C.textPrimary }}>{g.name}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {g.tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ──────────────────────────────────────────────────────────────
const PROJECTS = [
  { title: "QueryMind", cat: "Applied AI", impact: "Natural language CSV analysis — SQL queries + AI insights, no SQL knowledge required.", tech: ["Streamlit","Python","NLP"], link: "https://github.com/emergingsana123/QueryMind" },
  { title: "MeasureMind", cat: "Applied AI", impact: "94% dimension extraction accuracy on 2,000 products; cataloging time cut from 3 min → 15 sec.", tech: ["FastAPI","OpenCV","BLIP-2","LLaVA","React"] },
  { title: "CrackTheCode", cat: "Applied AI", impact: "Real-time LLM security training platform supporting 100+ concurrent users.", tech: ["React","Node.js","Python","Redis"], link: "https://github.com/emergingsana123/crackThecode" },
  { title: "CareerBoost", cat: "Applied AI", impact: "52% lower inference latency, 41% higher job application success for university peers.", tech: ["PyTorch","Sentence-BERT","FAISS","GPT-2"] },
  { title: "MarketLens AI", cat: "Applied AI", impact: "85% retrieval faithfulness on 10,000+ documents; 70% reduction in manual research time.", tech: ["GPT-4o","pgvector","LangSmith","FastAPI"] },
  { title: "MedAgent", cat: "Applied AI", impact: "300ms response latency, 99.9% uptime, 40% reduction in patient wait times.", tech: ["Flask","Kafka","Docker","Kubernetes"] },
  { title: "SmartOps AI", cat: "Applied AI", impact: "MCP-based DevOps agent with automated root-cause analysis and GitHub issue generation.", tech: ["FastAPI","Prometheus","Grafana","MCP"] },
  { title: "Speak&Note", cat: "Full-Stack", impact: "Offline voice transcription in 9 languages, 30MB model footprint on-device.", tech: ["React Native","Whisper","Node.js"], link: "https://github.com/emergingsana123/Speak-Note" },
  { title: "AI Task Manager", cat: "Full-Stack", impact: "Claude Haiku-powered task suggestions + subtask generation via 8 REST endpoints.", tech: ["Spring Boot","Claude API","JUnit"], link: "https://github.com/emergingsana123/ai-task-manager-springboot" },
  { title: "TensorKV", cat: "ML Research", impact: "2.1× throughput on Llama-7B inference with only 2% perplexity degradation (A100).", tech: ["CUDA","C++","PyTorch","INT8"] },
  { title: "TurboQuantRAG", cat: "ML Research", impact: "8× embedding compression, FP32-level QA accuracy, scalable LLM retrieval.", tech: ["TurboQuant","FAISS","PyTorch"], link: "https://github.com/emergingsana123/TurboQuantRAG" },
  { title: "Multimodal Emotion AI", cat: "ML Research", impact: "JAX XLA-level kernel fusion on RAVDESS/MELD + Grad-CAM explainability.", tech: ["JAX","CLIP","BLIP-2","LoRA"] },
  { title: "Video Summarizer", cat: "ML Research", impact: "85% reduction in video watch time, 100+ language translation (IEEE published).", tech: ["Hugging Face","NLP","Python"] },
  { title: "Cyber Threat Intelligence", cat: "Data Analytics", impact: "60% reduction in mean-time-to-detect; surfaced 30% holiday-linked threat surges.", tech: ["LSTM","ARIMA","Power BI","Tableau"] },
  { title: "Urban Umami", cat: "Data Analytics", impact: "NLP analysis of 8,886+ NYC restaurant reviews with composite KPI scorecards.", tech: ["NLTK","TextBlob","Scikit-learn","Plotly"] },
  { title: "Customer Churn Prediction", cat: "Data Analytics", impact: "89% ROC-AUC on 100K+ records; 60% reduction in manual reporting effort.", tech: ["XGBoost","Random Forest","SQL","Power BI"] },
  { title: "Supply Chain MLOps", cat: "Data Analytics", impact: "80+ Optuna tuning trials; auto-rollback CI/CD; full GCP infra via Terraform.", tech: ["Airflow","MLflow","GCP","Terraform"] },
];

const CAT_COLORS = {
  "Applied AI": { bg: "#fef3c7", text: "#92400e", border: "#fde68a" },
  "Full-Stack": { bg: "#ecfdf5", text: "#065f46", border: "#6ee7b7" },
  "ML Research": { bg: "#f3e8ff", text: "#4c1d95", border: "#c4b5fd" },
  "Data Analytics": { bg: "#fffbeb", text: "#78350f", border: "#fcd34d" },
};

function Projects() {
  const cats = ["All", "Applied AI", "Full-Stack", "ML Research", "Data Analytics"];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === active);
  return (
    <section id="projects" style={{ background: C.altBg, padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: C.accent, marginBottom: 12 }}>Projects</div>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(26px,3vw,38px)", color: C.textPrimary, marginBottom: 8 }}>Things I've built</h2>
            <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: 16, color: C.accentHover }}>Real impact, real metrics.</p>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
            {cats.map(c => <Pill key={c} active={active === c} onClick={() => setActive(c)}>{c}</Pill>)}
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {filtered.map((p, i) => {
            const col = CAT_COLORS[p.cat];
            return (
              <FadeIn key={p.title} delay={i * 60}>
                <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px", height: "100%", display: "flex", flexDirection: "column", transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accentBorder; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <span style={{ background: col.bg, color: col.text, border: `1px solid ${col.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 999, display: "inline-block", marginBottom: 12, alignSelf: "flex-start" }}>{p.cat}</span>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, color: C.textPrimary, marginBottom: 8 }}>{p.title}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.textSecondary, lineHeight: 1.65, flex: 1, marginBottom: 14 }}>{p.impact}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: p.link ? 12 : 0 }}>
                    {p.tech.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: C.accent, textDecoration: "none", marginTop: 8 }}
                      onMouseEnter={e => e.currentTarget.style.color = C.accentHover}
                      onMouseLeave={e => e.currentTarget.style.color = C.accent}>
                      View on GitHub <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────
const EXPERIENCE = [
  { company: "Robotic Systems Lab — Stony Brook University", role: "Research Assistant", period: "Dec 2025 – Present", bullets: ["Quantization-aware RAG pipeline (TurboQuant + FAISS + PyTorch): 8× embedding compression, FP32-level QA accuracy on 500K embeddings.", "XGBoost drug–drug interaction model on 63K+ drug pairs: 0.81 AUPRC on imbalanced data using RDKit molecular fingerprints.", "Full-stack multimodal patient intake system (Android + AWS AI pipelines): 80% reduction in manual entry time."] },
  { company: "Airtel Limited", role: "Software Development Engineer Intern", period: "Jan – Jun 2025", bullets: ["Distributed Kafka + Spark + PostgreSQL pipelines processing 200K+ daily events: 98.5% ingestion reliability.", "Multi-agent server audit system via LangGraph: 40% reduction in server readiness time.", "TDD with pytest + GitLab CI/CD: 85% test coverage across production pipelines."] },
  { company: "Power Zoom Digital Solutions", role: "Software Engineer Intern", period: "Jun – Nov 2024", bullets: ["ML forecasting pipeline in Azure ML Studio: reduced warehouse overcapacity by 15%, boosted logistics efficiency by 10%.", "Automated workflows with Power Automate integrated with Microsoft Power Platform."] },
  { company: "The Sparks Foundation", role: "Data Analytics & BI Intern", period: "", bullets: ["ELT pipeline from 8+ sources into BigQuery using SQL and dbt.", "Automated executive dashboards in Looker Studio + Power BI: 60% reduction in weekly reporting effort.", "dbt + Python data quality guardrails: schema validation, key checks, business rule enforcement."] },
];

function Experience() {
  return (
    <section id="experience" style={{ background: C.cream, padding: "96px 24px" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: C.accent, marginBottom: 12 }}>Experience</div>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(26px,3vw,38px)", color: C.textPrimary }}>Where I've worked</h2>
          </div>
        </FadeIn>
        <div style={{ position: "relative", paddingLeft: 28 }}>
          <div style={{ position: "absolute", left: 6, top: 8, bottom: 8, width: 2, background: C.accentBorder, borderRadius: 2 }} />
          {EXPERIENCE.map((e, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div style={{ position: "relative", marginBottom: 44 }}>
                <div style={{ position: "absolute", left: -26, top: 6, width: 12, height: 12, borderRadius: "50%", background: C.accent, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px ${C.accent}` }} />
                <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                    <div style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: 16, color: C.textPrimary }}>{e.company}</div>
                    {e.period && <span style={{ background: C.tagBg, color: C.textMuted, border: `1px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, padding: "3px 10px", borderRadius: 999 }}>{e.period}</span>}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: C.accentHover, marginBottom: 12 }}>{e.role}</div>
                  <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {e.bullets.map((b, j) => (
                      <li key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: C.accent, marginTop: 5, flexShrink: 0, fontSize: 8 }}>●</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.textSecondary, lineHeight: 1.7 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PUBLICATIONS ───────────────────────────────────────────────────────────
const PUBLICATIONS = [
  { badge: "IEEE", title: "CareerBoost: A Hybrid RAG-NLP Job Recommendation Framework", conf: "8th International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud)", date: "Oct 5, 2024", link: "https://ieeexplore.ieee.org/abstract/document/10714727" },
  { badge: "CCIT", title: "MentalPredict: Deep Learning in Mental Health Forecasting", conf: "Second International Conference on Computer Science, Cyber Security and Information Technology", date: "Jun 29, 2024", link: "https://openurl.ebsco.com/EPDB%3Agcd%3A5%3A14880725/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A186855931&crl=c" },
  { badge: "IEEE", title: "YouTube Video Summarizer in Regional Language", conf: "IEEE Computer Society Conference Publishing Services", date: "Dec 14, 2023", link: "https://ieeexplore.ieee.org/abstract/document/10601389" },
  { badge: "MysuruCon", title: "Generative Adversarial Networks for Modeling Urban Heat Islands in Indian Cities", conf: "4th Edition Flagship International Conference (MysuruCon) — IEEE Mysore Subsection", date: "Aug 2024", link: null },
];

function Publications() {
  return (
    <section id="publications" style={{ background: C.altBg, padding: "96px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: C.accent, marginBottom: 12 }}>Research</div>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(26px,3vw,38px)", color: C.textPrimary }}>Publications</h2>
            <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: 15, color: C.accentHover, marginTop: 8 }}>Peer-reviewed work across ML, NLP, and systems research.</p>
          </div>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {PUBLICATIONS.map((p, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 24px", display: "flex", gap: 18, alignItems: "flex-start", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = C.accentBorder}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                <span style={{ background: C.accentLight, color: C.tagText, border: `1px solid ${C.accentBorder}`, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, padding: "4px 10px", borderRadius: 999, whiteSpace: "nowrap", flexShrink: 0 }}>{p.badge}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: 15, color: C.textPrimary, marginBottom: 5, lineHeight: 1.4 }}>{p.title}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.textMuted }}>{p.conf} · {p.date}</div>
                </div>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: C.accent, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}
                    onMouseEnter={e => e.currentTarget.style.color = C.accentHover}
                    onMouseLeave={e => e.currentTarget.style.color = C.accent}>
                    View Paper <ExternalLink size={13} />
                  </a>
                ) : (
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.textMuted, whiteSpace: "nowrap", flexShrink: 0 }}>Conference Presentation</span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ARTICLES ───────────────────────────────────────────────────────────────
const ARTICLES = [
  { title: "Sleep Disorder Analysis Using Machine Learning", link: "https://medium.com/@sanskrutidd30/sleep-disorder-analysis-using-machine-learning-d0b08a688d86" },
  { title: "Hadoop, Hive, Spark, or Kafka? Understanding When to Use Which Big Data Tool", link: "https://medium.com/@sanskrutidd30/hadoop-hive-spark-or-kafka-understanding-when-to-use-which-big-data-tool-4fc7f997fa89" },
];

function Articles() {
  return (
    <section id="articles" style={{ background: C.cream, padding: "96px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: C.accent, marginBottom: 12 }}>Writing</div>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(26px,3vw,38px)", color: C.textPrimary }}>Articles</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
          {ARTICLES.map((a, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "24px", transition: "border-color 0.2s, transform 0.2s", display: "flex", flexDirection: "column", gap: 14 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.accentBorder; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <BookOpen size={18} color={C.accent} />
                  <span style={{ background: C.tagBg, color: C.tagText, border: `1px solid ${C.accentBorder}`, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, padding: "3px 10px", borderRadius: 999 }}>Medium</span>
                </div>
                <div style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: 15, color: C.textPrimary, lineHeight: 1.4 }}>{a.title}</div>
                <a href={a.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: C.accent, textDecoration: "none", marginTop: "auto" }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accentHover}
                  onMouseLeave={e => e.currentTarget.style.color = C.accent}>
                  Read Article <ExternalLink size={13} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ACHIEVEMENTS ───────────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  { badge: "1st Place", event: "RAISE-26 Graduate Track Winner", org: "Rutgers University · April 2026", context: "Team Context Shift (Columbia + Stony Brook) · 188 teams, 17 finalists", link: "https://www.linkedin.com/posts/sanskruti-d_publicinformatics-informatics-ai-activity-7452920262305525760-lM6t" },
  { badge: "2nd Place", event: "Dedalus Labs Track — HackPrinceton", org: "Princeton University · Nov 2025", context: "Project: SpatialMD — real-time AR surgical guidance system", link: "https://devpost.com/software/spatialmd" },
  { badge: "2nd Place", event: "SpaceTime DB Track — HopHacks", org: "Johns Hopkins University · Oct 2025", context: "Project: Crack The Code — AI systems safety platform", link: "https://devpost.com/software/crack-the-code-ojk243" },
  { badge: "Finalist", event: "Cybersecurity Track — Hack-o-Hire", org: "Barclays India · April 2024", context: "Predictive Cyber Threat Intelligence Platform · 110+ participants", link: "https://www.linkedin.com/posts/sanskruti-d_barclaysindia-cybersecurity-competition-activity-7183018472107360256-9paL" },
];

function Achievements() {
  return (
    <section id="achievements" style={{ background: C.altBg, padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: C.accent, marginBottom: 12 }}>Achievements</div>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(26px,3vw,38px)", color: C.textPrimary }}>Awards & Recognition</h2>
            <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: 15, color: C.accentHover, marginTop: 8 }}>Competing, building, winning.</p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {ACHIEVEMENTS.map((a, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div style={{ background: C.surface, borderLeft: `4px solid ${C.gold}`, borderTop: `1px solid ${C.border}`, borderRight: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, borderRadius: "0 14px 14px 0", padding: "20px 22px", transition: "border-right-color 0.2s, border-top-color 0.2s, border-bottom-color 0.2s, transform 0.2s", display: "flex", flexDirection: "column", gap: 10 }}
                onMouseEnter={e => { e.currentTarget.style.borderTopColor = C.accentBorder; e.currentTarget.style.borderRightColor = C.accentBorder; e.currentTarget.style.borderBottomColor = C.accentBorder; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderTopColor = C.border; e.currentTarget.style.borderRightColor = C.border; e.currentTarget.style.borderBottomColor = C.border; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ background: C.accentLight, color: C.tagText, border: `1px solid ${C.accentBorder}`, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, padding: "4px 12px", borderRadius: 999 }}>{a.badge}</span>
                  <Award size={18} color={C.gold} />
                </div>
                <div style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: 15, color: C.textPrimary, lineHeight: 1.35 }}>{a.event}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.textMuted }}>{a.org}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontStyle: "italic", fontSize: 15, color: C.textSecondary }}>{a.context}</div>
                <a href={a.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: C.accent, textDecoration: "none", marginTop: 4 }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accentHover}
                  onMouseLeave={e => e.currentTarget.style.color = C.accent}>
                  View <ExternalLink size={12} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ background: C.altBg, padding: "96px 24px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: C.accent, marginBottom: 16 }}>Get In Touch</div>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px,4vw,42px)", color: C.textPrimary, marginBottom: 10 }}>Let's build something great</h2>
          <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: 17, color: C.accentHover, marginBottom: 14 }}>"Open doors, open mind, open source."</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.textSecondary, lineHeight: 1.75, marginBottom: 40 }}>
            Open to research collaborations, full-time roles, and internships in AI/ML, Data Engineering, and Full-Stack.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:sanskrutidhana.deshmukh@stonybrook.edu" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.accent, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, padding: "11px 22px", borderRadius: 999, textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = C.accentHover}
              onMouseLeave={e => e.currentTarget.style.background = C.accent}>
              <Mail size={16} /> Email Me
            </a>
            <a href="https://github.com/emergingsana123" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.surface, color: C.textPrimary, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, padding: "11px 22px", borderRadius: 999, textDecoration: "none", border: `1px solid ${C.border}`, transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.accentBorder}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sanskruti-d/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.accentLight, color: C.tagText, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, padding: "11px 22px", borderRadius: 999, textDecoration: "none", border: `1px solid ${C.accentBorder}`, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.accentLight; e.currentTarget.style.color = C.tagText; }}>
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
      <div style={{ textAlign: "center", marginTop: 64, paddingTop: 24, borderTop: `1px solid ${C.border}` }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.textMuted }}>© 2026 Sanskruti Deshmukh · Built with React & Tailwind · Warm Serif Theme</p>
      </div>
    </section>
  );
}

// ─── ROOT ───────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const sections = ["about","skills","projects","experience","publications","articles","achievements","contact"];

  useEffect(() => {
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActiveSection(id); }, { threshold: 0.3 });
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream, minHeight: "100vh" }}>
      <style>{`
        ${FONTS}
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${C.cream}; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        nav[style] { opacity: 1 !important; visibility: visible !important; transform: none !important; }
        @media(max-width:768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Navbar active={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Articles />
      <Achievements />
      <Contact />
    </div>
  );
}