import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const infoItems = [
  { label: "Date", value: "25–28th August 2026", bg: "bg-esprint-orange", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
  { label: "Location", value: "Hasso Plattner Institute, Potsdam, Germany (30 min from Berlin airport and train station)", bg: "bg-esprint-pink", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
  { label: "Participants", value: "60 Bachelor students in CS from 30 countries, in teams of 5.", bg: "bg-esprint-purple", text: "text-primary-foreground", accent: "border-primary-foreground/20" },
  { label: "Accommodation", value: "Shared glamping tents on campus", bg: "bg-esprint-red", text: "text-primary-foreground", accent: "border-primary-foreground/20" },
  { label: "Language", value: "English", bg: "bg-esprint-cream", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/10" },
  { label: "Cost", value: "Free participation, accommodation & meals. 200 € travel stipend included.", bg: "bg-esprint-darkblue", text: "text-primary-foreground", accent: "border-primary-foreground/10" },
  { label: "Schedule", value: "4-day full time program with workshops (9 am – 6 pm) and evening community activities.", bg: "bg-esprint-orange", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
];

const Challenge = () => {
  return (
    <PageLayout title="The Challenge" noPadBottom>
      <div className="flex-1 flex flex-col">
        <div className="rounded-2xl overflow-hidden shadow-xl grid lg:grid-cols-2 flex-1">
          {/* Program Brief – left */}
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

          {/* Key Facts – right, colored rows */}
          <div className="flex flex-col">
            {infoItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`${item.bg} ${item.text} flex`}
              >
                <div className={`w-32 md:w-40 shrink-0 px-5 md:px-6 py-4 flex items-center border-r ${item.accent}`}>
                  <span className="font-display font-bold text-xs uppercase tracking-widest opacity-70">
                    {item.label}
                  </span>
                </div>
                <div className="px-5 md:px-6 py-4 flex items-center min-w-0">
                  <p className="text-sm leading-relaxed opacity-90">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Challenge;
