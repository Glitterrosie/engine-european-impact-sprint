import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const infoItems = [
  { label: "Date", value: "25–28th August 2026" },
  { label: "Program Schedule", value: "The European Impact Sprint is a 4-day full time program, featuring on-site workshops during the day (ca. 9 am – 6 pm) as well as community activities during the evenings to connect with other participants. The detailed agenda will be shared at the kick-off in July." },
  { label: "Location", value: "Hasso Plattner Institute, Potsdam, Germany (30 min from Berlin airport and train station)" },
  { label: "Accommodation", value: "Shared glamping tents on campus" },
  { label: "Language", value: "English" },
  { label: "Cost", value: "Program participation, accommodation and meals are free of charge for all participants. In addition, a 200 € travel stipend will be granted to participants to cover your travel costs to Berlin and back." },
  { label: "Participants", value: "60 Bachelor students in computer science from 30 countries across Europe, divided into international teams of 5." },
];

const Challenge = () => {
  return (
    <PageLayout title="The Challenge" noPadBottom>
      <div className="space-y-6 flex-1 flex flex-col">
        {/* Top two-column row – touching blocks */}
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

        {/* Stats strip */}
        <div className="rounded-2xl overflow-hidden shadow-xl grid grid-cols-3">
          {[
            { value: "60", label: "Students", color: "bg-esprint-orange text-esprint-darkblue" },
            { value: "30", label: "Countries", color: "bg-esprint-pink text-esprint-darkblue" },
            { value: "4", label: "Days", color: "bg-esprint-purple text-primary-foreground" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${stat.color} p-8 text-center`}
            >
              <p className="font-display font-black text-4xl md:text-5xl">{stat.value}</p>
              <p className="mt-1 font-semibold text-sm opacity-70">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Europe map – stretches to footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-esprint-red rounded-t-2xl p-8 md:p-10 text-center shadow-xl flex-1"
        >
          <h2 className="font-display font-bold text-2xl text-primary-foreground mb-3">30 Partner Universities Across Europe</h2>
          <p className="text-primary-foreground/70 mb-8">Hover over countries to see partner universities, logos and contact persons.</p>
          <div className="rounded-xl bg-primary-foreground/10 aspect-[16/9] max-w-4xl mx-auto flex items-center justify-center border border-primary-foreground/20">
            <p className="text-primary-foreground/50">Interactive Europe Map – Coming Soon</p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Challenge;
