import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Webinars from "./components/Webinars";

export default function Home() {
  return (
    <div>
      <main>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Services />
        <Webinars />
        <Testimonials />
        <Footer />
      </div>
      </main>
    </div>
  );
}
