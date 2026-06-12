import { useState } from "react";
import { Layout } from "./components/Layout";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { BirthdayParties } from "./components/BirthdayParties";
import { Instructors } from "./components/Instructors";
import { FAQs } from "./components/FAQs";
import { Reviews } from "./components/Reviews";
import { Footer } from "./components/Footer";

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <Layout>
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}
      
      <Navbar isReady={preloaderComplete} />

      <main>
        <Hero isReady={preloaderComplete} />
        <About />
        <Programs />
        <BirthdayParties />
        <Instructors />
        <FAQs />
        <Reviews />
        <Footer />
      </main>
    </Layout>
  );
}
