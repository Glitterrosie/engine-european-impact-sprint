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
  { date: "3 August", title: "Info-session for Students", desc: "A briefing call for nominated students.", dots: 1 },
  { date: "25–28 August", title: "European Impact Sprint", desc: "The main event at HPI, Potsdam.", dots: 4, isMain: true },
];

const schedule = [
  { day: "Day 1 – 25th August", title: "Kick-Off", desc: "Individual arrival, Kick-Off, Challenge Keynotes and finding your Team" },
  { day: "Day 2 – 26th August", title: "Prototyping", desc: "Mapping the problem, prototyping the solution." },
  { day: "Day 3 – 27th August", title: "Refining", desc: "Testing, Improving, Refining your solution." },
  { day: "Day 4 – 28th August", title: "Presentation", desc: "Final presentation and individual departure." },
];

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
            {/* Continuous line */}
            <div className="hidden md:block absolute top-[34px] left-0 right-0 h-1 rounded-full bg-gradient-to-r from-esprint-pink via-esprint-purple to-esprint-orange" />
            <div className="grid md:grid-cols-5 gap-6">
              {timeline.map((t, i) => (
                <div key={i} className="relative text-center">
                  {/* Date above dots */}
                  <p className="text-esprint-purple font-bold text-sm mb-2">{t.date}</p>
                  {/* Dots on the line */}
                  <div className="hidden md:flex justify-center gap-1.5 mb-4 relative z-10">
                    {Array.from({ length: t.dots }).map((_, d) => (
                      <div key={d} className="w-4 h-4 rounded-full bg-esprint-purple ring-4 ring-white" />
                    ))}
                  </div>
                  {/* Description below */}
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

        {/* Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="font-display font-bold text-lg text-gray-900 uppercase tracking-wide border-b-2 border-esprint-purple pb-3 mb-8">
            Program Schedule
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schedule.map((s, i) => (
              <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="aspect-video bg-gray-50 flex items-center justify-center">
                  <p className="text-gray-400 text-xs">Photo placeholder</p>
                </div>
                <div className="p-4">
                  <p className="text-esprint-purple text-xs font-bold uppercase tracking-wide">{s.day}</p>
                  <p className="font-display font-bold text-gray-900 mt-1">{s.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default HowItWorks;
