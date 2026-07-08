import { Helmet } from "react-helmet-async";
import { Calendar, MapPin, Users, Globe, Mail, ArrowRight, Tent } from "lucide-react";
import esprintLogo from "@/assets/esprint-logo-white.svg";

const timeline = [
  {
    date: "12 July 2026",
    title: "Application Deadline",
    desc: "Send your CV and a short motivation letter to impact-sprint@engine.hpi.de.",
  },
  {
    date: "15 July 2026",
    title: "Selected as Participant",
    desc: "Selected participants will be notified and receive more information.",
  },
  {
    date: "3 August 2026",
    title: "Virtual Kick-Off",
    desc: "Meet fellow participants and facilitators during our online intro call at 4pm.",
  },
  {
    date: "25–28 August 2026",
    title: "European Impact Sprint",
    desc: "Four days on campus with 60 students from across Europe — including glamping tents by the Main Building.",
  },
];

const details = [
  { icon: Calendar, label: "Dates", value: "25–28 August 2026 (4 days)" },
  { icon: MapPin, label: "Location", value: "Hasso Plattner Institute, Potsdam" },
  { icon: Users, label: "Participants", value: "60 Bachelor students from 30 European universities" },
  { icon: Globe, label: "Language", value: "English" },
];

const HpiStudents = () => {
  return (
    <>
      <Helmet>
        <title>European Impact Sprint — For HPI Students</title>
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
            HPI Bachelor students can now apply for the first European Impact Sprint, 25–28 August 2026 at HPI Campus
          </h1>

          <div className="space-y-6">
            {/* What is the program */}
            <section className="rounded-2xl bg-esprint-cream/95 text-esprint-darkblue p-6 md:p-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
                What is the European Impact Sprint?
              </h2>
              <p className="leading-relaxed mb-4">
                The European Impact Sprint is an intensive four-day innovation program
                hosted by the Hasso Plattner Institute (HPI) in Potsdam/Berlin from
                25–28th August 2026. The program bring together 60 outstanding Computer
                Science students from 30 European countries, from Reykjavík in the north
                to Crete in the south, representing leading universities such as UCL,
                ETH Zurich and many others.
              </p>
              <p className="leading-relaxed">
                Throughout the program, participants will work in diverse international
                teams, develop and prototype new ideas, and engage with talented peers
                from across Europe.
              </p>

              <div className="mt-5 rounded-xl bg-esprint-purple/10 border border-esprint-purple/30 p-4 flex items-start gap-3">
                <Tent className="h-6 w-6 shrink-0 text-esprint-purple mt-0.5" />
                <div>
                  <div className="font-display font-bold">Glamping-style experience on campus</div>
                  <p className="text-sm text-esprint-darkblue/80 mt-1">
                    Sleep under the stars in glamping tents right by the HPI Main Building —
                    a truly unique way to experience campus alongside 60 students from across Europe.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="rounded-xl bg-white/90 border border-esprint-darkblue/10 p-4 flex items-start gap-3"
                  >
                    <d.icon className="h-5 w-5 mt-0.5 shrink-0 text-esprint-purple" />
                    <div>
                      <div className="text-xs font-semibold opacity-70">{d.label}</div>
                      <div className="text-sm font-bold mt-0.5">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline */}
            <section className="rounded-2xl bg-esprint-cream/95 text-esprint-darkblue p-6 md:p-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-5">
                When is the program?
              </h2>
              <ol className="relative border-l-2 border-esprint-purple/30 pl-6 space-y-6">
                {timeline.map((t) => (
                  <li key={t.title} className="relative">
                    <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-esprint-purple ring-4 ring-esprint-cream" />
                    <div className="text-esprint-purple font-bold text-sm">{t.date}</div>
                    <div className="font-display font-bold text-lg mt-0.5">{t.title}</div>
                    <p className="text-esprint-darkblue/80 text-sm mt-1">{t.desc}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* How to apply */}
            <section className="rounded-2xl bg-esprint-cream/95 text-esprint-darkblue p-6 md:p-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
                How can HPI students apply?
              </h2>
              <p className="leading-relaxed mb-4">
                All HPI bachelor students can apply. You need to be comfortable working in
                English and collaborating in multicultural teams. No prior entrepreneurial
                experience required but being passionate about developing ideas tackling
                Europe's digital and tech sovereignty is a plus!
              </p>

              <ol className="space-y-3 mb-6">
                {[
                  "Prepare your CV and a short motivation letter explaining why you'd like to participate and how you'd contribute to this international experience.",
                  "Email both documents to impact-sprint@engine.hpi.de by 12 July 2026.",
                  "Selected participants will be notified by 15 July 2026 with next steps.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="h-7 w-7 rounded-full bg-esprint-purple text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>

              <a
                href="mailto:impact-sprint@engine.hpi.de?subject=European%20Impact%20Sprint%202026%20—%20HPI%20Application"
                className="group inline-flex items-center gap-3 rounded-full bg-esprint-purple text-white font-bold px-6 py-3 hover:bg-esprint-purple/90 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email your application
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-xs text-esprint-darkblue/70 mt-3">
                Deadline: <strong>12 July 2026</strong>
              </p>
            </section>

            {/* Questions */}
            <section className="rounded-2xl bg-esprint-cream/95 text-esprint-darkblue p-6 md:p-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
                Got questions?
              </h2>
              <p className="leading-relaxed">
                We're here to help every step of the way. Reach out any time at{" "}
                <a
                  href="mailto:impact-sprint@engine.hpi.de"
                  className="text-esprint-purple font-semibold underline underline-offset-2"
                >
                  impact-sprint@engine.hpi.de
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HpiStudents;
