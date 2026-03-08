import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqSections = [
  {
    title: "Nomination & Requirements",
    items: [
      {
        q: "As a student, how can I apply to the program?",
        a: "Please contact your university.",
      },
      {
        q: "Are there specific requirements to participate?",
        a: "To participate in the European Impact Sprint, you must be a Bachelor's student of Computer Science (or similar) nominated by one of our selected partner universities, proficient in English and completed the application form.",
      },
      {
        q: "As a university, how can I nominate students for the program?",
        a: "Reach out to our program manager Essam Sharaf via the contact form and we'll guide you through the process.",
      },
    ],
  },
  {
    title: "Program Structure",
    items: [
      {
        q: "What challenges will students be working on?",
        a: "Projects range from sustainability to technology — each designed to solve tangible challenges.",
      },
      {
        q: "Will I have to pay for travel, accommodation and meals during the program?",
        a: "HPI will cover all cost for accommodation (glamping camp, on-campus) and meals during the program. In addition, you will be reimbursed for travel costs up to 200€.",
      },
      {
        q: "What do I need to prepare in advance?",
        a: "The details of this year's challenge will be explained during the Kick-off session. Please read the suggested documents and articles shared after the Kick-off to gain an in-depth understanding of the topic.",
      },
      {
        q: "Do I receive a certificate at the end of the program?",
        a: "Yes, all participants receive a certificate at the end of the program.",
      },
      {
        q: "How do you deal with intellectual property developed during the program?",
        a: "Any ideas developed during the course of the program are remaining with the students. Furthermore, HPI does not consider use of office space and infrastructure as constituting a significant use of HPI resources with regards to IP.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl mb-12"
          >
            FAQ
          </motion.h1>

          {faqSections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-display font-bold text-xl mb-4 text-primary">{section.title}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${si}-${i}`}
                    className="bg-card border border-border rounded-lg px-5"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
