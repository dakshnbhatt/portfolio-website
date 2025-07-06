
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Publications', path: '/publications' },
    { name: 'Outreach', path: '/outreach' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cosmic-dark/80 backdrop-blur-md border-b border-cosmic-purple">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side - Profile and Name */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/59cd95c2-401b-45a6-8d41-25e51f4db0e3.png" 
            alt="Daksh Bhatt" 
            className="w-10 h-10 rounded-full object-cover border-2 border-cosmic-accent"
          />
          <span className="text-xl font-bold text-cosmic-bright">Daksh Bhatt</span>
        </Link>

        {/* Center - Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-cosmic-accent ${
                location.pathname === item.path 
                  ? 'text-cosmic-accent' 
                  : 'text-cosmic-star'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side - CV Download */}
        <Button 
          className="bg-purple-gradient hover:bg-cosmic-light text-white font-semibold px-6 py-2 cosmic-glow"
          onClick={() => {
            // CV download logic - placeholder for now
            console.log('Download CV');
          }}
        >
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Button>
      </div>
    </header>
  );
};

export default Header;
