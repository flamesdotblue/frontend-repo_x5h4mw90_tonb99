import { MapPin, Shield, Star } from "lucide-react";

const destinations = [
  {
    name: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1506968430777-bf7784a87f22?q=80&w=1974&auto=format&fit=crop",
    tagline: "Cliffside sunsets & private villas",
  },
  {
    name: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1974&auto=format&fit=crop",
    tagline: "Timeless temples & tea ceremonies",
  },
  {
    name: "Amalfi Coast, Italy",
    image:
      "https://images.unsplash.com/photo-1506962757543-cf3ae2fdb9a0?q=80&w=1974&auto=format&fit=crop",
    tagline: "Sun-drenched drives & yacht days",
  },
  {
    name: "Bora Bora, French Polynesia",
    image:
      "https://images.unsplash.com/photo-1502485019198-a625bd53ceb3?q=80&w=2070&auto=format&fit=crop",
    tagline: "Overwater bungalows & turquoise lagoons",
  },
];

export default function DestinationsGrid() {
  return (
    <section id="destinations" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(16,185,129,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Signature Destinations</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Curated escapes crafted with insider access, private guides, and exceptional stays.
            </p>
          </div>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-400" /> Protected bookings</div>
            <div className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-emerald-400" /> 4.9/5 rating</div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <article key={d.name} className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
              <img
                src={d.image}
                alt={d.name}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 p-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/90 ring-1 ring-white/20">
                  <MapPin className="h-3.5 w-3.5 text-emerald-300" /> Featured
                </div>
                <h3 className="mt-3 text-white font-semibold">{d.name}</h3>
                <p className="text-white/80 text-sm">{d.tagline}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
