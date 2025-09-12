import React from "react";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx"
import Services from "./sections/Services.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
