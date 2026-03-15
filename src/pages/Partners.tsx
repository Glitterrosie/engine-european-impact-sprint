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

const blobPaths = [
  "polygon(10% 0%, 90% 5%, 100% 40%, 95% 85%, 70% 100%, 20% 95%, 0% 60%, 5% 20%)",
  "polygon(15% 5%, 85% 0%, 100% 35%, 90% 90%, 60% 100%, 10% 90%, 0% 50%, 5% 15%)",
  "polygon(5% 10%, 80% 0%, 100% 45%, 95% 80%, 75% 100%, 15% 95%, 0% 55%, 10% 20%)",
];

const Partners = () => {
  const circleSize = 100;
  const outerSize = 130;
  const dashedSize = 160;

  return (
    <PageLayout
      title="Partners"
      subtitle="The European Impact Sprint is made possible by leading institutions driving innovation, education, and technology across Europe."
      noPadBottom
    >
      <div className="flex-1 flex items-start justify-center px-4 md:px-8 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full max-w-5xl mx-auto">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circle assembly with blob */}
              <div className="relative flex-shrink-0 mb-6" style={{ width: dashedSize + 80, height: dashedSize + 100 }}>
                {/* Large blob placeholder behind circle */}
                <div
                  className="absolute w-full h-full"
                  style={{
                    clipPath: blobPaths[i],
                    background: `hsl(${p.color} / 0.08)`,
                    border: `1px solid hsl(${p.color} / 0.12)`,
                    top: 10,
                    left: 0,
                  }}
                >
                  <div className="w-full h-full flex items-end justify-center pb-4">
                    <span className="text-white/15 text-[10px] uppercase tracking-widest">Photo</span>
                  </div>
                </div>

                {/* Circle group centered on blob */}
                <div className="absolute" style={{ width: dashedSize, height: dashedSize, top: (260 - dashedSize) / 2 - 10, left: (240 - dashedSize) / 2 }}>
                  {/* Dashed outer ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ border: `2px dashed hsl(${p.color} / 0.4)` }}
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
                    className="absolute rounded-full flex items-center justify-center group"
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

                  {/* Number */}
                  <div
                    className="absolute font-display font-bold text-lg"
                    style={{
                      color: `hsl(${p.color})`,
                      bottom: 4,
                      right: 8,
                    }}
                  >
                    {i + 1}
                  </div>
                </div>
              </div>

              {/* Text */}
              <p
                className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1"
                style={{ color: `hsl(${p.color})` }}
              >
                {p.role}
              </p>
              <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight">
                {p.name}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-[260px]">
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
