import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import keyVisual from "@/assets/key-visual.png";
import keyVisual2 from "@/assets/key-visual-2.png";
import hpiEngineLogo from "@/assets/hpi-engine-white.png";

const stats = [
  { value: "60", label: "Tech Students" },
  { value: "30", label: "Universities" },
  { value: "4", label: "Days" },
  { value: "1", label: "Goal" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Key visual as full background */}
        <div className="absolute inset-0">
          <img
            src={keyVisual}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={hpiEngineLogo} alt="HPI Engine" className="h-8 mx-auto mb-8 opacity-70" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
          >
            European<br />
            Impact Sprint<br />
            <span className="bg-gradient-to-r from-esprint-pink via-esprint-orange to-esprint-purple bg-clip-text text-transparent">
              2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl mx-auto"
          >
            25–28th August 2026<br />
            Hasso Plattner Institute, Potsdam
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex gap-4 justify-center flex-wrap"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <Link to="/challenge">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-foreground/20 text-foreground hover:bg-foreground/10">
              <Link to="/contact">Contact us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tagline + Stats with key visual strip */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={keyVisual2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl max-w-3xl mx-auto"
          >
            Ready to Shape the Future of Tech in Europe?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Join Europe's brightest minds, solve real-world challenges and build lasting connections.
          </motion.p>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display font-black text-5xl md:text-6xl bg-gradient-to-r from-esprint-pink to-esprint-purple bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-muted-foreground font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key visual divider */}
      <div className="h-64 md:h-80 overflow-hidden relative">
        <img src={keyVisual2} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Overview cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "The Challenge", desc: "An intensive innovation program bringing together 60 CS students from 30 European countries.", link: "/challenge", color: "from-esprint-pink to-esprint-red" },
              { title: "Program Benefits", desc: "Make friends across Europe, get inspired by real legends, and sharpen your problem-solving skills.", link: "/benefits", color: "from-esprint-purple to-esprint-pink" },
              { title: "How it Works", desc: "Students are nominated by their universities, joined into diverse teams and guided by experts.", link: "/how-it-works", color: "from-esprint-orange to-esprint-pink" },
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
                  className="block bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all group h-full"
                >
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${card.color} mb-6`} />
                  <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
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
