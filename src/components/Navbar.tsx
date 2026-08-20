import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Floor Plans", path: "/floor-plans" },
  { label: "Amenities", path: "/amenities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Events", path: "/events" },
  { label: "Journal", path: "/journal" },
  { label: "Residents", path: "/residents" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Info Bar — Schedule Now button instead of address */}
      <div className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
      }`}>
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto flex items-center justify-between px-6 py-2">
            <a href="tel:16313635760" className="flex items-center gap-1.5 text-xs tracking-wide hover:text-accent transition-colors">
              <Phone className="w-3 h-3 opacity-70" />
              (631) 363-5760
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-semibold bg-button text-button-foreground hover:bg-button-hover px-4 py-1.5 hover:brightness-110 transition-all"
            >
              <Calendar className="w-3 h-3" />
              Schedule Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-background/97 backdrop-blur-md py-3 border-b border-border shadow-sm"
            : "top-[36px] bg-gradient-to-b from-primary/80 via-primary/40 to-transparent backdrop-blur-[2px] py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="Fairway Manor Apartments"
              className={`transition-all duration-500 ${
                isScrolled ? "h-10" : "h-14"
              }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-[13px] font-medium tracking-wider uppercase transition-all duration-300 ${
                  isScrolled
                    ? location.pathname === link.path
                      ? "text-accent"
                      : "text-foreground/80 hover:text-accent"
                    : location.pathname === link.path
                      ? "text-accent"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                isScrolled
                  ? "bg-button text-button-foreground hover:bg-button-hover hover:brightness-110"
                  : "bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/25 backdrop-blur-sm"
              }`}
            >
              Schedule Tour
            </Link>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      className={`block text-base font-medium py-3 tracking-wide transition-colors border-b border-border/50 ${
                        location.pathname === link.path ? "text-accent" : "text-foreground hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex flex-col gap-3 mt-4 pt-4">
                  <a href="tel:16313635760" className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Phone className="w-4 h-4 text-accent" />
                    (631) 363-5760
                  </a>
                  <Link to="/contact" className="bg-button text-button-foreground hover:bg-button-hover px-5 py-3 text-center font-semibold text-sm uppercase tracking-wider mt-2 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" /> Book Now
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
