import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Star, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-drwal-dark relative pt-20 pb-10 border-t border-gray-200">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHoiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMjAgNDBMMCAwSDQwIiBmaWxsPSIjRDIzMjMiLz48L2c+PC9zdmc+')] bg-repeat-x"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo Col */}
        <div className="flex flex-col items-start">
            <h2 className="font-display font-bold text-4xl text-drwal-red mb-4">KEBAB DRWAL</h2>
            <div className="flex items-center space-x-1 text-drwal-yellow mb-2">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={14} fill="currentColor" />
                 ))}
                 <span className="ml-1 text-gray-600 font-bold text-xs">(5031 opinii)</span>
            </div>
            <p className="font-sans text-sm opacity-70">Gdynia Chylonia, Chylońska 172.<br/>© 2025 Kebab Drwal.</p>
        </div>

        {/* Locations */}
        <div>
          <h3 className="font-display font-bold text-xl mb-6 flex items-center">
            <MapPin className="mr-2 text-drwal-yellow" /> KONTAKT
          </h3>
          <ul className="space-y-3 font-medium text-sm">
            <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-drwal-red flex-shrink-0" />
                <span>ul. Chylońska 172<br/>81-021 Gdynia</span>
            </li>
            <li className="flex items-center">
                <Phone size={16} className="mr-2 text-drwal-red flex-shrink-0" />
                <a href="tel:500437600" className="hover:text-drwal-red transition-colors font-bold">500 437 600</a>
            </li>
          </ul>
        </div>

        {/* Ordering */}
        <div>
          <h3 className="font-display font-bold text-xl mb-6">ZAMÓW</h3>
          <ul className="space-y-3 font-medium">
            <li><a href="#" className="hover:text-drwal-red transition-colors">Aplikacja Drwal</a></li>
            <li><a href="#" className="hover:text-drwal-red transition-colors">Uber Eats</a></li>
            <li><a href="#" className="hover:text-drwal-red transition-colors">Pyszne.pl</a></li>
            <li><a href="#" className="hover:text-drwal-red transition-colors">Glovo</a></li>
          </ul>
        </div>

        {/* Socials & CTA */}
        <div>
           <h3 className="font-display font-bold text-xl mb-6">SOCIAL</h3>
           <div className="flex space-x-4 mb-8">
             <a href="#" className="w-10 h-10 bg-drwal-dark text-white flex items-center justify-center rounded-full hover:bg-drwal-red transition-colors">
               <Instagram size={20} />
             </a>
             <a href="#" className="w-10 h-10 bg-drwal-dark text-white flex items-center justify-center rounded-full hover:bg-drwal-red transition-colors">
               <Facebook size={20} />
             </a>
             <a href="#" className="w-10 h-10 bg-drwal-dark text-white flex items-center justify-center rounded-full hover:bg-drwal-red transition-colors">
               <Twitter size={20} />
             </a>
           </div>
           
           <a href="#" className="inline-block w-full text-center bg-drwal-green text-white font-display font-bold py-3 uppercase hover:bg-drwal-dark transition-colors">
             Program Lojalnościowy
           </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between text-xs opacity-60">
        <div className="space-x-4">
          <a href="#" className="hover:underline">Polityka Prywatności</a>
          <a href="#" className="hover:underline">Regulamin</a>
          <a href="#" className="hover:underline">Alergeny</a>
        </div>
        <div className="mt-2 md:mt-0">
          Smacznego życzy Zespół Drwala
        </div>
      </div>
    </footer>
  );
};

export default Footer;