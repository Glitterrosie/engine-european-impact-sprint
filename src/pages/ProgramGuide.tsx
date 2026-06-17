import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import esprintLogo from "@/assets/esprint-logo-white.svg";

interface Section {
  id: string;
  title: string;
  children?: { id: string; title: string }[];
}

const sections: Section[] = [
  { id: "welcome", title: "Welcome to the European Impact Sprint 2026!" },
  {
    id: "travel-logistics",
    title: "Travel & Logistics",
    children: [
      { id: "travel-policy", title: "Travel Policy & Reimbursement" },
      { id: "weather", title: "Weather Forecast" },
      { id: "packing", title: "Packing List" },
      { id: "staying-longer", title: "Staying Longer in Berlin? What to do" },
    ],
  },
  {
    id: "program-schedule",
    title: "Program Schedule",
    children: [
      { id: "mon-2408", title: "Monday 24.08" },
      { id: "tue-2508", title: "Tuesday 25.08" },
      { id: "wed-2608", title: "Wednesday 26.08" },
      { id: "thu-2708", title: "Thursday 27.08" },
      { id: "fri-2808", title: "Friday 28.08" },
    ],
  },
  {
    id: "camp-info",
    title: "Camp Information",
    children: [
      { id: "camp-map", title: "Camp Map" },
      { id: "camp-rules", title: "Camp Rules" },
      { id: "code-of-conduct", title: "Code of Conduct" },
      { id: "activities", title: "Activities" },
    ],
  },
  {
    id: "community",
    title: "Community & Network",
    children: [
      { id: "team", title: "Team" },
      { id: "lead-coaches", title: "Lead Coaches" },
      { id: "speakers", title: "Speakers" },
      { id: "participants", title: "Participants" },
      { id: "emergencies", title: "Emergencies" },
    ],
  },
];

const Placeholder = ({ label = "Content coming soon" }: { label?: string }) => (
  <div className="rounded-xl border-2 border-dashed border-white/30 bg-white/5 px-5 py-6 text-white/60 text-sm italic">
    {label}
  </div>
);

const weatherDays = [
  { day: "Tuesday 25 Aug", icon: "☀️", temp: "22° | 11°" },
  { day: "Wednesday 26 Aug", icon: "☀️", temp: "22° | 11°" },
  { day: "Thursday 27 Aug", icon: "☀️", temp: "22° | 14°" },
  { day: "Friday 28 Aug", icon: "☀️", temp: "22° | 14°" },
];

const days = [
  { id: "mon-2408", title: "Monday 24.08" },
  { id: "tue-2508", title: "Tuesday 25.08" },
  { id: "wed-2608", title: "Wednesday 26.08" },
  { id: "thu-2708", title: "Thursday 27.08" },
  { id: "fri-2808", title: "Friday 28.08" },
];

const teamRoles = ["Essam Sharaf", "Lisa Jeller", "Hendrik Laßör"];

