import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import esprintLogo from "@/assets/esprint-logo-white.svg";
import keyVisual from "@/assets/key-visual.png";

const faqSections = [
  {
    title: "Nomination & Requirements",
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
    <div className="min-h-screen relative flex flex-col">
      {/* Header with key visual background */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative pt-24 pb-10 px-6 md:px-12 lg:px-16 z-10"
        style={{
          backgroundImage: `url(${keyVisual})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <img
          src={esprintLogo}
          alt="European Impact Sprint"
          className="w-48 md:w-64 mb-6"
        />
        <h1 className="font-display font-black text-5xl md:text-7xl text-white">
          FAQ
        </h1>
        <p className="text-white/70 mt-3 text-lg max-w-xl">
          Everything you need to know about the European Impact Sprint.
        </p>
      </motion.div>

      {/* Stacked color blocks */}
      {faqSections.map((section, si) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: si * 0.1 }}
          className="relative px-6 md:px-12 lg:px-16 py-10 z-10"
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

      {/* Bottom key visual section */}
      <div
        className="flex-1 min-h-[120px] relative z-10"
        style={{
          backgroundImage: `url(${keyVisual})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      />

      {/* Key visual overlay on top of everything */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          backgroundImage: `url(${keyVisual})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.12,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

export default FAQ;
