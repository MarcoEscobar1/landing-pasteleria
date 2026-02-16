const products = [
  {
    name: "Tortas",
    description: "Bizcocho suave con crema de fresas naturales y decoración artesanal.",
    price: "Desde Bs. 120",
    image: "/images/tortas/torta1.jpeg",
    tag: "Popular",
  },
  {
    name: "Postre en Vasito",
    description: "Set de 6 cupcakes con diseños personalizados para cualquier ocasión.",
    price: "Desde Bs. 60",
    image: "/images/postrevaso/postrevaso.jpg",
    tag: "Favorito",
  },
  {
    name: "Tortas Temáticas",
    description: "Torta personalizada con la temática de tu elección, ideal para cumpleaños.",
    price: "Desde Bs. 180",
    image: "/images/tortastematicas/tortatem1.jpeg",
    tag: "Premium",
  },
  {
    name: "Pay",
    description: "Pay de limón con base de galleta y cobertura de merengue italiano, un clásico irresistible.",
    price: "Desde Bs. 40",
    image: "/images/pay/pay.jpeg",
    tag: "Nuevo",
  },
  {
    name: "Roscas",
    description: "Roscas rellenas de crema cubiertas con chocolate blanco y decoración artesanal.",
    price: "Desde Bs. 45",
    image: "/images/roscas/rosca.jpeg",
    tag: "Especial",
  },
  {
    name: "Postre",
    description: "lore ipsum xd",
    price: "Desde Bs. 25",
    image: "/images/postre/postre.jpeg",
    tag: "Mini",
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
              <div className="relative overflow-hidden h-48">
                {/* Tag */}
                <span className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm text-pastel-hot text-xs font-bold px-3 py-1 rounded-full">
                  {product.tag}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
