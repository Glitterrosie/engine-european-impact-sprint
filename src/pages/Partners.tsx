import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import hpiLogo from "@/assets/hpi-logo.svg";
import hpiEngineLogo from "@/assets/hpi-engine-white.svg";
import sapLogoWhite from "@/assets/sap-logo-white.png";
import hpiCampus1 from "@/assets/hpi-campus-1.jpg";
import hpiCampus2 from "@/assets/hpi-campus-2.jpg";
import hpiCampus3 from "@/assets/hpi-campus-3.jpg";
import hpiEngine1 from "@/assets/hpi-engine-1.jpg";
import hpiEngine2 from "@/assets/hpi-engine-2.jpg";
import hpiEngine3 from "@/assets/hpi-engine-3.jpg";
import tuWienWhite from "@/assets/tu-wien-white.png";
import charlesUniversityWhite from "@/assets/charles-university-white.png";
import tartuWhite from "@/assets/tartu-white.png";
import creteWhite from "@/assets/crete-white.png";
import obudaWhite from "@/assets/obuda-white.png";
import liechtensteinWhite from "@/assets/liechtenstein-white.svg";
import ktuWhite from "@/assets/ktu-white.png";
import luxembourgWhite from "@/assets/luxembourg-white.png";
import warsawWhite from "@/assets/warsaw-white.png";
import babesBolyaiWhite from "@/assets/babes-bolyai-white.png";
import maltaWhite from "@/assets/malta-white.png";
import ljubljanaWhite from "@/assets/ljubljana-white.png";
import twenteWhite from "@/assets/twente-white.png";
import zagrebWhite from "@/assets/zagreb-white.png";
import aaltoWhite from "@/assets/aalto-white.png";
import tecnicoLisboaWhite from "@/assets/tecnico-lisboa-white.png";
import comeniusWhite from "@/assets/comenius-white.png";
import uabWhite from "@/assets/uab-white.png";
import ethWhite from "@/assets/eth-white.png";

const UNIVERSITY_PARTNERS_LIST = [
  { university: "TU Wien", city: "Vienna", country: "Austria", logo: tuWienWhite },
  { university: "Charles University", city: "Prague", country: "Czech Republic", logo: charlesUniversityWhite },
  { university: "University of Zagreb", city: "Zagreb", country: "Croatia", logo: zagrebWhite },
  { university: "University of Tartu", city: "Tartu", country: "Estonia", logo: tartuWhite },
  { university: "University of Crete", city: "Rethymnon/Heraklion (Crete)", country: "Greece", logo: creteWhite },
  { university: "University of Óbuda", city: "Budapest", country: "Hungary", logo: obudaWhite },
  { university: "University of Liechtenstein", city: "Vaduz", country: "Liechtenstein", logo: liechtensteinWhite },
  { university: "Kaunas University of Technology", city: "Kaunas", country: "Lithuania", logo: ktuWhite },
  { university: "University of Luxembourg", city: "Luxembourg", country: "Luxembourg", logo: luxembourgWhite },
  { university: "University of Malta", city: "Msida", country: "Malta", logo: maltaWhite },
  { university: "University of Twente", city: "Enschede", country: "Netherlands", logo: twenteWhite },
  { university: "University of Warsaw", city: "Warsaw", country: "Poland", logo: warsawWhite },
  { university: "Instituto Superior Técnico (Universidade de Lisboa)", city: "Lisbon", country: "Portugal", logo: tecnicoLisboaWhite },
  { university: "Babeș-Bolyai University", city: "Cluj-Napoca", country: "Romania", logo: babesBolyaiWhite },
  { university: "University of Ljubljana", city: "Ljubljana", country: "Slovenia", logo: ljubljanaWhite },
  { university: "Comenius University", city: "Bratislava", country: "Slovakia", logo: comeniusWhite },
  { university: "Universitat Autònoma de Barcelona", city: "Barcelona", country: "Spain", logo: uabWhite },
  { university: "ETH Zürich", city: "Zurich", country: "Switzerland", logo: ethWhite },
];

