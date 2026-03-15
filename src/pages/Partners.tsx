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

// Blob clip paths for the placeholder images
const blobPaths = [
  "polygon(10% 0%, 90% 5%, 100% 40%, 95% 85%, 70% 100%, 20% 95%, 0% 60%, 5% 20%)",
  "polygon(15% 5%, 85% 0%, 100% 35%, 90% 90%, 60% 100%, 10% 90%, 0% 50%, 5% 15%)",
  "polygon(5% 10%, 80% 0%, 100% 45%, 95% 80%, 75% 100%, 15% 95%, 0% 55%, 10% 20%)",
];

// Layout configs: circle position, text position, image position per row
const layouts = [
  {
    // Top-right circle, text left of circle, image bottom-left
    container: "flex-row-reverse",
    circleAlign: "items-start pt-4",
    textAlign: "text-right pr-8 pt-8",
    imageOffset: "self-end -mt-16 ml-8",
    floatDots: [
      { top: "10%", left: "5%", size: 12 },
      { top: "70%", right: "15%", size: 6 },
    ],
  },
  {
    // Left circle, text right of circle, image bottom-right
    container: "flex-row",
    circleAlign: "items-start pt-8",
    textAlign: "text-left pl-8 pt-12",
    imageOffset: "self-end -mt-12 mr-8 ml-auto",
    floatDots: [
      { top: "20%", right: "8%", size: 8 },
      { bottom: "15%", left: "30%", size: 5 },
    ],
  },
  {
    // Right circle, text left, image bottom-left
    container: "flex-row-reverse",
    circleAlign: "items-start pt-6",
    textAlign: "text-right pr-8 pt-10",
    imageOffset: "self-end -mt-14 ml-12",
    floatDots: [
      { top: "15%", left: "12%", size: 10 },
      { bottom: "20%", right: "5%", size: 7 },
    ],
  },
];

const Partners = () => {
  return (
    <PageLayout
      title="Partners"
      subtitle="The European Impact Sprint is made possible by leading institutions driving innovation, education, and technology across Europe."
      noPadBottom
    >
      <div className="flex flex-col gap-4 md:gap-0 mt-8 flex-1 px-4 md:px-8 lg:px-16 pb-8">
        {partners.map((p, i) => {
          const layout = layouts[i];
          const isReversed = layout.container === "flex-row-reverse";

          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* Floating accent dots */}
              {layout.floatDots.map((dot, di) => (
                <motion.div
                  key={di}
                  className="absolute rounded-full hidden md:block"
                  style={{
                    ...dot,
                    width: dot.size,
                    height: dot.size,
                    background: `hsl(${p.color})`,
                    opacity: 0.6,
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + di, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}

              {/* Main row: circle + text */}
              <div className={`flex ${layout.container} items-center gap-4 md:gap-0 relative z-10`}>
                {/* Color circle with logo */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                >
                  <motion.div
                    className="rounded-full flex items-center justify-center relative overflow-hidden"
                    style={{
                      width: "clamp(140px, 18vw, 220px)",
                      height: "clamp(140px, 18vw, 220px)",
                      background: `hsl(${p.color})`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={p.logo}
                      alt={p.logoAlt}
                      className="w-2/3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] relative z-10"
                    />
                  </motion.div>
                </a>

                {/* Text content */}
                <div className={`flex-1 ${layout.textAlign} max-w-md`}>
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1"
                    style={{ color: `hsl(${p.color})` }}
                  >
                    {p.role}
                  </p>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2 leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* Placeholder image blob */}
              <div
                className={`relative z-0 -mt-8 md:-mt-16 ${isReversed ? "ml-8 md:ml-24" : "ml-auto mr-8 md:mr-24"}`}
                style={{ width: "clamp(200px, 30vw, 380px)" }}
              >
                <div
                  className="w-full aspect-[4/3] bg-white/5 backdrop-blur-sm border border-white/10"
                  style={{
                    clipPath: blobPaths[i],
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/20 text-xs uppercase tracking-widest">Photo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* University partners block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-16 px-8"
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
    </PageLayout>
  );
};

export default Partners;
