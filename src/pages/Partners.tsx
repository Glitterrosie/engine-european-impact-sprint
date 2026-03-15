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
  const circleSize = 120;
  const outerSize = 160;
  const dashedSize = 190;

  return (
    <PageLayout
      title="Partners"
      subtitle="The European Impact Sprint is made possible by leading institutions driving innovation, education, and technology across Europe."
      noPadBottom
    >
      <div className="flex-1 flex items-center justify-center px-4 py-12 w-full">
        <div className="relative flex flex-col items-center w-full max-w-5xl mx-auto">
          {/* Vertical connecting line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-white/10"
            style={{
              top: outerSize / 2,
              bottom: outerSize / 2,
            }}
          />

          {partners.map((p, i) => {
            // Alternate: odd items offset right
            const isRight = i % 2 === 1;

            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`flex items-center gap-8 md:gap-16 w-full ${i > 0 ? "-mt-4" : ""} ${
                  isRight ? "flex-row-reverse" : "flex-row"
                } ${isRight ? "justify-start pl-[10%]" : "justify-end pr-[10%]"}`}
                style={{ zIndex: 10 + i }}
              >
                {/* Circle assembly */}
                <div className="relative flex-shrink-0" style={{ width: dashedSize, height: dashedSize }}>
                  {/* Horizontal accent line through circle */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-[2px]"
                    style={{
                      background: `linear-gradient(${isRight ? "to left" : "to right"}, hsl(${p.color}), hsl(${p.color} / 0))`,
                      width: "200vw",
                      [isRight ? "right" : "left"]: -20,
                      opacity: 0.3,
                    }}
                  />

                  {/* Dashed outer ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: `2px dashed hsl(${p.color} / 0.4)`,
                    }}
                  />

                  {/* Colored outer circle */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: outerSize,
                      height: outerSize,
                      top: (dashedSize - outerSize) / 2,
                      left: (dashedSize - outerSize) / 2,
                      background: `hsl(${p.color} / 0.25)`,
                    }}
                  />

                  {/* Inner circle with logo */}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute rounded-full flex items-center justify-center shadow-lg group"
                    style={{
                      width: circleSize,
                      height: circleSize,
                      top: (dashedSize - circleSize) / 2,
                      left: (dashedSize - circleSize) / 2,
                      background: `hsl(${p.color})`,
                      boxShadow: `0 8px 25px hsl(${p.color} / 0.35)`,
                    }}
                  >
                    <img
                      src={p.logo}
                      alt={p.logoAlt}
                      className="w-3/5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform"
                    />
                  </a>

                  {/* Number badge */}
                  <div
                    className="absolute font-display font-bold text-lg"
                    style={{
                      color: `hsl(${p.color})`,
                      top: (dashedSize - circleSize) / 2 - 4,
                      [isRight ? "left" : "right"]: (dashedSize - outerSize) / 2 - 8,
                    }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Text content */}
                <div className={`max-w-sm md:max-w-md flex-1 ${isRight ? "text-right" : "text-left"}`}>
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1"
                    style={{ color: `hsl(${p.color})` }}
                  >
                    {p.role}
                  </p>
                  <h3 className="font-display font-bold text-xl text-white mb-2 leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
