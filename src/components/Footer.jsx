export default function Footer() {
  return (
    <footer className="bg-pastel-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-fresalicius.png"
                alt="Fresalicius"
                className="w-12 h-12 rounded-full object-cover border-2 border-pastel-hot"
              />
              <div>
                <h3 className="font-script text-2xl text-pastel-hot">Fresalicius</h3>
                <p className="text-white/50 text-xs uppercase tracking-widest">by Mel Campero</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Repostería artesanal que endulza tus momentos más especiales con
              creatividad y los mejores ingredientes.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-pastel-rose">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#productos", label: "Productos" },
                { href: "#galeria", label: "Galería" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-pastel-hot transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-pastel-rose">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/fresalicius_by_mel_campero/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pastel-hot transition-colors text-lg"
              >
                <img src="/images/instagram-icon.svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61568543887925"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pastel-hot transition-colors text-lg"
              >
                <img src="/images/facebook-icon.svg" alt="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/59179324685"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pastel-hot transition-colors text-lg"
              >
                <img src="/images/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">
              Cochabamba, Bolivia
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} <span className="font-script text-pastel-hot">Fresalicius</span> by Mel Campero.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
