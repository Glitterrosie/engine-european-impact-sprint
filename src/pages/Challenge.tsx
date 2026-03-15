import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const infoItems = [
  { label: "Date", value: "25–28th August 2026", accent: "bg-esprint-orange" },
  { label: "Location", value: "Hasso Plattner Institute, Potsdam, Germany (30 min from Berlin airport and train station)", accent: "bg-esprint-pink" },
  { label: "Participants", value: "60 Bachelor students in computer science from 30 countries across Europe, divided into international teams of 5.", accent: "bg-esprint-purple" },
  { label: "Accommodation", value: "Shared glamping tents on campus", accent: "bg-esprint-red" },
  { label: "Language", value: "English", accent: "bg-esprint-orange" },
  { label: "Cost", value: "Program participation, accommodation and meals are free of charge. A 200 € travel stipend will be granted to cover your travel costs.", accent: "bg-esprint-pink" },
  { label: "Schedule", value: "A 4-day full time program with on-site workshops (ca. 9 am – 6 pm) and community activities during the evenings. Detailed agenda shared at the kick-off in July.", accent: "bg-esprint-purple" },
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

        {/* Key Information – color-accented table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-esprint-darkblue rounded-2xl shadow-xl overflow-hidden flex-1"
        >
          <div className="p-8 md:p-10 pb-4">
            <h2 className="font-display font-bold text-xl text-primary-foreground uppercase tracking-wide border-b-2 border-esprint-pink pb-3">
              Key Information
            </h2>
          </div>
          <div className="divide-y divide-primary-foreground/10">
            {infoItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-stretch hover:bg-primary-foreground/5 transition-colors"
              >
                {/* Color accent bar */}
                <div className={`${item.accent} w-1.5 shrink-0`} />
                
                {/* Label */}
                <div className="w-36 md:w-44 shrink-0 px-6 py-4 flex items-center">
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-primary-foreground/60">
                    {item.label}
                  </span>
                </div>

                {/* Value */}
                <div className="px-4 py-4 flex items-center">
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Challenge;
