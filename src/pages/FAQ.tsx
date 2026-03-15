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
    items: [
      { q: "As a student, how can I apply to the program?", a: "Please contact your university." },
      { q: "Are there specific requirements to participate?", a: "To participate in the European Impact Sprint, you must be a Bachelor's student of Computer Science (or similar) nominated by one of our selected partner universities, proficient in English and completed the application form." },
      { q: "As a university, how can I nominate students for the program?", a: "Reach out to our program manager Essam Sharaf via the contact form and we'll guide you through the process." },
    ],
  },
  {
    title: "Program Structure",
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
    <div className="min-h-screen bg-white relative flex overflow-hidden">
      {/* Main content */}
      <div className="flex-1 flex flex-col pt-24 pb-20 px-6 md:px-12 lg:px-16">
        {/* Logo - inverted to dark/blue */}
        <img
          src={esprintLogo}
          alt="European Impact Sprint"
          className="w-48 md:w-64 mb-6"
          style={{
            filter: "brightness(0) saturate(100%) invert(18%) sepia(50%) saturate(700%) hue-rotate(180deg) brightness(95%) contrast(95%)",
          }}
        />

        {/* Page header */}
        <div className="mb-10">
          <h1 className="font-display font-black text-4xl md:text-6xl text-esprint-darkblue">
            FAQ
          </h1>
        </div>

        {/* FAQ sections */}
        <div className="max-w-3xl space-y-8">
          {faqSections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.1 }}
            >
              <h2 className="font-display font-bold text-sm text-esprint-darkblue uppercase tracking-widest border-b-2 border-esprint-purple pb-3 mb-6">
                {section.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${si}-${i}`}
                    className="border border-gray-200 rounded-lg px-5 bg-gray-50/50"
                  >
                    <AccordionTrigger className="text-left font-semibold text-esprint-darkblue hover:no-underline text-sm">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed text-sm">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right side - SVG cutout text revealing key visual */}
      <div className="hidden md:block w-56 lg:w-72 flex-shrink-0 relative bg-white overflow-hidden">
        {/* Key visual image, clipped by repeating text shape */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backgroundImage: `url(${keyVisual})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 750'>${Array.from({length: 8}, (_, i) => `<text x='${17.5 + i * 35}' y='5' text-anchor='start' font-family='sans-serif' font-weight='900' font-size='30' fill='black' writing-mode='tb' letter-spacing='2'>Frequently Asked Questions</text>`).join('')}</svg>`
            )}")`,
            WebkitMaskSize: '100% 750px',
            WebkitMaskRepeat: 'repeat-y',
            maskImage: `url("data:image/svg+xml,${encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 750'>${Array.from({length: 8}, (_, i) => `<text x='${17.5 + i * 35}' y='5' text-anchor='start' font-family='sans-serif' font-weight='900' font-size='30' fill='black' writing-mode='tb' letter-spacing='2'>Frequently Asked Questions</text>`).join('')}</svg>`
            )}")`,
            maskSize: '100% 750px',
            maskRepeat: 'repeat-y',
          }}
        />
      </div>
    </div>
  );
};

export default FAQ;
