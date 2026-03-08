import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import hpiLogoWhite from "@/assets/hpi-logo-white.png";
import hpiEngineLogo from "@/assets/hpi-engine-white.svg";
import sapLogoWhite from "@/assets/sap-logo-white.png";

const Partners = () => {
  return (
    <PageLayout title="Partners">
      <div className="space-y-8">
        {/* Host & Organizer */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border-2 border-white p-8 md:p-10"
          >
            <p className="text-sm font-bold text-white uppercase tracking-wide mb-4">Host</p>
            <a href="https://hpi.de" target="_blank" rel="noopener noreferrer">
              <img src={hpiLogoWhite} alt="Hasso Plattner Institute" className="h-14 mb-6" />
            </a>
            <h3 className="font-display font-black text-2xl text-white mb-3 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">Hasso Plattner Institute</h3>
            <p className="text-white font-semibold text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              The Hasso Plattner Institute (HPI) in Potsdam is Germany's university center of excellence for digital engineering, advancing research and education in IT systems engineering, data engineering, cyber security, entrepreneurship, and digital health.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border-2 border-white p-8 md:p-10"
          >
            <p className="text-sm font-bold text-white uppercase tracking-wide mb-4">Organizer</p>
            <a href="https://hpi-engine.de" target="_blank" rel="noopener noreferrer">
              <img src={hpiEngineLogo} alt="HPI Engine" className="h-10 mb-6" />
            </a>
            <h3 className="font-display font-black text-2xl text-white mb-3 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">HPI Engine</h3>
            <p className="text-base text-white font-semibold italic mb-2">Startup Ecosystem</p>
            <p className="text-white font-semibold text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              One of Europe's leading startup ecosystems, empowering outstanding tech talent to become leaders and founders.
            </p>
          </motion.div>
        </div>

        {/* SAP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border-2 border-white p-8 flex flex-col md:flex-row items-center gap-8"
        >
          <a href="https://sap.com" target="_blank" rel="noopener noreferrer">
            <img src={sapLogoWhite} alt="SAP" className="h-16" />
          </a>
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wide mb-1">Partner</p>
            <h3 className="font-display font-black text-2xl text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">SAP</h3>
          </div>
        </motion.div>

        {/* University partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border-2 border-white p-8 md:p-12 text-center"
        >
          <h2 className="font-display font-black text-2xl text-white mb-3 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">University Partners</h2>
          <p className="text-white font-semibold text-base drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            Logos of 30 European partner universities – Coming Soon
          </p>
          <p className="text-base text-white font-semibold mt-4">
            Interested in becoming a partner?{" "}
            <a href="/contact" className="text-white hover:underline font-bold">Contact us!</a>
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Partners;
