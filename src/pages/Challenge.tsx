import { useState } from "react";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import PageLayout from "@/components/PageLayout";
import ProgramSchedule from "@/components/ProgramSchedule";
import challengeBrief from "@/assets/challenge-brief.jpg";
import hpiLogoWhite from "@/assets/hpi-logo-white.png";
import tecnicoLisboaWhite from "@/assets/tecnico-lisboa-white.png";
import tuWienWhite from "@/assets/tu-wien-white.png";
import charlesUniversityWhite from "@/assets/charles-university-white.png";
import tartuWhite from "@/assets/tartu-white.png";
import creteWhite from "@/assets/crete-white.png";
import obudaWhite from "@/assets/obuda-white.png";
import ktuWhite from "@/assets/ktu-white.png";

const EUROPE_GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const UNIVERSITY_PARTNERS: Record<string, { university: string; city: string; country: string; logo: string; coordinates: [number, number] }> = {
  Portugal: {
    university: "Instituto Superior Técnico (Universidade de Lisboa)",
    city: "Lisbon",
    country: "Portugal",
    logo: tecnicoLisboaWhite,
    coordinates: [-9.14, 38.74],
  },
  Austria: {
    university: "TU Wien",
    city: "Vienna",
    country: "Austria",
    logo: tuWienWhite,
    coordinates: [16.3705, 48.1965],
  },
  Czechia: {
    university: "Charles University",
    city: "Prague",
    country: "Czech Republic",
    logo: charlesUniversityWhite,
    coordinates: [14.4378, 50.0755],
  },
  Estonia: {
    university: "University of Tartu",
    city: "Tartu",
    country: "Estonia",
    logo: tartuWhite,
    coordinates: [26.7290, 58.3776],
  },
  Greece: {
    university: "University of Crete",
    city: "Rethymnon/Heraklion (Crete)",
    country: "Greece",
    logo: creteWhite,
    coordinates: [24.4730, 35.3650],
  },
  Hungary: {
    university: "University of Óbuda",
    city: "Budapest",
    country: "Hungary",
    logo: obudaWhite,
    coordinates: [19.0402, 47.4979],
  },
  Lithuania: {
    university: "Kaunas University of Technology",
    city: "Kaunas",
    country: "Lithuania",
    logo: ktuWhite,
    coordinates: [23.9036, 54.8985],
  },
};

const EU27_COUNTRIES = [
  "Austria","Belgium","Bulgaria","Croatia","Cyprus","Czech Republic","Czechia",
  "Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Ireland",
  "Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Poland",
  "Portugal","Romania","Slovakia","Slovenia","Spain","Sweden"
];
const OTHER_EUROPEAN = [
  "Albania","Andorra","Belarus","Bosnia and Herzegovina","Iceland","Kosovo",
  "Moldova","Monaco","Montenegro","North Macedonia","Norway","San Marino",
  "Serbia","Switzerland","Ukraine","United Kingdom","Vatican City","Turkey","Georgia"
];

