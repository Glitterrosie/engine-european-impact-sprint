import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import esprintLogo from "@/assets/esprint-logo-white.svg";

const criteria = [
  "Bachelor's students in Computer Science, preferably final year",
  "Passion for entrepreneurship, innovation and solving European challenges",
  "Confident in English and comfortable in multicultural teams",
  "Inclusivity and gender balance strongly encouraged in nominations",
];

const timeline = [
  { date: "17 April", title: "Expression of Interest", desc: "Universities confirm their intent to participate.", dots: 1 },
  { date: "5 May", title: "Info-session for Universities", desc: "A briefing call for universities.", dots: 1 },
  { date: "3 July", title: "Nomination Deadline", desc: "Deadline to submit two selected students.", dots: 1 },
  { date: "15 July", title: "Participants Announcement", desc: "Selected participants are announced.", dots: 1 },
  { date: "3 August", title: "Info-session for Students", desc: "A briefing call for nominated students.", dots: 1 },
  { date: "25–28 August", title: "European Impact Sprint", desc: "The main event at HPI, Potsdam.", dots: 4, isMain: true },
];

const schedule = [
  { day: "Day 1 – 25th August", title: "Kick-Off", desc: "Individual arrival, Kick-Off, Challenge Keynotes and finding your Team" },
  { day: "Day 2 – 26th August", title: "Prototyping", desc: "Mapping the problem, prototyping the solution." },
  { day: "Day 3 – 27th August", title: "Refining", desc: "Testing, Improving, Refining your solution." },
  { day: "Day 4 – 28th August", title: "Presentation", desc: "Final presentation and individual departure." },
];

const tornClipPath = "polygon(0% 2%, 3% 0%, 7% 3%, 11% 1%, 15% 4%, 19% 0%, 23% 2%, 27% 0%, 31% 3%, 35% 1%, 39% 4%, 43% 0%, 47% 3%, 51% 1%, 55% 3%, 59% 0%, 63% 2%, 67% 0%, 71% 3%, 75% 1%, 79% 4%, 83% 0%, 87% 2%, 91% 0%, 95% 3%, 100% 1%, 100% 97%, 97% 100%, 93% 97%, 89% 100%, 85% 97%, 81% 100%, 77% 98%, 73% 100%, 69% 97%, 65% 100%, 61% 98%, 57% 100%, 53% 97%, 49% 100%, 45% 98%, 41% 100%, 37% 97%, 33% 100%, 29% 98%, 25% 100%, 21% 97%, 17% 100%, 13% 98%, 9% 100%, 5% 97%, 0% 100%)";

const HowItWorks = () => {
  return (
    <PageLayout
      title="How it Works"
      subtitle="Students are nominated by their universities, joined into diverse teams and guided by experts throughout their 4-day journey on-site at HPI Potsdam."
    >
      <div className="space-y-8">
        {/* Collaboration & Criteria + Selection Process */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h2 className="font-display font-bold text-lg text-gray-900 uppercase tracking-wide border-b-2 border-esprint-purple pb-3 mb-6">
              Student Selection Criteria
            </h2>
            <ul className="space-y-3">
              {criteria.map((c, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-esprint-purple/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-esprint-purple font-bold text-xs">{i + 1}</span>
                  </span>
                  <p className="text-gray-700 text-sm">{c}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex items-center justify-center"
          >
            <div className="w-full h-full min-h-[250px] bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Photo placeholder</p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="font-display font-bold text-lg text-gray-900 uppercase tracking-wide border-b-2 border-esprint-orange pb-3 mb-8">
            Timeline
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-[34px] left-0 right-0 h-1 rounded-full bg-gradient-to-r from-esprint-pink via-esprint-purple to-esprint-orange" />
            <div className="grid md:grid-cols-6 gap-4">
              {timeline.map((t, i) => (
                <div key={i} className="relative text-center">
                  <p className="text-esprint-purple font-bold text-sm mb-2">{t.date}</p>
                  <div className="hidden md:flex justify-center gap-1.5 mb-4 relative z-10">
                    {Array.from({ length: t.dots }).map((_, d) => (
                      <div key={d} className="w-4 h-4 rounded-full bg-esprint-purple ring-4 ring-white" />
                    ))}
                  </div>
                  {t.isMain ? (
                    <div className="mt-2 flex justify-center">
                      <img src={esprintLogo} alt="European Impact Sprint" className="h-16 invert" />
                    </div>
                  ) : (
                    <>
                      <p className="font-display font-bold text-gray-900 mt-1 text-sm">{t.title}</p>
                      <p className="text-gray-500 text-xs mt-1">{t.desc}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Schedule – curved line with alternating image/text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="font-display font-bold text-lg text-gray-900 uppercase tracking-wide border-b-2 border-esprint-purple pb-3 mb-12">
            Program Schedule
          </h2>

          <div className="relative">
            {/* SVG curved line */}
            <svg
              className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-full pointer-events-none hidden md:block"
              viewBox="0 0 800 1200"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 400 0 C 150 150, 650 250, 400 350 C 150 450, 650 550, 400 650 C 150 750, 650 850, 400 950 C 250 1050, 400 1100, 400 1200"
                stroke="url(#curveGradient)"
                strokeWidth="3"
                strokeDasharray="8 6"
                fill="none"
              />
              <defs>
                <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(25, 96%, 69%)" />
                  <stop offset="33%" stopColor="hsl(340, 77%, 70%)" />
                  <stop offset="66%" stopColor="hsl(258, 40%, 53%)" />
                  <stop offset="100%" stopColor="hsl(350, 52%, 48%)" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative z-10 space-y-16 md:space-y-24">
              {schedule.map((s, i) => {
                const isEven = i % 2 === 0;
                const colors = [
                  "text-esprint-orange",
                  "text-esprint-pink",
                  "text-esprint-purple",
                  "text-esprint-red",
                ];

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
                  >
                    {/* Image with torn border */}
                    <div className="w-full md:w-1/2">
                      <div
                        className="overflow-hidden shadow-lg"
                        style={{ clipPath: tornClipPath }}
                      >
                        <img
                          src={s.image}
                          alt={s.title}
                          className="w-full aspect-[16/10] object-cover"
                        />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                      <p className={`${colors[i]} text-xs font-bold uppercase tracking-widest mb-2`}>{s.day}</p>
                      <h3 className="font-display font-black text-2xl md:text-3xl text-gray-900 mb-3">{s.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default HowItWorks;
