import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Isabella R.",
    title: "CEO, Atelier IX",
    quote:
      "They crafted a two-week honeymoon through Italy that felt seamless. Private drivers, Michelin reservations, last-minute changes handled with grace—flawless.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Marcus V.",
    title: "Film Producer",
    quote:
      "From safari lodges to a surprise hot air balloon at sunrise, every detail was intentional. The concierge team was available at any hour.",
    avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Priya K.",
    title: "Founder, Veda Labs",
    quote:
      "We booked a family trip to Japan during peak season and still had VIP access everywhere. Truly premium service.",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Guest Stories</h2>
          <p className="mt-2 text-white/70">
            Words from discerning travelers who trust us with their most important journeys.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <figcaption className="text-white font-medium">{t.name}</figcaption>
                  <p className="text-white/60 text-sm">{t.title}</p>
                </div>
              </div>
              <blockquote className="mt-4 text-white/80">“{t.quote}”</blockquote>
              <div className="mt-4 inline-flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
