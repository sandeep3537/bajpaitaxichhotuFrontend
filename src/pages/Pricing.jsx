export default function Pricing() {
  const vehicles = [
    {
      type: "5 Seater",
      icon: "🚗",
      rate: "₹11 / km",
      rateNum: 11,
      examples: ["Sedan", "Swift Dzire", "Indigo"],
      color: "border-gray-700 hover:border-yellow-400",
      badge: null,
    },
    {
      type: "7 Seater",
      icon: "🚙",
      rate: "₹18 / km",
      rateNum: 18,
      examples: ["Innova", "Ertiga", "Marazzo"],
      color: "border-yellow-400",
      badge: "Best for Groups",
    },
  ];

  const fixedRoutes = [
    { city: "Ayodhya", emoji: "🕌", price: 3500 },
    { city: "Varanasi", emoji: "🪔", price: 7500 },
    { city: "Vrindavan", emoji: "🌸", price: 9000 },
  ];

  const charges = [
    { label: "Toll Charges", desc: "Actual toll charges applicable on all outstation routes.", icon: "🛣️" },
    { label: "Overnight Charge", desc: "Additional overnight charge if driver stays away from home.", icon: "🌙" },
    { label: "Parking Charges", desc: "Parking fees at destinations (pilgrimage sites etc.)", icon: "🅿️" },
    { label: "Min. Outstation Distance", desc: "Minimum 200 km for outstation trip bookings.", icon: "📏" },
  ];

  return (
    <div id="pricing" className="bg-black text-white pt-24 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Transparent & Fair</p>
        <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Our Pricing</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">Simple per-km rates and fixed packages — no surprises.</p>
      </div>

      {/* Per KM Rates */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-yellow-400 text-xs font-bold uppercase tracking-widest text-center mb-10">Outstation Per-KM Rates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((v) => (
            <div key={v.type} className={`relative rounded-3xl border ${v.color} bg-gray-950 p-8 transition-all duration-300 group`}>
              {v.badge && (
                <span className="absolute -top-3 left-8 bg-yellow-400 text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
                  {v.badge}
                </span>
              )}
              <div className="text-5xl mb-4">{v.icon}</div>
              <h3 className="text-white font-black text-2xl mb-1">{v.type}</h3>
              <p className="text-gray-500 text-sm mb-6">{v.examples.join(" · ")}</p>

              <div className="flex items-end gap-2 mb-6">
                <span className="text-yellow-400 font-black text-5xl">{v.rateNum}</span>
                <span className="text-yellow-400 font-bold text-xl mb-1">₹/km</span>
              </div>

              <ul className="space-y-2 text-sm text-gray-400 mb-8">
                <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> AC Vehicle</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> Experienced Driver</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> + Toll Charges Extra</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> + Overnight Charge if applicable</li>
              </ul>

              <a href="tel:7355517605"
                className={`block text-center font-black py-3 rounded-xl transition-all duration-200 ${v.badge ? "bg-yellow-400 text-black hover:bg-yellow-300" : "border border-yellow-400 border-opacity-40 text-yellow-400 hover:bg-yellow-400 hover:text-black"}`}>
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Route Packages */}
      <div className="bg-gray-950 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-yellow-400 text-xs font-bold uppercase tracking-widest text-center mb-4">Fixed Route Packages</h2>
          <p className="text-center text-gray-500 text-sm mb-12">From Lucknow · + Overnight & Parking applicable</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {fixedRoutes.map((r) => (
              <div key={r.city} className="bg-black border border-gray-800 hover:border-yellow-400 rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-5xl mb-4">{r.emoji}</div>
                <h3 className="text-white font-black text-xl mb-3">{r.city}</h3>
                <p className="text-yellow-400 font-black text-4xl">₹{r.price.toLocaleString()}</p>
                <p className="text-gray-600 text-xs mt-2 mb-6">Package Price</p>
                <a href="tel:7355517605"
                  className="block text-center border border-yellow-400 border-opacity-30 group-hover:border-yellow-400 text-yellow-400 font-bold py-2.5 rounded-xl text-sm hover:bg-yellow-400 hover:text-black transition-all duration-200">
                  Book →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Charges Info */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Rental Section */}
        <div className="mb-16">
          <h2 className="text-yellow-400 text-xs font-bold uppercase tracking-widest text-center mb-3">Local Rental Package</h2>
          <p className="text-center text-gray-500 text-sm mb-10">8 Hours city rental · Lucknow & nearby areas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { type: "5 Seater", icon: "🚗", price: 2500, examples: ["Sedan", "Swift Dzire", "Indigo"], featured: false },
              { type: "7 Seater", icon: "🚙", price: 4000, examples: ["Innova", "Ertiga", "Marazzo"], featured: true },
            ].map((r) => (
              <div key={r.type} className={`relative rounded-3xl border ${r.featured ? "border-yellow-400" : "border-gray-800 hover:border-yellow-400 hover:border-opacity-50"} bg-gray-950 p-8 transition-all duration-300 group`}>
                {r.featured && (
                  <span className="absolute -top-3 left-8 bg-yellow-400 text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
                    Best for Groups
                  </span>
                )}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl">{r.icon}</span>
                  <span className="bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    🕐 8 Hours
                  </span>
                </div>
                <h3 className="text-white font-black text-2xl mb-1">{r.type}</h3>
                <p className="text-gray-500 text-sm mb-6">{r.examples.join(" · ")}</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-yellow-400 font-black text-5xl">₹{r.price.toLocaleString()}</span>
                  <span className="text-yellow-500 font-bold text-base mb-1">/ 8 hrs</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 mb-8">
                  <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> AC Vehicle</li>
                  <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> Experienced Driver</li>
                  <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> City & nearby areas</li>
                  <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> Extra hours on request</li>
                </ul>
                <a href="tel:7355517605"
                  className={`block text-center font-black py-3 rounded-xl transition-all duration-200 ${r.featured ? "bg-yellow-400 text-black hover:bg-yellow-300" : "border border-yellow-400 border-opacity-40 text-yellow-400 hover:bg-yellow-400 hover:text-black"}`}>
                  Book Rental
                </a>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-yellow-400 text-xs font-bold uppercase tracking-widest text-center mb-10">Additional Charges Info</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {charges.map((c) => (
            <div key={c.label} className="flex gap-5 bg-gray-950 border border-gray-800 rounded-2xl p-6">
              <span className="text-3xl">{c.icon}</span>
              <div>
                <h4 className="text-white font-bold mb-1">{c.label}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}