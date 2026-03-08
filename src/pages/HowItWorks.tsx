import { motion } from "framer-motion";

const criteria = [
  "Bachelor's students in Computer Science, preferably final year",
  "Passion for entrepreneurship, innovation and solving European challenges",
  "Confident in English and comfortable in multicultural teams",
  "Inclusivity and gender balance strongly encouraged in nominations",
];

const timeline = [
  { date: "17 April", title: "Expression of Interest", desc: "Universities confirm their intent to participate." },
  { date: "5 May", title: "Info-session for Universities", desc: "A briefing call for universities." },
  { date: "3 July", title: "Nomination Deadline", desc: "Deadline to submit two selected students." },
  { date: "3 August", title: "Info-session for Students", desc: "A briefing call for nominated students." },
  { date: "25–28 August", title: "European Impact Sprint", desc: "The main event at HPI, Potsdam." },
];

const schedule = [
  { day: "Day 1 – 25th August", title: "Kick-Off", desc: "Individual arrival, Kick-Off, Challenge Keynotes and finding your Team" },
  { day: "Day 2 – 26th August", title: "Prototyping", desc: "Mapping the problem, prototyping the solution." },
  { day: "Day 3 – 27th August", title: "Refining", desc: "Testing, Improving, Refining your solution." },
  { day: "Day 4 – 28th August", title: "Presentation", desc: "Final presentation and individual departure." },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl mb-4"
          >
            How it Works
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Students are nominated by their universities, joined into diverse teams and guided by experts throughout their 4-day journey on-site at HPI Potsdam.
          </p>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-8">Student Selection Criteria</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {criteria.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start bg-card rounded-lg p-5 border border-border"
              >
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-foreground">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-12">Nomination Timeline</h2>
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-esprint-pink via-esprint-purple to-esprint-orange" />
            <div className="grid md:grid-cols-5 gap-6">
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center md:text-left"
                >
                  <div className="hidden md:block w-3 h-3 rounded-full bg-primary mx-auto md:mx-0 mb-4" />
                  <p className="text-primary font-bold text-sm">{t.date}</p>
                  <p className="font-display font-bold mt-1">{t.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-2 text-sm text-muted-foreground">
            <p>3rd July 2026 – Nomination Deadline</p>
            <p>15th July 2026 – Participants Announcement</p>
            <p>3rd August 2026 – Online Kick-Off for Participants</p>
            <p>25–28th August 2026 – E-Sprint at HPI, Potsdam</p>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-12">Program Schedule</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schedule.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground text-xs">Photo placeholder</p>
                </div>
                <div className="p-5">
                  <p className="text-primary text-xs font-bold uppercase tracking-wide">{s.day}</p>
                  <p className="font-display font-bold mt-1">{s.title}</p>
                  <p className="text-muted-foreground text-sm mt-2">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
