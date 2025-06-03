import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import Footer from './components/Footer';
import TestimonialsPage from './pages/Testimonials';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Routes>
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Services />
              <Testimonial />
              <Team />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;