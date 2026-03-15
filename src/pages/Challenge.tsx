import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import challengeBrief from "@/assets/challenge-brief.jpg";

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
          <h2 className="font-display font-bold text-2xl text-primary-foreground mb-2">Partner Universities</h2>
          <p className="text-primary-foreground/60 mb-8">30 universities across Europe — coming soon</p>
          <div className="max-w-3xl mx-auto">
            <svg viewBox="0 0 800 600" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified Europe outline */}
              <path
                d="M400,80 L420,75 L450,90 L470,85 L500,100 L520,95 L540,110 L560,120 L570,140 L580,160 L590,180 L585,200 L575,220 L560,235 L550,250 L555,270 L565,290 L570,310 L560,330 L545,345 L530,355 L515,360 L500,370 L485,380 L470,385 L460,395 L445,400 L430,395 L415,385 L400,380 L385,385 L370,395 L355,400 L340,395 L325,385 L310,375 L295,365 L280,355 L265,345 L250,330 L240,315 L235,300 L230,280 L225,260 L220,240 L225,220 L235,200 L245,185 L260,170 L275,160 L290,150 L300,135 L310,120 L325,110 L340,100 L355,92 L370,85 L385,82 Z"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                fill="hsl(var(--primary-foreground))"
                fillOpacity="0.05"
              />
              {/* Scandinavia */}
              <path
                d="M380,30 L390,25 L405,30 L415,40 L420,55 L415,70 L400,80 L385,82 L375,75 L365,60 L360,45 L370,35 Z"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                fill="hsl(var(--primary-foreground))"
                fillOpacity="0.05"
              />
              {/* UK/Ireland */}
              <path
                d="M230,120 L250,110 L265,115 L275,130 L270,150 L255,160 L240,155 L230,140 Z"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                fill="hsl(var(--primary-foreground))"
                fillOpacity="0.05"
              />
              <path
                d="M210,130 L225,125 L230,140 L225,150 L215,148 Z"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                fill="hsl(var(--primary-foreground))"
                fillOpacity="0.05"
              />
              {/* Iberian Peninsula */}
              <path
                d="M240,310 L270,295 L300,300 L310,320 L305,345 L285,360 L260,355 L245,340 L235,325 Z"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                fill="hsl(var(--primary-foreground))"
                fillOpacity="0.05"
              />
              {/* Italy */}
              <path
                d="M400,280 L415,275 L425,290 L430,310 L425,335 L415,355 L405,365 L395,355 L390,335 L385,310 L390,290 Z"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                fill="hsl(var(--primary-foreground))"
                fillOpacity="0.05"
              />
              {/* Eastern Europe */}
              <path
                d="M500,100 L540,110 L570,140 L590,180 L585,220 L570,250 L550,270 L530,260 L510,240 L495,220 L485,200 L480,170 L480,140 L490,120 Z"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                fill="hsl(var(--primary-foreground))"
                fillOpacity="0.05"
              />
              {/* Greece */}
              <path
                d="M490,340 L510,330 L520,345 L515,365 L500,375 L485,370 L480,355 Z"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                fill="hsl(var(--primary-foreground))"
                fillOpacity="0.05"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Challenge;
