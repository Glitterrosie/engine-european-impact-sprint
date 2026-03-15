import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/PageLayout";

const faqSections = [
  {
    title: "Nomination & Requirements",
    color: "border-esprint-purple",
    dotColor: "bg-esprint-purple",
    items: [
      { q: "As a student, how can I apply to the program?", a: "Please contact your university." },
      { q: "Are there specific requirements to participate?", a: "To participate in the European Impact Sprint, you must be a Bachelor's student of Computer Science (or similar) nominated by one of our selected partner universities, proficient in English and completed the application form." },
      { q: "As a university, how can I nominate students for the program?", a: "Reach out to our program manager Essam Sharaf via the contact form and we'll guide you through the process." },
    ],
  },
  {
    title: "Program Structure",
    color: "border-esprint-pink",
    dotColor: "bg-esprint-pink",
    items: [
      { q: "What challenges will students be working on?", a: "Projects range from sustainability to technology — each designed to solve tangible challenges." },
      { q: "Will I have to pay for travel, accommodation and meals during the program?", a: "HPI will cover all cost for accommodation (glamping camp, on-campus) and meals during the program. In addition, you will be reimbursed for travel costs up to 200€." },
      { q: "What do I need to prepare in advance?", a: "The details of this year's challenge will be explained during the Kick-off session. Please read the suggested documents and articles shared after the Kick-off to gain an in-depth understanding of the topic." },
      { q: "Do I receive a certificate at the end of the program?", a: "Yes, all participants receive a certificate at the end of the program." },
      { q: "How do you deal with intellectual property developed during the program?", a: "Any ideas developed during the course of the program are remaining with the students. Furthermore, HPI does not consider use of office space and infrastructure as constituting a significant use of HPI resources with regards to IP." },
    ],
  },
];

const FAQ = () => {
  return (
    <PageLayout title="FAQ">
      <div className="max-w-3xl space-y-10">
        {faqSections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: si * 0.12, duration: 0.5 }}
            className={`relative rounded-2xl border-2 ${section.color} bg-background/60 backdrop-blur-sm overflow-hidden`}
          >
            {/* Section header */}
            <div className="px-8 pt-7 pb-4 flex items-center gap-3">
              <span className={`inline-block w-2.5 h-2.5 rounded-full ${section.dotColor}`} />
              <h2 className="font-display font-black text-base md:text-lg text-foreground uppercase tracking-widest">
                {section.title}
              </h2>
            </div>

            {/* Divider */}
            <div className={`mx-8 h-[2px] ${section.dotColor} opacity-40 rounded-full`} />

            {/* Accordion */}
            <div className="px-8 pb-6 pt-2">
              <Accordion type="single" collapsible className="space-y-1">
                {section.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${si}-${i}`}
                    className="border-b border-border/40 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm py-4 gap-3">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default FAQ;
