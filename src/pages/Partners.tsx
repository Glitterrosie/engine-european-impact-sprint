import { motion } from "framer-motion";

const Partners = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl mb-4"
          >
            Partners
          </motion.h1>

          {/* Host */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <p className="text-sm font-bold text-primary uppercase tracking-wide mb-4">Host</p>
              <div className="h-16 w-40 bg-muted rounded-lg flex items-center justify-center mb-6">
                <span className="text-muted-foreground text-xs">HPI Logo</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Hasso Plattner Institute</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Hasso Plattner Institute (HPI) in Potsdam is Germany's university center of excellence for digital engineering, advancing research and education in IT systems engineering, data engineering, cyber security, entrepreneurship, and digital health.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <p className="text-sm font-bold text-primary uppercase tracking-wide mb-4">Organizer</p>
              <div className="h-16 w-40 bg-muted rounded-lg flex items-center justify-center mb-6">
                <span className="text-muted-foreground text-xs">HPI Engine Logo</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">HPI Engine</h3>
              <p className="text-sm text-muted-foreground italic mb-2">Startup Ecosystem</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                One of Europe's leading startup ecosystems, empowering outstanding tech talent to become leaders and founders.
              </p>
            </motion.div>
          </div>

          {/* University partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-8">University Partners</h2>
            <div className="bg-card rounded-xl p-12 border border-border text-center">
              <p className="text-muted-foreground">
                Logos of 30 European partner universities – Coming Soon
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Interested in becoming a partner?{" "}
                <a href="/contact" className="text-primary hover:underline">Contact us!</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
