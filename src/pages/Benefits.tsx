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
          {/* Right bundle - mirrored bowl shape */}
          <path d="M1000,30 C920,25 820,15 760,60 C680,120 650,200 660,300 C670,400 720,520 800,620 C830,660 870,710 900,750" stroke="white" strokeWidth="1.5" opacity="0.6" />
          <path d="M1000,70 C910,60 800,50 730,100 C640,170 620,260 640,370 C660,470 710,560 770,650 C790,680 820,720 840,750" stroke="white" strokeWidth="1.5" opacity="0.55" />
          <path d="M1000,115 C900,100 790,85 710,140 C610,220 600,320 620,430 C640,530 690,600 740,680 C760,710 780,740 790,750" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <path d="M1000,160 C890,140 780,120 690,185 C590,270 580,380 605,490 C630,580 670,640 710,710 C725,735 735,750 740,750" stroke="white" strokeWidth="1.5" opacity="0.45" />
          <path d="M960,0 C940,30 870,80 800,130 C700,210 660,320 670,440 C680,540 700,610 730,680 C745,715 760,750 770,780" stroke="white" strokeWidth="1.5" opacity="0.4" />

          {/* Center lines - mirrored */}
          <path d="M500,0 C510,80 520,180 510,280 C500,380 470,500 430,600 C410,650 390,700 370,750" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <path d="M460,0 C470,100 480,220 470,330 C455,440 425,540 390,630 C370,680 350,720 330,750" stroke="white" strokeWidth="1.5" opacity="0.45" />
          <path d="M420,0 C430,120 435,260 420,380 C405,490 380,570 345,650 C325,700 305,740 290,750" stroke="white" strokeWidth="1.5" opacity="0.4" />

          {/* Left lines - mirrored */}
          <path d="M220,0 C225,100 230,200 225,310 C220,420 200,530 180,620 C170,660 160,710 150,750" stroke="white" strokeWidth="1.5" opacity="0.45" />
          <path d="M170,0 C175,120 180,250 170,370 C160,480 145,560 130,640 C120,690 110,730 100,750" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>
    </PageLayout>
  );
};

export default Benefits;
