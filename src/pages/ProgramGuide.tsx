import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import esprintLogo from "@/assets/esprint-logo-white.svg";

interface SectionDef {
  id: string;
  title: string;
}

const weatherDays = [
  { day: "Tuesday 25 Aug", icon: "☀️", temp: "22° | 11°" },
  { day: "Wednesday 26 Aug", icon: "☀️", temp: "22° | 11°" },
  { day: "Thursday 27 Aug", icon: "☀️", temp: "22° | 14°" },
  { day: "Friday 28 Aug", icon: "☀️", temp: "22° | 14°" },
];

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
            European Impact Sprint 2026 — Program Guide
          </h1>

          <div className="space-y-6 text-white">
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
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    Travel Policy & Reimbursement
                  </h3>
                  <Placeholder label="📄 Travel Policy — placeholder" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
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
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    Packing List
                  </h3>
                  <Placeholder label="📄 Packing List — placeholder" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    Staying Longer in Berlin? What to do
                  </h3>
                  <p className="text-white/80 mb-3">
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
                    <h3 className="font-display font-bold text-xl text-white mb-3">
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
                  <h3 className="font-display font-bold text-xl text-white mb-3">Camp Map</h3>
                  <Placeholder label="🗺️ Camp Map — placeholder" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">Camp Rules</h3>
                  <Placeholder label="📄 Camp Rules — placeholder" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    Code of Conduct
                  </h3>
                  <Placeholder label="📄 Code of Conduct — placeholder" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">Activities</h3>
                  <Placeholder label="📄 Camp Activities — placeholder" />
                </div>
              </div>
            </AccordionSection>

            {/* Community & Network */}
            <AccordionSection title="Community & Network">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">Team</h3>
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
                  <h3 className="font-display font-bold text-xl text-white mb-3">Lead Coaches</h3>
                  <Placeholder />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">Speakers</h3>
                  <Placeholder />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">Participants</h3>
                  <Placeholder />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">Emergencies</h3>
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
