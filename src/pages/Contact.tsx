import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/PageLayout";
import essamImg from "@/assets/essam.jpeg";
import hendrikImg from "@/assets/hendrik.jpg";
import lisaImg from "@/assets/lisa.png";

const team = [
  { name: "Essam Sharaf", role: "Program Manager", img: essamImg, linkedin: "https://linkedin.com/in/essam-sharaf" },
  { name: "Hendrik Laflör", role: "Program Manager", img: hendrikImg, linkedin: "https://de.linkedin.com/in/sayhitohendrik" },
  { name: "Lisa Jeller", role: "Event Manager", img: lisaImg, linkedin: "https://de.linkedin.com/in/lisajeller" },
];

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("access_key", "bfdc05e8-0544-45a7-aff1-438a028e7eb4");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
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
      title="Contact"
      subtitle={<><span className="font-display font-black text-2xl md:text-3xl block mb-2">Ready to shape the future?</span>You're interested in joining the program as a participant or partner? Contact us!</>}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="font-display font-bold text-lg text-gray-900 uppercase tracking-wide border-b-2 border-esprint-purple pb-3 mb-6">
            Get in Touch
          </h2>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="font-display font-bold text-lg text-gray-900 uppercase tracking-wide border-b-2 border-esprint-pink pb-3 mb-8">
            Our Team
          </h2>
          <div className="grid gap-8">
            {team.map((t) => (
              <div key={t.name} className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 shrink-0">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-display font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm mb-2">{t.role}</p>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-esprint-pink text-esprint-darkblue text-xs font-bold px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Contact;
