import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import hpiLogoWhite from "@/assets/hpi-logo-white.png";
import hpiEngineLogo from "@/assets/hpi-engine-white.svg";
import sapLogoWhite from "@/assets/sap-logo-white.png";

const partners = [
  {
    logo: hpiLogoWhite,
    logoAlt: "Hasso Plattner Institute",
    logoClass: "h-16",
    link: "https://hpi.de",
    role: "Host",
    name: "Hasso Plattner Institute",
    desc: "The Hasso Plattner Institute (HPI) in Potsdam is Germany's university center of excellence for digital engineering, advancing research and education in IT systems engineering, data engineering, cyber security, entrepreneurship, and digital health.",
  },
  {
    logo: hpiEngineLogo,
    logoAlt: "HPI Engine",
    logoClass: "h-12",
    link: "https://engine.hpi.de",
    role: "Organizer",
    name: "HPI Engine",
    desc: "One of Europe's leading startup ecosystems, empowering outstanding tech talent to become leaders and founders through innovation programs and entrepreneurship education.",
  },
  {
    logo: sapLogoWhite,
    logoAlt: "SAP",
    logoClass: "h-16",
    link: "https://sap.com",
    role: "Partner",
    name: "SAP",
    desc: "Europe's largest software company and global leader in enterprise applications and business AI, partnering with HPI to empower the next generation of tech innovators across the continent.",
  },
];

const cardColors = [
  { bg: "hsl(var(--esprint-orange))", hslVar: "var(--esprint-orange)", text: "text-esprint-darkblue", roleText: "text-esprint-darkblue/60" },
  { bg: "hsl(var(--esprint-pink))", hslVar: "var(--esprint-pink)", text: "text-esprint-darkblue", roleText: "text-esprint-darkblue/60" },
  { bg: "hsl(var(--esprint-purple))", hslVar: "var(--esprint-purple)", text: "text-white", roleText: "text-white/60" },
];

const Partners = () => {
  return (
    <PageLayout title="Partners" subtitle="The European Impact Sprint is made possible by leading institutions driving innovation, education, and technology across Europe." noPadBottom>
      <div className="flex flex-col gap-0 mt-4 flex-1">
        {partners.map((p, i) => {
          const color = cardColors[i];
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row overflow-hidden relative"
            >
              {/* Logo area - transparent, key visual shows through */}
              <div className="p-10 md:p-12 flex items-center justify-center md:w-64 flex-shrink-0 relative z-10">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={p.logo}
                    alt={p.logoAlt}
                    className={`${p.logoClass} drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]`}
                  />
                </a>
              </div>

              {/* Gradient colored block - fades from transparent to full color */}
              <div
                className="flex-1 relative"
                style={{
                  background: `linear-gradient(to right, hsl(${color.hslVar} / 0) 0%, hsl(${color.hslVar} / 0.9) 25%, ${color.bg} 40%)`,
                }}
              >
                {/* Text content */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center h-full">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${color.roleText} mb-2`}>
                    {p.role}
                  </p>
                  <h3 className={`font-display font-bold text-xl ${color.text} mb-3 leading-tight`}>
                    {p.name}
                  </h3>
                  <p className={`text-sm ${color.text} opacity-80 leading-relaxed max-w-2xl`}>
                    {p.desc}
                  </p>
                </div>

                {/* Logo cutout on the right */}
                <div
                  className="absolute right-4 top-0 bottom-0 w-36 md:w-48 opacity-20"
                  style={{
                    background: color.bg,
                    WebkitMaskImage: `url(${p.logo}), linear-gradient(black, black)`,
                    WebkitMaskSize: '60% auto, 100% 100%',
                    WebkitMaskPosition: 'center center, center center',
                    WebkitMaskRepeat: 'no-repeat, no-repeat',
                    WebkitMaskComposite: 'xor',
                    maskImage: `url(${p.logo}), linear-gradient(black, black)`,
                    maskSize: '60% auto, 100% 100%',
                    maskPosition: 'center center, center center',
                    maskRepeat: 'no-repeat, no-repeat',
                    maskComposite: 'exclude',
                  }}
                />
              </div>
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
