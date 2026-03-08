import { Link } from "react-router-dom";
import hpiEngineLogo from "@/assets/hpi-engine-white.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src={hpiEngineLogo} alt="HPI Engine" className="h-6 opacity-60" />
            <div>
              <p className="font-display font-bold text-foreground">European Impact Sprint 2026</p>
              <p className="text-sm text-muted-foreground">Hasso Plattner Institute, Potsdam</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
            <Link to="/partners" className="hover:text-foreground transition-colors">Partners</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 European Impact Sprint. Organized by HPI Engine.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
