import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Trees, Dumbbell, Users, Home, MapPin, Star } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import heroCommunity from "@/assets/hero-community.jpg";
import clubhouseInterior from "@/assets/clubhouse-interior.jpg";
import fitnessCenter from "@/assets/fitness-center.jpg";
import lakesidePatio from "@/assets/lakeside-patio.jpg";
import communityRoom from "@/assets/community-room.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import aerialGrounds from "@/assets/aerial-grounds.jpg";

const amenities = [
  { icon: Trees, title: "75 Wooded Acres", desc: "Picturesque grounds with manicured landscaping and scenic lake views." },
  { icon: Dumbbell, title: "Fitness Center", desc: "Fully equipped with treadmills, ellipticals, bikes, and flat screen TV." },
  { icon: Users, title: "Community Room", desc: "Lending library, game tables, flat screen TV, and complimentary coffee." },
  { icon: Home, title: "Private Entries", desc: "Every apartment features its own private entrance for comfort and privacy." },
  { icon: MapPin, title: "Lakeside Patio", desc: "Tables, chairs, and barbecue grills overlooking the scenic lake." },
  { icon: Star, title: "Pet Friendly", desc: "Bring your furry friends home. Breed and weight restrictions apply for dogs." },
];

const IndexPage = () => {
  return (
    <div>
      {/* Hero — Full bleed image, no overlay card, no dark shade */}
      <section className="relative h-screen min-h-[700px]">
        <img
          src={heroCommunity}
          alt="Aerial view of Fairway Manor community"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Bottom-anchored text strip */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent pt-40 pb-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-2xl"
            >
              <div className="edge-line mb-6" />
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4 leading-[1.1]">
                Residential Apartments<br />For Seniors 55 & Older
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg">
                A premier community on Long Island's most picturesque 75 wooded acres in Patchogue, NY.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/floor-plans"
                  className="bg-accent text-accent-foreground px-7 py-3.5 font-semibold text-base transition-all duration-300 hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  View Residences
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-primary-foreground/70 text-primary-foreground px-7 py-3.5 font-semibold text-base transition-all duration-300 hover:bg-primary-foreground/10 flex items-center justify-center gap-2"
                >
                  Schedule a Tour
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div className="space-y-6">
                <div className="edge-line" />
                <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">Welcome to Fairway Manor</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
                  A community designed for the next best chapter.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fairway Manor is a senior rental community for ages 55 and older. Our gated community is situated on 75 picturesque wooded acres, has beautiful manicured landscaping, and a patio with barbecue grills that overlooks a scenic lake.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fairway Manor's Clubhouse is complete with a Laundry Center and Community Room for an assortment of activities, Central mail pick up, and a Fitness Center. Make Fairway Manor your new home!
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="relative">
                <img
                  src={clubhouseInterior}
                  alt="Fairway Manor Clubhouse Interior"
                  className="w-full fairway-shadow"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 hidden md:block">
                  <p className="font-display text-3xl font-semibold">75</p>
                  <p className="text-sm text-primary-foreground/80">Wooded Acres</p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="edge-line mx-auto mb-5" />
              <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">Our Amenities</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">
                Everything You Would Want
              </h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {amenities.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.08}>
                <div className="bg-background p-8 h-full group hover:bg-secondary/50 transition-colors duration-300">
                  <div className="w-12 h-12 border border-accent/30 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-base">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                to="/amenities"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                Explore All Amenities <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="edge-line mx-auto mb-5" />
              <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">Gallery</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">
                Experience the Grounds
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
            {[aerialGrounds, lakesidePatio, fitnessCenter, communityRoom, apartmentInterior, clubhouseInterior].map((img, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="relative overflow-hidden group aspect-[4/3]">
                  <img
                    src={img}
                    alt={`Fairway Manor gallery image ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
              >
                View Full Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aerialGrounds} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-xl">
              <div className="edge-line mb-6" style={{ backgroundColor: "hsl(var(--accent))" }} />
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground mb-6 leading-tight">
                Hurry In for the Best Deal on Long Island
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                600 Clubhouse Drive, Patchogue, NY 11772
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:16313635760"
                  className="bg-accent text-accent-foreground px-7 py-3.5 font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98] text-center"
                >
                  Call (631) 363-5760
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-primary-foreground/70 text-primary-foreground px-7 py-3.5 font-semibold transition-all duration-300 hover:bg-primary-foreground/10 text-center"
                >
                  Request Information
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
