import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Plan Journey", href: "/plan-journey" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 backdrop-blur-md border-b border-yellow-500 border-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:shadow-yellow-400/60 transition-all duration-300">
              <span className="text-black font-black text-lg">🚕</span>
            </div>
            <div>
              <p className="text-yellow-400 font-black text-lg leading-none tracking-tight">BAJPAI CAB</p>
              <p className="text-gray-400 text-xs tracking-widest uppercase">Lucknow</p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-gray-300 hover:text-yellow-400 text-sm font-semibold tracking-wider uppercase transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="tel:7355517605"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-sm px-5 py-2 rounded-full tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/30"
            >
              📞 Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-yellow-400 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-yellow-500 border-opacity-20 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-300 hover:text-yellow-400 font-semibold tracking-wider uppercase text-sm border-b border-gray-800 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:7355517605"
            className="mt-4 block text-center bg-yellow-400 text-black font-black py-3 rounded-full"
          >
            📞 Book Now
          </a>
        </div>
      )}
    </nav>
  );
}