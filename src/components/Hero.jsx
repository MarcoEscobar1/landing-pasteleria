export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pastel-cream via-pastel-pink to-pastel-rose"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pastel-lavender rounded-full opacity-40 animate-float" />
      <div className="absolute top-32 right-16 w-14 h-14 bg-pastel-peach rounded-full opacity-50 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-pastel-rose rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-32 right-10 w-10 h-10 bg-pastel-lavender rounded-full opacity-40 animate-float" style={{ animationDelay: "0.5s" }} />

      {/* Scattered emoji decorations */}
      <span className="absolute top-20 right-1/4 text-4xl opacity-30 animate-float" style={{ animationDelay: "1.5s" }}>🍰</span>
      <span className="absolute bottom-40 left-1/4 text-3xl opacity-25 animate-float" style={{ animationDelay: "0.8s" }}>🧁</span>
      <span className="absolute top-1/3 left-10 text-2xl opacity-20 animate-float" style={{ animationDelay: "2.5s" }}>🍓</span>
      <span className="absolute bottom-20 right-1/3 text-3xl opacity-25 animate-float" style={{ animationDelay: "1.2s" }}>🎂</span>

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-24 pb-12 animate-fade-in-up">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/images/logo-fresalicius.png"
            alt="Fresalicius by Mel Campero"
            className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full shadow-2xl object-cover animate-pulse-soft border-4 border-white"
          />
        </div>

        <h1 className="font-script text-5xl sm:text-7xl text-pastel-hot mb-4 drop-shadow-lg">
          Fresalicius
        </h1>
        <p className="font-heading text-lg sm:text-xl text-pastel-dark/80 tracking-wider uppercase mb-2">
          by Mel Campero
        </p>
        <p className="text-pastel-text/70 text-base sm:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
          Endulzamos tus momentos especiales con postres artesanales hechos con amor,
          los mejores ingredientes y un toque único de creatividad 💕
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#productos"
            className="bg-pastel-hot text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-pastel-magenta transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            🍰 Ver Productos
          </a>
          <a
            href="#contacto"
            className="border-2 border-pastel-hot text-pastel-hot px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-pastel-hot hover:text-white transition-all duration-300"
          >
            📩 Contáctanos
          </a>
        </div>
      </div>

      {/* Canva Embed - Video/Presentación introductoria */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-pastel-rose/30">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "50%",
              paddingBottom: 0,
              overflow: "hidden",
              borderRadius: "12px",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAHBHSE_AZ4/2TLwiAxFXYxWVWjAVDW69g/view?embed"
              allowFullScreen
              allow="fullscreen"
              title="Fresalicius Presentación"
            />
          </div>
          <p className="text-center text-sm text-pastel-text/50 mt-3">
            <span className="font-script text-pastel-hot">Fresalicius</span> — de Marco Escobar
          </p>
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
