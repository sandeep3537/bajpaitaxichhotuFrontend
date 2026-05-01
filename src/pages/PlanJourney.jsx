import { useState } from "react";

export default function PlanJourney() {
  const [form, setForm] = useState({
    name: "", phone: "", from: "Lucknow", to: "", date: "", vehicle: "5seater", tripType: "outstation",
  });
  const [estimated, setEstimated] = useState(null);

  const destinations = [
    { label: "Ayodhya", km: 140, fixed: 3500 },
    { label: "Varanasi", km: 320, fixed: 7500 },
    { label: "Vrindavan", km: 450, fixed: 9000 },
    { label: "Other", km: null, fixed: null },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setEstimated(null);
  };

  const estimate = () => {
    const dest = destinations.find((d) => d.label === form.to);
    if (!dest || !form.vehicle) return;
    if (dest.fixed) {
      setEstimated({
        base: dest.fixed,
        note: "Fixed package price. Overnight & parking charges extra.",
      });
    } else {
      setEstimated({ base: null, note: "For custom routes, please call us directly for a quote." });
    }
  };

  return (
    <div id="plan" className="bg-black text-white pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Step by Step</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Plan Your Journey</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Fill in your trip details and get an instant estimate.</p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2">Your Name</label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-black border border-gray-700 focus:border-yellow-400 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2">Phone Number</label>
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="10-digit mobile number"
                className="w-full bg-black border border-gray-700 focus:border-yellow-400 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
              />
            </div>

            {/* From */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2">From</label>
              <input
                type="text" name="from" value={form.from} onChange={handleChange}
                placeholder="Pickup location"
                className="w-full bg-black border border-gray-700 focus:border-yellow-400 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
              />
            </div>

            {/* To */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2">Destination</label>
              <select
                name="to" value={form.to} onChange={handleChange}
                className="w-full bg-black border border-gray-700 focus:border-yellow-400 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
              >
                <option value="">Select Destination</option>
                {destinations.map((d) => (
                  <option key={d.label} value={d.label}>{d.label}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2">Travel Date</label>
              <input
                type="date" name="date" value={form.date} onChange={handleChange}
                className="w-full bg-black border border-gray-700 focus:border-yellow-400 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
              />
            </div>

            {/* Vehicle */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2">Vehicle Type</label>
              <select
                name="vehicle" value={form.vehicle} onChange={handleChange}
                className="w-full bg-black border border-gray-700 focus:border-yellow-400 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
              >
                <option value="5seater">🚗 5 Seater — ₹11/km</option>
                <option value="7seater">🚙 7 Seater — ₹18/km</option>
              </select>
            </div>
          </div>

          {/* Estimate Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={estimate}
              className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-black py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              Get Estimate 🧮
            </button>
            <a
              href="tel:7355517605"
              className="flex-1 border border-yellow-400 border-opacity-50 hover:border-yellow-400 text-yellow-400 font-bold py-4 rounded-xl text-base text-center transition-all duration-200 hover:bg-yellow-400 hover:bg-opacity-10"
            >
              📞 Call to Book
            </a>
          </div>

          {/* Estimate Result */}
          {estimated && (
            <div className="mt-6 rounded-2xl border border-yellow-400 border-opacity-30 bg-yellow-400 bg-opacity-5 p-6">
              {estimated.base ? (
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1 uppercase tracking-widest">Estimated Package Price</p>
                  <p className="text-yellow-400 font-black text-5xl mb-2">₹{estimated.base.toLocaleString()}</p>
                  <p className="text-gray-500 text-sm">{estimated.note}</p>
                </div>
              ) : (
                <p className="text-yellow-400 text-center font-semibold">{estimated.note}</p>
              )}
            </div>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
          {[
            { icon: "📏", title: "Min 200 km", desc: "Outstation bookings" },
            { icon: "🌙", title: "Overnight Charge", desc: "If driver stays away" },
            { icon: "🛣️", title: "Toll Extra", desc: "Actual toll on all routes" },
          ].map((c) => (
            <div key={c.title} className="bg-gray-950 border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
              <span className="text-3xl">{c.icon}</span>
              <div>
                <p className="text-white font-bold text-sm">{c.title}</p>
                <p className="text-gray-500 text-xs">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}