import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const infoItems = [
  { label: "Date", value: "25–28th August 2026", bg: "bg-esprint-orange", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
  { label: "Location", value: "Hasso Plattner Institute, Potsdam, Germany (30 min from Berlin airport and train station)", bg: "bg-esprint-pink", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
  { label: "Participants", value: "60 Bachelor students in computer science from 30 countries across Europe, divided into international teams of 5.", bg: "bg-esprint-purple", text: "text-primary-foreground", accent: "border-primary-foreground/20" },
  { label: "Accommodation", value: "Shared glamping tents on campus", bg: "bg-esprint-red", text: "text-primary-foreground", accent: "border-primary-foreground/20" },
  { label: "Language", value: "English", bg: "bg-esprint-cream", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/10" },
  { label: "Cost", value: "Program participation, accommodation and meals are free of charge. A 200 € travel stipend will be granted to cover your travel costs.", bg: "bg-esprint-darkblue", text: "text-primary-foreground", accent: "border-primary-foreground/10" },
  { label: "Schedule", value: "A 4-day full time program with on-site workshops (ca. 9 am – 6 pm) and community activities during the evenings. Detailed agenda shared at the kick-off in July.", bg: "bg-esprint-orange", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
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
          className="bg-esprint-purple rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="font-display font-bold text-xl text-primary-foreground mb-4 uppercase tracking-wide border-b-2 border-primary-foreground/20 pb-3">
            Program Brief
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            The European Impact Sprint is an intensive innovation program bringing together 60 Computer Science students from 30 European countries. Over the course of four days in Berlin, you will collaborate in cross-border teams to develop technical solutions for the continent's most pressing challenges. The 2026 focus will be on...
          </p>
        </motion.div>

        {/* Key Information – each row a different color */}
        <div className="rounded-2xl overflow-hidden shadow-xl flex-1 flex flex-col">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${item.bg} ${item.text} flex items-stretch flex-1`}
            >
              {/* Label */}
              <div className={`w-36 md:w-44 shrink-0 px-6 md:px-8 py-4 flex items-center border-r ${item.accent}`}>
                <span className="font-display font-bold text-xs uppercase tracking-widest opacity-70">
                  {item.label}
                </span>
              </div>

              {/* Value */}
              <div className="px-6 md:px-8 py-4 flex items-center">
                <p className="text-sm leading-relaxed opacity-90">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Challenge;
