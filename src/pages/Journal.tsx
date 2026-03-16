import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import heroCommunity from "@/assets/hero-community.jpg";
import lakesidePatio from "@/assets/lakeside-patio.jpg";
import communityRoom from "@/assets/community-room.jpg";
import aerialGrounds from "@/assets/aerial-grounds.jpg";
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "spring-activities-fairway-manor",
    title: "Spring Activities at Fairway Manor",
    excerpt: "As the weather warms, our community comes alive with outdoor events, lakeside barbecues, and walking club meetups on the scenic 75-acre grounds.",
    image: lakesidePatio,
    date: "March 10, 2026",
    category: "Community Life",
    readTime: "4 min read",
  },
  {
    slug: "fitness-center-new-equipment",
    title: "New Equipment in the Fitness Center",
    excerpt: "We've upgraded our Fitness Center with new state-of-the-art treadmills and ellipticals to help you stay active and healthy.",
    image: communityRoom,
    date: "February 22, 2026",
    category: "Wellness",
    readTime: "3 min read",
  },
  {
    slug: "why-choose-55-plus-community",
    title: "Why Choose a 55+ Community?",
    excerpt: "Discover the benefits of active adult living — from social connections and shared amenities to maintenance-free lifestyles on beautiful grounds.",
    image: aerialGrounds,
    date: "February 8, 2026",
    category: "Lifestyle",
    readTime: "5 min read",
  },
  {
    slug: "book-club-february-picks",
    title: "Book Club: February Picks",
    excerpt: "Our Community Room book club shares their top reads this month. Stop by the Lending Library to grab a copy and join the conversation.",
    image: communityRoom,
    date: "January 28, 2026",
    category: "Community Life",
    readTime: "3 min read",
  },
  {
    slug: "pet-friendly-living-tips",
    title: "Pet-Friendly Living at Fairway Manor",
    excerpt: "Tips for enjoying pet-friendly community living, from walking trails on our wooded acres to meeting fellow pet owners at the Clubhouse.",
    image: heroCommunity,
    date: "January 15, 2026",
    category: "Lifestyle",
    readTime: "4 min read",
  },
];

const JournalPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroCommunity} alt="Fairway Manor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">The Fairway Journal</h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto">Stories, updates, and insights from our community</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          {/* Featured Post */}
          <SectionReveal>
            <div className="glass-card rounded-2xl overflow-hidden mb-12">
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
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                  <button className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 self-start">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 0.1}>
                <article className="glass-card rounded-2xl overflow-hidden h-full group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
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
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <button className="text-accent font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-300">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          {/* Newsletter */}
          <SectionReveal delay={0.3}>
            <div className="glass-card rounded-2xl p-10 mt-16 text-center">
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">Stay in the Loop</h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-md mx-auto">Subscribe to the Fairway Journal for community updates and stories.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent text-base"
                />
                <button className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:brightness-110 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default JournalPage;
