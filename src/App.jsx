import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-pastel-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/59170000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 text-2xl"
        aria-label="Contactar por WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

export default App;
