import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { getAssetPath } from '@/lib/assets';
import Link from 'next/link';

const Header = () => {
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Papers', path: '/papers' },
    { name: 'Outreach', path: '/outreach' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cosmic-dark/80 backdrop-blur-md border-b border-cosmic-purple">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side - Profile and Name */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img 
            src={getAssetPath("/lovable-uploads/59cd95c2-401b-45a6-8d41-25e51f4db0e3.png")} 
            alt="Daksh Bhatt" 
            className="w-10 h-10 rounded-full object-cover border-2 border-cosmic-accent"
          />
          <span className="text-xl font-bold text-cosmic-bright">Daksh Bhatt</span>
        </Link>

        {/* Center - Navigation */}
        <nav className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-cosmic-accent ${
                currentPath === item.path 
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
            const cvPath = getAssetPath('/files/Daksh_Bhatt_CV.pdf');
            window.open(cvPath, '_blank');
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
