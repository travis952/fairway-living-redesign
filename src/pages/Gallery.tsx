import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import heroCommunity from "@/assets/hero-community.jpg";
import clubhouseInterior from "@/assets/clubhouse-interior.jpg";
import fitnessCenter from "@/assets/fitness-center.jpg";
import lakesidePatio from "@/assets/lakeside-patio.jpg";
import communityRoom from "@/assets/community-room.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import aerialGrounds from "@/assets/aerial-grounds.jpg";
import buildingExterior from "@/assets/building-exterior.jpg";
import { X } from "lucide-react";

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

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={aerialGrounds} alt="Fairway Manor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">Gallery</h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto">Explore our beautiful community grounds and facilities</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container mx-auto">
          {/* Filters */}
          <SectionReveal>
            <div className="flex justify-center gap-2 mb-12 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    filter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
                  onClick={() => setLightbox(galleryImages.indexOf(img))}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
