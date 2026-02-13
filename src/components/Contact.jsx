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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-pastel-pink/20">
              <h3 className="font-heading text-2xl font-bold text-pastel-dark mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-5">
                <a
                  href="https://wa.me/59170000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-pastel-cream hover:bg-pastel-pink transition-colors group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">📱</span>
                  <div>
                    <p className="font-semibold text-pastel-dark">WhatsApp</p>
                    <p className="text-pastel-text/60 text-sm">+591 70000000</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/fresalicius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-pastel-cream hover:bg-pastel-pink transition-colors group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">📸</span>
                  <div>
                    <p className="font-semibold text-pastel-dark">Instagram</p>
                    <p className="text-pastel-text/60 text-sm">@fresalicius</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/fresalicius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-pastel-cream hover:bg-pastel-pink transition-colors group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">👍</span>
                  <div>
                    <p className="font-semibold text-pastel-dark">Facebook</p>
                    <p className="text-pastel-text/60 text-sm">Fresalicius by Mel Campero</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-pastel-cream">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="font-semibold text-pastel-dark">Ubicación</p>
                    <p className="text-pastel-text/60 text-sm">Santa Cruz, Bolivia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-gradient-to-br from-pastel-hot to-pastel-magenta rounded-3xl p-8 text-white shadow-xl">
              <h3 className="font-heading text-xl font-bold mb-4">🕐 Horarios de Pedido</h3>
              <div className="space-y-2 text-white/90">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span className="font-semibold">8:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span className="font-semibold">10:00 - 14:00</span>
                </div>
              </div>
              <p className="text-white/70 text-sm mt-4">
                * Pedidos con mínimo 48 horas de anticipación
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-pastel-pink/20 h-fit">
            <h3 className="font-heading text-2xl font-bold text-pastel-dark mb-6">
              Envíanos un Mensaje
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-pastel-dark font-medium mb-2 text-sm">
                  Nombre completo
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border border-pastel-rose/40 bg-pastel-cream/50 text-pastel-dark placeholder-pastel-text/40 focus:outline-none focus:ring-2 focus:ring-pastel-hot/30 focus:border-pastel-hot transition-colors"
                />
              </div>

              <div>
                <label className="block text-pastel-dark font-medium mb-2 text-sm">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+591 7XXXXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-pastel-rose/40 bg-pastel-cream/50 text-pastel-dark placeholder-pastel-text/40 focus:outline-none focus:ring-2 focus:ring-pastel-hot/30 focus:border-pastel-hot transition-colors"
                />
              </div>

              <div>
                <label className="block text-pastel-dark font-medium mb-2 text-sm">
                  Tipo de producto
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-pastel-rose/40 bg-pastel-cream/50 text-pastel-dark focus:outline-none focus:ring-2 focus:ring-pastel-hot/30 focus:border-pastel-hot transition-colors">
                  <option value="">Selecciona una opción</option>
                  <option value="torta">🎂 Torta personalizada</option>
                  <option value="cupcakes">🧁 Cupcakes</option>
                  <option value="galletas">🍪 Galletas decoradas</option>
                  <option value="cake-pops">🍡 Cake Pops</option>
                  <option value="postres">🍰 Postres en vasito</option>
                  <option value="otro">✨ Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-pastel-dark font-medium mb-2 text-sm">
                  Cuéntanos sobre tu pedido
                </label>
                <textarea
                  rows={4}
                  placeholder="Fecha del evento, cantidad de porciones, temática, sabores preferidos..."
                  className="w-full px-4 py-3 rounded-xl border border-pastel-rose/40 bg-pastel-cream/50 text-pastel-dark placeholder-pastel-text/40 focus:outline-none focus:ring-2 focus:ring-pastel-hot/30 focus:border-pastel-hot transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pastel-hot text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-pastel-magenta transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enviar Consulta 💌
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
