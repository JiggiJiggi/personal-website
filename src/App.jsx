// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/AboutMe';
import Service from './components/Services'; // Import the Service component
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="app">
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
          <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Jignesh</div>
            <div className='space-x-6'>
              <Link to="/" className='hover:text-gray-400' onClick={() => handleScroll('home')}>Home</Link>
              <Link to="/about" className='hover:text-gray-400' onClick={() => handleScroll('about')}>About Me</Link>
              <Link to="/services" className='hover:text-gray-400' onClick={() => handleScroll('services')}>Services</Link>
              <Link to="/projects" className='hover:text-gray-400' onClick={() => handleScroll('projects')}>Projects</Link>
              <Link to="/contact" className='hover:text-gray-400' onClick={() => handleScroll('contact')}>Contact</Link>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Connect Me
            </button>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} /> {/* Use the Service component here */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
