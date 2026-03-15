import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import hpiLogo from "@/assets/hpi-logo-white.png";
import esprintLogo from "@/assets/esprint-logo-date-white.svg";

const stats = [
  { value: "60", label: "Tech Students" },
  { value: "30", label: "Universities" },
  { value: "4", label: "Days" },
  { value: "1", label: "Goal" },
];

const StatCard = ({ stat, colorClass, dotCount, delay }: { stat: { value: string; label: string }; colorClass: string; dotCount: number; delay: number }) => {
  const [hovered, setHovered] = useState(false);

  // Generate dots in a symmetric centered grid
  const dots = (() => {
    // Find best rectangular grid that fits dotCount
    const cols = Math.ceil(Math.sqrt(dotCount));
    const rows = Math.ceil(dotCount / cols);
    const actualCount = cols * rows;
    const skip = actualCount - dotCount; // dots to remove symmetrically
    
    const spacing = 8; // percentage units
    const result: { x: number; y: number; dist: number }[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = 50 + (c - (cols - 1) / 2) * spacing;
        const y = 50 + (r - (rows - 1) / 2) * spacing;
        const dist = Math.sqrt((x - 50) ** 2 + (y - 50) ** 2);
        result.push({ x, y, dist });
      }
    }

    // If we have extra dots, remove the ones farthest from center
    if (skip > 0) {
      result.sort((a, b) => b.dist - a.dist);
      result.splice(0, skip);
    }

    // Sort by distance for staggered animation (center first)
    return result.sort((a, b) => a.dist - b.dist);
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`${colorClass} p-8 text-center relative overflow-hidden cursor-default`}
      style={{ minHeight: 140 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dots layer */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {dots.map((dot, di) => (
              <motion.div
                key={di}
                className="absolute rounded-full bg-white"
                style={{
                  width: 5,
                  height: 5,
                  left: `${dot.x}%`,
                  top: `${dot.y}%`,
                  marginLeft: -2.5,
                  marginTop: -2.5,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.25, delay: di * 0.008 }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Number - fades out on hover */}
      <motion.p
        className="font-display font-black text-5xl md:text-6xl relative z-0"
        animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 0.8 : 1 }}
        transition={{ duration: 0.25 }}
      >
        {stat.value}
      </motion.p>
      <motion.p
        className="mt-2 font-semibold text-sm opacity-70 relative z-0"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
};

const TYPEWRITER_TEXT = "Ready to Shape the Future of Tech in Europe?";

const TypewriterHeadline = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let cancelled = false;

    const runCycle = async () => {
      // Type in
      for (let i = 1; i <= TYPEWRITER_TEXT.length; i++) {
        if (cancelled) return;
        setDisplayedText(TYPEWRITER_TEXT.slice(0, i));
        await new Promise((r) => setTimeout(r, 50));
      }

      // Hold for 3 seconds
      await new Promise((r) => setTimeout(r, 3000));
      if (cancelled) return;

      // Fade out
      setOpacity(0);
      await new Promise((r) => setTimeout(r, 600));
      if (cancelled) return;

      // Reset and fade back in
      setDisplayedText("");
      setOpacity(1);
      await new Promise((r) => setTimeout(r, 400));
      if (cancelled) return;

      // Restart
      runCycle();
    };

    runCycle();
    return () => { cancelled = true; };
  }, []);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <h2
      className="font-display font-bold text-2xl md:text-3xl text-primary-foreground transition-opacity duration-500"
      style={{ opacity }}
    >
      {displayedText}
      <span
        className="inline-block w-[3px] h-[1em] bg-primary-foreground ml-1 align-middle translate-y-[-1px]"
        style={{ opacity: showCursor ? 1 : 0 }}
      />
    </h2>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen relative">

      {/* Hero – text directly on key visual */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        

        <div className="relative z-10 container mx-auto px-4 pb-20 md:pb-28 pt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={hpiLogo} alt="Hasso Plattner Institute" className="h-12 mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={esprintLogo} alt="European Impact Sprint – 25-28 August 2026" className="w-full max-w-lg drop-shadow-[0_2px_30px_rgba(0,0,0,0.4)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 font-bold shadow-lg">
              <Link to="/challenge">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content sections with colorful blocks */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-6">
          {/* Tagline box – separate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-esprint-darkblue rounded-2xl p-10 md:p-14 text-center shadow-xl"
          >
            <TypewriterHeadline />
            <p className="mt-3 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Join Europe's brightest minds, solve real-world challenges and build lasting connections.
            </p>
          </motion.div>

          {/* Stats row – touching, own rounded block */}
          <div className="rounded-2xl overflow-hidden shadow-xl grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => {
              const colors = [
                "bg-esprint-orange text-esprint-darkblue",
                "bg-esprint-pink text-esprint-darkblue",
                "bg-esprint-red",
                "bg-esprint-purple",
              ];
              const dotCount = parseInt(stat.value) || 0;
              return (
                <StatCard key={stat.label} stat={stat} colorClass={colors[i]} dotCount={dotCount} delay={i * 0.1} />
              );
            })}
          </div>

          {/* Overview cards – touching, own rounded block */}
          <div className="rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-3">
            {[
              { title: "The Challenge", desc: "An intensive innovation program bringing together 60 Computer Science students from 30 European countries.", link: "/challenge", color: "bg-esprint-cream text-background" },
              { title: "Program Benefits", desc: "Make friends across Europe, get inspired by real legends, and sharpen your problem-solving skills.", link: "/benefits", color: "bg-esprint-darkblue text-primary-foreground" },
              { title: "How it Works", desc: "Students are nominated by their universities, joined into diverse teams and guided by experts.", link: "/how-it-works", color: "bg-esprint-orange text-esprint-darkblue" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={card.link}
                  className={`block ${card.color} p-8 hover:brightness-110 transition-all group h-full`}
                >
                  <h3 className="font-display font-bold text-xl mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">{card.desc}</p>
                  <span className="inline-flex items-center mt-4 text-sm font-semibold opacity-90 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
