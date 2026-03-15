import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import hpiLogoWhite from "@/assets/hpi-logo-white.png";
import hpiEngineLogo from "@/assets/hpi-engine-white.svg";
import sapLogoWhite from "@/assets/sap-logo-white.png";

const partners = [
  {
    logo: hpiLogoWhite,
    logoAlt: "Hasso Plattner Institute",
    link: "https://hpi.de",
    role: "Host",
    name: "Hasso Plattner Institute",
    desc: "Germany's center of excellence for digital engineering, advancing research in IT, cyber security, and entrepreneurship.",
    bg: "bg-esprint-orange",
    text: "text-esprint-darkblue",
  },
  {
    logo: hpiEngineLogo,
    logoAlt: "HPI Engine",
    link: "https://engine.hpi.de",
    role: "Organizer",
    name: "HPI Engine",
    desc: "One of Europe's leading startup ecosystems, empowering tech talent to become founders through innovation programs.",
    bg: "bg-esprint-red",
    text: "text-primary-foreground",
  },
  {
    logo: sapLogoWhite,
    logoAlt: "SAP",
    link: "https://sap.com",
    role: "Partner",
    name: "SAP",
    desc: "Europe's largest software company, partnering with HPI to empower the next generation of tech innovators.",
    bg: "bg-esprint-purple",
    text: "text-primary-foreground",
  },
];

const Partners = () => {
  return (
    <PageLayout
      title="About HPI"
      subtitle="The European Impact Sprint is made possible by leading institutions driving innovation, education, and technology across Europe."
      noPadBottom
    >
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full max-w-5xl mx-auto">
          {partners.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Logo */}
              <div className="h-24 flex items-center justify-center mb-6">
                <img
                  src={p.logo}
                  alt={p.logoAlt}
                  className="max-h-full max-w-[180px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Colored text box */}
              <div className={`${p.bg} ${p.text} rounded-xl p-6 w-full`}>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1 opacity-70">
                  {p.role}
                </p>
                <h3 className="font-display font-bold text-lg mb-2 leading-tight">
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed opacity-80">
                  {p.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* University partners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-16 px-8"
        style={{ background: "hsl(var(--esprint-darkblue))" }}
      >
        <h2 className="font-display font-bold text-2xl text-white mb-3">University Partners</h2>
        <p className="text-white/50">Logos of 30 European partner universities – Coming Soon</p>
        <p className="text-sm text-white/40 mt-4">
          Interested in becoming a partner?{" "}
          <a href="/contact" className="text-esprint-pink hover:underline font-semibold">Contact us!</a>
        </p>
      </motion.div>
    </PageLayout>
  );
};

export default Partners;
