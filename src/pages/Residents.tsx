import SectionReveal from "@/components/SectionReveal";
import heroCommunity from "@/assets/hero-community.jpg";
import communityRoom from "@/assets/community-room.jpg";
import { ExternalLink, Users, MessageSquare, Star, ArrowRight } from "lucide-react";

const ResidentsPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={communityRoom} alt="Community room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">Resident Life</h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto">Your community hub for resident services and experiences</p>
        </div>
      </section>

      {/* Resident Portal */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Resident Portal</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">Access Your Portal</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Current residents can access the resident portal for payments, maintenance requests, documents, and community updates.
              </p>
              <a
                href="https://www.appfolio.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                <ExternalLink className="w-5 h-5" />
                Resident Login
              </a>
            </div>
          </SectionReveal>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Users, title: "Community Board", desc: "Connect with neighbors, share updates, and stay informed about community happenings." },
              { icon: MessageSquare, title: "Maintenance Requests", desc: "Submit and track maintenance requests directly through the resident portal." },
              { icon: Star, title: "Share Experiences", desc: "Share your Fairway Manor experience and stories with the broader community." },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="glass-card p-8 rounded-2xl text-center h-full">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-base">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Community Wall */}
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Community Voices</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">What Residents Are Saying</h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Margaret L.", quote: "Moving to Fairway Manor was the best decision I've made. The grounds are beautiful, and the community events keep me active and social.", years: "Resident for 3 years" },
              { name: "Robert & Susan K.", quote: "We love the lakeside patio and the walking trails. It's like living in a resort, but with the comfort and warmth of a real community.", years: "Residents for 5 years" },
              { name: "Dorothy M.", quote: "The staff is wonderful and always helpful. I especially enjoy the book club and card game nights in the Community Room.", years: "Resident for 2 years" },
              { name: "James T.", quote: "The fitness center keeps me in shape, and the convenience of having everything on-site — laundry, mail, activities — makes life easy and enjoyable.", years: "Resident for 4 years" },
            ].map((testimonial, i) => (
              <SectionReveal key={testimonial.name} delay={i * 0.1}>
                <div className="glass-card p-8 rounded-2xl h-full">
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
