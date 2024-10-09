// src/components/Home.jsx
import React from 'react';
import HeroImage from '../assets/hero-image.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='bg-black text-white text-center py-16'>
        <img
          src={HeroImage}
          alt="Jignesh Bejjagam"
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
          transition-transform duration-300 hover:scale-105'
        />
        <h1 className='text-4xl font-bold'>
          I'm{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            Jignesh Bejjagam
          </span>
          , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
          I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
          <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            onClick={() => window.open("http://www.gmail.google.com/", "_blank")}
          >
            Contact Me
          </button>
          <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            onClick={() => window.open("https://drive.google.com/file/d/1vG_i4Y_ALOcFaUtumz4kb8ym6sL4qYuA/view?usp=sharing", "_blank")}
          >
            Resume
          </button>
        </div>
      </div>
      {/* You can add other sections like About, Services, Projects here */}
    </div>
  );
};

export default Home;
