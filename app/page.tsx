import Hero from "./section/hero";
import Services from "./section/services";
import Products from "./section/products";
import About from "./section/about";
import Contact from "./section/contact";
import BestServiceSection from "./section/BestServiceSection";

export default function Home() {
  return (
    <main >
      <Hero />
      <BestServiceSection />
      <Services />
      <Products />
      <About />
      <Contact />

    </main>
    );
}