const ProgramGuide = () => {
  const [activeId, setActiveId] = useState<string>("welcome");

  useEffect(() => {
    const allIds = sections.flatMap((s) => [s.id, ...(s.children?.map((c) => c.id) ?? [])]);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <title>Program Guide</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <img
            src={esprintLogo}
            alt="European Impact Sprint"
            className="w-48 md:w-64 mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          />
          <h1 className="font-display font-black text-4xl md:text-6xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] mb-10">
            European Impact Sprint 2026 — Program Guide
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
            {/* Sidebar nav */}
            <aside className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
              <nav className="rounded-2xl bg-esprint-darkblue/80 backdrop-blur-xl border border-white/10 p-4 text-sm">
                <ul className="space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollTo(s.id)}
                        className={`block w-full text-left px-3 py-1.5 rounded-md font-semibold transition-colors ${
                          activeId === s.id
                            ? "bg-white/15 text-white"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {s.title}
                      </button>
                      {s.children && (
                        <ul className="ml-3 mt-1 space-y-0.5 border-l border-white/10 pl-2">
                          {s.children.map((c) => (
                            <li key={c.id}>
                              <button
                                onClick={() => scrollTo(c.id)}
                                className={`block w-full text-left px-3 py-1 rounded-md text-xs transition-colors ${
                                  activeId === c.id
                                    ? "bg-white/15 text-white"
                                    : "text-white/60 hover:text-white hover:bg-white/10"
                                }`}
                              >
                                {c.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <main className="space-y-12 text-white">
              <section id="welcome" className="rounded-2xl bg-esprint-cream/95 text-esprint-darkblue p-6 md:p-8 scroll-mt-24">
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
                  Welcome to the European Impact Sprint 2026!
                </h2>
                <p className="leading-relaxed">
                  We are super excited to welcome you to the first European Impact Sprint hosted
                  by the Hasso-Plattner Institute in Potsdam/Berlin.
                </p>
                <div className="mt-4 rounded-xl border-l-4 border-esprint-red bg-white/70 px-4 py-3 text-sm">
                  <p className="font-semibold mb-1">❗ Here is how we suggest you use this guide</p>
                  <ul className="list-disc pl-5 opacity-80">
                    <li>Placeholder list item</li>
                  </ul>
                </div>
              </section>

              {/* Travel & Logistics */}
              <section id="travel-logistics" className="scroll-mt-24">
                <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                  Travel & Logistics
                </h2>
                <div className="space-y-8">
                  <div id="travel-policy" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Travel Policy & Reimbursement</h3>
                    <Placeholder label="📄 Travel Policy — placeholder" />
                  </div>
                  <div id="weather" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Weather Forecast</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {weatherDays.map((w) => (
                        <div key={w.day} className="rounded-xl bg-white/90 text-esprint-darkblue p-4 text-center">
                          <div className="text-xs font-semibold opacity-70">{w.day}</div>
                          <div className="text-3xl my-2">{w.icon}</div>
                          <div className="text-sm font-semibold">{w.temp}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div id="packing" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Packing List</h3>
                    <Placeholder label="📄 Packing List — placeholder" />
                  </div>
                  <div id="staying-longer" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Staying Longer in Berlin? What to do</h3>
                    <p className="text-white/80 mb-3">
                      Insights from different organizing team members about favorite things to do in Berlin.
                    </p>
                    <Placeholder />
                  </div>
                </div>
              </section>

              {/* Program Schedule */}
              <section id="program-schedule" className="scroll-mt-24">
                <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                  Program Schedule
                </h2>
                <div className="space-y-6">
                  {days.map((d) => (
                    <div key={d.id} id={d.id} className="scroll-mt-24">
                      <h3 className="font-display font-bold text-xl text-white mb-3">{d.title}</h3>
                      <Placeholder label="Schedule details — placeholder" />
                    </div>
                  ))}
                </div>
              </section>

              {/* Camp Information */}
              <section id="camp-info" className="scroll-mt-24">
                <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                  Camp Information
                </h2>
                <div className="space-y-8">
                  <div id="camp-map" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Camp Map</h3>
                    <Placeholder label="🗺️ Camp Map — placeholder" />
                  </div>
                  <div id="camp-rules" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Camp Rules</h3>
                    <Placeholder label="📄 Camp Rules — placeholder" />
                  </div>
                  <div id="code-of-conduct" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Code of Conduct</h3>
                    <Placeholder label="📄 Code of Conduct — placeholder" />
                  </div>
                  <div id="activities" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Activities</h3>
                    <Placeholder label="📄 Camp Activities — placeholder" />
                  </div>
                </div>
              </section>

              {/* Community & Network */}
              <section id="community" className="scroll-mt-24">
                <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                  Community & Network
                </h2>
                <div className="space-y-8">
                  <div id="team" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {teamRoles.map((name) => (
                        <div key={name} className="rounded-xl bg-white/90 text-esprint-darkblue p-4">
                          <div className="font-semibold">{name}</div>
                          <div className="text-xs opacity-70 mt-1">Can help with: —</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div id="lead-coaches" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Lead Coaches</h3>
                    <Placeholder />
                  </div>
                  <div id="speakers" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Speakers</h3>
                    <Placeholder />
                  </div>
                  <div id="participants" className="scroll-mt-24">
                    <h3 className="font-display font-bold text-xl text-white mb-3">Participants</h3>
                    <Placeholder />
                  </div>
                  <div id="emergencies" className="scroll-mt-24">
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
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramGuide;
