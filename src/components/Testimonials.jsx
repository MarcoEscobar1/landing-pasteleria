const testimonials = [
  {
    name: "María López",
    text: "¡La torta de cumpleaños de mi hija quedó increíble! Superó todas nuestras expectativas. 100% recomendada.",
    rating: 5,
    emoji: "👩",
  },
  {
    name: "Carlos Mendoza",
    text: "Los cupcakes para nuestra boda estaban deliciosos y hermosos. Todos los invitados quedaron encantados.",
    rating: 5,
    emoji: "👨",
  },
  {
    name: "Ana Rodríguez",
    text: "Pedí galletas personalizadas para un baby shower y fueron el hit de la fiesta. Volveré a pedir seguro.",
    rating: 5,
    emoji: "👩‍🦱",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-pastel-white via-pastel-cream to-pastel-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-pastel-hot font-script text-2xl">Testimonios</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-pastel-dark mt-2 font-bold">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-rose to-pastel-hot rounded-full mx-auto mt-4" />
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-pastel-pink/20 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 bg-pastel-hot text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-pastel-text/75 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{t.emoji}</span>
                <div>
                  <p className="font-heading font-bold text-pastel-dark">{t.name}</p>
                  <p className="text-pastel-text/50 text-sm">Cliente verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
