import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import hpiLogoWhite from "@/assets/hpi-logo-white.png";
import hpiEngineLogo from "@/assets/hpi-engine-white.svg";
import sapLogoWhite from "@/assets/sap-logo-white.png";

const partners = [
  {
    logo: hpiLogoWhite,
    logoAlt: "Hasso Plattner Institute",
    logoClass: "h-14",
    link: "https://hpi.de",
    role: "Host",
    name: "Hasso Plattner Institute",
    desc: "Germany's university center of excellence for digital engineering, advancing research and education in IT systems engineering, data engineering, cyber security, entrepreneurship, and digital health.",
  },
  {
    logo: hpiEngineLogo,
    logoAlt: "HPI Engine",
    logoClass: "h-10",
    link: "https://engine.hpi.de",
    role: "Organizer",
    name: "HPI Engine",
    desc: "One of Europe's leading startup ecosystems, empowering outstanding tech talent to become leaders and founders through innovation programs and entrepreneurship education.",
  },
  {
    logo: sapLogoWhite,
    logoAlt: "SAP",
    logoClass: "h-14",
    link: "https://sap.com",
    role: "Partner",
    name: "SAP",
    desc: "Europe's largest software company and global leader in enterprise applications and business AI, partnering with HPI to empower the next generation of tech innovators.",
  },
];

const cardColors = [
  { bg: "hsl(var(--esprint-orange))", text: "text-esprint-darkblue", roleText: "text-esprint-darkblue/60" },
  { bg: "hsl(var(--esprint-pink))", text: "text-esprint-darkblue", roleText: "text-esprint-darkblue/60" },
  { bg: "hsl(var(--esprint-purple))", text: "text-white", roleText: "text-white/60" },
];

const Partners = () => {
  return (
    <PageLayout title="Partners" subtitle="The European Impact Sprint is made possible by leading institutions driving innovation, education, and technology across Europe." noPadBottom>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-4 flex-1">
        {partners.map((p, i) => {
          const color = cardColors[i];
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden group hover:brightness-110 transition-all duration-300 min-h-[520px]"
            >
              {/* Colored overlay with logo cutout */}
              <div
                className="absolute inset-0"
                style={{
                  background: color.bg,
                  WebkitMaskImage: `url(${p.logo}), linear-gradient(black, black)`,
                  WebkitMaskSize: `${p.logoMaskSize} 100%`,
                  WebkitMaskPosition: 'center 25%, center center',
                  WebkitMaskRepeat: 'no-repeat, no-repeat',
                  WebkitMaskComposite: 'xor',
                  maskImage: `url(${p.logo}), linear-gradient(black, black)`,
                  maskSize: `${p.logoMaskSize} 100%`,
                  maskPosition: 'center 25%, center center',
                  maskRepeat: 'no-repeat, no-repeat',
                  maskComposite: 'exclude',
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 pt-52 md:pt-56 flex flex-col items-start h-full">
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${color.roleText} mb-1`}>
                  {p.role}
                </p>
                <div className={`w-8 h-0.5 bg-current opacity-30 mb-3 ${color.text}`} />
                <h3 className={`font-display font-bold text-lg ${color.text} mb-2 leading-tight`}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    {p.name}
                  </a>
                </h3>
                <p className={`text-sm ${color.text} opacity-80 leading-relaxed`}>
                  {p.desc}
                </p>
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
