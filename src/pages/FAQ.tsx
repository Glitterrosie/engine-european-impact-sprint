import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import keyVisual from "@/assets/key-visual.png";

const faqSections = [
  {
    title: "Nomination & Requirements",
    color: "esprint-orange",
    hsl: "var(--esprint-orange)",
    textClass: "text-esprint-darkblue",
    items: [
      { q: "As a student, how can I apply to the program?", a: "Please contact your university." },
      { q: "Are there specific requirements to participate?", a: "To participate in the European Impact Sprint, you must be a Bachelor's student of Computer Science (or similar) nominated by one of our selected partner universities, proficient in English and completed the application form." },
      { q: "As a university, how can I nominate students for the program?", a: "Reach out to our program manager Essam Sharaf via the contact form and we'll guide you through the process." },
    ],
  },
  {
    title: "Program Structure",
    color: "esprint-pink",
    hsl: "var(--esprint-pink)",
    textClass: "text-esprint-darkblue",
    items: [
      { q: "What challenges will students be working on?", a: "Projects range from sustainability to technology — each designed to solve tangible challenges." },
      { q: "Will I have to pay for travel, accommodation and meals during the program?", a: "HPI will cover all cost for accommodation (glamping camp, on-campus) and meals during the program. In addition, you will be reimbursed for travel costs up to 200€." },
      { q: "What do I need to prepare in advance?", a: "The details of this year's challenge will be explained during the Kick-off session. Please read the suggested documents and articles shared after the Kick-off to gain an in-depth understanding of the topic." },
    ],
  },
  {
    title: "Certificates & IP",
    color: "esprint-purple",
    hsl: "var(--esprint-purple)",
    textClass: "text-white",
    items: [
      { q: "Do I receive a certificate at the end of the program?", a: "Yes, all participants receive a certificate at the end of the program." },
      { q: "How do you deal with intellectual property developed during the program?", a: "Any ideas developed during the course of the program are remaining with the students. Furthermore, HPI does not consider use of office space and infrastructure as constituting a significant use of HPI resources with regards to IP." },
    ],
  },
];

const FAQ = () => {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${keyVisual})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Header block */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 pb-10 px-6 md:px-12 lg:px-16 md:mr-20"
        style={{ background: `hsl(var(--esprint-darkblue))` }}
      >
        <h1 className="font-display font-black text-5xl md:text-7xl text-white">
          FAQ
        </h1>
        <p className="text-esprint-cream/70 mt-3 text-lg max-w-xl">
          Everything you need to know about the European Impact Sprint.
        </p>
      </motion.div>

      {/* FAQ section blocks + key visual strip */}
      <div className="flex min-h-0">
        {/* Stacked color blocks */}
        <div className="flex-1 flex flex-col">
          {faqSections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.15 }}
              className="px-6 md:px-12 lg:px-16 py-10"
              style={{ background: `hsl(${section.hsl})` }}
            >
              <h2 className={`font-display font-bold text-xs uppercase tracking-[0.2em] ${section.textClass} opacity-70 mb-6`}>
                {section.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-3 max-w-3xl">
                {section.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${si}-${i}`}
                    className="border-none rounded-xl px-5 backdrop-blur-sm"
                    style={{ background: 'hsla(0, 0%, 100%, 0.15)' }}
                  >
                    <AccordionTrigger className={`text-left font-semibold ${section.textClass} hover:no-underline text-sm py-4`}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className={`${section.textClass} opacity-80 leading-relaxed text-sm`}>
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          {/* Bottom dark blue block to fill to footer */}
          <div
            className="flex-1 min-h-[80px]"
            style={{ background: `hsl(var(--esprint-darkblue))` }}
          />
        </div>

        {/* Key visual strip on the right */}
        <div className="hidden md:block w-20 flex-shrink-0" />
      </div>
    </div>
  );
};

export default FAQ;
