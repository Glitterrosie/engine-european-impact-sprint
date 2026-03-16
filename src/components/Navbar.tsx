import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "The Challenge", path: "/#challenge" },
  { label: "How it Works", path: "/how-it-works" },
  { label: "Benefits", path: "/#benefits" },
  { label: "About HPI", path: "/partners" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/#faq" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isWhitePage = false;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showBg = scrolled;

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      const id = path.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    setMobileOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/" && !location.hash;
    if (path.startsWith("/#")) return location.hash === path.slice(1);
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showBg
          ? isWhitePage
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200"
            : "bg-esprint-darkblue/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className={isWhitePage ? "text-esprint-darkblue" : "text-white"}>
          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-semibold transition-colors",
                isWhitePage
                  ? isActive(item.path)
                    ? "bg-esprint-darkblue/10 text-esprint-darkblue"
                    : "text-esprint-darkblue/60 hover:text-esprint-darkblue hover:bg-esprint-darkblue/5"
                  : isActive(item.path)
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className={cn("md:hidden transition-colors", isWhitePage ? "text-esprint-darkblue" : "text-white")}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={cn(
          "md:hidden backdrop-blur-xl px-4 pb-4 space-y-1",
          isWhitePage
            ? "bg-white/90 border-b border-gray-200"
            : "bg-black/80 border-b border-white/10"
        )}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-semibold transition-colors",
                isWhitePage
                  ? isActive(item.path)
                    ? "bg-esprint-darkblue/10 text-esprint-darkblue"
                    : "text-esprint-darkblue/60 hover:text-esprint-darkblue hover:bg-esprint-darkblue/5"
                  : isActive(item.path)
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
