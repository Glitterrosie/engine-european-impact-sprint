import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import keyVisual from "@/assets/key-visual.png";
import hpiEngineLogo from "@/assets/hpi-engine-white.png";

const stats = [
  { value: "60", label: "Tech Students" },
  { value: "30", label: "Universities" },
  { value: "4", label: "Days" },
  { value: "1", label: "Goal" },
];

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed key visual background for entire page */}
      <div className="fixed inset-0 -z-10">
        <img src={keyVisual} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-4 pb-20 md:pb-28 pt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={hpiEngineLogo} alt="HPI Engine" className="h-7 mb-8 opacity-80" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.4)]"
          >
            European<br />
            Impact<br />
            Sprint
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-base md:text-lg text-white/90 font-display font-bold uppercase tracking-widest drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
          >
            25 – 28th August, 2026<br />
            @ Hasso Plattner Institute Potsdam
          </motion.p>

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
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm">
              <Link to="/contact">Contact us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content sections in white boxes */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-8">
          {/* Stats box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10 md:p-14 shadow-xl"
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 text-center">
              Ready to Shape the Future of Tech in Europe?
            </h2>
            <p className="mt-3 text-gray-600 text-center text-lg max-w-2xl mx-auto">
              Join Europe's brightest minds, solve real-world challenges and build lasting connections.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="font-display font-black text-5xl md:text-6xl text-esprint-purple">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-gray-500 font-semibold text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Overview cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "The Challenge", desc: "An intensive innovation program bringing together 60 CS students from 30 European countries.", link: "/challenge" },
              { title: "Program Benefits", desc: "Make friends across Europe, get inspired by real legends, and sharpen your problem-solving skills.", link: "/benefits" },
              { title: "How it Works", desc: "Students are nominated by their universities, joined into diverse teams and guided by experts.", link: "/how-it-works" },
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
                  className="block bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all group h-full"
                >
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-esprint-purple transition-colors">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                  <span className="inline-flex items-center mt-4 text-esprint-purple text-sm font-semibold group-hover:gap-2 transition-all">
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
