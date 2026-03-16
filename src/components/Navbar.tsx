import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Floor Plans", path: "/floor-plans" },
  { label: "Amenities", path: "/amenities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Events", path: "/events" },
  { label: "Journal", path: "/journal" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md py-3 fairway-shadow"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-500 ${
            isScrolled ? "text-primary" : "text-primary-foreground"
          }`}>
            Fairway Manor
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              } ${location.pathname === link.path ? "text-accent" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:16313635760"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            <Phone className="w-4 h-4" />
            (631) 363-5760
          </a>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
          >
            Schedule Tour
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 transition-colors hover:text-accent ${
                    location.pathname === link.path ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:16313635760"
                className="flex items-center gap-2 text-base font-medium text-primary py-2"
              >
                <Phone className="w-4 h-4" />
                (631) 363-5760
              </a>
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-5 py-3 rounded-xl text-center font-semibold mt-2"
              >
                Schedule Tour
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
