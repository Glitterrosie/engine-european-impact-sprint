import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Building2, Wine, Camera, ShieldAlert, HelpCircle } from "lucide-react";
import esprintLogo from "@/assets/esprint-logo-white.svg";

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "time",
    title: "Time & Participation",
    icon: Clock,
    body: (
      <ul className="space-y-2 list-disc pl-5 marker:text-esprint-pink">
        <li><span className="font-semibold">Be on time</span> for sessions, meetings, and team activities.</li>
        <li><span className="font-semibold">Participate actively</span>: put phones or laptops away during sessions and team discussions unless needed.</li>
        <li><span className="font-semibold">Notify your team or program managers</span> if you are feeling sick, delayed, or cannot actively participate.</li>
      </ul>
    ),
  },
  {
    id: "teamwork",
    title: "Teamwork & Communication",
    icon: Users,
    body: (
      <ul className="space-y-2 list-disc pl-5 marker:text-esprint-pink">
        <li><span className="font-semibold">Default to kindness & clarity</span>: address issues early, directly, and respectfully.</li>
        <li><span className="font-semibold">Credit fairly</span>: acknowledge contributions in presentations and deliverables.</li>
      </ul>
    ),
  },
  {
    id: "campus",
    title: "Campus & Camp Etiquette",
    icon: Building2,
    body: (
      <ul className="space-y-2 list-disc pl-5 marker:text-esprint-pink">
        <li><span className="font-semibold">Respect HPI campus and spaces</span>: keep rooms clean, return furniture/equipment, and leave no trash behind.</li>
        <li>Quiet hours between <span className="font-semibold">22:00 – 07:00</span> in and around the camp. Keep noise low.</li>
        <li>No smoking is allowed indoors and only in designated outdoor areas.</li>
      </ul>
    ),
  },
  {
    id: "alcohol",
    title: "Alcohol & Substances",
    icon: Wine,
    body: (
      <ul className="space-y-2 list-disc pl-5 marker:text-esprint-pink">
        <li>Alcohol is optional and never required to socialize.</li>
        <li>No intoxication during program hours (on-campus) or in any way that affects others' safety or comfort.</li>
        <li>Illegal drugs and substances are not permitted on-campus at any time, and can lead to criminal persecution.</li>
      </ul>
    ),
  },
  {
    id: "photos",
    title: "Photos, Filming & Social Media",
    icon: Camera,
    body: (
      <ul className="space-y-3 list-disc pl-5 marker:text-esprint-pink">
        <li>
          HPI will be taking photos and videos during the program. The photographs may be published, e.g.
          <ul className="mt-2 space-y-1 list-[circle] pl-5 marker:text-esprint-darkblue/40">
            <li>
              on the HPI homepage ({" "}
              <a
                href="https://www.hpi.de"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-esprint-pink/30 bg-esprint-pink/10 hover:bg-esprint-pink/20 px-2 py-0.5 text-sm font-semibold text-esprint-darkblue transition-colors no-underline"
              >
                www.hpi.de
              </a>
              )
            </li>
            <li>in (print) publications of HPI, such as brochures and study program flyers</li>
            <li>on the HPI social media channels</li>
          </ul>
        </li>
        <li>
          HPI's data protection notice regarding the production and use of photographs and/or film recordings in accordance with Art. 13 DSGVO is available at{" "}
          <a
            href="https://hpi.de/en/data-privacy.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border border-esprint-darkblue/10 bg-white/70 hover:bg-white px-2 py-0.5 text-sm font-semibold transition-colors no-underline"
          >
            hpi.de/en/data-privacy.html
          </a>
          .
        </li>
        <li><span className="font-semibold">Ask and get consent</span> before photographing or recording others.</li>
      </ul>
    ),
  },
  {
    id: "safety",
    title: "Safety",
    icon: ShieldAlert,
    body: (
      <>
        <ul className="space-y-2 list-disc pl-5 marker:text-esprint-pink mb-5">
          <li>Look out for each other and make sure everyone feels safe and is okay.</li>
          <li>If any incident happens, report it immediately and seek help.</li>
        </ul>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Police", value: "110" },
            { label: "Fire / Ambulance", value: "112" },
            { label: "HPI Security", value: "—" },
            { label: "Program Managers", value: "—" },
          ].map((c) => (
            <div key={c.label} className="rounded-xl bg-esprint-darkblue/5 border border-esprint-darkblue/10 p-3">
              <div className="text-xs font-semibold opacity-70">{c.label}</div>
              <div className="text-lg font-bold mt-1">{c.value}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "unsure",
    title: "If You Are Unsure",
    icon: HelpCircle,
    body: (
      <p className="leading-relaxed">
        When in doubt, reach out to the Program Managers or the Awareness team. We would rather answer a "small question" than fix a big problem later.
      </p>
    ),
  },
];

const CampRules = () => {
  return (
    <>
      <Helmet>
        <title>Camp Rules — European Impact Sprint</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <img
            src={esprintLogo}
            alt="European Impact Sprint"
            className="w-48 md:w-64 mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          />

          <Link
            to="/program-guide"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Program Guide
          </Link>

          <h1 className="font-display font-black text-4xl md:text-6xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] mb-8">
            Camp Rules
          </h1>

          {/* Intro / TOC */}
          <section className="rounded-2xl bg-esprint-cream/95 text-esprint-darkblue p-6 md:p-8 mb-6">
            <p className="leading-relaxed mb-5">
              A few shared expectations to make sure everyone has a safe, productive, and enjoyable
              Sprint. Please read them before arrival.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 rounded-lg border border-esprint-darkblue/10 bg-white/70 hover:bg-white px-3 py-2 text-sm font-semibold transition-colors"
                >
                  <s.icon className="h-4 w-4 text-esprint-pink" />
                  {s.title}
                </a>
              ))}
            </div>
          </section>

          {/* Sections */}
          <div className="space-y-5">
            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="rounded-2xl bg-esprint-cream/95 text-esprint-darkblue p-6 md:p-8 scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-esprint-pink/15 p-2.5">
                    <s.icon className="h-5 w-5 text-esprint-pink" />
                  </div>
                  <h2 className="font-display font-black text-2xl md:text-3xl">
                    {s.title}
                  </h2>
                </div>
                <div className="text-esprint-darkblue/90 leading-relaxed">{s.body}</div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CampRules;
