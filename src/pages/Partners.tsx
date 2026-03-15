import { motion } from "framer-motion";
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
    desc: "Germany's center of excellence for digital engineering.",
    color: "var(--esprint-orange)",
    // Position on the canvas (percentage-based)
    cx: 25,
    cy: 10,
    size: 140,
    rings: 4,
    textSide: "left" as const,
  },
  {
    logo: hpiEngineLogo,
    logoAlt: "HPI Engine",
    link: "https://engine.hpi.de",
    role: "Organizer",
    name: "HPI Engine",
    desc: "Europe's leading startup ecosystem for tech founders.",
    color: "var(--esprint-red)",
    cx: 55,
    cy: 25,
    size: 110,
    rings: 3,
    textSide: "right" as const,
  },
  {
    logo: sapLogoWhite,
    logoAlt: "SAP",
    link: "https://sap.com",
    role: "Partner",
    name: "SAP",
    desc: "Europe's largest software company and global leader in business AI.",
    color: "var(--esprint-purple)",
    cx: 18,
    cy: 45,
    size: 120,
    rings: 3,
    textSide: "left" as const,
  },
];

const Partners = () => {
  // Bottom convergence point
  const convergenceX = 50;
  const convergenceY = 88;

  return (
    <PageLayout
      title="Partners"
      subtitle="The European Impact Sprint is made possible by leading institutions driving innovation, education, and technology across Europe."
      noPadBottom
    >
      <div className="relative w-full max-w-3xl mx-auto flex-1" style={{ minHeight: 700 }}>
        {/* SVG layer for connecting curves */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ zIndex: 0 }}
        >
          {partners.map((p, i) => {
            const midY = (p.cy + convergenceY) / 2;
            return (
              <motion.path
                key={i}
                d={`M ${p.cx} ${p.cy + (p.size / 14)} C ${p.cx} ${midY}, ${convergenceX} ${midY}, ${convergenceX} ${convergenceY}`}
                fill="none"
                stroke="white"
                strokeOpacity={0.12}
                strokeWidth={0.3}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.2 }}
              />
            );
          })}
        </svg>

        {/* Partner circles */}
        {partners.map((p, i) => {
          const totalRingSize = p.size + p.rings * 20;
          return (
            <motion.div
              key={p.name}
              className="absolute"
              style={{
                left: `${p.cx}%`,
                top: `${p.cy}%`,
                transform: "translate(-50%, -50%)",
                zIndex: 10 + i,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Concentric rings */}
              <div className="relative flex items-center justify-center" style={{ width: totalRingSize, height: totalRingSize }}>
                {Array.from({ length: p.rings }).map((_, ri) => (
                  <div
                    key={ri}
                    className="absolute rounded-full border border-white/10"
                    style={{
                      width: p.size + (ri + 1) * 20,
                      height: p.size + (ri + 1) * 20,
                    }}
                  />
                ))}

                {/* Colored circle with logo */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 group"
                >
                  <motion.div
                    className="rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      width: p.size,
                      height: p.size,
                      background: `hsl(${p.color})`,
                      boxShadow: `0 4px 30px hsl(${p.color} / 0.3)`,
                    }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={p.logo}
                      alt={p.logoAlt}
                      className="w-3/5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
                    />
                  </motion.div>
                </a>
              </div>

              {/* Curved text label */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap ${
                  p.textSide === "left"
                    ? "right-full pr-4 text-right"
                    : "left-full pl-4 text-left"
                }`}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5"
                  style={{ color: `hsl(${p.color})` }}
                >
                  {p.role}
                </p>
                <h3 className="font-display font-bold text-sm md:text-base text-white leading-tight">
                  {p.name}
                </h3>
                <p className="text-[11px] text-white/50 leading-snug mt-1 max-w-[180px]">
                  {p.desc}
                </p>
              </div>

              {/* Role badge (like the percentage badges in the reference) */}
              <div
                className="absolute left-1/2 -translate-x-1/2 px-3 py-1 rounded-sm"
                style={{
                  bottom: -12,
                  background: "hsl(var(--esprint-darkblue))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  zIndex: 20,
                }}
              >
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                  {p.role}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* Bottom convergence: eSprint logo */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ top: `${convergenceY}%`, zIndex: 20 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: "white", opacity: 0.3 }}
          />
          <img src={esprintLogo} alt="European Impact Sprint" className="w-28 opacity-50" />
        </motion.div>
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
