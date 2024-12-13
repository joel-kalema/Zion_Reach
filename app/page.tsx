import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Testimony from "./components/Testimony";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Mission /> */}
      <Vision />
      <Services />
      <Portfolio />
      <Testimony />
      <ContactForm />
    </main>
  );
}
