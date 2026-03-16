import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import heroCommunity from "@/assets/hero-community.jpg";
import aerialGrounds from "@/assets/aerial-grounds.jpg";
import clubhouseInterior from "@/assets/clubhouse-interior.jpg";
import lakesidePatio from "@/assets/lakeside-patio.jpg";
import { ArrowRight, Heart, Shield, Users, Leaf } from "lucide-react";

const values = [
  { icon: Heart, title: "Community First", desc: "We foster meaningful connections among residents through shared spaces and organized activities." },
  { icon: Shield, title: "Safety & Comfort", desc: "Our gated community provides peace of mind with well-maintained grounds and secure access." },
  { icon: Users, title: "Active Living", desc: "From fitness facilities to social gatherings, we encourage a vibrant and engaged lifestyle." },
  { icon: Leaf, title: "Natural Beauty", desc: "75 acres of wooded landscape, scenic lake views, and manicured gardens surround every residence." },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroCommunity} alt="Fairway Manor aerial view" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto">Discover the story behind Fairway Manor</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div className="space-y-6">
                <p className="text-accent font-semibold text-sm uppercase tracking-widest">Our Story</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary leading-tight">
                  A Legacy of Community Living
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fairway Manor is a premier senior rental community designed exclusively for active adults ages 55 and older. Nestled on 75 picturesque wooded acres in Patchogue, New York, our gated community offers a unique blend of natural beauty and modern convenience.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The name "Fairway" reflects our connection to the traditions of excellence and leisure associated with the game of golf — the precision of well-maintained grounds, the camaraderie of community, and the pursuit of an active, fulfilling lifestyle.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our community features beautiful manicured landscaping, a scenic lake with fountain views, and a fully equipped clubhouse that serves as the heart of resident life. From our fitness center to our community room, every space is designed with our residents' comfort and enjoyment in mind.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <img src={aerialGrounds} alt="Fairway Manor grounds" className="w-full rounded-2xl fairway-shadow" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Values</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">What We Stand For</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.1}>
                <div className="glass-card p-8 rounded-2xl text-center h-full">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-base">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Second image section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <img src={clubhouseInterior} alt="Clubhouse interior" className="w-full rounded-2xl fairway-shadow" />
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="space-y-6">
                <p className="text-accent font-semibold text-sm uppercase tracking-widest">The Clubhouse</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary leading-tight">
                  The Heart of Our Community
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The Clubhouse is the gathering place for Fairway Manor residents. Here you'll find our Fitness Center, Laundry Center, Community Room, central mailboxes, and the Management & Leasing Office.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The Community Room features a Lending Library, flat screen TV, game tables, and a complimentary coffee station. Check the information boards for upcoming activities and join in on the fun!
                </p>
                <Link to="/amenities" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300">
                  Explore Amenities <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={lakesidePatio} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
              Come See For Yourself
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Schedule a tour and discover why Fairway Manor is the best deal on Long Island for active adult communities.
            </p>
            <Link to="/contact" className="bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
              Schedule a Tour
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
