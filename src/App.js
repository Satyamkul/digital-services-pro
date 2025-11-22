import React, { useState, useEffect } from "react";
import ThemeProvider from "./components/ThemeProvider";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";
import BackToTop from "./components/BackToTop";
import Toast from "./components/Toast";
import Services from "./components/Services";


import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Services />
          <WhyChooseUs />
          <Portfolio />
          <Process />
          <Pricing />
          <Stats />
          <Testimonials />
          <FAQ />
          <Contact />
          <Newsletter />
          <Footer />
          <FloatingChat />
          <BackToTop />
          <Toast />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
