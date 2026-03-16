import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import heroCommunity from "@/assets/hero-community.jpg";
import lakesidePatio from "@/assets/lakeside-patio.jpg";
import communityRoom from "@/assets/community-room.jpg";
import aerialGrounds from "@/assets/aerial-grounds.jpg";
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  { slug: "spring-activities", title: "Spring Activities at Fairway Manor", excerpt: "As the weather warms, our community comes alive with outdoor events, lakeside barbecues, and walking club meetups.", image: lakesidePatio, date: "March 10, 2026", category: "Community Life", readTime: "4 min" },
  { slug: "fitness-center", title: "New Equipment in the Fitness Center", excerpt: "We've upgraded with new state-of-the-art treadmills and ellipticals to help you stay active.", image: communityRoom, date: "February 22, 2026", category: "Wellness", readTime: "3 min" },
  { slug: "55-plus", title: "Why Choose a 55+ Community?", excerpt: "Discover the benefits of active adult living — social connections, shared amenities, and beautiful grounds.", image: aerialGrounds, date: "February 8, 2026", category: "Lifestyle", readTime: "5 min" },
  { slug: "book-club", title: "Book Club: February Picks", excerpt: "Our book club shares their top reads. Stop by the Lending Library to grab a copy.", image: communityRoom, date: "January 28, 2026", category: "Community Life", readTime: "3 min" },
  { slug: "pet-friendly", title: "Pet-Friendly Living at Fairway Manor", excerpt: "Tips for pet-friendly community living, from walking trails to meeting fellow pet owners.", image: heroCommunity, date: "January 15, 2026", category: "Lifestyle", readTime: "4 min" },
];

const JournalPage = () => {
  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroCommunity} alt="Fairway Manor" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/70 to-transparent pt-32 pb-12">
          <div className="container mx-auto px-6">
            <div className="edge-line mb-4" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">The Fairway Journal</h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <SectionReveal>
            <div className="sharp-card overflow-hidden mb-12">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-accent font-semibold">{blogPosts[0].category}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{blogPosts[0].date}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary leading-tight">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground text-lg">{blogPosts[0].excerpt}</p>
                  <button className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 self-start">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {blogPosts.slice(1).map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 0.1}>
                <article className="bg-background overflow-hidden h-full group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-accent font-semibold">{post.category}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary leading-tight">{post.title}</h3>
                    <p className="text-muted-foreground text-base">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                      <button className="text-accent font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-300">Read <ArrowRight className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="sharp-card p-10 mt-16 text-center">
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">Stay in the Loop</h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-md mx-auto">Subscribe to the Fairway Journal for community updates.</p>
              <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto border border-border">
                <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3 bg-background text-foreground placeholder:text-muted-foreground border-0 focus:outline-none text-base" />
                <button className="bg-accent text-accent-foreground px-6 py-3 font-semibold transition-all duration-300 hover:brightness-110 whitespace-nowrap">Subscribe</button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default JournalPage;
