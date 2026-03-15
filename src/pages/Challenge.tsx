import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import PageLayout from "@/components/PageLayout";
import ProgramSchedule from "@/components/ProgramSchedule";
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
      <div className="flex-1 grid lg:grid-cols-2 gap-6 items-stretch">
        {/* Program Brief – transparent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 md:p-10 pb-0 flex flex-col h-full"
        >
          <h2 className="font-display font-bold text-xl text-primary-foreground mb-4 uppercase tracking-wide border-b-2 border-esprint-purple pb-3">
            Program Brief
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            The European Impact Sprint is an intensive innovation program bringing together 60 Computer Science students from 30 European countries. Over the course of four days in Berlin, you will collaborate in cross-border teams to develop technical solutions for the continent's most pressing challenges. The 2026 focus will be on...
          </p>
          <div className="mt-10 rounded-xl overflow-hidden flex-1 min-h-[200px]">
            <img src={challengeBrief} alt="Students collaborating at HPI campus" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Key Information – colored rows */}
        <div className="rounded-2xl overflow-hidden shadow-xl flex flex-col h-full">
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
          <div className="max-w-4xl mx-auto">
            <ComposableMap
              projection="geoAzimuthalEqualArea"
              projectionConfig={{
                rotate: [-10, -52, 0],
                scale: 700,
              }}
              width={800}
              height={550}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={EUROPE_GEO_URL}>
                {({ geographies }) =>
                  geographies
                    .filter((geo) => EUROPE_COUNTRIES.includes(geo.properties.name))
                    .map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="hsl(var(--primary-foreground) / 0.08)"
                        stroke="hsl(var(--primary-foreground) / 0.3)"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "hsl(var(--primary-foreground) / 0.15)", outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                }
              </Geographies>
            </ComposableMap>
          </div>
        </motion.div>

        {/* Program Schedule */}
        <div className="col-span-full mt-4">
          <ProgramSchedule />
        </div>
      </div>
    </PageLayout>
  );
};

export default Challenge;
