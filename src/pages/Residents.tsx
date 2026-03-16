import SectionReveal from "@/components/SectionReveal";
import communityRoom from "@/assets/community-room.jpg";
import { ExternalLink, Users, MessageSquare, Star } from "lucide-react";

const ResidentsPage = () => {
  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={communityRoom} alt="Community room" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/70 to-transparent pt-32 pb-12">
          <div className="container mx-auto px-6">
            <div className="edge-line mb-4" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">Resident Life</h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="edge-line mx-auto mb-5" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">Access Your Portal</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">Current residents can access the portal for payments, maintenance requests, documents, and community updates.</p>
              <a href="https://www.appfolio.com/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold text-lg transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
                <ExternalLink className="w-5 h-5" /> Resident Login
              </a>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-3 gap-px bg-border mb-20">
            {[
              { icon: Users, title: "Community Board", desc: "Connect with neighbors, share updates, and stay informed." },
              { icon: MessageSquare, title: "Maintenance Requests", desc: "Submit and track maintenance requests through the portal." },
              { icon: Star, title: "Share Experiences", desc: "Share your Fairway Manor experience with the community." },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="bg-background p-8 text-center h-full">
                  <div className="w-14 h-14 border border-accent/30 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-base">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="text-center mb-12">
              <div className="edge-line mx-auto mb-5" />
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
                <div className="bg-background p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground text-base italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.years}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentsPage;
