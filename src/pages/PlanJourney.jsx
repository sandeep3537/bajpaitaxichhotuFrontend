import { useState } from "react";

const destinations = [
  { city: "Ayodhya", km: 140, price: 3500 },
  { city: "Varanasi", km: 320, price: 7500 },
  { city: "Vrindavan", km: 450, price: 9000 },
  { city: "Custom Route", km: null, price: null },
];

const vehicles = [
  {
    icon: "🚗",
    name: "5 Seater",
    type: "Sedan / Hatchback",
    rate: 11,
    features: [
      "Ideal for families of 4",
      "AC + comfortable seating",
      "Boot space for 2 bags",
      "Swift Dzire / Honda City",
    ],
  },
  {
    icon: "🚙",
    name: "7 Seater",
    type: "SUV / Innova",
    rate: 18,
    features: [
      "Groups of 5–7 people",
      "Extra legroom & luggage",
      "Smooth highway cruiser",
      "Innova / Ertiga",
    ],
  },
];

const infoCards = [
  { icon: "📏", title: "Min 200 km", desc: "Minimum billing for outstation trips" },
  { icon: "🌙", title: "Overnight Charge", desc: "₹300 extra if driver stays away from Lucknow" },
  { icon: "🛣️", title: "Toll Extra", desc: "Actual toll paid on all routes" },
  { icon: "⛽", title: "Fuel Included", desc: "No hidden fuel surcharge in rate" },
  { icon: "🧳", title: "Luggage Help", desc: "Driver assists with loading & unloading" },
  { icon: "📍", title: "Door Pickup", desc: "Pick up from your exact location" },
];

const steps = [
  {
    n: "1",
    title: "Call or Fill the Form",
    desc: "Share your name, pickup point, destination, date, and vehicle preference. Takes under 2 minutes.",
  },
  {
    n: "2",
    title: "Get Confirmation",
    desc: "We confirm your booking over WhatsApp or call with driver details and final fare — no last-minute surprises.",
  },
  {
    n: "3",
    title: "Enjoy Your Ride",
    desc: "Your driver arrives on time. Sit back, relax, and reach your destination comfortably and safely.",
  },
];

const faqs = [
  {
    q: "Can I book for same-day travel?",
    a: "Yes, we accept same-day bookings subject to driver availability. Call us directly for fastest confirmation.",
  },
  {
    q: "Is the fixed package price for one-way or round trip?",
    a: "All package prices listed are for one-way trips. For round trips, call us and we'll give you a discounted combined rate.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept cash, UPI (GPay, PhonePe, Paytm), and bank transfer. Payment is collected at the end of the trip.",
  },
  {
    q: "Can I make multiple stops along the way?",
    a: "Absolutely. Extra stops can be arranged — just inform us at the time of booking so we can factor in the time and distance.",
  },
];

export default function PlanJourney() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero */}
      <section className="pt-24 pb-16 text-center px-4">
        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">
          Step by Step
        </p>
        <h1
          className="text-white mb-4 leading-none tracking-wide"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px,8vw,72px)" }}
        >
          Plan Your Journey
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Comfortable outstation rides from Lucknow — fixed prices, no surprises.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-20">

        {/* Top Destinations */}
        <section>
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
            Popular Routes
          </p>
          <h2
            className="text-white mb-6 leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px,5vw,48px)" }}
          >
            Top Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {destinations.map((d) => (
              <div
                key={d.city}
                className={`bg-gray-950 border rounded-2xl px-6 py-5 flex items-center justify-between transition-colors hover:border-yellow-400 ${
                  d.price ? "border-gray-800" : "border-yellow-400 border-dashed"
                }`}
              >
                <div>
                  <p className="text-white text-xl font-black">{d.city}</p>
                  <p className="text-gray-500 text-xs mt-1">
                    {d.km ? `${d.km} km from Lucknow` : "Anywhere you want"}
                  </p>
                </div>
                <div className="text-right">
                  {d.price ? (
                    <>
                      <p
                        className="text-yellow-400 leading-none"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32 }}
                      >
                        ₹{d.price.toLocaleString("en-IN")}
                      </p>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                        Fixed Package
                      </p>
                    </>
                  ) : (
                    <>
                      <p
                        className="text-yellow-400 leading-none"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22 }}
                      >
                        Call Us
                      </p>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                        Get a Quote
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vehicles */}
        <section>
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
            Fleet
          </p>
          <h2
            className="text-white mb-6 leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px,5vw,48px)" }}
          >
            Choose Your Ride
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {vehicles.map((v) => (
              <div key={v.name} className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{v.icon}</span>
                  <div>
                    <p className="text-white text-lg font-black">{v.name}</p>
                    <p className="text-gray-500 text-xs">{v.type}</p>
                  </div>
                </div>
                <p
                  className="text-yellow-400 leading-none mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 44 }}
                >
                  ₹{v.rate}
                  <span className="text-lg">/km</span>
                </p>
                <p className="text-gray-500 text-xs mb-4">Outstation rate</p>
                <ul className="space-y-2">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-400 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section>
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
            Booking Info
          </p>
          <h2
            className="text-white mb-6 leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px,5vw,48px)" }}
          >
            What's Included & Extra
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {infoCards.map((c) => (
              <div
                key={c.title}
                className="bg-gray-950 border border-gray-800 rounded-2xl p-5 flex items-center gap-4"
              >
                <span className="text-3xl">{c.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm">{c.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section>
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
            How It Works
          </p>
          <h2
            className="text-white mb-8 leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px,5vw,48px)" }}
          >
            Book in 3 Easy Steps
          </h2>
          <div className="flex flex-col gap-0">
            {steps.map((s, i) => (
              <div key={s.n} className="flex gap-5 relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-[18px] top-10 w-px bg-gray-800" style={{ height: "calc(100% - 8px)" }} />
                )}
                <div className="w-9 h-9 rounded-full bg-yellow-400 text-black font-black text-sm flex items-center justify-center flex-shrink-0 z-10">
                  {s.n}
                </div>
                <div className="pb-8">
                  <p className="text-white font-black text-base mb-1">{s.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">FAQ</p>
          <h2
            className="text-white mb-6 leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px,5vw,48px)" }}
          >
            Common Questions
          </h2>
          <div className="flex flex-col gap-2">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full bg-transparent text-white font-bold text-sm px-5 py-4 text-left flex justify-between items-center hover:bg-gray-950 transition-colors"
                >
                  {f.q}
                  <span
                    className="text-yellow-400 text-xl flex-shrink-0 ml-4 transition-transform duration-200"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-yellow-400 rounded-2xl px-8 py-9 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="text-black leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36 }}
            >
              Ready to Travel?
            </h2>
            <p className="text-black opacity-60 text-sm mt-1">Call us now and we'll handle the rest.</p>
          </div>
          <a
            href="tel:7355517605"
            className="bg-black text-yellow-400 font-black text-sm rounded-xl px-7 py-3 whitespace-nowrap hover:bg-gray-900 transition-colors"
          >
            📞 7355517605
          </a>
        </div>

      </div>
    </div>
  );
}