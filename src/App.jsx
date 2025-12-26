import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <div className='flex justify-center w-[100%]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34991.63412017937!2d93.12120299518571!3d49.3186625732507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d47cdf7f8fd0731%3A0x52b11fabae0e4f68!2z0KXRj9GA0LPQsNGBINCl06nRhSDQkdGD0YU!5e0!3m2!1sen!2smn!4v1766720596204!5m2!1sen!2smn" width="100%" height="450" loading="lazy"></iframe>
      </div>
      <Contact />
    </div>
  );
}

export default App;