const Partners = () => {
  return (
    <PageLayout
      title="About HPI"
      subtitle="The European Impact Sprint is organized by leading institutions driving innovation, education, and technology across Europe."
      noPadBottom
    >
      <div className="space-y-6">
        {/* HPI Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-4 md:p-5 text-esprint-darkblue">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-60">Host</span>
            </div>
            <div className="mb-3">
              <img src={hpiLogo} alt="Hasso Plattner Institute" className="h-10" />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <p className="text-xs leading-relaxed opacity-80">
                The Hasso Plattner Institute (HPI) was founded in 1998 by Hasso Plattner, co-founder of SAP and one of Europe's most successful tech entrepreneurs. Today, HPI is a leading academic institution for digital engineering, educating the next generation of technology leaders, innovators and entrepreneurs.
              </p>
              <p className="text-xs leading-relaxed opacity-80">
                Located in Potsdam near Berlin, HPI attracts more than 900 Bachelor's and Master's students and around 80 PhD candidates. With a focus on IT Systems Engineering, Computer Science, Digital Health, Cybersecurity and Data Engineering, HPI has produced more than 2,500 graduates supported by state-of-the-art infrastructure and an interdisciplinary faculty of 30+ professors.
              </p>
            </div>
            <a
              href="https://hpi.de/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold hover:underline underline-offset-2"
            >
              More information: hpi.de →
            </a>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="overflow-hidden h-36">
              <img src={hpiCampus2} alt="HPI Campus building" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden h-36">
              <img src={hpiCampus1} alt="HPI lecture hall" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden h-36">
              <img src={hpiCampus3} alt="HPI campus at night" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* HPI Engine Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-4 md:p-5 text-esprint-darkblue">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-60">Organizer</span>
            </div>
            <div className="mb-3">
              <img src={hpiEngineLogo} alt="HPI Engine" className="h-9 invert" />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <p className="text-xs leading-relaxed opacity-80">
                HPI Engine is one of Europe's leading entrepreneurship ecosystems. We empower students, scientists, and tech founders to build digital products and startups through tailored programs, state-of-the-art infrastructure, close mentoring and a strong community.
              </p>
              <p className="text-xs leading-relaxed opacity-80">
                The HPI ecosystem has produced 300+ startups shaping industries worldwide and attracting over €1B in venture capital.
              </p>
            </div>
            <a
              href="https://engine.hpi.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold hover:underline underline-offset-2"
            >
              More information: engine.hpi.de →
            </a>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="overflow-hidden h-36">
              <img src={hpiEngine1} alt="HPI Engine event stage" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden h-36">
              <img src={hpiEngine2} alt="HPI Engine community networking" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden h-36">
              <img src={hpiEngine3} alt="HPI Engine incubator team" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* University Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-esprint-darkblue rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="font-display font-bold text-2xl text-primary-foreground mb-6 text-center">University Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {UNIVERSITY_PARTNERS_LIST.map((p) => (
              <div
                key={p.country}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center"
              >
                <div className="h-12 flex items-center justify-center mb-3 w-full">
                  <img src={p.logo} alt={p.university} className="max-h-12 max-w-full object-contain" />
                </div>
                <div className="text-primary-foreground font-semibold text-sm leading-tight mb-1">{p.university}</div>
                <div className="text-primary-foreground/70 text-xs">{p.city}, {p.country}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-primary-foreground/40 mt-6 text-center">
            Interested in becoming a partner?{" "}
            <a href="/contact" className="text-esprint-pink hover:underline font-semibold">Contact us!</a>
          </p>
        </motion.div>

        {/* Industry Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-esprint-pink rounded-2xl shadow-xl py-10 px-8 md:px-10 text-center"
        >
          <h2 className="font-display font-bold text-lg text-primary-foreground uppercase tracking-wide mb-8">
            Industry Partners
          </h2>
          <div className="max-w-sm mx-auto">
            <a
              href="https://sap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <img
                src={sapLogoWhite}
                alt="SAP"
                className="h-10 group-hover:scale-105 transition-transform mb-3"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground/60">
                Camp Sponsor
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Partners;
