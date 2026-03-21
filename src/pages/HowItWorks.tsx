import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/PageLayout";
import gisNewYork from "@/assets/gis-newyork.png";
import esprintLogo from "@/assets/esprint-logo-white.svg";
import essamImg from "@/assets/essam.jpeg";
import hendrikImg from "@/assets/hendrik.jpg";
import lisaImg from "@/assets/lisa.png";

const criteria = [
  "Bachelor's students in Computer Science, preferably final year",
  "Passion for entrepreneurship, innovation and solving European challenges",
  "Confident in English and comfortable in multicultural teams",
  "Inclusivity and gender balance strongly encouraged in nominations",
];

const timeline = [
  { date: "17 April", title: "Expression of Interest", desc: "Universities confirm their intent to participate.", dots: 1 },
  { date: "5 May", title: "Online Info-session for Universities", desc: "A briefing call for universities.", dots: 1 },
  { date: "3 July", title: "Nomination Deadline", desc: "Deadline to submit two selected students.", dots: 1 },
  { date: "15 July", title: "Participants Announcement", desc: "Selected participants are announced.", dots: 1 },
  { date: "3 August", title: "Online Info-session for Students", desc: "A briefing call for nominated students.", dots: 1 },
  { date: "25–28 August", title: "European Impact Sprint", desc: "The main event at HPI, Potsdam.", dots: 4, isMain: true },
];

const team = [
  { name: "Essam Sharaf", role: "Program Manager", img: essamImg, linkedin: "https://linkedin.com/in/essam-sharaf" },
  { name: "Hendrik Laflör", role: "Program Lead", img: hendrikImg, linkedin: "https://de.linkedin.com/in/sayhitohendrik" },
  { name: "Lisa Jeller", role: "Event Manager", img: lisaImg, linkedin: "https://de.linkedin.com/in/lisajeller" },
];

const HowItWorks = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("access_key", "3c82321a-f5eb-4e93-b2e3-2a7ec2cdd2be");
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      if (res.ok) {
        toast({ title: "Message sent!", description: "We'll get back to you soon." });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Could not send message. Please try again.", variant: "destructive" });
    }
    setSending(false);
  };

  return (
    <PageLayout
      title="How to Join"
      subtitle="Students are nominated by their universities, joined into diverse teams and guided by experts throughout their 4-day journey on-site at HPI Potsdam/Berlin."
    >
      <div className="space-y-8">
        {/* Criteria + Image */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="font-display font-bold text-lg text-gray-900 uppercase tracking-wide border-b-2 border-esprint-purple pb-3 mb-6">Student Selection Criteria</h2>
            <ul className="space-y-3">
              {criteria.map((c, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-esprint-purple/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-esprint-purple font-bold text-xs">{i + 1}</span>
                  </span>
                  <p className="text-gray-700 text-sm">{c}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
            <img src={gisNewYork} alt="Global Impact Sprint participants in New York" className="w-full h-full min-h-[250px] object-cover" />
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
          <h2 className="font-display font-bold text-lg text-gray-900 uppercase tracking-wide border-b-2 border-esprint-orange pb-3 mb-8">Timeline</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-[34px] left-0 right-0 h-1 rounded-full bg-gradient-to-r from-esprint-pink via-esprint-purple to-esprint-orange" />
            <div className="grid md:grid-cols-6 gap-4">
              {timeline.map((t, i) => (
                <div key={i} className="relative text-center">
                  <p className="text-esprint-purple font-bold text-sm mb-2">{t.date}</p>
                  <div className="hidden md:flex justify-center gap-1.5 mb-4 relative z-10">
                    {Array.from({ length: t.dots }).map((_, d) => (
                      <div key={d} className="w-4 h-4 rounded-full bg-esprint-purple ring-4 ring-white" />
                    ))}
                  </div>
                  {t.isMain ? (
                    <div className="mt-2 flex justify-center">
                      <img src={esprintLogo} alt="European Impact Sprint" className="h-16 invert" />
                    </div>
                  ) : (
                    <>
                      <p className="font-display font-bold text-gray-900 mt-1 text-sm">{t.title}</p>
                      <p className="text-gray-500 text-xs mt-1">{t.desc}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <div id="contact" className="scroll-mt-20 grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
            <h2 className="font-display font-bold text-lg text-gray-900 uppercase tracking-wide border-b-2 border-esprint-purple pb-3 mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-gray-700 text-sm font-semibold">Full Name</Label>
                <Input id="name" name="name" required className="mt-1.5 bg-gray-50 border-gray-200 text-gray-900" />
              </div>
              <div>
                <Label htmlFor="org" className="text-gray-700 text-sm font-semibold">Organization</Label>
                <Input id="org" name="organization" required className="mt-1.5 bg-gray-50 border-gray-200 text-gray-900" />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 text-sm font-semibold">Email Address</Label>
                <Input id="email" name="email" type="email" required className="mt-1.5 bg-gray-50 border-gray-200 text-gray-900" />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700 text-sm font-semibold">Message</Label>
                <Textarea id="message" name="message" required rows={5} className="mt-1.5 bg-gray-50 border-gray-200 text-gray-900" />
              </div>
              <Button type="submit" disabled={sending} className="bg-esprint-purple hover:bg-esprint-purple/90 text-white rounded-full px-8">
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Team */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
            <h2 className="font-display font-bold text-lg text-gray-900 uppercase tracking-wide border-b-2 border-esprint-pink pb-3 mb-8">Our Team</h2>
            <div className="grid gap-8">
              {team.map((t) => (
                <div key={t.name} className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 shrink-0">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm mb-2">{t.role}</p>
                    <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-esprint-pink text-esprint-darkblue text-xs font-bold px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity">
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HowItWorks;
