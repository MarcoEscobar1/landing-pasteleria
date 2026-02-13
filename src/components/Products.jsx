const products = [
  {
    name: "Torta de Fresas",
    description: "Bizcocho suave con crema de fresas naturales y decoración artesanal.",
    price: "Desde Bs. 120",
    emoji: "🍓",
    tag: "Popular",
    bg: "from-pastel-pink to-pastel-peach",
  },
  {
    name: "Cupcakes Decorados",
    description: "Set de 6 cupcakes con diseños personalizados para cualquier ocasión.",
    price: "Desde Bs. 60",
    emoji: "🧁",
    tag: "Favorito",
    bg: "from-pastel-lavender to-pastel-pink",
  },
  {
    name: "Torta Temática",
    description: "Torta personalizada con la temática de tu elección, ideal para cumpleaños.",
    price: "Desde Bs. 180",
    emoji: "🎂",
    tag: "Premium",
    bg: "from-pastel-peach to-pastel-rose",
  },
  {
    name: "Cake Pops",
    description: "Bolitas de pastel cubiertas de chocolate con decoraciones únicas.",
    price: "Desde Bs. 40",
    emoji: "🍡",
    tag: "Nuevo",
    bg: "from-pastel-mint to-pastel-pink",
  },
  {
    name: "Galletas Decoradas",
    description: "Galletas artesanales con glaseado real y diseños personalizados.",
    price: "Desde Bs. 45",
    emoji: "🍪",
    tag: "Especial",
    bg: "from-pastel-pink to-pastel-lavender",
  },
  {
    name: "Postre en Vasito",
    description: "Deliciosas capas de crema, fruta y bizcocho en presentación individual.",
    price: "Desde Bs. 25",
    emoji: "🍰",
    tag: "Mini",
    bg: "from-pastel-rose to-pastel-peach",
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-20 sm:py-28 bg-gradient-to-b from-pastel-white via-pastel-cream to-pastel-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-pastel-hot font-script text-2xl">Nuestros Sabores</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-pastel-dark mt-2 font-bold">
            Productos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-rose to-pastel-hot rounded-full mx-auto mt-4" />
          <p className="text-pastel-text/70 mt-4 max-w-2xl mx-auto">
            Descubre nuestra selección de postres artesanales, cada uno preparado con ingredientes
            frescos y mucho cariño.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-pastel-pink/20"
            >
              {/* Product visual */}
              <div className={`bg-gradient-to-br ${product.bg} p-8 text-center relative overflow-hidden`}>
                {/* Tag */}
                <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-pastel-hot text-xs font-bold px-3 py-1 rounded-full">
                  {product.tag}
                </span>
                <span className="text-7xl block group-hover:scale-125 transition-transform duration-500">
                  {product.emoji}
                </span>
              </div>

              {/* Product info */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-pastel-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-pastel-text/65 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-pastel-hot font-bold text-lg">{product.price}</span>
                  <a
                    href="https://wa.me/59170000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pastel-hot text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pastel-magenta transition-colors"
                  >
                    Pedir 💬
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-pastel-text/60 mb-4">¿No encuentras lo que buscas?</p>
          <a
            href="https://wa.me/59170000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pastel-dark text-white px-8 py-3.5 rounded-full font-semibold hover:bg-pastel-hot transition-colors shadow-lg"
          >
            📩 Consultar por Pedidos Especiales
          </a>
        </div>
      </div>
    </section>
  );
}
