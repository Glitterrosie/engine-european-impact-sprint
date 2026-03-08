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

const Benefits = () => {
  return (
    <PageLayout
      title="Program Benefits"
      subtitle="Dream big – dive into projects that matter alongside peers from all over Europe. Grow your skills, connect with inspiring mentors and create impact and memories!"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
      >
        <h2 className="font-display font-bold text-lg text-gray-900 uppercase tracking-wide border-b-2 border-esprint-pink pb-3 mb-8">
          Program Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-gray-100 p-6 hover:border-esprint-purple/30 transition-all group bg-gray-50/50"
            >
              <div className="h-10 w-10 rounded-lg bg-esprint-purple/10 flex items-center justify-center mb-4 group-hover:bg-esprint-purple/20 transition-colors">
                <b.icon className="h-5 w-5 text-esprint-purple" />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Benefits;
