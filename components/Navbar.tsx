import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Desktop Left Links */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.slice(0, 2).map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="font-display font-bold text-lg tracking-wider hover:text-drwal-red transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <a href="#" className="flex flex-col items-center group">
               <span className="font-display font-bold text-3xl tracking-tighter text-drwal-red group-hover:scale-105 transition-transform">
                 KEBAB DRWAL
               </span>
               <span className="text-xs font-bold tracking-[0.3em] uppercase hidden sm:block">
                 Prawdziwe Mięso
               </span>
            </a>
          </div>

          {/* Desktop Right Links */}
          <div className="hidden md:flex items-center space-x-8">
             {NAV_ITEMS.slice(2).map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="font-display font-bold text-lg tracking-wider hover:text-drwal-red transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <a 
              href="#order"
              className="bg-drwal-red text-white font-display font-bold text-lg px-6 py-2 rounded-sm hover:bg-drwal-dark transition-colors"
            >
              ZAMÓW TERAZ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-drwal-dark hover:text-drwal-red focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8 relative">
            <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-drwal-dark"
            >
                <X size={32} />
            </button>

            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-display font-bold text-4xl text-drwal-dark hover:text-drwal-red"
              >
                {item.label}
              </a>
            ))}
             <a 
              href="#order"
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-drwal-red text-white font-display font-bold text-2xl px-8 py-3 rounded-sm"
            >
              ZAMÓW TERAZ
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;