import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import ParallaxSection from "@/components/ParallaxSection";
import heroCommunity from "@/assets/hero-community.jpg";
import clubhouseInterior from "@/assets/clubhouse-interior.jpg";
import fitnessCenter from "@/assets/fitness-center.jpg";
import lakesidePatio from "@/assets/lakeside-patio.jpg";
import communityRoom from "@/assets/community-room.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import aerialGrounds from "@/assets/aerial-grounds.jpg";
import buildingExterior from "@/assets/building-exterior.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: heroCommunity, alt: "Aerial view of Fairway Manor community", category: "Grounds" },
  { src: aerialGrounds, alt: "Aerial view of wooded acres and lake", category: "Grounds" },
  { src: clubhouseInterior, alt: "Clubhouse interior lounge", category: "Clubhouse" },
  { src: communityRoom, alt: "Community room with library", category: "Clubhouse" },
  { src: fitnessCenter, alt: "Fitness center equipment", category: "Clubhouse" },
  { src: lakesidePatio, alt: "Lakeside patio with BBQ", category: "Grounds" },
  { src: apartmentInterior, alt: "Modern apartment interior", category: "Apartments" },
  { src: buildingExterior, alt: "Building exterior with landscaping", category: "Apartments" },
];

const categories = ["All", "Grounds", "Clubhouse", "Apartments"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const navigateLightbox = (dir: number) => {
    if (lightbox === null) return;
    const newIndex = lightbox + dir;
    if (newIndex >= 0 && newIndex < galleryImages.length) setLightbox(newIndex);
  };

  return (
    <div>
      <ParallaxSection image={aerialGrounds} alt="Fairway Manor" height="h-[60vh] min-h-[400px]">
        <div className="container mx-auto px-6 flex items-end h-full pb-16">
          <SectionReveal>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-[0.3em] mb-3">Photo Gallery</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">Gallery</h1>
          </SectionReveal>
        </div>
      </ParallaxSection>

      <section className="section-padding">
        <div className="container mx-auto">
          <SectionReveal>
            <div className="flex justify-center mb-12">
              <div className="inline-flex border border-border">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${filter === cat ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-secondary"}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </SectionReveal>

          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative overflow-hidden aspect-[4/3] group cursor-pointer"
                  onClick={() => setLightbox(galleryImages.indexOf(img))}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary-foreground text-xs uppercase tracking-wider">{img.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground p-2 transition-colors">
              <X className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }} className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground p-2 transition-colors">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }} className="absolute right-6 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground p-2 transition-colors">
              <ChevronRight className="w-8 h-8" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
