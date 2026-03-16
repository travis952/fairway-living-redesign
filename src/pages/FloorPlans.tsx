import { useState } from "react";
import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import buildingExterior from "@/assets/building-exterior.jpg";
import { ArrowRight, Check, Download, Calendar } from "lucide-react";

const standardFeatures = ["Private Entry","Frost Free Refrigerators","Self Cleaning Electric Stove","Vinyl & Ceramic Flooring","Plush Wall-to-Wall Carpeting","Wall Air-Conditioning Units","Pre-wired for Telephone & Cable","Intercoms for 2nd Floor Apartments","Laundry Center in Clubhouse"];
const luxuryFeatures = ["Private Entry","Washer & Dryer In-Unit","Central Air-Conditioning","Dishwasher","Private Patio or Balcony","Frost Free Refrigerators","Self Cleaning Electric Stove","Vinyl & Ceramic Flooring","Plush Wall-to-Wall Carpeting","Pre-wired for Telephone & Cable","Intercoms for 2nd Floor Apartments"];

type PlanTab = "standard" | "luxury";

const FloorPlansPage = () => {
  const [activeTab, setActiveTab] = useState<PlanTab>("standard");

  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={buildingExterior} alt="Fairway Manor buildings" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/70 to-transparent pt-32 pb-12">
          <div className="container mx-auto px-6">
            <div className="edge-line mb-4" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">Floor Plans</h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <SectionReveal>
            <div className="text-center mb-12">
              <div className="edge-line mx-auto mb-5" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">Available Apartment Styles</h2>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="flex justify-center gap-0 mb-12 border border-border inline-flex mx-auto w-full sm:w-auto">
              <button onClick={() => setActiveTab("standard")} className={`flex-1 sm:flex-none px-6 py-3 font-semibold text-base transition-all duration-300 ${activeTab === "standard" ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-secondary"}`}>
                1 & 2 Bed Standard
              </button>
              <button onClick={() => setActiveTab("luxury")} className={`flex-1 sm:flex-none px-6 py-3 font-semibold text-base transition-all duration-300 ${activeTab === "luxury" ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-secondary"}`}>
                2 Bed Luxury
              </button>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="sharp-card overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <img src={activeTab === "standard" ? buildingExterior : apartmentInterior} alt={`${activeTab} apartment`} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-12 space-y-6">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary">
                    {activeTab === "standard" ? "1 & 2 Bedroom Standard" : "2 Bedroom Luxury"}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {(activeTab === "standard" ? standardFeatures : luxuryFeatures).map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <div className="w-5 h-5 border border-accent/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-foreground text-base">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 font-semibold transition-all hover:bg-muted">
                      <Download className="w-4 h-4" /> Download PDF
                    </button>
                    <Link to="/contact" className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 font-semibold transition-all duration-300 hover:brightness-110">
                      <Calendar className="w-4 h-4" /> Schedule a Viewing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="text-center mt-16 sharp-card p-10">
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">Have Questions?</h3>
              <p className="text-muted-foreground text-lg mb-6">Call our leasing office for current availability and pricing.</p>
              <a href="tel:16313635760" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 font-semibold transition-all duration-300 hover:brightness-110">
                Call (631) 363-5760 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default FloorPlansPage;
