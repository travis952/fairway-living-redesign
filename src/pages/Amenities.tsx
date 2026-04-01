import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import ParallaxSection from "@/components/ParallaxSection";
import clubhouseLounge from "@/assets/clubhouse-lounge.png";
import clubhouseFitness from "@/assets/clubhouse-fitness.png";
import clubhouseExterior from "@/assets/clubhouse-exterior.png";
import heroCommunity from "@/assets/hero-community.jpg";
import { Trees, Dumbbell, BookOpen, UtensilsCrossed, Dog, Mail, ShieldCheck, Wifi, ArrowRight } from "lucide-react";

const amenitiesList = [
  { icon: Trees, title: "75 Wooded Acres", desc: "Picturesque grounds with manicured landscaping and a scenic lake with fountain." },
  { icon: Dumbbell, title: "Fitness Center", desc: "Treadmills, ellipticals, bikes, flat screen TV on the lower level of the Clubhouse." },
  { icon: BookOpen, title: "Lending Library", desc: "Browse and borrow from our community library in the Clubhouse Community Room." },
  { icon: UtensilsCrossed, title: "Lakeside Patio & BBQ", desc: "Outdoor tables, chairs, and barbecue grills overlooking the scenic lake." },
  { icon: Mail, title: "Central Mail Center", desc: "Convenient central mailbox pickup located in the Clubhouse." },
  { icon: Dog, title: "Pet Friendly", desc: "Bring your furry friends! Breed and weight restrictions apply for dogs." },
  { icon: ShieldCheck, title: "Gated Community", desc: "Secure gated entrance and well-maintained community grounds." },
  { icon: Wifi, title: "Cable & Phone Ready", desc: "All apartments pre-wired for telephone and cable service." },
];

const AmenitiesPage = () => {
  return (
    <div>
      <ParallaxSection image={heroCommunity} alt="Fairway Manor" height="h-[60vh] min-h-[400px]">
        <div className="container mx-auto px-6 flex items-end h-full pb-16">
          <SectionReveal>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-[0.3em] mb-3">Community Features</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">Amenities</h1>
          </SectionReveal>
        </div>
      </ParallaxSection>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal direction="left">
              <div className="space-y-6">
                <div className="edge-line" />
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary leading-tight">
                  Your <span className="italic font-normal">Community</span> Hub
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">The Clubhouse is the gathering place for Fairway Manor Residents. Here you will find our Fitness Center, Laundry Center, Community Room, central mailboxes, and the Management & Leasing Office.</p>
                <p className="text-muted-foreground text-base leading-relaxed">In the Community Room you will find a Lending Library, Flat Screen TV, tables and chairs for cards and games, and our complimentary coffee station.</p>
              </div>
            </SectionReveal>
            <SectionReveal direction="right" delay={0.2}>
              <div className="relative group">
                <img src={clubhouseLounge} alt="Clubhouse lounge with billiards" className="w-full fairway-shadow transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { img: clubhouseFitness, label: "Fitness Center" },
              { img: clubhouseLounge, label: "Community Room" },
              { img: clubhouseExterior, label: "Lakeside Patio" },
            ].map((item, i) => (
              <SectionReveal key={item.label} delay={i * 0.1}>
                <div className="relative overflow-hidden aspect-[4/3] group">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-primary-foreground font-display text-lg font-semibold">{item.label}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="edge-line mx-auto mb-5" />
              <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">Features</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">Community Features</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {amenitiesList.map((a, i) => (
              <SectionReveal key={a.title} delay={i * 0.06}>
                <div className="bg-card p-6 lg:p-8 h-full feature-card-hover">
                  <div className="w-11 h-11 border border-accent/30 flex items-center justify-center mb-4">
                    <a.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm">{a.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection image={clubhouseExterior} alt="Lakeside" height="h-[50vh]">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">Ready to See It All?</h2>
              <p className="text-primary-foreground/70 text-base mb-8">Schedule a tour and experience Fairway Manor in person.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
                Schedule a Tour <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default AmenitiesPage;
