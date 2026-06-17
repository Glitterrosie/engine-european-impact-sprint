import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import esprintLogo from "@/assets/esprint-logo-white.svg";

interface SectionDef {
  id: string;
  title: string;
}

// Potsdam coordinates
const POTSDAM = { lat: 52.4009, lon: 13.0591 };
// Event dates (Tue–Fri of the sprint week)
const EVENT_DATES = ["2026-08-25", "2026-08-26", "2026-08-27", "2026-08-28"];

const WEATHER_ICONS: Record<number, string> = {
  0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
  45: "🌫️", 48: "🌫️",
  51: "🌦️", 53: "🌦️", 55: "🌦️",
  61: "🌧️", 63: "🌧️", 65: "🌧️",
  71: "🌨️", 73: "🌨️", 75: "🌨️",
  80: "🌦️", 81: "🌧️", 82: "⛈️",
  95: "⛈️", 96: "⛈️", 99: "⛈️",
};

const formatDay = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

interface WeatherDay {
  day: string;
  icon: string;
  temp: string;
  source: "forecast" | "historical" | "loading";
}

const initialWeather: WeatherDay[] = EVENT_DATES.map((d) => ({
  day: formatDay(d),
  icon: "…",
  temp: "—",
  source: "loading",
}));

const useWeather = () => {
  const [days, setDays] = useState<WeatherDay[]>(initialWeather);
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    const start = EVENT_DATES[0];
    const end = EVENT_DATES[EVENT_DATES.length - 1];
    const daysUntilEvent = Math.ceil(
      (new Date(start).getTime() - Date.now()) / 86_400_000,
    );

    const buildDays = (
      dates: string[],
      codes: number[],
      tmax: number[],
      tmin: number[],
      source: "forecast" | "historical",
    ): WeatherDay[] =>
      EVENT_DATES.map((target) => {
        const idx = dates.indexOf(target) >= 0
          ? dates.indexOf(target)
          : dates.indexOf(target.replace("2026", "2025"));
        const code = codes[idx];
        return {
          day: formatDay(target),
          icon: WEATHER_ICONS[code] ?? "🌡️",
          temp: `${Math.round(tmax[idx])}° | ${Math.round(tmin[idx])}°`,
          source,
        };
      });

    const fetchData = async () => {
      // Forecast only reaches ~16 days
      if (daysUntilEvent <= 16 && daysUntilEvent >= -1) {
        try {
          const url = `https://api.open-meteo.com/v1/forecast?latitude=${POTSDAM.lat}&longitude=${POTSDAM.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&start_date=${start}&end_date=${end}`;
          const res = await fetch(url);
          const json = await res.json();
          if (!cancelled && json?.daily) {
            setDays(
              buildDays(
                json.daily.time,
                json.daily.weather_code,
                json.daily.temperature_2m_max,
                json.daily.temperature_2m_min,
                "forecast",
              ),
            );
            setNote("Live forecast for Potsdam (Open-Meteo).");
          }
        } catch {
          /* fall through to historical */
        }
      } else {
        // Use last year's actuals for the same dates as a reference
        try {
          const ly = (d: string) => d.replace("2026", "2025");
          const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${POTSDAM.lat}&longitude=${POTSDAM.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&start_date=${ly(start)}&end_date=${ly(end)}`;
          const res = await fetch(url);
          const json = await res.json();
          if (!cancelled && json?.daily) {
            setDays(
              buildDays(
                json.daily.time,
                json.daily.weather_code,
                json.daily.temperature_2m_max,
                json.daily.temperature_2m_min,
                "historical",
              ),
            );
            setNote(
              "Reference: same dates in 2025 (Potsdam). Live forecast appears ~2 weeks before the event.",
            );
          }
        } catch {
          if (!cancelled) setNote("Weather data unavailable right now.");
        }
      }
    };

    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  return { days, note };
};

const days: SectionDef[] = [
  { id: "mon-2408", title: "Monday 24.08" },
  { id: "tue-2508", title: "Tuesday 25.08" },
  { id: "wed-2608", title: "Wednesday 26.08" },
  { id: "thu-2708", title: "Thursday 27.08" },
  { id: "fri-2808", title: "Friday 28.08" },
];

const teamRoles = ["Essam Sharaf", "Lisa Jeller", "Hendrik Laßör"];

const Placeholder = ({ label = "Content coming soon" }: { label?: string }) => (
  <div className="rounded-xl border-2 border-dashed border-esprint-darkblue/20 bg-esprint-darkblue/5 px-5 py-6 text-esprint-darkblue/50 text-sm italic">
    {label}
  </div>
);

const AccordionSection = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-esprint-darkblue/10 bg-esprint-cream/95 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/50"
      >
        <h2 className="font-display font-black text-2xl md:text-3xl text-esprint-darkblue">
          {title}
        </h2>
        <ChevronDown
          className={`h-6 w-6 text-esprint-darkblue/70 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 pt-2 border-t border-esprint-darkblue/10">
          {children}
        </div>
      )}
    </div>
  );
};

const ProgramGuide = () => {
  const { days: weatherDays, note: weatherNote } = useWeather();
  return (
    <>
      <Helmet>
        <title>Program Guide</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <img
            src={esprintLogo}
            alt="European Impact Sprint"
            className="w-48 md:w-64 mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          />
          <h1 className="font-display font-black text-4xl md:text-6xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] mb-10">
            Program Guide
          </h1>

          <div className="space-y-6">
            {/* Welcome — always open */}
            <section className="rounded-2xl bg-esprint-cream/95 text-esprint-darkblue p-6 md:p-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
                Welcome to the European Impact Sprint 2026!
              </h2>
              <p className="leading-relaxed">
                We are super excited to welcome you to the first European Impact Sprint hosted
                by the Hasso-Plattner Institute in Potsdam/Berlin.
              </p>
            </section>

            {/* Travel & Logistics */}
            <AccordionSection title="Travel & Logistics">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">
                    Travel Policy & Reimbursement
                  </h3>
                  <Placeholder label="📄 Travel Policy — placeholder" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">
                    Weather Forecast
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {weatherDays.map((w) => (
                      <div
                        key={w.day}
                        className="rounded-xl bg-white/90 text-esprint-darkblue p-4 text-center"
                      >
                        <div className="text-xs font-semibold opacity-70">{w.day}</div>
                        <div className="text-3xl my-2">{w.icon}</div>
                        <div className="text-sm font-semibold">{w.temp}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">
                    Packing List
                  </h3>
                  <Placeholder label="📄 Packing List — placeholder" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">
                    Staying Longer in Berlin? What to do
                  </h3>
                  <p className="text-esprint-darkblue/80 mb-3">
                    Insights from different organizing team members about favorite things to do in Berlin.
                  </p>
                  <Placeholder />
                </div>
              </div>
            </AccordionSection>

            {/* Program Schedule */}
            <AccordionSection title="Program Schedule">
              <div className="space-y-6">
                {days.map((d) => (
                  <div key={d.id}>
                    <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">
                      {d.title}
                    </h3>
                    <Placeholder label="Schedule details — placeholder" />
                  </div>
                ))}
              </div>
            </AccordionSection>

            {/* Camp Information */}
            <AccordionSection title="Camp Information">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">Camp Map</h3>
                  <Placeholder label="🗺️ Camp Map — placeholder" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">Camp Rules</h3>
                  <Placeholder label="📄 Camp Rules — placeholder" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">
                    Code of Conduct
                  </h3>
                  <Placeholder label="📄 Code of Conduct — placeholder" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">Activities</h3>
                  <Placeholder label="📄 Camp Activities — placeholder" />
                </div>
              </div>
            </AccordionSection>

            {/* Community & Network */}
            <AccordionSection title="Community & Network">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {teamRoles.map((name) => (
                      <div
                        key={name}
                        className="rounded-xl bg-white/90 text-esprint-darkblue p-4"
                      >
                        <div className="font-semibold">{name}</div>
                        <div className="text-xs opacity-70 mt-1">Can help with: —</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">Lead Coaches</h3>
                  <Placeholder />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">Speakers</h3>
                  <Placeholder />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">Participants</h3>
                  <Placeholder />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-esprint-darkblue mb-3">Emergencies</h3>
                  <div className="rounded-xl bg-white/90 text-esprint-darkblue p-5 space-y-1 text-sm">
                    <div><span className="font-semibold">Police:</span> 110</div>
                    <div><span className="font-semibold">Fire / Ambulance:</span> 112</div>
                    <div><span className="font-semibold">HPI Security:</span> —</div>
                    <div><span className="font-semibold">Program Managers:</span> —</div>
                    <div><span className="font-semibold">First Aid:</span> —</div>
                  </div>
                </div>
              </div>
            </AccordionSection>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramGuide;
