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
          {/* HPI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="overflow-hidden rounded-2xl"
          >
            {/* Logo area – transparent, shows key visual */}
            <div className="p-8 flex items-center justify-center">
              <a href="https://hpi.de" target="_blank" rel="noopener noreferrer">
                <img src={hpiLogoWhite} alt="Hasso Plattner Institute" className="h-16 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
              </a>
            </div>
            {/* Text area – white box */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <p className="text-xs font-bold text-esprint-purple uppercase tracking-wide mb-2">Host</p>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Hasso Plattner Institute</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Hasso Plattner Institute (HPI) in Potsdam is Germany's university center of excellence for digital engineering, advancing research and education in IT systems engineering, data engineering, cyber security, entrepreneurship, and digital health.
              </p>
            </div>
          </motion.div>

          {/* HPI Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-2xl"
          >
            <div className="p-8 flex items-center justify-center">
              <a href="https://hpi-engine.de" target="_blank" rel="noopener noreferrer">
                <img src={hpiEngineLogo} alt="HPI Engine" className="h-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <p className="text-xs font-bold text-esprint-purple uppercase tracking-wide mb-2">Organizer</p>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">HPI Engine</h3>
              <p className="text-sm text-gray-400 italic mb-2">Startup Ecosystem</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                One of Europe's leading startup ecosystems, empowering outstanding tech talent to become leaders and founders.
              </p>
            </div>
          </motion.div>
        </div>

        {/* SAP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl"
        >
          <div className="p-8 flex items-center justify-center">
            <a href="https://sap.com" target="_blank" rel="noopener noreferrer">
              <img src={sapLogoWhite} alt="SAP" className="h-16 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
            </a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
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
