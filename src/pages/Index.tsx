import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            {/* Tagline box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-esprint-pink p-10 md:p-14 text-center"
            >
              <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground">
                Ready to Shape the Future of Tech in Europe?
              </h2>
              <p className="mt-3 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Join Europe's brightest minds, solve real-world challenges and build lasting connections.
              </p>
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => {
                const colors = [
                  "bg-esprint-orange",
                  "bg-esprint-purple",
                  "bg-esprint-pink",
                  "bg-esprint-darkblue",
                ];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`${colors[i]} p-8 text-center`}
                  >
                    <p className="font-display font-black text-5xl md:text-6xl text-primary-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-primary-foreground/70 font-semibold text-sm">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Overview cards row */}
            <div className="grid md:grid-cols-3">
              {[
                { title: "The Challenge", desc: "An intensive innovation program bringing together 60 CS students from 30 European countries.", link: "/challenge", color: "bg-esprint-cream text-background" },
                { title: "Program Benefits", desc: "Make friends across Europe, get inspired by real legends, and sharpen your problem-solving skills.", link: "/benefits", color: "bg-esprint-purple text-primary-foreground" },
                { title: "How it Works", desc: "Students are nominated by their universities, joined into diverse teams and guided by experts.", link: "/how-it-works", color: "bg-esprint-orange text-primary-foreground" },
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
        </div>
      </section>
    </div>
  );
};

export default Index;
