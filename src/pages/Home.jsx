export default function Home() {
  const features = [
    { icon: "🕐", title: "24/7 Available", desc: "Round the clock service, any day of the year." },
    { icon: "🚗", title: "All Vehicle Types", desc: "5-seater to 7-seater cabs for every group size." },
    { icon: "🛣️", title: "Outstation Trips", desc: "Comfortable rides beyond 200 km with fixed rates." },
    { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges — toll & overnight clearly stated." },
  ];

  const popularRoutes = [
    { city: "Ayodhya", price: "₹3,500", emoji: "🕌", desc: "Ram Mandir & Saryu Ghat", time: "~2 hrs" },
    { city: "Varanasi", price: "₹7,500", emoji: "🪔", desc: "Kashi Vishwanath & Ghats", time: "~4 hrs" },
    { city: "Vrindavan", price: "₹9,000", emoji: "🌸", desc: "Banke Bihari & Prem Mandir", time: "~5 hrs" },
  ];

  return (
    <div id="home" className="bg-black text-white mt-10">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(#FFD700 1px,transparent 1px),linear-gradient(90deg,#FFD700 1px,transparent 1px)", backgroundSize: "60px 60px" }}>
        </div>

        {/* Glowing orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-5 pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-5 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-yellow-400 rounded-full text-white animate-pulse"></span>
            Available 24 / 7 · All Vehicles
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none mb-6 tracking-tight">
            <span className="block text-white">BAJPAI</span>
            <span className="block text-yellow-400">CAB TAXI</span>
            <span className="block text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-light mt-2 tracking-widest uppercase">Lucknow</span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium cab service for city rides & outstation journeys. Safe, comfortable and always on time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7355517605"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-0.5">
              📞 Call & Book — 7355517605
            </a>
            <a href="/plan-journey"
              className="border border-yellow-400 border-opacity-50 hover:border-yellow-400 text-yellow-400 font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-yellow-400 hover:bg-opacity-10">
              Plan Your Journey →
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { n: "24/7", l: "Service" },
              { n: "200+", l: "KM Routes" },
              { n: "2", l: "Phone Lines" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-yellow-400 font-black text-3xl">{s.n}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent"></div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Travel With Confidence</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title}
                className="bg-black border border-gray-800 hover:border-yellow-400 hover:border-opacity-50 rounded-2xl p-7 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/5">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Routes ── */}
      <section id="routes" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Pilgrimage & Tourism</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Popular Routes</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Fixed package prices from Lucknow. Overnight & parking charges applicable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularRoutes.map((r, i) => (
              <div key={r.city}
                className={`relative rounded-3xl overflow-hidden border ${i === 1 ? "border-yellow-400" : "border-gray-800"} bg-gray-950 p-8 flex flex-col hover:border-yellow-400 transition-all duration-300 group`}>
                {i === 1 && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                    Popular
                  </div>
                )}
                <div className="text-5xl mb-5">{r.emoji}</div>
                <h3 className="text-2xl font-black text-white mb-1">{r.city}</h3>
                <p className="text-gray-500 text-sm mb-2">{r.desc}</p>
                <p className="text-gray-600 text-xs mb-6">⏱ {r.time} from Lucknow</p>
                <div className="mt-auto">
                  <p className="text-yellow-400 font-black text-3xl">{r.price}</p>
                  <p className="text-gray-600 text-xs mt-1">+ Overnight & Parking charges</p>
                </div>
                <a href="tel:7355517605"
                  className="mt-6 block text-center bg-yellow-400 bg-opacity-10 hover:bg-yellow-400 hover:text-black border border-yellow-400 border-opacity-30 hover:border-yellow-400 text-yellow-400 font-bold py-3 rounded-xl transition-all duration-200">
                  Book This Route
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-8">
            * Minimum outstation range: 200 km &nbsp;|&nbsp; Toll charges extra on all routes
          </p>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-black mb-4">Ready to Ride?</h2>
          <p className="text-yellow-900 text-lg mb-8">Call us now — we're available round the clock, every day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7355517605"
              className="bg-black text-yellow-400 font-black text-lg px-8 py-4 rounded-full hover:bg-gray-900 transition-colors">
              📞 7355517605
            </a>
            <a href="tel:8887616432"
              className="bg-black text-yellow-400 font-black text-lg px-8 py-4 rounded-full hover:bg-gray-900 transition-colors">
              📞 8887616432
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}