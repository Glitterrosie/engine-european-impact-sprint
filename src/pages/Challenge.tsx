import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const infoItems = [
  { label: "Date", value: "25–28th August 2026", color: "bg-esprint-orange text-esprint-darkblue" },
  { label: "Location", value: "Hasso Plattner Institute, Potsdam, Germany (30 min from Berlin airport and train station)", color: "bg-esprint-pink text-esprint-darkblue" },
  { label: "Participants", value: "60 Bachelor students in computer science from 30 countries across Europe, divided into international teams of 5.", color: "bg-esprint-purple text-primary-foreground" },
  { label: "Accommodation", value: "Shared glamping tents on campus", color: "bg-esprint-red text-primary-foreground" },
  { label: "Language", value: "English", color: "bg-esprint-darkblue text-primary-foreground" },
  { label: "Cost", value: "Program participation, accommodation and meals are free of charge. A 200 € travel stipend will be granted to cover your travel costs.", color: "bg-esprint-cream text-esprint-darkblue" },
  { label: "Schedule", value: "A 4-day full time program with on-site workshops (ca. 9 am – 6 pm) and community activities during the evenings. Detailed agenda shared at the kick-off in July.", color: "bg-esprint-orange text-esprint-darkblue" },
];

const Challenge = () => {
  return (
    <PageLayout title="The Challenge" noPadBottom>
      <div className="space-y-6 flex-1 flex flex-col">
        {/* Program Brief */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-esprint-darkblue rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="font-display font-bold text-xl text-primary-foreground mb-4 uppercase tracking-wide border-b-2 border-esprint-purple pb-3">
            Program Brief
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            The European Impact Sprint is an intensive innovation program bringing together 60 Computer Science students from 30 European countries. Over the course of four days in Berlin, you will collaborate in cross-border teams to develop technical solutions for the continent's most pressing challenges. The 2026 focus will be on...
          </p>
        </motion.div>

        {/* Key Information – colored blocks */}
        <div className="rounded-2xl overflow-hidden shadow-xl grid grid-cols-2 md:grid-cols-4 flex-1">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${item.color} p-6 md:p-8 flex flex-col`}
            >
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">{item.label}</span>
              <p className="mt-2 font-display font-bold text-base md:text-lg leading-snug">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Challenge;
