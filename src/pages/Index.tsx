import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Handshake, Mic, Tent, Globe, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProgramSchedule from "@/components/ProgramSchedule";

import hpiLogo from "@/assets/hpi-logo-white.png";
import hpiLogoWhite from "@/assets/hpi-logo-white.png";
import esprintLogo from "@/assets/esprint-logo-date-white.svg";
import challengeBrief from "@/assets/challenge-brief.jpg";

// ── Stats data & component ──────────────────────────────────────────

const stats = [
  { value: "60", label: "Tech Students" },
  { value: "30", label: "Universities" },
  { value: "4", label: "Days" },
  { value: "1", label: "Goal" },
];

const StatCard = ({ stat, colorClass, dotCount, delay }: { stat: { value: string; label: string }; colorClass: string; dotCount: number; delay: number }) => {
  const [hovered, setHovered] = useState(false);
  const dots = (() => {
    const cols = Math.ceil(Math.sqrt(dotCount));
    const rows = Math.ceil(dotCount / cols);
    const actualCount = cols * rows;
    const skip = actualCount - dotCount;
    const spacing = 8;
    const result: { x: number; y: number; dist: number }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = 50 + (c - (cols - 1) / 2) * spacing;
        const y = 50 + (r - (rows - 1) / 2) * spacing;
        const dist = Math.sqrt((x - 50) ** 2 + (y - 50) ** 2);
        result.push({ x, y, dist });
      }
    }
    if (skip > 0) { result.sort((a, b) => b.dist - a.dist); result.splice(0, skip); }
    return result.sort((a, b) => a.dist - b.dist);
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }}
      className={`${colorClass} p-8 text-center relative overflow-hidden cursor-default`}
      style={{ minHeight: 140 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div className="absolute inset-0 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {dots.map((dot, di) => (
              <motion.div key={di} className="absolute rounded-full bg-esprint-red"
                style={{ width: 5, height: 5, left: `${dot.x}%`, top: `${dot.y}%`, marginLeft: -2.5, marginTop: -2.5 }}
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.25, delay: di * 0.008 }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.p className="font-display font-black text-5xl md:text-6xl relative z-0" animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 0.8 : 1 }} transition={{ duration: 0.25 }}>{stat.value}</motion.p>
      <motion.p className="mt-2 font-semibold text-sm opacity-70 relative z-0" animate={{ opacity: hovered ? 0 : 1 }} transition={{ duration: 0.2 }}>{stat.label}</motion.p>
    </motion.div>
  );
};

// ── Typewriter ───────────────────────────────────────────────────────

const TYPEWRITER_TEXT = "Ready to Shape the Future of Tech in Europe?";

const TypewriterHeadline = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let cancelled = false;
    const runCycle = async () => {
      for (let i = 1; i <= TYPEWRITER_TEXT.length; i++) { if (cancelled) return; setDisplayedText(TYPEWRITER_TEXT.slice(0, i)); await new Promise((r) => setTimeout(r, 50)); }
      await new Promise((r) => setTimeout(r, 3000)); if (cancelled) return;
      setOpacity(0); await new Promise((r) => setTimeout(r, 600)); if (cancelled) return;
      setDisplayedText(""); setOpacity(1); await new Promise((r) => setTimeout(r, 400)); if (cancelled) return;
      runCycle();
    };
    runCycle();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => { const blink = setInterval(() => setShowCursor((v) => !v), 530); return () => clearInterval(blink); }, []);

  return (
    <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground transition-opacity duration-500" style={{ opacity }}>
      {displayedText}
      <span className="inline-block w-[3px] h-[1em] bg-primary-foreground ml-1 align-middle translate-y-[-1px]" style={{ opacity: showCursor ? 1 : 0 }} />
    </h2>
  );
};

// ── Challenge data ───────────────────────────────────────────────────

