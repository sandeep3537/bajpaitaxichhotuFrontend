const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Contact() {
  const contacts = [
    { icon: "📞", label: "Primary Number", value: "7355517605", href: "tel:7355517605", action: "Call Now" },
    { icon: "📞", label: "Secondary Number", value: "8887616432", href: "tel:8887616432", action: "Call Now" },
    { icon: "✉️", label: "Email", value: "Bajpaicabtaxxilucknow@gmail.com", href: "mailto:Bajpaicabtaxxilucknow@gmail.com", action: "Send Mail" },
  ];

  const socials = [
    { icon: <FacebookIcon />, label: "Facebook", handle: "@BajpaiCabTaxiLucknow", href: "https://www.facebook.com/share/18V6bCxdmB/" },
    { icon: <InstagramIcon />, label: "Instagram", handle: "@bajpaicabtaxxilucknow", href: "https://www.instagram.com/bajpaicabtaxxilucknow" },
  ];

  return (
    <div id="contact" className="bg-black text-white pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Available 24/7 — call, WhatsApp, or email us. We're always here to help.
          </p>
        </div>

        {/* Availability Badge */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-3 bg-green-400 bg-opacity-10 border border-green-400 border-opacity-30 px-6 py-3 rounded-full">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white-400 font-bold text-sm uppercase tracking-widest">Available Right Now — 24/7</span>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {contacts.map((c) => (
            <div key={c.value} className="bg-gray-950 border border-gray-800 hover:border-yellow-400 rounded-2xl p-7 text-center transition-all duration-300 group hover:-translate-y-1">
              <div className="text-4xl mb-4">{c.icon}</div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">{c.label}</p>
              <p className="text-white font-bold text-sm break-all mb-6">{c.value}</p>
              <a href={c.href}
                className="block border border-yellow-400 border-opacity-30 group-hover:border-yellow-400 text-yellow-400 font-bold py-2.5 rounded-xl text-sm hover:bg-yellow-400 hover:text-black transition-all duration-200">
                {c.action} →
              </a>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8 sm:p-10 mb-12">
          <h2 className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8">Follow Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-5 border border-gray-800 hover:border-yellow-400 rounded-2xl p-5 transition-all duration-300 group">
                <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors">{s.icon}</span>
                <div>
                  <p className="text-white font-bold group-hover:text-yellow-400 transition-colors">{s.label}</p>
                  <p className="text-gray-500 text-sm">{s.handle}</p>
                </div>
                <span className="ml-auto text-gray-600 group-hover:text-yellow-400 transition-colors">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8 sm:p-10">
          <div className="flex items-start gap-5">
            <span className="text-5xl">📍</span>
            <div>
              <h3 className="text-white font-black text-2xl mb-2">Based in Lucknow</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Uttar Pradesh, India<br />
                Serving Lucknow city and all outstation destinations.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                {["Ayodhya", "Varanasi", "Vrindavan", "Prayagraj", "Agra", "Delhi"].map((city) => (
                  <span key={city} className="bg-black border border-gray-700 text-gray-400 text-xs px-3 py-1.5 rounded-full">
                    📍 {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Big CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-lg mb-6">Don't wait — book your ride in 60 seconds</p>
          <a href="tel:7355517605"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xl px-10 py-5 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-1">
            📞 Call 7355517605
          </a>
        </div>
      </div>
    </div>
  );
}