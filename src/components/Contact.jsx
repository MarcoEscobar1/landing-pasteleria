export default function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-28 bg-gradient-to-b from-pastel-white to-pastel-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-pastel-hot font-script text-2xl">Hablemos</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-pastel-dark mt-2 font-bold">
            ¿Lista tu orden?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-rose to-pastel-hot rounded-full mx-auto mt-4" />
          <p className="text-pastel-text/70 mt-4 max-w-2xl mx-auto">
            Estamos aquí para hacer realidad tus ideas más dulces. Contáctanos y cuéntanos
            qué necesitas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact info */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-pastel-pink/20">
            <h3 className="font-heading text-2xl font-bold text-pastel-dark mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-5">
              <a
                href="https://wa.me/59179324685"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-pastel-cream hover:bg-pastel-pink transition-colors group"
              >
                <img src="/images/whatsapp-icon.svg" alt="WhatsApp" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-pastel-dark">WhatsApp</p>
                  <p className="text-pastel-text/60 text-sm">+591 79324685</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/fresalicius_by_mel_campero/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-pastel-cream hover:bg-pastel-pink transition-colors group"
              >
                <img src="/images/instagram-icon.svg" alt="Instagram" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-pastel-dark">Instagram</p>
                  <p className="text-pastel-text/60 text-sm">@fresalicius</p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61568543887925"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-pastel-cream hover:bg-pastel-pink transition-colors group"
              >
                <img src="/images/facebook-icon.svg" alt="Facebook" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-pastel-dark">Facebook</p>
                  <p className="text-pastel-text/60 text-sm">Fresalicius by Mel Campero</p>
                </div>
              </a>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-gradient-to-br from-pastel-hot to-pastel-magenta rounded-3xl p-10 text-white shadow-xl flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-bold mb-6">🕐 Horarios de Pedido</h3>
            <div className="space-y-4 text-white/90 text-lg">
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/10">
                <span>Lunes - Viernes</span>
                <span className="font-semibold">8:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/10">
                <span>Sábados</span>
                <span className="font-semibold">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/10">
                <span>Domingos</span>
                <span className="font-semibold">10:00 - 14:00</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-6">
              * Pedidos con mínimo 48 horas de anticipación
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
