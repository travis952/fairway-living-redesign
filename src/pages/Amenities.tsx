import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import clubhouseInterior from "@/assets/clubhouse-interior.jpg";
import fitnessCenter from "@/assets/fitness-center.jpg";
import lakesidePatio from "@/assets/lakeside-patio.jpg";
import communityRoom from "@/assets/community-room.jpg";
import heroCommunity from "@/assets/hero-community.jpg";
import { Trees, Dumbbell, BookOpen, UtensilsCrossed, Dog, Mail, ShieldCheck, Wifi, ArrowRight } from "lucide-react";

const amenitiesList = [
  { icon: Trees, title: "75 Wooded Acres", desc: "Picturesque grounds with manicured landscaping and a scenic lake with fountain." },
  { icon: Dumbbell, title: "Fitness Center", desc: "Fully equipped with treadmills, ellipticals, bikes, flat screen TV on the lower level of the Clubhouse." },
  { icon: BookOpen, title: "Lending Library", desc: "Browse and borrow from our community library collection in the Clubhouse Community Room." },
  { icon: UtensilsCrossed, title: "Lakeside Patio & BBQ", desc: "Outdoor tables, chairs, and barbecue grills overlooking the scenic lake — perfect for gatherings." },
  { icon: Mail, title: "Central Mail Center", desc: "Convenient central mailbox pickup located in the Clubhouse for all residents." },
  { icon: Dog, title: "Pet Friendly", desc: "Bring your furry friends! Breed and weight restrictions apply for dogs. Contact us for details." },
  { icon: ShieldCheck, title: "Gated Community", desc: "Enjoy peace of mind with our secure gated entrance and well-maintained community grounds." },
  { icon: Wifi, title: "Cable & Phone Ready", desc: "All apartments are pre-wired for telephone and cable service for your convenience." },
];

const AmenitiesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroCommunity} alt="Fairway Manor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">Amenities</h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto">Everything you would want in a senior rental community</p>
        </div>
      </section>

      {/* Clubhouse Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div className="space-y-6">
                <p className="text-accent font-semibold text-sm uppercase tracking-widest">The Clubhouse</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary leading-tight">
                  Your Community Hub
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The Clubhouse is the gathering place for Fairway Manor Residents. Here you will find our Fitness Center, Laundry Center, Community Room, central mailboxes, and the Management & Leasing Office.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  In the Community Room you will find a Lending Library, Flat Screen TV, tables and chairs for cards and games, or just sit and chat or read a book, and enjoy our complimentary coffee station. Check out the Information Boards for upcoming activities!
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <img src={clubhouseInterior} alt="Clubhouse interior" className="w-full rounded-2xl fairway-shadow" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Image row */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: fitnessCenter, label: "Fitness Center" },
              { img: communityRoom, label: "Community Room" },
              { img: lakesidePatio, label: "Lakeside Patio" },
            ].map((item, i) => (
              <SectionReveal key={item.label} delay={i * 0.1}>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/60 to-transparent p-6">
                    <p className="text-primary-foreground font-display text-lg font-semibold">{item.label}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Full List</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">Community Features</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenitiesList.map((a, i) => (
              <SectionReveal key={a.title} delay={i * 0.08}>
                <div className="glass-card p-6 rounded-2xl h-full">
                  <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
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

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">Ready to See It All?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Schedule a tour and experience Fairway Manor in person.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
              Schedule a Tour <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;
