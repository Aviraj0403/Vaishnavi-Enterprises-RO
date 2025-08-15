import Image from "next/image";
import Hero from "./section/hero";
import Services from "./section/services";
import Products from "./section/products";
import About from "./section/about";
import Contact from "./section/contact";

export default function Home() {
  return (
    <main >
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />

    </main>
    );
}
