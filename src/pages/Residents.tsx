import SectionReveal from "@/components/SectionReveal";
import ParallaxSection from "@/components/ParallaxSection";
import communityRoom from "@/assets/community-room.jpg";
import lakesidePatio from "@/assets/lakeside-patio.jpg";
import { ExternalLink, Star } from "lucide-react";

const ResidentsPage = () => {
  return (
    <div>
      <ParallaxSection image={communityRoom} alt="Community room" height="h-[60vh] min-h-[400px]">
        <div className="container mx-auto px-6 flex items-end h-full pb-16">
          <SectionReveal>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-[0.3em] mb-3">For Our Residents</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">Resident Life</h1>
          </SectionReveal>
        </div>
      </ParallaxSection>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="edge-line mx-auto mb-5" />
              <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">Resident Portal</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">Access Your Portal</h2>
              <p className="text-muted-foreground text-base max-w-xl mx-auto mb-8">Current residents can access the portal for payments, maintenance requests, documents, and community updates.</p>
              <a href="https://www.appfolio.com/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
                <ExternalLink className="w-4 h-4" /> Resident Login
              </a>
            </div>
          </SectionReveal>


          <ParallaxSection image={lakesidePatio} alt="Lakeside" height="h-[30vh]" />

          <div className="mt-20">
            <SectionReveal>
              <div className="text-center mb-12">
                <div className="edge-line mx-auto mb-5" />
                <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">Testimonials</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">What Residents Are Saying</h2>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-px bg-border">
              {[
                { name: "Margaret L.", quote: "Moving to Fairway Manor was the best decision I've made. The grounds are beautiful, and the community events keep me active and social.", years: "Resident for 3 years" },
                { name: "Robert & Susan K.", quote: "We love the lakeside patio and the walking trails. It's like living in a resort, but with the comfort and warmth of a real community.", years: "Residents for 5 years" },
                { name: "Dorothy M.", quote: "The staff is wonderful and always helpful. I especially enjoy the book club and card game nights in the Community Room.", years: "Resident for 2 years" },
                { name: "James T.", quote: "The fitness center keeps me in shape, and the convenience of having everything on-site makes life easy and enjoyable.", years: "Resident for 4 years" },
              ].map((testimonial, i) => (
                <SectionReveal key={testimonial.name} delay={i * 0.1}>
                  <div className="bg-card p-8 h-full">
                    <div className="flex gap-0.5 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-foreground text-sm italic leading-relaxed mb-5">"{testimonial.quote}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-sm text-primary">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.years}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentsPage;
