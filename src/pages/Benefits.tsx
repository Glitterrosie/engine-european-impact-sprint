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
          viewBox="0 0 1000 750"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left bundle - 5 lines tracing the purple→blue→dark bowl shape */}
          <path d="M0,30 C80,25 180,15 240,60 C320,120 350,200 340,300 C330,400 280,520 200,620 C170,660 130,710 100,750" stroke="white" strokeWidth="1.5" opacity="0.6" />
          <path d="M0,70 C90,60 200,50 270,100 C360,170 380,260 360,370 C340,470 290,560 230,650 C210,680 180,720 160,750" stroke="white" strokeWidth="1.5" opacity="0.55" />
          <path d="M0,115 C100,100 210,85 290,140 C390,220 400,320 380,430 C360,530 310,600 260,680 C240,710 220,740 210,750" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <path d="M0,160 C110,140 220,120 310,185 C410,270 420,380 395,490 C370,580 330,640 290,710 C275,735 265,750 260,750" stroke="white" strokeWidth="1.5" opacity="0.45" />
          <path d="M40,0 C60,30 130,80 200,130 C300,210 340,320 330,440 C320,540 300,610 270,680 C255,715 240,750 230,780" stroke="white" strokeWidth="1.5" opacity="0.4" />

          {/* Center lines - tracing the dark/blue→orange boundary */}
          <path d="M500,0 C490,80 480,180 490,280 C500,380 530,500 570,600 C590,650 610,700 630,750" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <path d="M540,0 C530,100 520,220 530,330 C545,440 575,540 610,630 C630,680 650,720 670,750" stroke="white" strokeWidth="1.5" opacity="0.45" />
          <path d="M580,0 C570,120 565,260 580,380 C595,490 620,570 655,650 C675,700 695,740 710,750" stroke="white" strokeWidth="1.5" opacity="0.4" />

          {/* Right lines - tracing the orange→pink boundary */}
          <path d="M780,0 C775,100 770,200 775,310 C780,420 800,530 820,620 C830,660 840,710 850,750" stroke="white" strokeWidth="1.5" opacity="0.45" />
          <path d="M830,0 C825,120 820,250 830,370 C840,480 855,560 870,640 C880,690 890,730 900,750" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>
    </PageLayout>
  );
};

export default Benefits;
