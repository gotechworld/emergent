import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import LiveDemo from "./components/LiveDemo";
import Pricing from "./components/Pricing";
import Comparison from "./components/Comparison";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'var(--bg-page)' }}>
      <Header />
      <Hero />
      <Features />
      <LiveDemo />
      <Pricing />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;