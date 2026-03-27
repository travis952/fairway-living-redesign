import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Trees, Dumbbell, Users, Home, MapPin, Star, ChevronDown } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import heroCommunity from "@/assets/hero-community.jpg";
import clubhouseInterior from "@/assets/clubhouse-interior.jpg";
import fitnessCenter from "@/assets/fitness-center.jpg";
import lakesidePatio from "@/assets/lakeside-patio.jpg";
import communityRoom from "@/assets/community-room.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import aerialGrounds from "@/assets/aerial-grounds.jpg";
import groundsParallax from "@/assets/grounds-parallax.jpg";
import ctaParallax from "@/assets/cta-parallax.jpg";

const featureCards = [
  { label: "See the Community", title: "Luxury Living", link: "/amenities", image: clubhouseInterior },
  { label: "Find Your Floorplan", title: "Thoughtful Interiors", link: "/floor-plans", image: apartmentInterior },
  { label: "Explore the Grounds", title: "Experience It All", link: "/gallery", image: aerialGrounds },
];

const amenities = [
  { icon: Trees, title: "75 Wooded Acres", desc: "Picturesque grounds with manicured landscaping and scenic lake views.", image: aerialGrounds },
  { icon: Dumbbell, title: "Fitness Center", desc: "Fully equipped with treadmills, ellipticals, bikes, and flat screen TV.", image: fitnessCenter },
  { icon: Users, title: "Community Room", desc: "Lending library, game tables, flat screen TV, and complimentary coffee.", image: communityRoom },
  { icon: Home, title: "Private Entries", desc: "Every apartment features its own private entrance for comfort and privacy.", image: apartmentInterior },
  { icon: MapPin, title: "Lakeside Patio", desc: "Tables, chairs, and barbecue grills overlooking the scenic lake.", image: lakesidePatio },
  { icon: Star, title: "Pet Friendly", desc: "Bring your furry friends home. Breed and weight restrictions apply for dogs.", image: clubhouseInterior },
];

const IndexPage = () => {

  return (
    <div>
      {/* Hero — Sticky parallax background */}
      <section ref={heroRef} className="relative h-screen min-h-[700px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroCommunity})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/50" />

        {/* Hero text */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-2xl"
            >
              <p className="text-primary-foreground/70 text-sm uppercase tracking-[0.3em] mb-4 font-medium">
                Patchogue, New York
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-[1.08] mb-6">
                Where Leisure
                <br />
                <span className="italic font-normal">& Nature</span> Meet
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                A premier 55+ community on Long Island's most picturesque 75 wooded acres.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/floor-plans"
                  className="bg-accent text-accent-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Find Your Home
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-primary-foreground/40 text-primary-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  Book a Tour
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-primary-foreground/50" />
          </motion.div>
        </motion.div>

        {/* Three Feature Cards at Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {featureCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                >
                  <Link
                    to={card.link}
                    className="group block relative overflow-hidden bg-primary/80 backdrop-blur-sm border-t border-l border-primary-foreground/10 p-6 md:p-8 transition-all duration-500 hover:bg-primary/90"
                  >
                    <p className="text-primary-foreground/50 text-xs uppercase tracking-[0.2em] mb-2">
                      {card.label}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground group-hover:text-accent transition-colors duration-300">
                      {card.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-primary-foreground/40 mt-3 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal direction="left">
              <div className="space-y-6">
                <div className="edge-line" />
                <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em]">Welcome Home</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
                  Feel at Home.
                  <br />
                  <span className="italic font-normal text-accent">Live the way</span> you've always wanted.
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Fairway Manor is a senior rental community for ages 55 and older. Our gated community is situated on 75 picturesque wooded acres, has beautiful manicured landscaping, and a patio with barbecue grills that overlooks a scenic lake.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Our Clubhouse is complete with a Laundry Center and Community Room for an assortment of activities, Central mail pick up, and a Fitness Center. Make Fairway Manor your new home!
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300 mt-2"
                >
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>
            <SectionReveal direction="right" delay={0.2}>
              <div className="relative group">
                <img
                  src={clubhouseInterior}
                  alt="Fairway Manor Clubhouse Interior"
                  className="w-full fairway-shadow transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 hidden md:block">
                  <p className="font-display text-4xl font-semibold">75</p>
                  <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">Wooded Acres</p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Parallax Divider — 75 Acres (sticky background) */}
      <StickyParallaxSection image={groundsParallax}>
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-lg">
              <p className="text-primary-foreground/80 text-sm uppercase tracking-[0.3em] mb-3">The Grounds</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground leading-tight">
                75 Acres of
                <br />
                <span className="italic font-normal">Natural Beauty</span>
              </h2>
            </div>
          </SectionReveal>
        </div>
      </StickyParallaxSection>

      {/* Amenities Grid — with images */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="edge-line mx-auto mb-5" />
              <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">Our Amenities</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
                Everything You Need
              </h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {amenities.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.08}>
                <div className="relative group overflow-hidden h-full feature-card-hover">
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30 group-hover:from-primary/95 group-hover:via-primary/70 transition-all duration-500" />
                  </div>
                  {/* Content */}
                  <div className="relative z-10 p-8 lg:p-10 flex flex-col justify-end min-h-[280px]">
                    <div className="w-12 h-12 border border-accent/40 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                      <item.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">{item.title}</h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                to="/amenities"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                Explore All Amenities <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Experience the Grounds — parallax background */}
      <StickyParallaxSection image={lakesidePatio}>
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center">
              <div className="edge-line mx-auto mb-5" />
              <p className="text-primary-foreground/80 text-sm uppercase tracking-[0.3em] mb-3">Gallery</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground mb-8">
                Experience the Grounds
              </h2>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110"
              >
                View Full Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </StickyParallaxSection>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
            {[aerialGrounds, lakesidePatio, fitnessCenter, communityRoom, apartmentInterior, clubhouseInterior].map((img, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="relative overflow-hidden group aspect-[4/3]">
                  <img
                    src={img}
                    alt={`Fairway Manor gallery image ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax CTA — sticky background */}
      <StickyParallaxSection image={ctaParallax}>
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-xl">
              <div className="edge-line mb-6" />
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground mb-6 leading-tight">
                Hurry In for the
                <br />
                <span className="italic font-normal">Best Deal</span> on Long Island
              </h2>
              <p className="text-primary-foreground/70 text-base mb-8">
                600 Clubhouse Drive, Patchogue, NY 11772
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:16313635760"
                  className="bg-accent text-accent-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110 active:scale-[0.98] text-center"
                >
                  Call (631) 363-5760
                </a>
                <Link
                  to="/contact"
                  className="border border-primary-foreground/40 text-primary-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-primary-foreground/10 text-center backdrop-blur-sm"
                >
                  Request Information
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </StickyParallaxSection>
    </div>
  );
};

/* Sticky parallax section — image stays fixed while content scrolls over */
const StickyParallaxSection = ({ image, children }: { image: string; children: React.ReactNode }) => {
  return (
    <div className="relative h-[60vh] min-h-[400px]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative z-10 h-full flex items-center">
        {children}
      </div>
    </div>
  );
};

export default IndexPage;
