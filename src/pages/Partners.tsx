import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import hpiLogoWhite from "@/assets/hpi-logo-white.png";
import hpiEngineLogo from "@/assets/hpi-engine-white.svg";
import sapLogoWhite from "@/assets/sap-logo-white.png";
import esprintLogo from "@/assets/esprint-logo-white.svg";

const partners = [
  {
    logo: hpiLogoWhite,
    logoAlt: "Hasso Plattner Institute",
    link: "https://hpi.de",
    role: "Host",
    name: "Hasso Plattner Institute",
    desc: "Germany's university center of excellence for digital engineering, advancing research and education in IT systems engineering, data engineering, cyber security, entrepreneurship, and digital health.",
    color: "var(--esprint-orange)",
  },
  {
    logo: hpiEngineLogo,
    logoAlt: "HPI Engine",
    link: "https://engine.hpi.de",
    role: "Organizer",
    name: "HPI Engine",
    desc: "One of Europe's leading startup ecosystems, empowering outstanding tech talent to become leaders and founders through innovation programs and entrepreneurship education.",
    color: "var(--esprint-red)",
  },
  {
    logo: sapLogoWhite,
    logoAlt: "SAP",
    link: "https://sap.com",
    role: "Partner",
    name: "SAP",
    desc: "Europe's largest software company and global leader in enterprise applications and business AI, partnering with HPI to empower the next generation of tech innovators across the continent.",
    color: "var(--esprint-purple)",
  },
];

// Position logos around a circle (top, bottom-left, bottom-right)
const orbitPositions = [
  { angle: -90, label: "top" },
  { angle: 150, label: "bottom-left" },
  { angle: 30, label: "bottom-right" },
];

const Partners = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const orbitRadius = 180; // px from center

  return (
    <PageLayout
      title="Partners"
      subtitle="The European Impact Sprint is made possible by leading institutions driving innovation, education, and technology across Europe."
      noPadBottom
    >
      <div className="flex flex-col items-center flex-1">
        {/* Orbit area */}
        <div className="relative w-full max-w-[500px] aspect-square mx-auto my-8 md:my-12">
          {/* Orbit ring */}
          <div
            className="absolute inset-0 m-auto rounded-full border border-white/10"
            style={{ width: orbitRadius * 2, height: orbitRadius * 2 }}
          />

          {/* Center hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {selected === null ? (
                <motion.div
                  key="hub"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center gap-3 cursor-default"
                >
                  <img src={esprintLogo} alt="eSprint" className="w-24 opacity-60" />
                  <p className="text-white/30 text-xs tracking-widest uppercase">Select a partner</p>
                </motion.div>
              ) : (
                <motion.div
                  key={`detail-${selected}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="text-center px-6 max-w-[280px]"
                >
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1"
                    style={{ color: `hsl(${partners[selected].color})` }}
                  >
                    {partners[selected].role}
                  </p>
                  <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight">
                    {partners[selected].name}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-3">
                    {partners[selected].desc}
                  </p>
                  <a
                    href={partners[selected].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors"
                    style={{ color: `hsl(${partners[selected].color})` }}
                  >
                    Learn more →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Orbiting logos */}
          {partners.map((p, i) => {
            const { angle } = orbitPositions[i];
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * orbitRadius;
            const y = Math.sin(rad) * orbitRadius;
            const isSelected = selected === i;

            return (
              <motion.button
                key={p.name}
                onClick={() => setSelected(isSelected ? null : i)}
                className="absolute rounded-full flex items-center justify-center transition-shadow duration-300"
                style={{
                  left: "50%",
                  top: "50%",
                  width: 80,
                  height: 80,
                  marginLeft: -40,
                  marginTop: -40,
                  x,
                  y,
                  background: isSelected
                    ? `hsl(${p.color})`
                    : `hsl(${p.color} / 0.15)`,
                  border: `2px solid hsl(${p.color} / ${isSelected ? 1 : 0.3})`,
                  boxShadow: isSelected
                    ? `0 0 30px hsl(${p.color} / 0.4)`
                    : "none",
                }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <img
                  src={p.logo}
                  alt={p.logoAlt}
                  className="w-12 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
                />
              </motion.button>
            );
          })}

          {/* Connector lines from selected to center */}
          {selected !== null && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${Math.cos((orbitPositions[selected].angle * Math.PI) / 180) * orbitRadius}px)`}
                y2={`calc(50% + ${Math.sin((orbitPositions[selected].angle * Math.PI) / 180) * orbitRadius}px)`}
                stroke={`hsl(${partners[selected].color} / 0.3)`}
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>
          )}
        </div>

        {/* University partners block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 px-8 flex-1 w-full"
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
