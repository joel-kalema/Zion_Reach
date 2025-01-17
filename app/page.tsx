import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Testimony from "./components/Testimony";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Vision />
      <Services />
      <Portfolio />
      <Testimony />
      <ContactForm />
    </main>
  );
}
