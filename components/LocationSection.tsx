import React from 'react';
import { MapPin, Phone, Star, Navigation } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="locations" className="bg-drwal-dark text-white py-24 px-4 relative overflow-hidden">
      {/* Background Map Effect */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Gdynia_mapa.png')] bg-cover bg-center grayscale mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Info Column */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
               <span className="bg-drwal-red text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
                 Nasz Lokal
               </span>
               <div className="flex text-drwal-yellow">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={16} fill="currentColor" className={i === 4 ? "opacity-90" : ""} />
                 ))}
                 <span className="ml-2 text-white font-bold text-sm">4.9/5 (5031 opinii)</span>
               </div>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl uppercase leading-none mb-6">
              Gdynia <span className="text-drwal-yellow">Chylonia</span>
            </h2>
            <p className="font-sans text-xl opacity-90 leading-relaxed max-w-lg mb-8 border-l-4 border-drwal-red pl-6">
              Głód? Wbijaj po Drwala.<br/>
              Tu nie ma „zwykłego kebaba”. Tu jest mięso + ciągnący cheddar + chrupiące dodatki i sos, który robi robotę.
            </p>
          </div>

          <div className="space-y-6 font-sans">
            <div className="flex items-start group">
               <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-drwal-red transition-colors">
                 <MapPin className="w-6 h-6 text-white" />
               </div>
               <div>
                 <p className="font-bold text-lg">Chylońska 172</p>
                 <p className="opacity-60">81-021 Gdynia</p>
               </div>
            </div>

            <div className="flex items-start group">
               <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-drwal-red transition-colors">
                 <Phone className="w-6 h-6 text-white" />
               </div>
               <div>
                 <p className="font-bold text-lg">500 437 600</p>
                 <p className="opacity-60">Zadzwoń i zamów</p>
               </div>
            </div>
          </div>

          <div className="pt-6 flex gap-4">
             <a href="tel:500437600" className="flex-1 bg-drwal-red hover:bg-white hover:text-drwal-red text-white py-4 px-6 text-center font-display font-bold text-xl uppercase tracking-wider transition-colors rounded-sm flex justify-center items-center">
                <Phone className="mr-2 w-5 h-5" /> Zamów
             </a>
             <a href="https://maps.google.com/?q=Kebab+Drwal+Gdynia+Chylońska+172" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white hover:bg-drwal-yellow text-drwal-dark py-4 px-6 text-center font-display font-bold text-xl uppercase tracking-wider transition-colors rounded-sm flex justify-center items-center">
                <Navigation className="mr-2 w-5 h-5" /> Dojedź
             </a>
          </div>
        </div>

        {/* Visual/Map Column */}
        <div className="h-[500px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative group">
           {/* Placeholder for Map/Storefront */}
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.673895368305!2d18.4735!3d54.5455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMyJzQzLjgiTiAxOMKwMjgnMjQuNiJF!5e0!3m2!1spl!2spl!4v1635765000000!5m2!1spl!2spl" 
             width="100%" 
             height="100%" 
             style={{border:0, filter: 'grayscale(100%) invert(90%) contrast(85%)'}} 
             allowFullScreen 
             loading="lazy"
             className="group-hover:filter-none transition-all duration-500"
           ></iframe>
           
           <div className="absolute bottom-6 left-6 right-6 bg-drwal-dark p-4 rounded-xl shadow-lg border border-white/10 flex items-center justify-between">
              <div>
                  <p className="text-xs text-drwal-yellow font-bold uppercase tracking-widest mb-1">Otwarte Codziennie</p>
                  <p className="font-display text-xl font-bold">11:00 - 22:00</p>
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <span className="sr-only">Open</span>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;