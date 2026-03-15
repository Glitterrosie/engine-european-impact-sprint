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
  { bg: "bg-esprint-orange", text: "text-esprint-darkblue", hoverText: "hover:text-esprint-orange" },
  { bg: "bg-esprint-pink", text: "text-esprint-darkblue", hoverText: "hover:text-esprint-pink" },
  { bg: "bg-esprint-purple", text: "text-primary-foreground", hoverText: "hover:text-esprint-purple" },
  { bg: "bg-esprint-red", text: "text-primary-foreground", hoverText: "hover:text-esprint-red" },
  { bg: "bg-esprint-darkblue", text: "text-primary-foreground", hoverText: "hover:text-esprint-darkblue" },
];

const Benefits = () => {
  return (
    <PageLayout
      title="Program Benefits"
      subtitle="Dream big – dive into projects that matter alongside peers from all over Europe. Grow your skills, connect with inspiring mentors and create impact and memories!"
      noPadBottom
    >
      <div className="relative rounded-t-2xl overflow-hidden shadow-xl flex-1">
        <div className="grid md:grid-cols-5 h-full">
          {benefits.map((b, i) => {
            const color = cardColors[i];
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`${color.bg} ${color.text} ${color.hoverText} hover:bg-white p-8 text-center transition-all duration-300 cursor-default group`}
              >
                <div className="h-12 w-12 rounded-lg bg-background/15 group-hover:bg-current/10 flex items-center justify-center mb-4 mx-auto transition-colors duration-300">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
        {/* Decorative white lines matching key visual color transitions */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left bundle - follows purple/blue/dark transition */}
          <path d="M0,50 Q150,30 250,120 Q350,220 300,350 Q280,400 260,420" stroke="white" strokeWidth="1.5" opacity="0.55" />
          <path d="M0,80 Q160,60 270,150 Q370,250 320,380 Q300,420 280,450" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <path d="M0,110 Q170,90 290,180 Q390,280 340,400" stroke="white" strokeWidth="1.5" opacity="0.45" />
          <path d="M30,0 Q130,40 230,140 Q330,260 280,400" stroke="white" strokeWidth="1.5" opacity="0.4" />
          
          {/* Center-right curve - follows orange/pink transition */}
          <path d="M620,0 Q600,80 610,160 Q630,280 680,400" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <path d="M660,0 Q640,100 650,200 Q670,310 720,400" stroke="white" strokeWidth="1.5" opacity="0.45" />
          
          {/* Right side - follows pink edge */}
          <path d="M820,0 Q800,120 830,240 Q860,340 880,400" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>
    </PageLayout>
  );
};

export default Benefits;
