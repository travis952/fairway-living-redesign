import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import ParallaxSection from "@/components/ParallaxSection";
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
      <ParallaxSection image={heroCommunity} alt="Fairway Manor" height="h-[60vh] min-h-[400px]">
        <div className="container mx-auto px-6 flex items-end h-full pb-16">
          <SectionReveal>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-[0.3em] mb-3">Stories & Updates</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">The Fairway Journal</h1>
          </SectionReveal>
        </div>
      </ParallaxSection>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          {/* Featured Post */}
          <SectionReveal>
            <div className="border border-border overflow-hidden mb-12 group">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4 bg-card">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-accent font-semibold uppercase tracking-wider">{blogPosts[0].category}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{blogPosts[0].date}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary leading-tight">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground text-base leading-relaxed">{blogPosts[0].excerpt}</p>
                  <button className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300 self-start">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {blogPosts.slice(1).map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 0.1}>
                <article className="bg-background overflow-hidden h-full group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-accent font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary leading-tight group-hover:text-accent transition-colors duration-300">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                      <button className="text-accent font-semibold text-xs uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all duration-300">Read <ArrowRight className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          {/* Connect Form */}
          <SectionReveal delay={0.3}>
            <div className="border border-border bg-card p-10 mt-16 text-center">
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">Like to Connect?</h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">Share your details and we'll keep you updated with community news.</p>
              <div className="flex flex-col gap-3 max-w-md mx-auto">
                <input type="text" placeholder="Your name" className="w-full px-5 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:border-accent text-sm" />
                <input type="email" placeholder="Your email address" className="w-full px-5 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:border-accent text-sm" />
                <input type="tel" placeholder="Your phone number" className="w-full px-5 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:border-accent text-sm" />
                <button className="bg-button text-button-foreground hover:bg-button-hover px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110 whitespace-nowrap">Connect</button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default JournalPage;
