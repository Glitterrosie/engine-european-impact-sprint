import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import gisNewYork from "@/assets/gis-newyork.png";
import esprintLogo from "@/assets/esprint-logo-white.svg";

const criteria = [
  "Bachelor's students in Computer Science, preferably final year",
  "Passion for entrepreneurship, innovation and solving European challenges",
  "Confident in English and comfortable in multicultural teams",
  "Inclusivity and gender balance strongly encouraged in nominations",
];

const timeline = [
  { date: "17 April", title: "Expression of Interest", desc: "Universities confirm their intent to participate.", dots: 1 },
  { date: "5 May", title: "Online Info-session for Universities", desc: "A briefing call for universities.", dots: 1 },
  { date: "3 July", title: "Nomination Deadline", desc: "Deadline to submit two selected students.", dots: 1 },
  { date: "15 July", title: "Participants Announcement", desc: "Selected participants are announced.", dots: 1 },
  { date: "3 August", title: "Online Info-session for Students", desc: "A briefing call for nominated students.", dots: 1 },
  { date: "25–28 August", title: "European Impact Sprint", desc: "The main event at HPI, Potsdam.", dots: 4, isMain: true },
];


const HowItWorks = () => {
  return (
    <PageLayout
      title="How it Works"
      subtitle="Students are nominated by their universities, joined into diverse teams and guided by experts throughout their 4-day journey on-site at HPI Potsdam/Berlin."
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
            <img src={gisNewYork} alt="Global Impact Sprint participants in New York" className="w-full h-full min-h-[250px] object-cover" />
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

        <ProgramSchedule />
      </div>
    </PageLayout>
  );
};

export default HowItWorks;