const EUROPE_GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";
const EU27_COUNTRIES = [
  "Austria","Belgium","Bulgaria","Croatia","Cyprus","Czech Republic","Czechia",
  "Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Ireland",
  "Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Poland",
  "Portugal","Romania","Slovakia","Slovenia","Spain","Sweden"
];
const OTHER_EUROPEAN = [
  "Albania","Andorra","Belarus","Bosnia and Herzegovina","Iceland","Kosovo",
  "Moldova","Monaco","Montenegro","North Macedonia","Norway","San Marino",
  "Serbia","Switzerland","Ukraine","United Kingdom","Vatican City","Turkey","Georgia"
];

const infoItems = [
  { label: "Date", value: "25–28th August 2026" },
  { label: "Location", value: "Hasso Plattner Institute, Potsdam, Germany (30 min from Berlin airport and train station)", link: "https://share.google/7SDAwRHNbxiPhAaWK" },
  { label: "Participants", value: "60 Bachelor students in computer science from 30 countries across Europe, divided into international teams of 5." },
  { label: "Accommodation", value: "Shared glamping tents on campus" },
  { label: "Language", value: "English" },
  { label: "Cost", value: "Program participation, accommodation and meals are free of charge for all participants. In addition, a 200 € travel stipend will be granted to participants to cover your travel costs to Berlin and back." },
  { label: "Schedule", value: "The European Impact Sprint is a 4-day full time program, featuring on-site workshops during the day (ca. 9 am – 6 pm) as well as community activities during the evenings to connect with other participants. The detailed agenda will be shared at the kick-off in July." },
];

// ── Benefits data ────────────────────────────────────────────────────

const benefits = [
  { icon: Handshake, title: "Make Friends Across Europe", desc: "Team up with talented IT students from top tech universities across Europe, swap ideas and see just how far you can come in only 4 days when working together!" },
  { icon: Mic, title: "Get Inspired by Real Legends", desc: "Engage with renowned speakers and industry leaders who share personal stories and insights to broaden your horizons and ignite your passion." },
  { icon: Tent, title: "Experience an All-Inclusive Innovation Program", desc: "Enjoy a fully covered adventure just outside the startup capital Berlin: accommodation, meals, drinks, and fun events – all designed to support your focus." },
  { icon: Globe, title: "Build a Powerful Network", desc: "Live, learn and build together in an inspiring glamping camp – forging friendships and professional relationships that last way beyond the program." },
  { icon: Puzzle, title: "Sharpen Your Problem-Solving Skills", desc: "Explore real-world solutions for sustainability, discover Berlin's startup energy, and develop skills that empower you to tackle challenges beyond borders." },
];

const benefitColors = [
  { bg: "hsl(var(--esprint-orange))", text: "text-esprint-darkblue" },
  { bg: "hsl(var(--esprint-pink))", text: "text-esprint-darkblue" },
  { bg: "hsl(var(--esprint-purple))", text: "text-white" },
  { bg: "hsl(var(--esprint-red))", text: "text-white" },
  { bg: "hsl(var(--esprint-darkblue))", text: "text-white" },
];

// ── FAQ data ─────────────────────────────────────────────────────────

const faqSections = [
  {
    title: "Nomination & Requirements", hsl: "var(--esprint-orange)", textClass: "text-esprint-darkblue",
    items: [
      { q: "As a student, how can I apply to the program?", a: "The nomination of students will be facilitated via our partner universities. Please reach out to your university and have them contact us." },
      { q: "Are there specific requirements to participate?", a: "To participate in the European Impact Sprint, you must be a Bachelor's student of Computer Science (or similar) nominated by one of our selected partner universities, proficient in English and completed the application form." },
      { q: "As a university, how can I nominate students for the program?", a: "Reach out to our program manager Essam Sharaf via the contact form and we'll guide you through the process." },
    ],
  },
  {
    title: "Program Structure", hsl: "var(--esprint-pink)", textClass: "text-esprint-darkblue",
    items: [
      { q: "What challenges will students be working on?", a: "Projects range from sustainability to technology — each designed to solve tangible challenges." },
      { q: "Will I have to pay for travel, accommodation and meals during the program?", a: "HPI will cover all cost for accommodation (glamping camp, on-campus) and meals during the program. In addition, you will be reimbursed for travel costs up to 200€." },
      { q: "What do I need to prepare in advance?", a: "The details of this year's challenge will be explained during the Kick-off session. Please read the suggested documents and articles shared after the Kick-off to gain an in-depth understanding of the topic." },
    ],
  },
  {
    title: "Certificates & IP", hsl: "var(--esprint-purple)", textClass: "text-white",
    items: [
      { q: "Do I receive a certificate at the end of the program?", a: "Yes, all participants receive a certificate at the end of the program." },
      { q: "How do you deal with intellectual property developed during the program?", a: "Any ideas developed during the course of the program are remaining with the students. Furthermore, HPI does not consider use of office space and infrastructure as constituting a significant use of HPI resources with regards to IP." },
    ],
  },
];

