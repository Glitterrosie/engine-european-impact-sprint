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

const topoLines = [
  [
    "M 180 320 C 160 280, 120 260, 100 300 C 80 340, 40 310, 20 280 C 0 250, -20 220, 10 190 C 40 160, 80 170, 100 200",
    "M 200 340 C 175 295, 130 275, 105 315 C 80 355, 30 325, 5 290 C -20 255, -30 220, 5 185 C 40 150, 90 160, 115 195",
    "M 220 360 C 190 310, 140 290, 110 335 C 80 370, 20 340, -10 300 C -40 260, -45 220, 0 180 C 45 140, 100 150, 130 190",
    "M 240 380 C 205 325, 150 305, 115 355 C 80 390, 10 355, -25 310 C -55 265, -55 215, -5 170 C 50 130, 110 140, 145 185",
  ],
  [
    "M -20 80 C 20 60, 60 50, 100 70 C 140 90, 160 130, 140 170 C 120 210, 80 220, 40 200",
    "M -30 60 C 15 35, 65 25, 110 50 C 155 75, 180 120, 155 165 C 130 210, 85 225, 35 200",
    "M -40 40 C 10 10, 70 0, 120 30 C 170 60, 200 110, 170 160 C 140 210, 90 230, 30 200",
    "M -50 20 C 5 -15, 75 -25, 130 10 C 185 45, 220 100, 185 155 C 150 210, 95 235, 25 200",
  ],
  [
    "M 50 350 C 80 320, 130 310, 160 340 C 190 370, 170 400, 140 410",
    "M 30 370 C 70 330, 140 315, 180 350 C 210 385, 185 420, 145 435",
    "M 10 390 C 60 345, 150 325, 200 365 C 240 400, 205 445, 155 460",
    "M -10 410 C 50 360, 160 335, 220 380 C 260 415, 225 465, 165 485",
    "M -30 430 C 40 375, 170 345, 240 395 C 280 430, 245 485, 175 510",
  ],
  [
    "M 200 0 C 170 40, 130 60, 90 50 C 50 40, 20 70, 10 110 C 0 150, 30 180, 70 190",
    "M 220 -10 C 185 35, 140 55, 95 45 C 50 35, 15 65, 2 110 C -10 155, 25 190, 70 205",
    "M 240 -20 C 200 30, 150 50, 100 40 C 50 30, 10 60, -5 110 C -20 160, 20 200, 70 220",
    "M 260 -30 C 215 25, 160 45, 105 35 C 50 25, 5 55, -15 110 C -30 165, 15 210, 70 235",
  ],
  [
    "M -20 300 C 10 270, 50 260, 90 280 C 130 300, 150 340, 130 370",
    "M -30 320 C 5 285, 50 272, 95 295 C 140 318, 165 360, 140 395",
    "M -40 340 C 0 300, 50 285, 100 310 C 150 335, 180 380, 150 420",
    "M -50 360 C -5 315, 50 298, 105 325 C 160 352, 195 400, 160 445",
    "M -60 380 C -10 330, 50 310, 110 340 C 170 370, 210 420, 170 470",
  ],
];

const Benefits = () => {
  return (
    <PageLayout
      title="Program Benefits"
      subtitle="Dream big – dive into projects that matter alongside peers from all over Europe. Grow your skills, connect with inspiring mentors and create impact and memories!"
      noPadBottom
    >
      <div className="rounded-t-2xl overflow-hidden shadow-xl grid md:grid-cols-5 flex-1">
        {benefits.map((b, i) => {
          const color = cardColors[i];
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${color.bg} ${color.text} ${color.hoverText} hover:bg-white relative p-8 text-center transition-all duration-300 cursor-default group overflow-hidden`}
            >
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.18] group-hover:opacity-0 transition-opacity duration-300"
                viewBox="0 0 200 500"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                {topoLines[i].map((d, j) => (
                  <path key={j} d={d} stroke="white" strokeWidth="1" fill="none" />
                ))}
              </svg>

              <div className="relative z-10">
                <div className="h-12 w-12 rounded-lg bg-background/15 group-hover:bg-current/10 flex items-center justify-center mb-4 mx-auto transition-colors duration-300">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{b.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Benefits;