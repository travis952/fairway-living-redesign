import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import ParallaxSection from "@/components/ParallaxSection";
import buildingExterior from "@/assets/building-exterior.jpg";
import bedroom1 from "@/assets/1-bedroom.png";
import bedroom1Kitchen from "@/assets/1-bedroom-kitchen.png";
import bedroom1Living from "@/assets/1-bedroom-living.png";
import bedroom2 from "@/assets/2-bedroom.png";
import bedroom2Kitchen from "@/assets/2-bedroom-kitchen.png";
import bedroom2Living from "@/assets/2-bedroom-living.png";
import bedroom2Terrace from "@/assets/2-bedroom-terrace.png";
import fpStandard1F from "@/assets/fp-standard-1f.png";
import fpStandard2F from "@/assets/fp-standard-2f.png";
import fpLuxuryA from "@/assets/fp-luxury-a.png";
import fpLuxuryB from "@/assets/fp-luxury-b.png";
import floorPlanAll from "@/assets/floor-plans-all.png";
import { ArrowRight, Check, Calendar, X, ChevronLeft, ChevronRight, Download } from "lucide-react";

const standardFeatures = [
  "Private Entry",
  "Frost Free Refrigerators",
  "Self Cleaning Electric Stove",
  "Vinyl & Ceramic Flooring",
  "Plush Wall-to-Wall Carpeting",
  "Wall Air-Conditioning Units",
  "Pre-wired for Telephone & Cable",
  "Intercoms for 2nd Floor Apartments",
  "Laundry Center in Clubhouse",
];
const luxuryFeatures = [
  "Private Entry",
  "Washer & Dryer In-Unit",
  "Central Air-Conditioning",
  "Dishwasher",
  "Private Patio or Balcony",
  "Frost Free Refrigerators",
  "Self Cleaning Electric Stove",
  "Vinyl & Ceramic Flooring",
  "Plush Wall-to-Wall Carpeting",
  "Pre-wired for Telephone & Cable",
  "Intercoms for 2nd Floor Apartments",
];

const standardFloorPlans = [
  { src: fpStandard1F, label: "Standard 1-2 Bedroom", sub: "First Floor" },
  { src: fpStandard2F, label: "Standard 1-2 Bedroom", sub: "Second Floor" },
];

const luxuryFloorPlans = [
  { src: fpLuxuryA, label: 'Luxury 2-Bedroom "A"', sub: "First Floor" },
  { src: fpLuxuryB, label: 'Luxury 2-Bedroom "B"', sub: "Second Floor" },
];

const standardPhotos = [
  { src: bedroom1, alt: "1 Bedroom - Bedroom" },
  { src: bedroom1Kitchen, alt: "1 Bedroom - Kitchen" },
  { src: bedroom1Living, alt: "1 Bedroom - Living Room" },
];

const luxuryPhotos = [
  { src: bedroom2, alt: "2 Bedroom Luxury - Bedroom" },
  { src: bedroom2Kitchen, alt: "2 Bedroom Luxury - Kitchen" },
  { src: bedroom2Living, alt: "2 Bedroom Luxury - Living Room" },
  { src: bedroom2Terrace, alt: "2 Bedroom Luxury - Terrace" },
];

type PlanTab = "standard" | "luxury";

