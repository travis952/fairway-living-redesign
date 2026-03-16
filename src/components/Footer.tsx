import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">Fairway Manor</h3>
            <p className="text-primary-foreground/70 text-base leading-relaxed">
              A premier senior rental community for ages 55 and older, situated on 75 picturesque wooded acres in Patchogue, NY.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Explore</h4>
            <nav className="flex flex-col gap-3">
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
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2 text-base"
                >
                  <ArrowRight className="w-3 h-3" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-base">
              <a href="tel:16313635760" className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                (631) 363-5760
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>600 Clubhouse Drive<br />Patchogue, NY 11772</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Leasing Office</h4>
            <div className="flex items-start gap-3 text-primary-foreground/70 text-base">
              <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
              <div>
                <p>Monday – Friday</p>
                <p>8:00 AM – 4:30 PM</p>
                <p className="mt-2">Saturday & Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Fairway Manor Apartments. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/about" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">About Us</Link>
            <Link to="/contact" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
