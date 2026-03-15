import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

import scheduleDay1 from "@/assets/schedule-day1.jpg";
import scheduleDay2 from "@/assets/schedule-day2.jpg";
import scheduleDay3 from "@/assets/schedule-day3.jpg";
import scheduleDay4 from "@/assets/schedule-day4.jpg";

const infoItems = [
  { label: "Date", value: "25–28th August 2026" },
  { label: "Program Schedule", value: "The European Impact Sprint is a 4-day full time program, featuring on-site workshops during the day (ca. 9 am – 6 pm) as well as community activities during the evenings to connect with other participants. The detailed agenda will be shared at the kick-off in July." },
  { label: "Location", value: "Hasso Plattner Institute, Potsdam, Germany (30 min from Berlin airport and train station)" },
  { label: "Accommodation", value: "Shared glamping tents on campus" },
  { label: "Language", value: "English" },
  { label: "Cost", value: "Program participation, accommodation and meals are free of charge for all participants. In addition, a 200 € travel stipend will be granted to participants to cover your travel costs to Berlin and back." },
  { label: "Participants", value: "60 Bachelor students in computer science from 30 countries across Europe, divided into international teams of 5." },
];

const schedule = [
  { day: "Day 1", date: "25th August", title: "Kick-Off", desc: "Individual arrival, Kick-Off, Challenge Keynotes and finding your Team", color: "bg-esprint-orange text-esprint-darkblue", img: scheduleDay1 },
  { day: "Day 2", date: "26th August", title: "Prototyping", desc: "Mapping the problem, prototyping the solution.", color: "bg-esprint-pink text-esprint-darkblue", img: scheduleDay2 },
  { day: "Day 3", date: "27th August", title: "Refining", desc: "Testing, Improving, Refining your solution.", color: "bg-esprint-purple text-primary-foreground", img: scheduleDay3 },
  { day: "Day 4", date: "28th August", title: "Presentation", desc: "Final presentation and individual departure.", color: "bg-esprint-red text-primary-foreground", img: scheduleDay4 },
];

const Challenge = () => {
  return (
    <PageLayout title="The Challenge" noPadBottom>
      <div className="space-y-6 flex-1 flex flex-col">
        {/* Top two-column row */}
        <div className="rounded-2xl overflow-hidden shadow-xl grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-esprint-darkblue p-8 md:p-10"
          >
            <h2 className="font-display font-bold text-xl text-primary-foreground mb-4 uppercase tracking-wide border-b-2 border-esprint-purple pb-3">
              Program Brief
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed">
              The European Impact Sprint is an intensive innovation program bringing together 60 Computer Science students from 30 European countries. Over the course of four days in Berlin, you will collaborate in cross-border teams to develop technical solutions for the continent's most pressing challenges. The 2026 focus will be on...
            </p>
            <div className="mt-6 rounded-xl overflow-hidden aspect-video bg-background/30 flex items-center justify-center">
              <p className="text-primary-foreground/40 text-sm">Photo placeholder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-esprint-cream p-8 md:p-10"
          >
            <h2 className="font-display font-bold text-xl text-esprint-darkblue mb-4 uppercase tracking-wide border-b-2 border-esprint-pink pb-3">
              Key Information
            </h2>
            <table className="w-full text-sm">
              <tbody>
                {infoItems.map((item) => (
                  <tr key={item.label} className="border-b border-esprint-darkblue/10 last:border-b-0">
                    <td className="py-3 pr-4 align-top font-bold text-esprint-purple uppercase tracking-wide text-xs whitespace-nowrap w-1/4">{item.label}</td>
                    <td className="py-3 text-esprint-darkblue/80 leading-relaxed">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Schedule – colored blocks grid */}
        <div className="rounded-2xl overflow-hidden shadow-xl grid grid-cols-2 md:grid-cols-4 flex-1">
          {schedule.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${s.color} p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group`}
            >
              {/* Background image hint */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.img})` }}
              />

              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">{s.day}</span>
                <p className="text-xs opacity-50 mt-0.5">{s.date}</p>
                <h3 className="font-display font-black text-2xl md:text-3xl mt-3 leading-tight">{s.title}</h3>
              </div>

              <p className="relative z-10 text-sm leading-relaxed opacity-80 mt-4">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Challenge;
