import Spline from "@splinetool/react-spline";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/9m3f1r9O5yXkQzNw/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-900 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/20 mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Tailored luxury journeys
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-xl">
            Discover the world in first-class comfort
          </h1>
          <p className="mt-5 text-white/80 text-lg">
            Private itineraries, handpicked stays, and concierge-level service. We design trips that feel effortless and unforgettable.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 rounded-2xl bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur">
            <div className="flex items-center gap-2 rounded-xl bg-slate-900/40 px-3 py-3">
              <MapPin className="h-4 w-4 text-emerald-300" />
              <input
                type="text"
                placeholder="Where to?"
                className="bg-transparent placeholder:text-white/60 text-white w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-slate-900/40 px-3 py-3">
              <Calendar className="h-4 w-4 text-emerald-300" />
              <input
                type="text"
                placeholder="Dates"
                className="bg-transparent placeholder:text-white/60 text-white w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-slate-900/40 px-3 py-3">
              <Users className="h-4 w-4 text-emerald-300" />
              <input
                type="text"
                placeholder="Guests"
                className="bg-transparent placeholder:text-white/60 text-white w-full focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#destinations"
              className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 font-medium shadow/50 shadow-white/10 hover:shadow-white/30 transition-shadow"
            >
              Explore Destinations <ArrowRight className="h-4 w-4" />
            </a>
            <span className="text-white/70 text-sm">Expert planners. 24/7 concierge. Best-rate guarantees.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
