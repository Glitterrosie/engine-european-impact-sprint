import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import esprintLogo from "@/assets/esprint-logo-white.svg";

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
    align: "right" as const,
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
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative pt-24 pb-10"
      >
        <div className="container mx-auto px-4 md:px-8">
          <img
            src={esprintLogo}
            alt="European Impact Sprint"
            className="w-48 md:w-64 mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          />
          <h1 className="font-display font-black text-5xl md:text-7xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            FAQ
          </h1>
          <p className="text-white/80 mt-3 text-lg max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            Everything you need to know about the European Impact Sprint.
          </p>
        </div>
      </motion.div>

      {/* Left-aligned color blocks */}
      <div className="container mx-auto flex flex-col gap-6 px-4 md:px-8 pb-20">
        {faqSections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: si * 0.1 }}
            className="relative w-full max-w-3xl rounded-2xl px-6 md:px-10 py-10"
            style={{ background: `hsl(${section.hsl})` }}
          >
            <h2 className={`font-display font-bold text-xs uppercase tracking-[0.2em] ${section.textClass} opacity-70 mb-6`}>
              {section.title}
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
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
      </div>

      {/* Spacer to let background show at bottom */}
      <div className="flex-1" />
    </div>
  );
};

export default FAQ;
