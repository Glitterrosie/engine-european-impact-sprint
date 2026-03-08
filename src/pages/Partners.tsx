import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import hpiLogoWhite from "@/assets/hpi-logo-white.png";
import hpiEngineLogo from "@/assets/hpi-engine-white.svg";
import sapLogoWhite from "@/assets/sap-logo-white.png";

const Partners = () => {
  return (
    <PageLayout title="Partners">
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {[
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
          ].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="overflow-hidden rounded-2xl flex flex-col"
            >
              <div className="p-8 flex items-center justify-center h-32">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <img src={p.logo} alt={p.logoAlt} className={`${p.logoClass} drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]`} />
                </a>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl flex-1">
                <p className="text-xs font-bold text-esprint-purple uppercase tracking-wide mb-2">{p.role}</p>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{p.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* University partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center"
        >
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-3">University Partners</h2>
          <p className="text-gray-500">
            Logos of 30 European partner universities – Coming Soon
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Interested in becoming a partner?{" "}
            <a href="/contact" className="text-esprint-purple hover:underline font-semibold">Contact us!</a>
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Partners;
