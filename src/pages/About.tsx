import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import ParallaxSection from "@/components/ParallaxSection";
import heroCommunity from "@/assets/hero-community.jpg";
import aboutSign from "@/assets/about-sign.png";
import aerialGrounds from "@/assets/aerial-grounds.jpg";
import clubhouseLounge from "@/assets/clubhouse-lounge.png";
import clubhouseExterior from "@/assets/clubhouse-exterior.png";
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
      <ParallaxSection image={heroCommunity} alt="Fairway Manor aerial view" height="h-[60vh] min-h-[400px]">
        <div className="container mx-auto px-6 flex items-end h-full pb-16">
          <SectionReveal>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-[0.3em] mb-3">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">About Us</h1>
          </SectionReveal>
        </div>
      </ParallaxSection>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal direction="left">
              <div className="space-y-6">
                <div className="edge-line" />
                <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em]">Welcome to Fairway Manor Apartments</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary leading-tight">
                  A Legacy of <span className="italic font-normal">Community</span> Living
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">Fairway Manor is senior rental community for ages 55 and older. Our gated community is situated on 75 picturesque wooded acres, has beautiful manicured landscaping, and a patio with barbecue grills that overlooks a scenic lake.</p>
                <p className="text-muted-foreground text-base leading-relaxed">Fairway Manor's Clubhouse is complete with a Laundry Center and Community Room for an assortment of activities, Central mail pick up, and a Fitness Center.</p>
                <p className="text-muted-foreground text-base leading-relaxed font-semibold text-primary">Make Fairway Manor your new home!</p>
              </div>
            </SectionReveal>
            <SectionReveal direction="right" delay={0.2}>
              <div className="relative group">
                <img src={aboutSign} alt="Fairway Manor Apartments sign" className="w-full fairway-shadow transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="edge-line mx-auto mb-5" />
              <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">Our Values</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">What We Stand For</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.1}>
                <div className="bg-background p-8 text-center h-full feature-card-hover">
                  <div className="w-14 h-14 border border-accent/30 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection image={clubhouseExterior} alt="Lakeside view" height="h-[40vh]" />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div className="relative group">
                <img src={clubhouseLounge} alt="Clubhouse lounge" className="w-full fairway-shadow transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2} direction="right">
              <div className="space-y-6">
                <div className="edge-line" />
                <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em]">The Clubhouse</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary leading-tight">
                  The Heart of <span className="italic font-normal">Our Community</span>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">The Clubhouse is the gathering place for Fairway Manor residents. Here you'll find our Fitness Center, Laundry Center, Community Room, central mailboxes, and the Management & Leasing Office.</p>
                <p className="text-muted-foreground text-base leading-relaxed">The Community Room features a Lending Library, flat screen TV, game tables, and a complimentary coffee station.</p>
                <Link to="/amenities" className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300">
                  Explore Amenities <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <ParallaxSection image={aerialGrounds} alt="Fairway Manor" height="h-[50vh]">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-xl">
              <div className="edge-line mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">Come See For Yourself</h2>
              <p className="text-primary-foreground/70 text-base mb-8">Schedule a tour and discover why Fairway Manor is the best deal on Long Island for active adult communities.</p>
              <Link to="/contact" className="bg-button text-button-foreground hover:bg-button-hover px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
                Schedule a Tour
              </Link>
            </div>
          </SectionReveal>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default AboutPage;