const infoItems = [
  { label: "Date", value: "25–28th August 2026", bg: "bg-esprint-orange", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
  { label: "Location", value: "Hasso Plattner Institute, Potsdam, Germany (30 min from Berlin airport and train station)", link: "https://share.google/7SDAwRHNbxiPhAaWK", bg: "bg-esprint-pink", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
  { label: "Participants", value: "60 Bachelor students in computer science from 30 countries across Europe, divided into international teams of 5.", bg: "bg-esprint-purple", text: "text-primary-foreground", accent: "border-primary-foreground/20" },
  { label: "Accommodation", value: "Shared glamping tents on campus", bg: "bg-esprint-red", text: "text-primary-foreground", accent: "border-primary-foreground/20" },
  { label: "Language", value: "English", bg: "bg-esprint-cream", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/10" },
  { label: "Cost", value: "Program participation, accommodation and meals are free of charge for all participants. In addition, a 200 € travel stipend will be granted to participants to cover your travel costs to Berlin and back.", bg: "bg-esprint-darkblue", text: "text-primary-foreground", accent: "border-primary-foreground/10" },
  { label: "Schedule", value: "The European Impact Sprint is a 4-day full time program, featuring on-site workshops during the day (ca. 9 am – 6 pm) as well as community activities during the evenings to connect with other participants. The detailed agenda will be shared at the kick-off in July.", bg: "bg-esprint-orange", text: "text-esprint-darkblue", accent: "border-esprint-darkblue/30" },
];

const Challenge = () => {
  const [isHpiHovered, setIsHpiHovered] = useState(false);
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  return (
    <PageLayout title="The Challenge" noPadBottom>
      <div className="flex-1 grid lg:grid-cols-2 gap-6 items-stretch">
        {/* Program Brief */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-esprint-red rounded-2xl shadow-xl p-8 md:p-10 flex flex-col h-full"
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

        {/* Key Information */}
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
              <div className="px-5 md:px-6 py-4 flex items-center min-w-0 flex-1">
                <p className="text-sm leading-relaxed opacity-90">{item.value}</p>
              </div>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="px-4 py-4 flex items-center shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Partner Universities Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-esprint-darkblue rounded-2xl p-8 md:p-10 text-center shadow-xl col-span-full"
        >
          <h2 className="font-display font-bold text-2xl text-primary-foreground mb-8">Partner Universities Coming Soon</h2>
          <div className="max-w-2xl mx-auto">
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
                  geographies.map((geo) => {
                    const name = geo.properties.name;
                    const isEU = EU27_COUNTRIES.includes(name);
                    const isOther = OTHER_EUROPEAN.includes(name);
                    if (!isEU && !isOther) return null;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isEU ? "hsl(var(--primary-foreground) / 0.08)" : "hsl(var(--primary-foreground) / 0.03)"}
                        stroke={isEU ? "hsl(var(--primary-foreground) / 0.3)" : "hsl(var(--primary-foreground) / 0.1)"}
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: isEU ? "hsl(var(--primary-foreground) / 0.15)" : "hsl(var(--primary-foreground) / 0.05)", outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
              <Marker coordinates={[13.12525, 52.392528]}>
                <g
                  onMouseEnter={() => setIsHpiHovered(true)}
                  onMouseLeave={() => setIsHpiHovered(false)}
                  className="cursor-pointer"
                >
                  <circle r={6} fill="hsl(var(--esprint-pink))" stroke="hsl(var(--primary-foreground))" strokeWidth={1.5} />
                  <circle r={2.5} fill="hsl(var(--primary-foreground))" />

                  {isHpiHovered && (
                    <g transform="translate(0,-100)">
                      <rect x={-110} y={-30} width={220} height={110} rx={14} fill="hsl(var(--esprint-darkblue))" stroke="hsl(var(--primary-foreground) / 0.35)" strokeWidth={0.6} />
                      <image href={hpiLogoWhite} x={-48} y={-22} width={96} height={28} preserveAspectRatio="xMidYMid meet" />
                      <foreignObject x={-100} y={14} width={200} height={70}>
                        <div
                          style={{
                            color: "white",
                            fontSize: "9px",
                            lineHeight: 1.35,
                            fontFamily: "inherit",
                            wordWrap: "break-word",
                          }}
                        >
                          <div style={{ marginBottom: 4, fontWeight: "bold" }}>Hasso Plattner Institute</div>
                          <div style={{ marginBottom: 4 }}><strong>Country:</strong> Germany</div>
                          <div><strong>City:</strong> Potsdam</div>
                        </div>
                      </foreignObject>
                    </g>
                  )}
                </g>
              </Marker>
              {Object.entries(UNIVERSITY_PARTNERS).map(([key, data]) => (
                <Marker key={key} coordinates={data.coordinates}>
                  <g
                    onMouseEnter={() => setHoveredPartner(key)}
                    onMouseLeave={() => setHoveredPartner(null)}
                    className="cursor-pointer"
                  >
                    <circle r={6} fill="hsl(var(--esprint-orange))" stroke="hsl(var(--primary-foreground))" strokeWidth={1.5} />
                    <circle r={2.5} fill="hsl(var(--primary-foreground))" />
                    {hoveredPartner === key && (
                      <g transform="translate(0,-100)">
                        <rect
                          x={-110}
                          y={-30}
                          width={220}
                          height={110}
                          rx={14}
                          fill="hsl(var(--esprint-darkblue))"
                          stroke="hsl(var(--esprint-orange) / 0.5)"
                          strokeWidth={0.6}
                        />
                        <image href={data.logo} x={-48} y={-22} width={96} height={28} preserveAspectRatio="xMidYMid meet" />
                        <foreignObject x={-100} y={14} width={200} height={70}>
                          <div
                            style={{
                              color: "white",
                              fontSize: "9px",
                              lineHeight: 1.35,
                              fontFamily: "inherit",
                              wordWrap: "break-word",
                            }}
                          >
                            <div style={{ marginBottom: 4, fontWeight: "bold" }}>{data.university}</div>
                            <div style={{ marginBottom: 4 }}><strong>Country:</strong> {data.country}</div>
                            <div><strong>City:</strong> {data.city}</div>
                          </div>
                        </foreignObject>
                      </g>
                    )}
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </motion.div>

        {/* Program Schedule */}
        <div className="col-span-full">
          <ProgramSchedule />
        </div>
      </div>
    </PageLayout>
  );
};

export default Challenge;
