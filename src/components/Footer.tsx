import { Link } from "react-router-dom";
import hpiLogo from "@/assets/hpi-logo-white.png";
import hpiEngineLogo from "@/assets/hpi-engine-white.png";

const Footer = () => {
  return (
    <footer className="relative z-10 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <img src={hpiLogo} alt="Hasso Plattner Institute" className="h-8 opacity-80" />
              <img src={hpiEngineLogo} alt="HPI Engine" className="h-6 opacity-80" />
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              <Link to="/partners" className="hover:text-white transition-colors">About HPI</Link>
              <Link to="/imprint" className="hover:text-white transition-colors">Imprint</Link>
              <a href="https://www.engine.hpi.de/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-white/40">
            © 2026, Hasso-Plattner-Institut
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