const FloorPlansPage = () => {
  const [activeTab, setActiveTab] = useState<PlanTab>("standard");
  const [lightbox, setLightbox] = useState<{ type: "photo" | "plan"; index: number } | null>(null);

  const currentPhotos = activeTab === "standard" ? standardPhotos : luxuryPhotos;
  const currentPlans = activeTab === "standard" ? standardFloorPlans : luxuryFloorPlans;

  const allLightboxItems = [
    ...currentPlans.map((p) => ({ src: p.src, alt: `${p.label} - ${p.sub}` })),
    ...currentPhotos,
  ];

  const currentLightboxIndex = lightbox
    ? lightbox.type === "plan"
      ? lightbox.index
      : currentPlans.length + lightbox.index
    : -1;

  const navigateLightbox = (dir: number) => {
    const newIdx = currentLightboxIndex + dir;
    if (newIdx >= 0 && newIdx < allLightboxItems.length) {
      if (newIdx < currentPlans.length) {
        setLightbox({ type: "plan", index: newIdx });
      } else {
        setLightbox({ type: "photo", index: newIdx - currentPlans.length });
      }
    }
  };

  const handleDownloadPdf = () => {
    const link = document.createElement("a");
    link.href = floorPlanAll;
    link.download = "Fairway-Manor-Floor-Plans.png";
    link.click();
  };

  return (
    <div>
      <ParallaxSection image={buildingExterior} alt="Fairway Manor buildings" height="h-[60vh] min-h-[400px]">
        <div className="container mx-auto px-6 flex items-end h-full pb-16">
          <SectionReveal>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-[0.3em] mb-3">Residences</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">Floor Plans</h1>
          </SectionReveal>
        </div>
      </ParallaxSection>

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <SectionReveal>
            <div className="text-center mb-12">
              <div className="edge-line mx-auto mb-5" />
              <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">Choose Your Style</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">Available Apartment Styles</h2>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="flex justify-center mb-12">
              <div className="inline-flex border border-border">
                <button onClick={() => { setActiveTab("standard"); setLightbox(null); }} className={`px-8 py-3.5 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${activeTab === "standard" ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-secondary"}`}>
                  1 & 2 Bed Standard
                </button>
                <button onClick={() => { setActiveTab("luxury"); setLightbox(null); }} className={`px-8 py-3.5 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${activeTab === "luxury" ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-secondary"}`}>
                  2 Bed Luxury
                </button>
              </div>
            </div>
          </SectionReveal>

          {/* Floor Plan Images */}
          <SectionReveal delay={0.15}>
            <div className="mb-12">
              <div className="text-center mb-8">
                <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">Floor Plans</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary">
                  {activeTab === "standard" ? "Standard Apartment Layouts" : "Luxury Apartment Layouts"}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentPlans.map((plan, i) => (
                  <motion.div
                    key={plan.label + plan.sub}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border border-border bg-card overflow-hidden group cursor-pointer"
                    onClick={() => setLightbox({ type: "plan", index: i })}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-white p-4">
                      <img src={plan.src} alt={`${plan.label} - ${plan.sub}`} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-5 border-t border-border">
                      <h4 className="font-display text-lg font-semibold text-primary">{plan.label}</h4>
                      <p className="text-muted-foreground text-sm">{plan.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={handleDownloadPdf}
                  className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                >
                  <Download className="w-4 h-4" /> Download Floor Plans
                </button>
              </div>
            </div>
          </SectionReveal>

          {/* Features Section */}
          <SectionReveal delay={0.2}>
            <div className="border border-border overflow-hidden mb-12">
              <div className="p-8 lg:p-12 bg-card">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-6">
                  {activeTab === "standard" ? "1 & 2 Bedroom Standard Apartments" : "2 Bedroom Luxury Apartments"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {(activeTab === "standard" ? standardFeatures : luxuryFeatures).map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110">
                    <Calendar className="w-4 h-4" /> Schedule a Viewing
                  </Link>
                  <a href="tel:16313635760" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110">
                    Call (631) 363-5760
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Photo Renderings Grid */}
          <SectionReveal delay={0.3}>
            <div className="mb-12">
              <div className="text-center mb-8">
                <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">Photo Renderings</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary">
                  {activeTab === "standard" ? "Standard Apartment Gallery" : "Luxury Apartment Gallery"}
                </h3>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                {currentPhotos.map((photo, i) => (
                  <motion.div
                    key={photo.alt}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative overflow-hidden aspect-[4/3] group cursor-pointer"
                    onClick={() => setLightbox({ type: "photo", index: i })}
                  >
                    <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-primary-foreground text-xs font-semibold">{photo.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* CTA */}
          <SectionReveal delay={0.4}>
            <div className="text-center border border-border bg-card p-10">
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">Have Questions?</h3>
              <p className="text-muted-foreground text-base mb-6">Call our leasing office for current availability and pricing.</p>
              <a href="tel:16313635760" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110">
                Call (631) 363-5760 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && currentLightboxIndex >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground p-2 transition-colors z-10">
              <X className="w-8 h-8" />
            </button>
            {currentLightboxIndex > 0 && (
              <button onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }} className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground p-2 transition-colors z-10">
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}
            {currentLightboxIndex < allLightboxItems.length - 1 && (
              <button onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }} className="absolute right-6 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground p-2 transition-colors z-10">
                <ChevronRight className="w-8 h-8" />
              </button>
            )}
            <motion.div
              key={currentLightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={allLightboxItems[currentLightboxIndex].src}
                alt={allLightboxItems[currentLightboxIndex].alt}
                className={`w-full max-h-[85vh] ${lightbox.type === "plan" ? "object-contain bg-white p-4" : "object-contain"}`}
              />
              <p className="text-primary-foreground/70 text-sm text-center mt-4">{allLightboxItems[currentLightboxIndex].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloorPlansPage;
