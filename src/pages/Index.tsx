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
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCommunity}
            alt="Aerial view of Fairway Manor community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 glass-card px-8 py-10 md:px-14 md:py-14 max-w-2xl text-center mx-6"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-4 leading-tight">
            Life, Above Par.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg mx-auto">
            A premier 55+ community on Long Island's most picturesque 75 wooded acres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/floor-plans"
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              View Available Residences
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary text-primary px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-primary hover:text-primary-foreground flex items-center justify-center gap-2"
            >
              Schedule a Tour
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full" />
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div className="space-y-6">
                <p className="text-accent font-semibold text-sm uppercase tracking-widest">Welcome to Fairway Manor</p>
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
                  className="w-full rounded-2xl fairway-shadow"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl hidden md:block">
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
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Amenities</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">
                Everything You Would Want
              </h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="glass-card p-8 rounded-2xl h-full group hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
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
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
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
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Gallery</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">
                Experience the Grounds
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[aerialGrounds, lakesidePatio, fitnessCenter, communityRoom, apartmentInterior, clubhouseInterior].map((img, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="relative overflow-hidden rounded-2xl group aspect-[4/3]">
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
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground mb-6 leading-tight">
              Hurry In for the Best Deal<br className="hidden md:block" /> on Long Island
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              600 Clubhouse Drive, Patchogue, NY 11772
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:16313635760"
                className="bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                Call (631) 363-5760
              </a>
              <Link
                to="/contact"
                className="border-2 border-primary-foreground/80 text-primary-foreground px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:bg-primary-foreground/10"
              >
                Request Information
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
