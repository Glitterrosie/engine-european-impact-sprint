import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Challenge from "./pages/Challenge";
import HowItWorks from "./pages/HowItWorks";
import Benefits from "./pages/Benefits";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Imprint from "./pages/Imprint";
import NotFound from "./pages/NotFound";
import keyVisual from "@/assets/key-visual.png";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Global fixed background */}
      <div className="fixed inset-0 -z-10">
        <img src={keyVisual} alt="" className="w-full h-full object-cover" />
      </div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/faq" element={<FAQ />} />
           <Route path="/imprint" element={<Imprint />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
