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
  { bg: "bg-esprint-orange", text: "text-esprint-darkblue" },
  { bg: "bg-esprint-pink", text: "text-esprint-darkblue" },
  { bg: "bg-esprint-purple", text: "text-white" },
  { bg: "bg-esprint-red", text: "text-white" },
  { bg: "bg-esprint-darkblue", text: "text-white" },
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
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-start group hover:bg-white/20 transition-colors duration-300"
            >
              <span
                className={`font-display font-black text-7xl md:text-8xl leading-none ${color.num} opacity-90 mb-4`}
              >
                {num}
              </span>
              <div className={`w-10 h-1 ${color.border} border-t-2 mb-4`} />
              <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight">
                {b.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">{b.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Benefits;
