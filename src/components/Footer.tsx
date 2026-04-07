import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, ArrowRight, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-1">Like to Connect</h3>
            <p className="text-primary-foreground/60 text-sm">Get community updates delivered to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto gap-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 px-5 py-3 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 border border-primary-foreground/20 border-r-0 focus:outline-none focus:border-accent text-sm"
            />
            <button className="bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:brightness-110 transition-all whitespace-nowrap">
              Connect
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <img src={logo} alt="Fairway Manor Apartments" className="h-12" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              A premier senior rental community for ages 55 and older, nestled on 75 picturesque wooded acres in Patchogue, NY.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">Explore</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Floor Plans", path: "/floor-plans" },
                { label: "Amenities", path: "/amenities" },
                { label: "Gallery", path: "/gallery" },
                { label: "Events & Activities", path: "/events" },
                { label: "The Fairway Journal", path: "/journal" },
                { label: "Resident Portal", path: "/residents" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm group flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">Contact</h4>
            <div className="space-y-4 text-sm">
              <a href="tel:16313635760" className="flex items-start gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                (631) 363-5760
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>600 Clubhouse Drive<br />Patchogue, NY 11772</span>
              </div>
              <a href="mailto:info@fairwaymanorllc.com" className="flex items-start gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                info@fairwaymanorllc.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">Leasing Office</h4>
            <div className="flex items-start gap-3 text-primary-foreground/60 text-sm">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
              <div>
                <p>Monday – Friday</p>
                <p className="text-primary-foreground/80">8:00 AM – 4:30 PM</p>
                <p className="mt-3">Saturday & Sunday</p>
                <p className="text-primary-foreground/80">Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Fairway Manor Apartments. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/about" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors uppercase tracking-wider">About</Link>
            <Link to="/contact" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors uppercase tracking-wider">Contact</Link>
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors uppercase tracking-wider">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
