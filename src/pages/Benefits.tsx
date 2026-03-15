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
          {/* Left bundle */}
          <path d="M0,720 C80,725 180,735 240,690 C320,630 350,550 340,450 C330,350 280,230 200,130 C170,90 130,40 100,0" stroke="white" strokeWidth="1.5" opacity="0.6" />
          <path d="M0,680 C90,690 200,700 270,650 C360,580 380,490 360,380 C340,280 290,190 230,100 C210,70 180,30 160,0" stroke="white" strokeWidth="1.5" opacity="0.55" />
          <path d="M0,635 C100,650 210,665 290,610 C390,530 400,430 380,320 C360,220 310,150 260,70 C240,40 220,10 210,0" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <path d="M0,590 C110,610 220,630 310,565 C410,480 420,370 395,260 C370,170 330,110 290,40 C275,15 265,0 260,0" stroke="white" strokeWidth="1.5" opacity="0.45" />
          <path d="M40,750 C60,720 130,670 200,620 C300,540 340,430 330,310 C320,210 300,140 270,70 C255,35 240,0 230,-30" stroke="white" strokeWidth="1.5" opacity="0.4" />

          {/* Center lines */}
          <path d="M500,750 C490,670 480,570 490,470 C500,370 530,250 570,150 C590,100 610,50 630,0" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <path d="M540,750 C530,650 520,530 530,420 C545,310 575,210 610,120 C630,70 650,30 670,0" stroke="white" strokeWidth="1.5" opacity="0.45" />
          <path d="M580,750 C570,630 565,490 580,370 C595,260 620,180 655,100 C675,50 695,10 710,0" stroke="white" strokeWidth="1.5" opacity="0.4" />

          {/* Right lines */}
          <path d="M780,750 C775,650 770,550 775,440 C780,330 800,220 820,130 C830,90 840,40 850,0" stroke="white" strokeWidth="1.5" opacity="0.45" />
          <path d="M830,750 C825,630 820,500 830,380 C840,270 855,190 870,110 C880,60 890,20 900,0" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>
    </PageLayout>
  );
};

export default Benefits;
