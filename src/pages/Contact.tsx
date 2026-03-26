import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import ParallaxSection from "@/components/ParallaxSection";
import heroCommunity from "@/assets/hero-community.jpg";
import { Phone, MapPin, Clock, Send, Mail } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", apartmentSize: "", apartmentLevel: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will be in touch shortly.");
  };

  return (
    <div>
      <ParallaxSection image={heroCommunity} alt="Fairway Manor" height="h-[60vh] min-h-[400px]">
        <div className="container mx-auto px-6 flex items-end h-full pb-16">
          <SectionReveal>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-[0.3em] mb-3">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">Contact Us</h1>
          </SectionReveal>
        </div>
      </ParallaxSection>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <SectionReveal direction="left">
                <div className="space-y-6">
                  <div className="edge-line" />
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">We'd Love to
                    <br /><span className="italic font-normal">Hear From You</span>
                  </h2>
                  
                  <a href="tel:16313635760" className="flex items-start gap-4 group p-4 border border-border hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary">Phone</p>
                      <p className="text-muted-foreground text-sm">(631) 363-5760</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 border border-border">
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary">Address</p>
                      <p className="text-muted-foreground text-sm">600 Clubhouse Drive<br />Patchogue, NY 11772</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border border-border">
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary">Leasing Office</p>
                      <p className="text-muted-foreground text-sm">Monday – Friday<br />8:00 AM – 4:30 PM</p>
                      <p className="text-muted-foreground text-sm mt-1">Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2} direction="left">
                <div className="border border-border bg-card p-6 space-y-4">
                  <h3 className="font-display text-lg font-semibold text-primary">Directions</h3>
                  <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">From Points West:</p>
                      <p>LIE or Northern State Pkwy → Sagtikos Pkwy South → Southern State Pkwy East → Exit 44 East at Sunrise Hwy → Exit 51 (Nicolls Road) → South service road ½ mile → Right into Clubhouse Drive.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">From Points East:</p>
                      <p>Sunrise Hwy West → Exit 51 (Nicolls Road) → Cross to south side → East on south service road ½ mile → Right into Clubhouse Drive.</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-3">
              <SectionReveal delay={0.1} direction="right">
                <div className="border border-border bg-card p-8 md:p-10">
                  <h3 className="font-display text-2xl font-semibold text-primary mb-2">Request Information</h3>
                  <p className="text-muted-foreground text-sm mb-8">Fill out the form below and we'll be in touch shortly.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:border-accent text-sm transition-colors" placeholder="Your full name" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:border-accent text-sm transition-colors" placeholder="email@example.com" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Phone *</label>
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-5 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:border-accent text-sm transition-colors" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Apartment Size *</label>
                        <select required value={formData.apartmentSize} onChange={(e) => setFormData({ ...formData, apartmentSize: e.target.value })} className="w-full px-5 py-3 bg-background text-foreground border border-border focus:outline-none focus:border-accent text-sm transition-colors">
                          <option value="">Select size</option>
                          <option value="1br-standard">1 Bedroom Standard</option>
                          <option value="2br-standard">2 Bedroom Standard</option>
                          <option value="2br-luxury">2 Bedroom Luxury</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Preferred Level</label>
                        <select value={formData.apartmentLevel} onChange={(e) => setFormData({ ...formData, apartmentLevel: e.target.value })} className="w-full px-5 py-3 bg-background text-foreground border border-border focus:outline-none focus:border-accent text-sm transition-colors">
                          <option value="">No preference</option>
                          <option value="first">First Floor</option>
                          <option value="second">Second Floor</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Message</label>
                      <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-5 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:border-accent text-sm resize-none transition-colors" placeholder="Tell us about what you're looking for..." />
                    </div>
                    <button type="submit" className="w-full bg-accent text-accent-foreground px-7 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Request Information
                    </button>
                  </form>
                </div>
              </SectionReveal>
            </div>
          </div>

          <SectionReveal delay={0.3}>
            <div className="mt-16 overflow-hidden fairway-shadow">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.123!2d-73.019!3d40.765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s600+Clubhouse+Drive+Patchogue+NY+11772!5e0!3m2!1sen!2sus!4v1" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Fairway Manor Location" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