// ── Main Index page ──────────────────────────────────────────────────

const Index = () => {
  const [isHpiHovered, setIsHpiHovered] = useState(false);

  return (
    <div className="min-h-screen relative">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 pb-20 md:pb-28 pt-32">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <img src={hpiLogo} alt="Hasso Plattner Institute" className="h-12 mb-8" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <img src={esprintLogo} alt="European Impact Sprint – 25-28 August 2026" className="w-full max-w-lg drop-shadow-[0_2px_30px_rgba(0,0,0,0.4)]" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-8 flex gap-4 flex-wrap">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 font-bold shadow-lg">
              <a href="#challenge">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══ TAGLINE + STATS ═══ */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-esprint-darkblue rounded-2xl p-10 md:p-14 text-center shadow-xl">
            <TypewriterHeadline />
            <p className="mt-3 text-primary-foreground/80 text-lg max-w-2xl mx-auto">Join Europe's brightest minds, solve real-world challenges and build lasting connections.</p>
          </motion.div>
          <div className="rounded-2xl overflow-hidden shadow-xl grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => {
              const colors = ["bg-white text-esprint-darkblue", "bg-white text-esprint-darkblue", "bg-white text-esprint-darkblue", "bg-white text-esprint-darkblue"];
              return <StatCard key={stat.label} stat={stat} colorClass={colors[i]} dotCount={parseInt(stat.value) || 0} delay={i * 0.1} />;
            })}
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGE ═══ */}
      <section id="challenge" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display font-black text-4xl md:text-6xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] mb-8">
            The Challenge
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Program Brief */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col h-full">
              <h2 className="font-display font-bold text-xl text-esprint-darkblue mb-4 uppercase tracking-wide border-b-2 border-esprint-purple pb-3">Program Brief</h2>
              <p className="text-esprint-darkblue/80 leading-relaxed">The European Impact Sprint is an intensive innovation program bringing together 60 Computer Science students from 30 European countries. Over the course of four days in Berlin, you will collaborate in cross-border teams to develop technical solutions for the continent's most pressing challenges. The 2026 focus will be on...</p>
              <div className="mt-6 rounded-xl overflow-hidden flex-1 min-h-[200px]">
                <img src={challengeBrief} alt="Students collaborating at HPI campus" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Key Information */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col h-full">
              <div className="p-8 md:p-10 pb-4">
                <h2 className="font-display font-bold text-xl text-esprint-darkblue uppercase tracking-wide border-b-2 border-esprint-pink pb-3">Key Information</h2>
              </div>
              {infoItems.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-esprint-darkblue flex flex-1 border-t border-esprint-darkblue/10">
                  <div className="w-32 md:w-40 shrink-0 px-5 md:px-6 py-4 flex items-center border-r border-esprint-darkblue/10">
                    <span className="font-display font-bold text-xs uppercase tracking-widest opacity-70">{item.label}</span>
                  </div>
                  <div className="px-5 md:px-6 py-4 flex items-center min-w-0 flex-1">
                    <p className="text-sm leading-relaxed opacity-80">{item.value}</p>
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="px-4 py-4 flex items-center shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-esprint-darkblue rounded-2xl p-8 md:p-10 text-center shadow-xl col-span-full">
              <h2 className="font-display font-bold text-2xl text-primary-foreground mb-8">Partner Universities Coming Soon</h2>
              <div className="max-w-2xl mx-auto">
                <ComposableMap projection="geoAzimuthalEqualArea" projectionConfig={{ rotate: [-10, -52, 0], scale: 700 }} width={800} height={550} style={{ width: "100%", height: "auto" }}>
                  <Geographies geography={EUROPE_GEO_URL}>
                    {({ geographies }) => geographies.map((geo) => {
                      const name = geo.properties.name;
                      const isEU = EU27_COUNTRIES.includes(name);
                      const isOther = OTHER_EUROPEAN.includes(name);
                      if (!isEU && !isOther) return null;
                      return (
                        <Geography key={geo.rsmKey} geography={geo}
                          fill={isEU ? "hsl(var(--primary-foreground) / 0.08)" : "hsl(var(--primary-foreground) / 0.03)"}
                          stroke={isEU ? "hsl(var(--primary-foreground) / 0.3)" : "hsl(var(--primary-foreground) / 0.1)"}
                          strokeWidth={0.5}
                          style={{ default: { outline: "none" }, hover: { fill: isEU ? "hsl(var(--primary-foreground) / 0.15)" : "hsl(var(--primary-foreground) / 0.05)", outline: "none" }, pressed: { outline: "none" } }}
                        />
                      );
                    })}
                  </Geographies>
                  <Marker coordinates={[13.12525, 52.392528]}>
                    <g onMouseEnter={() => setIsHpiHovered(true)} onMouseLeave={() => setIsHpiHovered(false)} className="cursor-pointer">
                      <circle r={6} fill="hsl(var(--esprint-pink))" stroke="hsl(var(--primary-foreground))" strokeWidth={1.5} />
                      <circle r={2.5} fill="hsl(var(--primary-foreground))" />
                      {isHpiHovered && (
                        <g transform="translate(0,-56)">
                          <rect x={-68} y={-30} width={136} height={52} rx={16} fill="hsl(var(--esprint-darkblue))" stroke="hsl(var(--primary-foreground) / 0.35)" strokeWidth={0.6} />
                          <image href={hpiLogoWhite} x={-48} y={-18} width={96} height={28} preserveAspectRatio="xMidYMid meet" />
                        </g>
                      )}
                    </g>
                  </Marker>
                </ComposableMap>
              </div>
            </motion.div>

            {/* Schedule */}
            <div className="col-span-full bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <ProgramSchedule variant="blue" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section id="benefits" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display font-black text-4xl md:text-6xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] mb-3">
            Program Benefits
          </motion.h1>
          <p className="text-lg text-white/80 max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] mb-8">
            Dream big – dive into projects that matter alongside peers from all over Europe. Grow your skills, connect with inspiring mentors and create impact and memories!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {benefits.map((b, i) => {
              const IconComp = b.icon;
              return (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-start group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-esprint-darkblue/10 flex items-center justify-center mb-5">
                    <IconComp className="text-esprint-darkblue" size={24} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-esprint-darkblue mb-2 leading-tight">{b.title}</h3>
                  <p className="text-sm text-esprint-darkblue/70 leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h1 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display font-black text-4xl md:text-6xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] mb-3">
            FAQ
          </motion.h1>
          <p className="text-white/80 text-lg max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] mb-8">
            Everything you need to know about the European Impact Sprint.
          </p>

          <div className="flex flex-col gap-6 pb-12">
            {faqSections.map((section, si) => (
              <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: si * 0.1 }}
                className="relative w-full max-w-3xl bg-white rounded-2xl px-6 md:px-10 py-10 shadow-xl"
              >
                <h2 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-esprint-darkblue opacity-70 mb-6">{section.title}</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {section.items.map((item, i) => (
                    <AccordionItem key={i} value={`${si}-${i}`} className="border-none rounded-xl px-5" style={{ background: 'hsl(var(--esprint-darkblue) / 0.05)' }}>
                      <AccordionTrigger className="text-left font-semibold text-esprint-darkblue hover:no-underline text-sm py-4">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-esprint-darkblue/80 leading-relaxed text-sm">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>

          <p className="text-white font-display font-bold text-lg">
            GOT FURTHER QUESTIONS?{" "}
            <Link to="/contact" className="text-esprint-pink hover:underline">Contact us!</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
