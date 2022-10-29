import React from "react";
import "./App.css";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import MobileNav from "./components/mobileNav/MobileNav";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <>
      <MobileNav />
      <Navbar />
      <Header />
      <Services />
      <About />
      <Testimonials />
      <Info />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
