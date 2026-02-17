export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pastel-cream via-pastel-pink to-pastel-rose"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm opacity-40"
        style={{ backgroundImage: "url('/images/spam/backspam.jpg')" }}
      />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pastel-lavender rounded-full opacity-40 animate-float" />
      <div className="absolute top-32 right-16 w-14 h-14 bg-pastel-peach rounded-full opacity-50 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-pastel-rose rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-32 right-10 w-10 h-10 bg-pastel-lavender rounded-full opacity-40 animate-float" style={{ animationDelay: "0.5s" }} />



      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-24 pb-12">
        {/* Banner principal con texto outline */}
        <div className="max-w-5xl mx-auto mb-10 py-8 sm:py-12 md:py-16">
          <h1 className="font-script font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-stroke-pink leading-tight animate-slide-in-left">
            Fresalicius
          </h1>
          <p className="font-script font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stroke-gray mt-4 sm:mt-6 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            By Mel Campero
          </p>
        </div>

        <p className="text-pastel-text/70 text-base sm:text-lg max-w-xl mx-auto mt-4 leading-relaxed animate-fade-in-up">
          Endulzamos tus momentos especiales con postres artesanales hechos con amor,
          los mejores ingredientes y un toque único de creatividad 💕
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#productos"
            className="bg-pastel-hot text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-pastel-magenta transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Ver Productos
          </a>
          <a
            href="#contacto"
            className="border-2 border-pastel-hot text-pastel-hot px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-pastel-hot hover:text-white transition-all duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>



      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L48 55C96 50 192 40 288 42C384 44 480 58 576 65C672 72 768 72 864 65C960 58 1056 44 1152 40C1248 36 1344 42 1392 45L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="#fffafb"
          />
        </svg>
      </div>
    </section>
  );
}
