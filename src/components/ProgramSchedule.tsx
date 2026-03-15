import { motion } from "framer-motion";
import scheduleKickoff from "@/assets/schedule-kickoff.jpg";
import schedulePrototyping from "@/assets/schedule-prototyping.png";
import scheduleRefining from "@/assets/schedule-refining.jpg";
import schedulePresentation from "@/assets/schedule-presentation.jpg";

const scheduleImages = [scheduleKickoff, schedulePrototyping, scheduleRefining, schedulePresentation];
const schedule = [
  { day: "Day 1 – 25th August", title: "Kick-Off", desc: "Individual arrival, Kick-Off, Challenge Keynotes and finding your Team" },
  { day: "Day 2 – 26th August", title: "Prototyping", desc: "Mapping the problem, prototyping the solution." },
  { day: "Day 3 – 27th August", title: "Refining", desc: "Testing, Improving, Refining your solution." },
  { day: "Day 4 – 28th August", title: "Presentation", desc: "Final presentation and individual departure." },
];

const bgSolid = [
  "bg-esprint-orange",
  "bg-esprint-pink",
  "bg-esprint-purple",
  "bg-esprint-red",
];

const borderColors = [
  "border-esprint-orange",
  "border-esprint-pink",
  "border-esprint-purple",
  "border-esprint-red",
];

const textOnBg = [
  "text-esprint-darkblue",
  "text-esprint-darkblue",
  "text-primary-foreground",
  "text-primary-foreground",
];

const ProgramSchedule = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display font-bold text-lg text-primary-foreground uppercase tracking-wide border-b-2 border-esprint-purple pb-3 mb-4">
        Program Schedule
      </h2>
      <p className="text-primary-foreground/70 leading-relaxed mb-2">
        Collaborate with international students and experts, tackle real-world challenges, and enjoy four unforgettable days of teamwork, sports, a BBQ night and an exciting excursion.
      </p>
      <p className="text-primary-foreground/50 text-xs italic mb-12">
        More program details will be added shortly.
      </p>

      <div className="relative">
        {/* SVG curved line that passes through the circles */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 21 0 C 21 8, 21 10, 21 14 C 21 22, 79 28, 79 38 C 79 48, 21 52, 21 62 C 21 72, 79 78, 79 86"
            stroke="white"
            strokeWidth="0.3"
            strokeDasharray="1 0.8"
            opacity="0.4"
            fill="none"
          />
        </svg>

        <div className="relative z-10 space-y-8 md:space-y-12">
          {schedule.map((s, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10`}
              >
                {/* Circle image */}
                <div className="w-full md:w-5/12 flex items-center justify-center">
                  <div className={`w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 ${borderColors[i]} shadow-xl`}>
                    <img
                      src={scheduleImages[i]}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text content */}
                <div className={`w-full md:w-7/12 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                  <span className={`${bgSolid[i]} ${textOnBg[i]} inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2`}>{s.day}</span>
                  <h3 className="font-display font-black text-xl md:text-2xl text-primary-foreground mb-2">{s.title}</h3>
                  <span className={`${bgSolid[i]} ${textOnBg[i]} inline-block text-sm leading-relaxed px-3 py-1.5 rounded-lg`}>{s.desc}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgramSchedule;
