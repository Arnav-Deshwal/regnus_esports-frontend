// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#D3D3D3] text-[#161A1D] p-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 text-sm">
          <a href="#privacy" className="hover:text-[#660708] transition duration-300">Privacy Policy</a>
          <span>|</span>
          <a href="#terms" className="hover:text-[#660708] transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;