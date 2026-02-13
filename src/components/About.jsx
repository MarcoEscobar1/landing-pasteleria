export default function About() {
  const features = [
    {
      icon: "🍓",
      title: "Ingredientes Frescos",
      description: "Seleccionamos los mejores ingredientes naturales para cada una de nuestras creaciones.",
    },
    {
      icon: "🎨",
      title: "Diseños Únicos",
      description: "Cada postre es una obra de arte personalizada según tu ocasión especial.",
    },
    {
      icon: "💝",
      title: "Hecho con Amor",
      description: "Ponemos corazón y pasión en cada detalle de nuestros productos artesanales.",
    },
    {
      icon: "⏰",
      title: "Entrega Puntual",
      description: "Nos comprometemos a que tus pedidos lleguen frescos y a tiempo.",
    },
  ];

  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-pastel-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-pastel-hot font-script text-2xl">Conócenos</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-pastel-dark mt-2 font-bold">
            ¿Quiénes Somos?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-rose to-pastel-hot rounded-full mx-auto mt-4" />
        </div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pastel-pink to-pastel-rose rounded-3xl p-8 sm:p-12 text-center">
              <img
                src="/images/logo-fresalicius.png"
                alt="Fresalicius"
                className="w-52 h-52 mx-auto rounded-full shadow-2xl object-cover border-4 border-white mb-6"
              />
              <h3 className="font-script text-3xl text-pastel-hot mb-2">Fresalicius</h3>
              <p className="text-pastel-dark/70 font-heading uppercase tracking-widest text-sm">
                by Mel Campero
              </p>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-pastel-lavender rounded-full opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pastel-peach rounded-full opacity-60" />
          </div>

          {/* Text side */}
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl text-pastel-dark font-bold mb-6">
              Dulzura artesanal en cada bocado
            </h3>
            <p className="text-pastel-text/80 leading-relaxed text-base sm:text-lg mb-4">
              <span className="font-script text-pastel-hot text-xl">Fresalicius</span> nació de la
              pasión por crear momentos dulces e inolvidables. Somos un emprendimiento de repostería
              artesanal que se dedica a elaborar postres personalizados con los ingredientes más frescos
              y de la mejor calidad.
            </p>
            <p className="text-pastel-text/80 leading-relaxed text-base sm:text-lg mb-6">
              Cada torta, cupcake y postre que sale de nuestra cocina lleva un toque especial de
              creatividad y cariño. Creemos que los mejores momentos de la vida merecen ser
              acompañados de sabores excepcionales.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-pastel-pink text-pastel-hot px-4 py-2 rounded-full text-sm font-medium">
                🎂 Tortas Personalizadas
              </span>
              <span className="bg-pastel-lavender text-pastel-dark px-4 py-2 rounded-full text-sm font-medium">
                🧁 Cupcakes
              </span>
              <span className="bg-pastel-peach text-pastel-hot px-4 py-2 rounded-full text-sm font-medium">
                🍰 Postres Variados
              </span>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pastel-pink/30 group"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </span>
              <h4 className="font-heading text-lg font-bold text-pastel-dark mb-2">
                {feature.title}
              </h4>
              <p className="text-pastel-text/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
