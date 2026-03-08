import { motion } from "framer-motion";

const infoItems = [
  { label: "Date", value: "25–28th August 2026" },
  { label: "Program Schedule", value: "4-day full time program, featuring on-site workshops during the day (ca. 9 am – 6 pm) as well as community activities during the evenings." },
  { label: "Location", value: "Hasso Plattner Institute, Potsdam, Germany (30 min from Berlin airport and train station)" },
  { label: "Accommodation", value: "Shared glamping tents on campus" },
  { label: "Language", value: "English" },
  { label: "Cost", value: "Program participation, accommodation and meals are free of charge for all participants. In addition, a 200 € travel stipend will be granted to cover travel costs." },
  { label: "Participants", value: "60 Bachelor students in computer science from 30 countries across Europe, divided into international teams of 5." },
];

const Challenge = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl mb-6"
          >
            The Challenge
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                The European Impact Sprint is an intensive innovation program bringing together 60 Computer Science students from 30 European countries. Over the course of four days in Potsdam, you will collaborate in cross-border teams to develop technical solutions for the continent's most pressing challenges.
              </p>
              <div className="mt-8 rounded-xl overflow-hidden aspect-video bg-muted flex items-center justify-center border border-border">
                <p className="text-muted-foreground text-sm">Photo placeholder</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-0"
            >
              {infoItems.map((item, i) => (
                <div key={item.label} className="py-5 border-b border-border">
                  <p className="text-sm font-bold text-primary uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-foreground text-sm leading-relaxed">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Europe map placeholder */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-4">30 Partner Universities Across Europe</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Hover over countries to see partner universities, logos and contact persons.
          </p>
          <div className="rounded-xl bg-muted border border-border aspect-[16/9] max-w-4xl mx-auto flex items-center justify-center">
            <p className="text-muted-foreground">Interactive Europe Map – Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge;
