import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import DestinationsGrid from "./components/DestinationsGrid";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-emerald-300/40 selection:text-white">
      <Navbar />
      <main>
        <Hero3D />
        <DestinationsGrid />
        <Testimonials />

        <section id="contact" className="relative py-24">
          <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(16,185,129,0.08),transparent)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Your next chapter begins here
                </h2>
                <p className="mt-3 text-white/70 max-w-xl">
                  Tell us how you like to travel and we’ll design a bespoke itinerary with exclusive perks and seamless logistics.
                </p>
                <ul className="mt-6 space-y-2 text-white/70 text-sm">
                  <li>• Dedicated travel designer</li>
                  <li>• 24/7 concierge during travel</li>
                  <li>• Preferred partner benefits worldwide</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <form className="grid gap-4">
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full rounded-xl bg-slate-900/60 text-white px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400 outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/80 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full rounded-xl bg-slate-900/60 text-white px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400 outline-none"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/80 mb-1">Phone</label>
                      <input
                        type="tel"
                        className="w-full rounded-xl bg-slate-900/60 text-white px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400 outline-none"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Dream destination</label>
                    <input
                      type="text"
                      className="w-full rounded-xl bg-slate-900/60 text-white px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400 outline-none"
                      placeholder="e.g., Amalfi Coast"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Message</label>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl bg-slate-900/60 text-white px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400 outline-none"
                      placeholder="Share dates, preferences, occasion..."
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-2 inline-flex justify-center rounded-xl bg-white text-slate-900 font-medium px-5 py-3 shadow/50 shadow-white/10 hover:shadow-white/30 transition-shadow"
                  >
                    Request Itinerary
                  </button>
                  <p className="text-xs text-white/60">
                    By submitting, you agree to our privacy policy. We’ll get back within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Aurelia Travel. All rights reserved.</p>
          <div className="text-white/60 text-sm">
            Crafted for modern travelers.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
