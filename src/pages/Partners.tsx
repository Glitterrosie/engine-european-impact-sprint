import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import hpiLogo from "@/assets/hpi-logo.svg";
import hpiEngineLogo from "@/assets/hpi-engine-white.png";
import sapLogo from "@/assets/sap-logo.png";

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
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <p className="text-xs font-bold text-esprint-purple uppercase tracking-wide mb-4">Host</p>
            <a href="https://hpi.de" target="_blank" rel="noopener noreferrer">
              <img src={hpiLogo} alt="Hasso Plattner Institute" className="h-14 mb-6" />
            </a>
            <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Hasso Plattner Institute</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The Hasso Plattner Institute (HPI) in Potsdam is Germany's university center of excellence for digital engineering, advancing research and education in IT systems engineering, data engineering, cyber security, entrepreneurship, and digital health.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <p className="text-xs font-bold text-esprint-purple uppercase tracking-wide mb-4">Organizer</p>
            <a href="https://hpi-engine.de" target="_blank" rel="noopener noreferrer">
              <img src={hpiEngineLogo} alt="HPI Engine" className="h-10 mb-6 bg-gray-900 rounded-lg p-2" />
            </a>
            <h3 className="font-display font-bold text-xl text-gray-900 mb-3">HPI Engine</h3>
            <p className="text-sm text-gray-500 italic mb-2">Startup Ecosystem</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              One of Europe's leading startup ecosystems, empowering outstanding tech talent to become leaders and founders.
            </p>
          </motion.div>
        </div>

        {/* SAP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center gap-8"
        >
          <a href="https://sap.com" target="_blank" rel="noopener noreferrer">
            <img src={sapLogo} alt="SAP" className="h-16" />
          </a>
          <div>
            <p className="text-xs font-bold text-esprint-purple uppercase tracking-wide mb-1">Partner</p>
            <h3 className="font-display font-bold text-xl text-gray-900">SAP</h3>
          </div>
        </motion.div>

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
