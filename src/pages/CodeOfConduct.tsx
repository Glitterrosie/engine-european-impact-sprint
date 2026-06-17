import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Shield,
  MessageCircle,
  Megaphone,
  AlertTriangle,
  HandHeart,
} from "lucide-react";
import esprintLogo from "@/assets/esprint-logo-white.svg";

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "values",
    title: "Our Values",
    icon: Heart,
    body: (
      <div className="space-y-4 leading-relaxed">
        <p>
          The HPI stands for tolerance, respect, and openness. Discrimination,
          harassment, or misconduct of any kind has no place on our campus.
        </p>
        <p>
          We ask all participants to adhere to the following Code of Conduct to
          ensure a respectful, inclusive and enjoyable experience at European
          Impact Sprint for everyone.
        </p>
      </div>
    ),
  },
  {
    id: "core",
    title: "Core Principles",
    icon: Shield,
    body: (
      <ul className="space-y-3 list-disc pl-5 marker:text-esprint-pink">
        <li>
          <span className="font-semibold">Respect for All:</span> Treat
          everyone with respect, regardless of race, accent, religion, age,
          nationality, gender, sexual orientation, or other personal traits.
        </li>
        <li>
          <span className="font-semibold">Inclusivity:</span> Collaborate
          inclusively and embrace working with others while valuing their
          diverse personal traits.
        </li>
        <li>
          <span className="font-semibold">Safety:</span> Foster the physical
          and emotional safety of all by maintaining an environment free of
          threats and assaults.
        </li>
        <li>
          <span className="font-semibold">Appropriate Behavior:</span> Use
          respectful and appropriate language and behavior that everyone can
          find suitable and polite.
        </li>
        <li>
          <span className="font-semibold">Personal Boundaries:</span> Respect
          personal space and accept a "NO" as a definitive refusal of specific
          behaviors.
        </li>
      </ul>
    ),
  },
  {
    id: "communication",
    title: "Communication & Media",
    icon: MessageCircle,
    body: (
      <ul className="space-y-3 list-disc pl-5 marker:text-esprint-pink">
        <li>
          <span className="font-semibold">Consent for Media:</span> Respect
          preferences of others regarding photography, filming, or recording by
          obtaining clear consent beforehand.
        </li>
        <li>
          <span className="font-semibold">Positive Interaction:</span> Engage
          with work and experiences of others in a positive and supportive
          manner, avoiding sarcasm and irony.
        </li>
        <li>
          <span className="font-semibold">Constructive Feedback:</span>{" "}
          Provide and welcome constructive feedback, being mindful of its
          potential impact on others.
        </li>
      </ul>
    ),
  },
  {
    id: "accountability",
    title: "Accountability",
    icon: Megaphone,
    body: (
      <ul className="space-y-3 list-disc pl-5 marker:text-esprint-pink">
        <li>
          <span className="font-semibold">Support and Stand Up:</span>{" "}
          Advocate against violations of this Code of Conduct and support
          others in doing so, fostering a spirit of respect within the
          community.
        </li>
        <li>
          <span className="font-semibold">Reporting and Accountability:</span>{" "}
          Report any violations of this Code of Conduct to Program Managers or
          the Awareness Team. Incidents can also be reported anonymously. All
          reports will be handled confidentially and promptly.
        </li>
      </ul>
    ),
  },
  {
    id: "consequences",
    title: "Consequences",
    icon: AlertTriangle,
    body: (
      <p className="leading-relaxed">
        Participants violating this Code of Conduct may be asked to leave the
        program without a refund at the sole discretion of the event organizers
        and may also be banned from attending future HPI events or programs.
      </p>
    ),
  },
  {
    id: "closing",
    title: "Thank You",
    icon: HandHeart,
    body: (
      <p className="leading-relaxed">
        Thank you for contributing to an atmosphere that reflects the
        tolerance, respect, and openness that define HPI. Let's celebrate
        together — safely and responsibly.
      </p>
    ),
  },
];

const CodeOfConduct = () => {
  return (
    <>
      <Helmet>
        <title>Code of Conduct — European Impact Sprint</title>
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
            Code of Conduct
          </h1>

          {/* Intro / TOC */}
          <section className="rounded-2xl bg-esprint-cream/95 text-esprint-darkblue p-6 md:p-8 mb-6">
            <p className="leading-relaxed mb-5">
              A shared commitment to respect, inclusion, and safety so that
              everyone can fully enjoy the Sprint.
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
                <div className="text-esprint-darkblue/90 leading-relaxed">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeOfConduct;
