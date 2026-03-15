import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import hpiEngineLogo from "@/assets/hpi-engine-white.svg";
import esprintLogo from "@/assets/esprint-logo-date-white.svg";

const stats = [
  { value: "60", label: "Tech Students" },
  { value: "30", label: "Universities" },
  { value: "4", label: "Days" },
  { value: "1", label: "Goal" },
];

const statColors = [
  { front: "bg-esprint-orange text-esprint-darkblue", back: "bg-esprint-purple text-primary-foreground" },
  { front: "bg-esprint-pink text-esprint-darkblue", back: "bg-esprint-darkblue text-primary-foreground" },
  { front: "bg-esprint-red text-primary-foreground", back: "bg-esprint-orange text-esprint-darkblue" },
  { front: "bg-esprint-purple text-primary-foreground", back: "bg-esprint-pink text-esprint-darkblue" },
];

const overviewCards = [
  {
    title: "The Challenge",
    desc: "An intensive innovation program bringing together 60 CS students from 30 European countries.",
    link: "/challenge",
    front: "bg-esprint-cream text-background",
    back: "bg-esprint-purple text-primary-foreground",
  },
  {
    title: "Program Benefits",
    desc: "Make friends across Europe, get inspired by real legends, and sharpen your problem-solving skills.",
    link: "/benefits",
    front: "bg-esprint-darkblue text-primary-foreground",
    back: "bg-esprint-red text-primary-foreground",
  },
  {
    title: "How it Works",
    desc: "Students are nominated by their universities, joined into diverse teams and guided by experts.",
    link: "/how-it-works",
    front: "bg-esprint-orange text-esprint-darkblue",
    back: "bg-esprint-darkblue text-primary-foreground",
  },
];

const FlipCard = ({ card }: { card: typeof overviewCards[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-full"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full"
      >
        {/* Front */}
        <div
          className={`${card.front} p-8 h-full absolute inset-0`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="font-display font-bold text-xl mb-3">{card.title}</h3>
          <p className="text-sm leading-relaxed opacity-80">{card.desc}</p>
          <span className="inline-flex items-center mt-4 text-sm font-semibold opacity-90">
            Hover to flip <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </div>

        {/* Back */}
        <Link
          to={card.link}
          className={`${card.back} p-8 h-full absolute inset-0 flex flex-col justify-center items-center text-center group`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="font-display font-bold text-2xl mb-3">{card.title}</h3>
          <span className="inline-flex items-center text-sm font-semibold opacity-90 group-hover:gap-2 transition-all">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </Link>
      </motion.div>
    </div>
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
            <img src={hpiEngineLogo} alt="HPI Engine" className="h-7 mb-8" />
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
            <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground">
              Ready to Shape the Future of Tech in Europe?
            </h2>
            <p className="mt-3 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Join Europe's brightest minds, solve real-world challenges and build lasting connections.
            </p>
          </motion.div>

          {/* Stats row – color swap on hover */}
          <div className="rounded-2xl overflow-hidden shadow-xl grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`${statColors[i].front} p-8 text-center cursor-default transition-colors duration-300 hover:${statColors[i].back.split(" ")[0]} relative`}
              >
                <p className="font-display font-black text-5xl md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-semibold text-sm opacity-70">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Overview cards – flip on hover */}
          <div className="rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-3" style={{ minHeight: "220px" }}>
            {overviewCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
                style={{ minHeight: "220px" }}
              >
                <FlipCard card={card} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
