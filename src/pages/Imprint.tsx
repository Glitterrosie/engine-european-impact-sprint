import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const Imprint = () => {
  return (
    <PageLayout title="Imprint">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-esprint-darkblue rounded-2xl p-8 md:p-10 shadow-xl max-w-3xl"
      >
        <div className="text-primary-foreground/80 leading-relaxed space-y-6">
          <div>
            <h2 className="font-display font-bold text-xl text-primary-foreground mb-3">
              Hasso Plattner Institut für Digital Engineering gGmbH
            </h2>
            <p>Prof.-Dr.-Helmert-Str. 2-3</p>
            <p>14482 Potsdam</p>
            <p className="mt-2">Phone: +49 (0)331 5509-0</p>
            <p>Fax: +49 (0)331 5509-129</p>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:hpi-info@hpi.de" className="text-esprint-orange hover:underline">
                hpi-info(at)hpi.de
              </a>
            </p>
            <p>
              Website:{" "}
              <a href="https://www.hpi.de" target="_blank" rel="noopener noreferrer" className="text-esprint-orange hover:underline">
                www.hpi.de
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
              Authorized Representative Managing Directors
            </h3>
            <p>Prof. Dr. Tobias Friedrich</p>
            <p>Dr. Henrik Haenecke</p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
              Registry & Tax Information
            </h3>
            <p>Registry Office: Potsdam District Court</p>
            <p>Register Number: HRB 12184</p>
            <p>Tax Id: DE812987194</p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
              Persons responsible for content
            </h3>
            <p>Prof. Dr. Tobias Friedrich</p>
            <p>Dr. Henrik Haenecke</p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
              Editor
            </h3>
            <p>Hasso Plattner Institute</p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
              Legal information
            </h3>
            <p className="text-sm">
              Hasso Plattner Institute (HPI) constantly checks and updates the information on its web pages. Despite the utmost care taken, we cannot rule out that some of the data may have become outdated. Therefore, we cannot accept liability for the currency, accuracy and completeness of the information displayed. The same applies to all other web pages that can be reached via hyperlink. HPI is not responsible for the content of websites which can be reached via such links. Furthermore, HPI reserves the right to make changes or additions to the information displayed. Content and structure of the HPI website is protected by copyright. The reproduction of information or data, in particular the use of texts, text excerpts or illustrative material, requires our prior approval.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
              Privacy Notice
            </h3>
            <p>
              Please consult the{" "}
              <a href="https://www.engine.hpi.de/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-esprint-orange hover:underline">
                privacy policy
              </a>{" "}
              for further information.
            </p>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Imprint;
