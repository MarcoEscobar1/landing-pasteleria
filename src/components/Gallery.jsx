const images = [
  { emoji: "🎂", label: "Torta de cumpleaños", color: "from-pastel-pink to-pastel-rose" },
  { emoji: "🧁", label: "Cupcakes artísticos", color: "from-pastel-lavender to-pastel-pink" },
  { emoji: "🍓", label: "Fresas con chocolate", color: "from-pastel-peach to-pastel-pink" },
  { emoji: "🍰", label: "Cheesecake especial", color: "from-pastel-mint to-pastel-lavender" },
  { emoji: "🍪", label: "Galletas decoradas", color: "from-pastel-pink to-pastel-peach" },
  { emoji: "🎀", label: "Postres temáticos", color: "from-pastel-rose to-pastel-lavender" },
  { emoji: "🍡", label: "Cake pops", color: "from-pastel-lavender to-pastel-rose" },
  { emoji: "🫧", label: "Postres en vasito", color: "from-pastel-peach to-pastel-mint" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 sm:py-28 bg-pastel-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-pastel-hot font-script text-2xl">Nuestro Trabajo</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-pastel-dark mt-2 font-bold">
            Galería de Creaciones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-rose to-pastel-hot rounded-full mx-auto mt-4" />
          <p className="text-pastel-text/70 mt-4 max-w-2xl mx-auto">
            Un vistazo a algunas de nuestras creaciones más especiales. Cada postre es único
            y hecho a medida.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${item.color} rounded-2xl overflow-hidden aspect-square flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer`}
            >
              <span className="text-6xl sm:text-7xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                {item.emoji}
              </span>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-pastel-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <p className="text-white font-heading font-semibold text-sm sm:text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-pastel-text/60 text-sm mb-3">Síguenos para ver más de nuestras creaciones</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-pastel-hot font-semibold hover:text-pastel-magenta transition-colors text-lg"
          >
            📸 @fresalicius
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
