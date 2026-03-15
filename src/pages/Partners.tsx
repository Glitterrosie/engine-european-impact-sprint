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
    color: "var(--esprint-orange)",
  },
  {
    logo: hpiEngineLogo,
    logoAlt: "HPI Engine",
    link: "https://engine.hpi.de",
    role: "Organizer",
    name: "HPI Engine",
    desc: "One of Europe's leading startup ecosystems, empowering tech talent to become founders through innovation programs.",
    color: "var(--esprint-red)",
  },
  {
    logo: sapLogoWhite,
    logoAlt: "SAP",
    link: "https://sap.com",
    role: "Partner",
    name: "SAP",
    desc: "Europe's largest software company, partnering with HPI to empower the next generation of tech innovators.",
    color: "var(--esprint-purple)",
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
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circle assembly */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mb-8 group"
                style={{ width: 200, height: 200 }}
              >
                {/* Outermost ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: `2px dashed hsl(${p.color} / 0.3)` }}
                />

                {/* Second ring */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: 12,
                    border: `1.5px solid hsl(${p.color} / 0.15)`,
                  }}
                />

                {/* Glow circle */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: 24,
                    background: `hsl(${p.color} / 0.15)`,
                  }}
                />

                {/* Main circle */}
                <div
                  className="absolute rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    inset: 36,
                    background: `hsl(${p.color})`,
                    boxShadow: `0 10px 40px hsl(${p.color} / 0.4), 0 0 80px hsl(${p.color} / 0.15)`,
                  }}
                >
                  <img
                    src={p.logo}
                    alt={p.logoAlt}
                    className="w-3/5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                  />
                </div>
              </a>

              {/* Text */}
              <p
                className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2"
                style={{ color: `hsl(${p.color})` }}
              >
                {p.role}
              </p>
              <h3 className="font-display font-bold text-xl text-white mb-3 leading-tight">
                {p.name}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-[280px]">
                {p.desc}
              </p>
            </motion.div>
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
