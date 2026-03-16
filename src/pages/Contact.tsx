import { useState } from "react";
import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import heroCommunity from "@/assets/hero-community.jpg";
import { Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    apartmentSize: "",
    apartmentLevel: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you for your inquiry! We will be in touch shortly.");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroCommunity} alt="Fairway Manor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto">We'd love to hear from you</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <SectionReveal>
                <div className="space-y-6">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">Get in Touch</h2>
                  
                  <a href="tel:16313635760" className="flex items-start gap-4 group">
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Phone</p>
                      <p className="text-muted-foreground">(631) 363-5760</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Address</p>
                      <p className="text-muted-foreground">600 Clubhouse Drive<br />Patchogue, NY 11772</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Leasing Office Hours</p>
                      <p className="text-muted-foreground">Monday – Friday<br />8:00 AM – 4:30 PM</p>
                      <p className="text-muted-foreground mt-1">Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              {/* Directions */}
              <SectionReveal delay={0.2}>
                <div className="glass-card p-6 rounded-2xl space-y-4">
                  <h3 className="font-display text-lg font-semibold text-primary">Directions</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground mb-1">From Points West:</p>
                      <p>Take the LIE or Northern State Pkwy to Sagtikos Pkwy South → Southern State Pkwy East → Exit 44 East at Sunrise Hwy (Rt. 27) → Continue East to Exit 51 (Nicolls Road) → Stay on south service road ½ mile. Turn right into Clubhouse Drive.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">From Points East:</p>
                      <p>Sunrise Hwy (Rt. 27) West → Exit 51 (Nicolls Road) → Cross to south side of Sunrise Hwy → East on south service road ½ mile. Turn right into Clubhouse Drive.</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <SectionReveal delay={0.1}>
                <div className="glass-card p-8 md:p-10 rounded-2xl">
                  <h3 className="font-display text-2xl font-semibold text-primary mb-6">Request Information</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent text-base"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent text-base"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Apartment Size *</label>
                        <select
                          required
                          value={formData.apartmentSize}
                          onChange={(e) => setFormData({ ...formData, apartmentSize: e.target.value })}
                          className="w-full px-5 py-3 rounded-xl bg-secondary text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent text-base"
                        >
                          <option value="">Select size</option>
                          <option value="1br-standard">1 Bedroom Standard</option>
                          <option value="2br-standard">2 Bedroom Standard</option>
                          <option value="2br-luxury">2 Bedroom Luxury</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Preferred Level</label>
                        <select
                          value={formData.apartmentLevel}
                          onChange={(e) => setFormData({ ...formData, apartmentLevel: e.target.value })}
                          className="w-full px-5 py-3 rounded-xl bg-secondary text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent text-base"
                        >
                          <option value="">No preference</option>
                          <option value="first">First Floor</option>
                          <option value="second">Second Floor</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent text-base resize-none"
                        placeholder="Tell us about what you're looking for..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Request Information
                    </button>
                  </form>
                </div>
              </SectionReveal>
            </div>
          </div>

          {/* Map Embed */}
          <SectionReveal delay={0.3}>
            <div className="mt-16 rounded-2xl overflow-hidden fairway-shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.123!2d-73.019!3d40.765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s600+Clubhouse+Drive+Patchogue+NY+11772!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fairway Manor Location"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
