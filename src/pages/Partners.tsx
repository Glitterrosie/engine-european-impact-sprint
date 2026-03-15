import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import hpiLogoWhite from "@/assets/hpi-logo-white.png";
import hpiEngineLogo from "@/assets/hpi-engine-white.svg";
import sapLogoWhite from "@/assets/sap-logo-white.png";
import hpiCampus1 from "@/assets/hpi-campus-1.jpg";
import hpiCampus2 from "@/assets/hpi-campus-2.jpg";
import hpiCampus3 from "@/assets/hpi-campus-3.jpg";

const Partners = () => {
  return (
    <PageLayout
      title="About HPI"
      subtitle="The European Impact Sprint is organized by leading institutions driving innovation, education, and technology across Europe."
      noPadBottom
    >
      <div className="space-y-6">
        {/* HPI Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-esprint-purple rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Logo + Text */}
            <div className="p-8 md:p-10 flex flex-col text-primary-foreground">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-60">Host</span>
              </div>
              <div className="mb-6">
                <img src={hpiLogoWhite} alt="Hasso Plattner Institute" className="h-12" />
              </div>
              <p className="text-sm leading-relaxed opacity-90 mb-4">
                The Hasso Plattner Institute (HPI) was founded in 1998 by Hasso Plattner, co-founder of SAP and one of Europe's most successful tech entrepreneurs. Today, HPI is a leading academic institution for digital engineering, educating the next generation of technology leaders, innovators and entrepreneurs.
              </p>
              <p className="text-sm leading-relaxed opacity-90 mb-6">
                Located in Potsdam near Berlin, HPI attracts more than 900 Bachelor's and Master's students and around 80 PhD candidates. With a focus on IT Systems Engineering, Computer Science, Digital Health, Cybersecurity and Data Engineering, HPI has produced more than 2,500 graduates supported by state-of-the-art infrastructure and an interdisciplinary faculty of 30+ professors.
              </p>
              <a
                href="https://hpi.de/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold hover:underline underline-offset-2 mt-auto"
              >
                More information: hpi.de →
              </a>
            </div>

            {/* Right: Campus photos */}
            <div className="grid grid-rows-2 gap-1">
              <div className="overflow-hidden">
                <img src={hpiCampus2} alt="HPI Campus building" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="overflow-hidden">
                  <img src={hpiCampus1} alt="HPI lecture hall" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden">
                  <img src={hpiCampus3} alt="HPI campus at night" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* HPI Engine Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-esprint-red rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Logo + Text */}
            <div className="p-8 md:p-10 flex flex-col text-primary-foreground">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-60">Organizer</span>
              </div>
              <div className="mb-6">
                <img src={hpiEngineLogo} alt="HPI Engine" className="h-10" />
              </div>
              <p className="text-sm leading-relaxed opacity-90 mb-4">
                HPI Engine is one of Europe's leading entrepreneurship ecosystems. We empower students, scientists, and tech founders to build digital products and startups through tailored programs, state-of-the-art infrastructure, close mentoring and a strong community.
              </p>
              <p className="text-sm leading-relaxed opacity-90 mb-6">
                The HPI ecosystem has produced 300+ startups shaping industries worldwide and attracting over €1B in venture capital.
              </p>
              <a
                href="https://engine.hpi.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold hover:underline underline-offset-2 mt-auto"
              >
                More information: engine.hpi.de →
              </a>
            </div>

            {/* Right: Photos */}
            <div className="grid grid-rows-2 gap-1 min-h-[350px]">
              <div className="bg-primary-foreground/10 flex items-center justify-center">
                <p className="text-primary-foreground/30 text-sm">HPI Engine Photo 1</p>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-primary-foreground/8 flex items-center justify-center">
                  <p className="text-primary-foreground/30 text-xs">Photo 2</p>
                </div>
                <div className="bg-primary-foreground/5 flex items-center justify-center">
                  <p className="text-primary-foreground/30 text-xs">Photo 3</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* University Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-esprint-darkblue rounded-2xl p-8 md:p-10 text-center shadow-xl"
        >
          <h2 className="font-display font-bold text-2xl text-primary-foreground mb-3">University Partners</h2>
          <p className="text-primary-foreground/50">Coming Soon</p>
          <p className="text-sm text-primary-foreground/40 mt-4">
            Interested in becoming a partner?{" "}
            <a href="/contact" className="text-esprint-pink hover:underline font-semibold">Contact us!</a>
          </p>
        </motion.div>

        {/* Industry Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-esprint-darkblue rounded-2xl shadow-xl py-10 px-8 md:px-10 text-center"
        >
          <h2 className="font-display font-bold text-lg text-primary-foreground uppercase tracking-wide mb-8">
            Industry Partners
          </h2>
          <div className="max-w-sm mx-auto">
            <a
              href="https://sap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <img
                src={sapLogoWhite}
                alt="SAP"
                className="h-10 group-hover:scale-105 transition-transform mb-3"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground/60">
                Camp Sponsor
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Partners;
