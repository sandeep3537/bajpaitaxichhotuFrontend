export default function Footer() {
    const FacebookIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
    const InstagramIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
    return (
        <footer className="bg-black border-t border-yellow-500 border-opacity-20 pt-14 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-yellow-400/20">
                                🚕
                            </div>
                            <div>
                                <p className="text-yellow-400 font-black text-xl leading-none">BAJPAI CAB</p>
                                <p className="text-gray-500 text-xs tracking-widest uppercase">Taxi Lucknow</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Reliable, affordable cab service available 24/7 across Lucknow and outstation routes. Your comfort is our priority.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
                        <ul className="space-y-2">
                            {["plan-journey", "Pricing", "Contact"].map((l) => (
                                <li key={l}>
                                    <a href={`${l.toLowerCase().replace(" ", "")}`}
                                        className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <span className="text-yellow-500">›</span> {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center gap-3">
                                <span className="text-yellow-400 text-base">📞</span>
                                <div>
                                    <a href="tel:7355517605" className="hover:text-yellow-400 transition-colors block">7355517605</a>
                                    <a href="tel:8887616432" className="hover:text-yellow-400 transition-colors block">8887616432</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-yellow-400 text-base">✉️</span>
                                <a href="mailto:Bajpaicabtaxxilucknow@gmail.com" className="hover:text-yellow-400 transition-colors break-all">
                                    Bajpaicabtaxxilucknow@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-yellow-400 text-base">📍</span>
                                <span>Lucknow, Uttar Pradesh</span>
                            </li>
                        </ul>

                        {/* Social */}
                        <div className="flex gap-3 mt-5">
                            <a href="https://www.facebook.com/share/18V6bCxdmB/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 flex items-center justify-center hover:bg-yellow-400 hover:text-black text-white transition-all duration-200">
                                <FacebookIcon />
                            </a>
                            <a href="https://www.instagram.com/bajpaicabtaxxilucknow" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 flex items-center justify-center hover:bg-yellow-400 hover:text-black text-white transition-all duration-200">
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p className="text-gray-600 text-xs">© 2026 Bajpai Cab Taxi Lucknow. All rights reserved.</p>
                    <p className="text-gray-700 text-xs">Available 24/7 · All Vehicle Types</p>
                </div>
            </div>
        </footer>
    );
}