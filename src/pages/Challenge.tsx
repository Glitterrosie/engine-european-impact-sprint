import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import PageLayout from "@/components/PageLayout";
import challengeBrief from "@/assets/challenge-brief.jpg";

const EUROPE_GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const EUROPE_COUNTRIES = [
  "Albania","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina",
  "Bulgaria","Croatia","Cyprus","Czech Republic","Czechia","Denmark","Estonia","Finland",
  "France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo",
  "Latvia","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro",
  "Netherlands","North Macedonia","Norway","Poland","Portugal","Romania",
  "Russia","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden",
  "Switzerland","Ukraine","United Kingdom","Vatican City"
];

const infoItems = [
  { label: "Date", value: "25–28th August 2026", bg: "bg-esprint-orange", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
  { label: "Location", value: "Hasso Plattner Institute, Potsdam, Germany (30 min from Berlin airport and train station)", bg: "bg-esprint-pink", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
  { label: "Participants", value: "60 Bachelor students in computer science from 30 countries across Europe, divided into international teams of 5.", bg: "bg-esprint-purple", text: "text-primary-foreground", accent: "border-primary-foreground/20" },
  { label: "Accommodation", value: "Shared glamping tents on campus", bg: "bg-esprint-red", text: "text-primary-foreground", accent: "border-primary-foreground/20" },
  { label: "Language", value: "English", bg: "bg-esprint-cream", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/10" },
  { label: "Cost", value: "Program participation, accommodation and meals are free of charge for all participants. In addition, a 200 € travel stipend will be granted to participants to cover your travel costs to Berlin and back.", bg: "bg-esprint-darkblue", text: "text-primary-foreground", accent: "border-primary-foreground/10" },
  { label: "Schedule", value: "The European Impact Sprint is a 4-day full time program, featuring on-site workshops during the day (ca. 9 am – 6 pm) as well as community activities during the evenings to connect with other participants. The detailed agenda will be shared at the kick-off in July.", bg: "bg-esprint-orange", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
];

const Challenge = () => {
  return (
    <PageLayout title="The Challenge" noPadBottom>
      <div className="flex-1 grid lg:grid-cols-2 gap-6">
        {/* Program Brief – transparent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 md:p-10 pb-0 flex flex-col"
        >
          <h2 className="font-display font-bold text-xl text-primary-foreground mb-4 uppercase tracking-wide border-b-2 border-esprint-purple pb-3">
            Program Brief
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            The European Impact Sprint is an intensive innovation program bringing together 60 Computer Science students from 30 European countries. Over the course of four days in Berlin, you will collaborate in cross-border teams to develop technical solutions for the continent's most pressing challenges. The 2026 focus will be on...
          </p>
          <div className="mt-6 rounded-xl overflow-hidden flex-1 min-h-[200px]">
            <img src={challengeBrief} alt="Students collaborating at HPI campus" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Key Information – colored rows */}
        <div className="rounded-2xl overflow-hidden shadow-xl flex flex-col">
          <div className="bg-esprint-darkblue p-8 md:p-10 pb-4">
            <h2 className="font-display font-bold text-xl text-primary-foreground uppercase tracking-wide border-b-2 border-esprint-pink pb-3">
              Key Information
            </h2>
          </div>
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${item.bg} ${item.text} flex flex-1`}
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

        {/* Partner Universities Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-esprint-darkblue rounded-t-2xl p-8 md:p-10 text-center shadow-xl col-span-full"
        >
          <h2 className="font-display font-bold text-2xl text-primary-foreground mb-8">Partner Universities Coming Soon</h2>
          <div className="max-w-3xl mx-auto">
            <svg viewBox="-31.5 -46.5 75 55" className="w-full" xmlns="http://www.w3.org/2000/svg">
              {/* Real simplified Europe map paths */}
              <g fill="hsl(var(--primary-foreground))" fillOpacity="0.08" stroke="hsl(var(--primary-foreground))" strokeWidth="0.15" strokeOpacity="0.3">
                {/* Iceland */}
                <path d="M-25,-30 l2,-1 3,0 2,1 1,2 -1,2 -3,1 -3,0 -2,-1 -1,-2z" />
                {/* Norway/Sweden */}
                <path d="M5,-40 l2,1 2,3 1,4 0,5 -1,4 -2,3 -1,4 -2,3 -3,2 -2,0 -1,-2 0,-4 1,-5 1,-4 0,-4 1,-3 1,-3 2,-2z" />
                {/* Finland */}
                <path d="M12,-38 l3,1 2,3 1,4 0,5 -1,4 -2,3 -2,1 -2,-1 -1,-3 0,-4 0,-4 1,-4 1,-3z" />
                {/* UK */}
                <path d="M-8,-18 l1,-3 2,-2 2,0 1,2 0,3 -1,3 -2,2 -1,1 -1,-1 -1,-2 0,-2z" />
                {/* Ireland */}
                <path d="M-12,-17 l2,-1 2,0 1,2 0,2 -1,2 -2,1 -2,0 -1,-2 0,-2z" />
                {/* France */}
                <path d="M-6,-10 l4,-1 3,0 3,1 1,2 0,3 -1,2 -3,2 -2,1 -3,0 -2,-1 -2,-2 -1,-2 0,-2 1,-2z" />
                {/* Spain */}
                <path d="M-9,-2 l3,-1 4,0 4,0 3,1 1,2 0,3 -1,2 -3,1 -4,1 -4,0 -3,-1 -2,-2 0,-3 1,-2z" />
                {/* Portugal */}
                <path d="M-12,-1 l1,-1 1,0 1,1 0,3 0,3 -1,2 -1,0 -1,-1 -1,-3 0,-3z" />
                {/* Germany */}
                <path d="M2,-16 l3,-1 3,0 2,1 1,3 0,3 -1,2 -2,1 -3,0 -2,-1 -2,-2 -1,-2 0,-2 1,-1z" />
                {/* Poland */}
                <path d="M8,-17 l4,-1 3,1 2,2 1,2 0,3 -1,2 -3,1 -3,0 -3,-1 -1,-2 0,-3 0,-2z" />
                {/* Italy */}
                <path d="M4,-5 l2,-2 2,-1 2,0 1,1 1,3 0,3 -1,3 -2,2 -1,0 -1,-1 -1,-2 0,-2 -1,-2z" />
                {/* Sicily */}
                <path d="M6,2 l2,0 1,1 0,1 -2,1 -2,0 -1,-1 1,-1z" />
                {/* Sardinia */}
                <path d="M2,0 l1,-1 1,0 1,1 0,2 -1,1 -1,0 -1,-1z" />
                {/* Switzerland/Austria */}
                <path d="M1,-9 l3,0 3,0 2,1 0,1 -2,1 -3,0 -3,0 -2,-1 0,-1z" />
                {/* Czech Republic */}
                <path d="M5,-13 l3,0 2,1 1,1 0,1 -2,1 -3,0 -2,-1 -1,-1z" />
                {/* Denmark */}
                <path d="M2,-20 l2,0 1,1 0,2 -1,1 -2,0 -1,-1 0,-2z" />
                {/* Netherlands/Belgium */}
                <path d="M-2,-15 l2,0 2,0 1,1 0,2 -1,1 -2,0 -2,-1 -1,-1z" />
                {/* Romania */}
                <path d="M14,-10 l3,-1 3,1 1,2 0,2 -1,2 -3,1 -3,0 -2,-1 -1,-2 0,-2z" />
                {/* Bulgaria */}
                <path d="M16,-5 l3,0 2,1 0,2 -1,1 -3,1 -2,0 -1,-1 0,-2z" />
                {/* Greece */}
                <path d="M14,0 l2,-1 2,0 1,2 0,3 -1,2 -2,1 -2,0 -1,-2 0,-3z" />
                {/* Turkey (European part) */}
                <path d="M19,-4 l3,0 2,1 1,2 -1,1 -2,1 -2,0 -1,-1 -1,-2z" />
                {/* Hungary */}
                <path d="M10,-10 l3,0 2,1 1,1 0,2 -2,1 -3,0 -2,-1 -1,-1 0,-2z" />
                {/* Ukraine */}
                <path d="M16,-18 l5,-1 4,1 3,2 1,3 0,3 -2,2 -4,1 -4,0 -3,-1 -2,-2 -1,-3 0,-3z" />
                {/* Baltic States */}
                <path d="M11,-22 l2,-1 2,0 1,2 0,3 -1,2 -2,0 -2,-1 -1,-2 0,-2z" />
                {/* Belarus */}
                <path d="M13,-18 l3,0 2,1 1,2 0,2 -1,1 -3,0 -2,-1 -1,-2 0,-2z" />
                {/* Croatia/Serbia */}
                <path d="M9,-6 l3,-1 2,1 1,2 0,2 -1,1 -2,1 -2,0 -2,-1 -1,-2 1,-2z" />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Challenge;
