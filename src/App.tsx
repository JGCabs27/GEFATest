import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import Footer from './components/Footer';
import TestimonialsPage from './pages/Testimonials';
import ServicesPage from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Header />
        <Routes>
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Testimonial />
              <Team />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App