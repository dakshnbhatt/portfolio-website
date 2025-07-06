
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cosmic-dark border-t border-cosmic-purple py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-cosmic-star mb-2">
          © {currentYear} Daksh Bhatt
        </p>
        <p className="text-cosmic-accent text-sm">
          Exploring the cosmos, one discovery at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
