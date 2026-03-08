import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import essamImg from "@/assets/essam.jpeg";
import hendrikImg from "@/assets/hendrik.jpg";
import lisaImg from "@/assets/lisa.png";

const team = [
  { name: "Essam Sharaf", role: "Program Manager", img: essamImg },
  { name: "Hendrik Laflör", role: "Program Manager", img: hendrikImg },
  { name: "Lisa Jeller", role: "Event Manager", img: lisaImg },
];

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl mb-4"
          >
            Contact
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ready to shape the future? You're interested in joining the program as a participant or partner? Contact us!
          </p>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-5"
            >
              <div>
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <Input id="name" required className="mt-1.5 bg-card border-border" />
              </div>
              <div>
                <Label htmlFor="org" className="text-foreground">Organization</Label>
                <Input id="org" className="mt-1.5 bg-card border-border" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input id="email" type="email" required className="mt-1.5 bg-card border-border" />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea id="message" required rows={5} className="mt-1.5 bg-card border-border" />
              </div>
              <Button type="submit" disabled={sending} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>

            {/* Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display font-bold text-2xl mb-8">Our Team</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {team.map((t) => (
                  <div key={t.name} className="text-center">
                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-muted border-2 border-border">
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-display font-bold mt-4">{t.name}</p>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
