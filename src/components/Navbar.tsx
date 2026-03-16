import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const mainItems = [
  { label: "Home", path: "/" },
  { label: "The Challenge", path: "/#challenge" },
  { label: "Benefits", path: "/#benefits" },
  { label: "FAQ", path: "/#faq" },
];

const secondaryItems = [
  { label: "How to Join", path: "/how-it-works" },
  { label: "Contact", path: "/how-it-works#contact" },
  { label: "About HPI", path: "/partners" },
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
    const hashIndex = path.indexOf("#");
    if (hashIndex !== -1) {
      e.preventDefault();
      const basePath = path.slice(0, hashIndex) || "/";
      const id = path.slice(hashIndex + 1);
      if (location.pathname === basePath) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(basePath);
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

  const renderNavItem = (item: { label: string; path: string }, isSecondary: boolean) => (
    <Link
      key={item.path}
      to={item.path}
      onClick={(e) => handleNavClick(e, item.path)}
      className={cn(
        "px-3 py-1.5 rounded-md text-sm transition-colors",
        isSecondary ? "font-normal" : "font-semibold",
        isActive(item.path)
          ? "bg-white/20 text-white"
          : isSecondary
            ? "text-white/50 hover:text-white/80 hover:bg-white/5"
            : "text-white/70 hover:text-white hover:bg-white/10"
      )}
    >
      {item.label}
    </Link>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showBg
          ? "bg-esprint-darkblue/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-white">
          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {mainItems.map((item) => renderNavItem(item, false))}
          <div className="w-px h-5 bg-white/20 mx-2" />
          {secondaryItems.map((item) => renderNavItem(item, true))}
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
        <div className="md:hidden backdrop-blur-xl px-4 pb-4 space-y-1 bg-black/80 border-b border-white/10">
          {mainItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={(e) => handleNavClick(e, item.path)}
              className={cn("block px-3 py-2 rounded-md text-sm font-semibold transition-colors",
                isActive(item.path) ? "bg-white/20 text-white" : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >{item.label}</Link>
          ))}
          <div className="h-px bg-white/15 my-2" />
          {secondaryItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={(e) => handleNavClick(e, item.path)}
              className={cn("block px-3 py-2 rounded-md text-sm font-normal transition-colors",
                isActive(item.path) ? "bg-white/20 text-white" : "text-white/50 hover:text-white/80 hover:bg-white/5"
              )}
            >{item.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
