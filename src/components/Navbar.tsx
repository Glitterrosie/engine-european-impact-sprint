import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavGroup {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

const navGroups: NavGroup[] = [
  {
    label: "Home",
    path: "/",
    children: [
      { label: "The Challenge", path: "/#challenge" },
      { label: "Benefits", path: "/#benefits" },
      { label: "FAQ", path: "/#faq" },
    ],
  },
  {
    label: "How to Join",
    path: "/how-it-works",
    children: [
      { label: "Contact", path: "/how-it-works#contact" },
    ],
  },
  { label: "About HPI", path: "/partners" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    setOpenDropdown(null);
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/" && !location.hash;
    if (path.indexOf("#") !== -1) {
      const basePath = path.slice(0, path.indexOf("#")) || "/";
      const hash = path.slice(path.indexOf("#"));
      return location.pathname === basePath && location.hash === hash;
    }
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
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
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => group.children && handleMouseEnter(group.label)}
              onMouseLeave={() => group.children && handleMouseLeave()}
            >
              <Link
                to={group.path}
                onClick={(e) => handleNavClick(e, group.path)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-semibold transition-colors inline-flex items-center gap-1",
                  isActive(group.path)
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                {group.label}
                {group.children && (
                  <ChevronDown className={cn("h-3 w-3 transition-transform", openDropdown === group.label && "rotate-180")} />
                )}
              </Link>

              {/* Dropdown */}
              {group.children && openDropdown === group.label && (
                <div className="absolute top-full left-0 mt-1 min-w-[160px] bg-esprint-darkblue/95 backdrop-blur-xl rounded-lg border border-white/10 shadow-xl py-1 z-50">
                  {group.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={(e) => handleNavClick(e, child.path)}
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors",
                        isActive(child.path)
                          ? "bg-white/15 text-white"
                          : "text-white/60 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden transition-colors text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden backdrop-blur-xl px-4 pb-4 space-y-1 bg-black/80 border-b border-white/10">
          {navGroups.map((group) => (
            <div key={group.label}>
              <Link
                to={group.path}
                onClick={(e) => handleNavClick(e, group.path)}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-semibold transition-colors",
                  isActive(group.path) ? "bg-white/20 text-white" : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                {group.label}
              </Link>
              {group.children?.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  onClick={(e) => handleNavClick(e, child.path)}
                  className={cn(
                    "block pl-7 pr-3 py-1.5 rounded-md text-sm transition-colors",
                    isActive(child.path) ? "bg-white/15 text-white" : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
