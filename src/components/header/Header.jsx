// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#0B090A] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp Logo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-[#E5383B] transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-[#E5383B] transition duration-300">About</a></li>
            <li><a href="#services" className="hover:text-[#E5383B] transition duration-300">Services</a></li>
            <li><a href="#contact" className="hover:text-[#E5383B] transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;