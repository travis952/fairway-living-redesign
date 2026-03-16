import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import heroCommunity from "@/assets/hero-community.jpg";
import { Calendar, Clock, MapPin, Users, Dumbbell, Palette, Filter } from "lucide-react";

type EventCategory = "All" | "Social" | "Fitness" | "Wellness" | "Arts";

const events = [
  { id: 1, title: "Morning Yoga & Stretch", date: "Every Monday", time: "9:00 AM – 10:00 AM", location: "Fitness Center", category: "Fitness" as EventCategory, description: "Start your week with gentle yoga and stretching exercises suitable for all fitness levels. Mats provided." },
  { id: 2, title: "Book Club Meeting", date: "1st Tuesday of Each Month", time: "2:00 PM – 3:30 PM", location: "Community Room", category: "Social" as EventCategory, description: "Join fellow residents to discuss this month's selection from the Lending Library. Refreshments served." },
  { id: 3, title: "Watercolor Workshop", date: "Every Wednesday", time: "10:00 AM – 12:00 PM", location: "Community Room", category: "Arts" as EventCategory, description: "Explore watercolor techniques with instructor-led sessions. All materials provided." },
  { id: 4, title: "Lakeside BBQ Social", date: "Last Saturday of Each Month", time: "12:00 PM – 3:00 PM", location: "Lakeside Patio", category: "Social" as EventCategory, description: "Enjoy a community barbecue overlooking the scenic lake. Burgers, hot dogs, and sides provided." },
  { id: 5, title: "Walking Club", date: "Every Tuesday & Thursday", time: "8:00 AM – 9:00 AM", location: "Community Grounds", category: "Fitness" as EventCategory, description: "Walk the beautiful 75-acre grounds with neighbors. All paces welcome." },
  { id: 6, title: "Card Game Night", date: "Every Friday", time: "6:30 PM – 9:00 PM", location: "Community Room", category: "Social" as EventCategory, description: "Bridge, pinochle, poker, or whatever game you'd like! Bring a friend or come meet new ones." },
  { id: 7, title: "Chair Aerobics", date: "Every Wednesday & Friday", time: "10:30 AM – 11:15 AM", location: "Community Room", category: "Wellness" as EventCategory, description: "Low-impact seated exercises designed to improve flexibility, strength, and balance." },
  { id: 8, title: "Live Music Afternoon", date: "2nd Sunday of Each Month", time: "3:00 PM – 5:00 PM", location: "Community Room", category: "Arts" as EventCategory, description: "Enjoy live performances from local musicians. Coffee, tea, and light refreshments provided." },
  { id: 9, title: "Meditation & Mindfulness", date: "Every Thursday", time: "4:00 PM – 4:45 PM", location: "Community Room", category: "Wellness" as EventCategory, description: "Guided meditation sessions focused on relaxation and stress relief." },
];

const cats: EventCategory[] = ["All", "Social", "Fitness", "Wellness", "Arts"];

const EventsPage = () => {
  const [filter, setFilter] = useState<EventCategory>("All");
  const filtered = filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroCommunity} alt="Fairway Manor" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/70 to-transparent pt-32 pb-12">
          <div className="container mx-auto px-6">
            <div className="edge-line mb-4" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">Activities & Events</h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <SectionReveal>
            <div className="flex justify-center gap-0 mb-12 border border-border inline-flex mx-auto flex-wrap">
              {cats.map((cat) => (
                <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${filter === cat ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-secondary"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="space-y-0 border border-border">
            {filtered.map((event, i) => (
              <SectionReveal key={event.id} delay={i * 0.04}>
                <div className="p-6 md:p-8 border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="flex items-center gap-3 md:min-w-[160px]">
                      <div className="w-2 h-2 bg-accent flex-shrink-0" />
                      <span className="text-sm font-semibold text-accent uppercase tracking-wider">{event.category}</span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="font-display text-xl font-semibold text-primary">{event.title}</h3>
                      <p className="text-muted-foreground text-base">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" strokeWidth={1.5} />{event.date}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" strokeWidth={1.5} />{event.time}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" strokeWidth={1.5} />{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No events scheduled in this category. Why not start a game at the clubhouse?</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
