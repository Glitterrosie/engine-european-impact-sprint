import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    desc: "Germany's university center of excellence for digital engineering, advancing research and education in IT systems engineering, data engineering, cyber security, entrepreneurship, and digital health.",
  },
  {
    logo: hpiEngineLogo,
    logoAlt: "HPI Engine",
    link: "https://engine.hpi.de",
    role: "Organizer",
    name: "HPI Engine",
    desc: "One of Europe's leading startup ecosystems, empowering outstanding tech talent to become leaders and founders through innovation programs and entrepreneurship education.",
  },
  {
    logo: sapLogoWhite,
    logoAlt: "SAP",
    link: "https://sap.com",
    role: "Partner",
    name: "SAP",
    desc: "Europe's largest software company and global leader in enterprise applications and business AI, partnering with HPI to empower the next generation of tech innovators across the continent.",
  },
];

const cardColors = [
  { bg: "hsl(var(--esprint-orange))", hslVar: "var(--esprint-orange)", text: "text-white", roleText: "text-white/70" },
  { bg: "hsl(var(--esprint-red))", hslVar: "var(--esprint-red)", text: "text-white", roleText: "text-white/70" },
  { bg: "hsl(var(--esprint-purple))", hslVar: "var(--esprint-purple)", text: "text-white", roleText: "text-white/70" },
];

const Partners = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <PageLayout title="Partners" subtitle="The European Impact Sprint is made possible by leading institutions driving innovation, education, and technology across Europe." noPadBottom>
      <div className="flex flex-col gap-0 mt-4 flex-1">
        {partners.map((p, i) => {
          const color = cardColors[i];
          const isExpanded = expanded === i;

          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="cursor-pointer overflow-hidden"
              style={{ background: color.bg }}
              onClick={() => setExpanded(isExpanded ? null : i)}
            >
              {/* Collapsed: logo + role centered */}
              <div className="flex items-center justify-between px-8 md:px-12 py-8">
                <div className="flex items-center gap-6">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={p.logo}
                      alt={p.logoAlt}
                      className="w-28 md:w-32 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                    />
                  </a>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${color.roleText} hidden md:block`}>
                    {p.role}
                  </span>
                </div>

                {/* Expand indicator */}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/50"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>

              {/* Expanded: description */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 md:px-12 pb-8 md:pb-10 pt-0">
                      <div className="border-t border-white/15 pt-6 max-w-3xl">
                        <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${color.roleText} mb-2 md:hidden`}>
                          {p.role}
                        </p>
                        <h3 className={`font-display font-bold text-xl ${color.text} mb-3 leading-tight`}>
                          {p.name}
                        </h3>
                        <p className={`text-sm ${color.text} opacity-80 leading-relaxed`}>
                          {p.desc}
                        </p>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                        >
                          Learn more →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {/* University partners block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 px-8 flex-1"
          style={{ background: "hsl(var(--esprint-darkblue))" }}
        >
          <h2 className="font-display font-bold text-2xl text-white mb-3">University Partners</h2>
          <p className="text-white/50">
            Logos of 30 European partner universities – Coming Soon
          </p>
          <p className="text-sm text-white/40 mt-4">
            Interested in becoming a partner?{" "}
            <a href="/contact" className="text-esprint-pink hover:underline font-semibold">Contact us!</a>
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Partners;
