import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import './App.css';

/**
 * Main App Component
 * Renders the complete Rcc Youth Ministry website
 */
function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
