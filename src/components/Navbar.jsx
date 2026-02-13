import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#productos", label: "Productos" },
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-pastel-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/images/logo-fresalicius.png"
              alt="Fresalicius"
              className="h-14 w-14 rounded-full object-cover shadow-md"
            />
            <span className="font-script text-2xl text-pastel-hot font-bold hidden sm:block">
              Fresalicius
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-pastel-text hover:text-pastel-hot transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <a
            href="https://wa.me/59170000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-pastel-hot text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-pastel-magenta transition-colors shadow-lg hover:shadow-xl"
          >
            🧁 Pedir Ahora
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-pastel-hot hover:bg-pastel-pink transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-pastel-white/95 backdrop-blur-md border-t border-pastel-rose px-4 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-pastel-text hover:text-pastel-hot transition-colors font-medium py-2 px-3 rounded-lg hover:bg-pastel-pink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/59170000000"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-pastel-hot text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-pastel-magenta transition-colors mt-2"
          >
            🧁 Pedir Ahora
          </a>
        </div>
      </div>
    </nav>
  );
}
