import { motion } from "framer-motion";
import { Users, Lightbulb, PartyPopper, Network, Wrench } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const benefits = [
  {
    icon: Users,
    title: "Make Friends Across Europe",
    desc: "Team up with talented IT students from top tech universities across Europe, swap ideas and see just how far you can come in only 4 days when working together!",
  },
  {
    icon: Lightbulb,
    title: "Get Inspired by Real Legends",
    desc: "Engage with renowned speakers and industry leaders who share personal stories and insights to broaden your horizons and ignite your passion.",
  },
  {
    icon: PartyPopper,
    title: "Experience an All-Inclusive Innovation Program",
    desc: "Enjoy a fully covered adventure just outside the startup capital Berlin: accommodation, meals, drinks, and fun events – all designed to support your focus.",
  },
  {
    icon: Network,
    title: "Build a Powerful Network",
    desc: "Live, learn and build together in an inspiring glamping camp – forging friendships and professional relationships that last way beyond the program.",
  },
  {
    icon: Wrench,
    title: "Sharpen Your Problem-Solving Skills",
    desc: "Explore real-world solutions for sustainability, discover Berlin's startup energy, and develop skills that empower you to tackle challenges beyond borders.",
  },
];

const cardColors = [
  { bg: "hsl(var(--esprint-orange))", text: "text-esprint-darkblue" },
  { bg: "hsl(var(--esprint-pink))", text: "text-esprint-darkblue" },
  { bg: "hsl(var(--esprint-purple))", text: "text-white" },
  { bg: "hsl(var(--esprint-red))", text: "text-white" },
  { bg: "hsl(var(--esprint-darkblue))", text: "text-white" },
];

const Benefits = () => {
  return (
    <PageLayout
      title="Program Benefits"
      subtitle="Dream big – dive into projects that matter alongside peers from all over Europe. Grow your skills, connect with inspiring mentors and create impact and memories!"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-4">
        {benefits.map((b, i) => {
          const color = cardColors[i];
          const num = String(i + 1).padStart(2, "0");
          const maskId = `num-mask-${i}`;
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl relative overflow-hidden group hover:brightness-110 transition-all duration-300 min-h-[420px] md:min-h-[480px]"
            >
              {/* SVG background with number cutout */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 300 500"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <mask id={maskId}>
                    <rect width="300" height="500" fill="white" />
                    <text
                      x="150"
                      y="120"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontFamily="'TT Lakes Neue', sans-serif"
                      fontWeight="900"
                      fontSize="160"
                      fill="black"
                    >
                      {num}
                    </text>
                  </mask>
                </defs>
                <rect
                  width="300"
                  height="400"
                  fill={color.bg}
                  mask={`url(#${maskId})`}
                />
              </svg>

              {/* Content */}
              <div className="relative z-10 p-6 pt-32 md:pt-36 flex flex-col items-start">
                <div className="w-10 h-0.5 bg-current opacity-30 mb-4" />
                <h3 className={`font-display font-bold text-lg ${color.text} mb-2 leading-tight`}>
                  {b.title}
                </h3>
                <p className={`text-sm ${color.text} opacity-80 leading-relaxed`}>{b.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Benefits;
