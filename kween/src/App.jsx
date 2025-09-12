import React from "react";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx"
import Services from "./sections/Services.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Divider from "./components/Divider.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
