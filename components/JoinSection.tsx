import React from 'react';
import { ArrowRight, Bike } from 'lucide-react';

const JoinSection: React.FC = () => {
  return (
    <section className="bg-drwal-dark text-white py-20 px-4 md:px-0 relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="px-6 lg:pl-12 order-2 lg:order-1">
          <div className="flex items-center space-x-2 text-drwal-yellow mb-4">
            <Bike size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">Dostawa 7 dni w tygodniu</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-7xl uppercase mb-6 leading-none">
            Drwal u Ciebie <br/> <span className="text-drwal-red">W Domu</span>
          </h2>
          <p className="font-sans text-xl opacity-90 mb-8 max-w-lg text-gray-300">
            Nie chce Ci się wychodzić? Nie ma problemu. Odpalasz telefon, wybierasz co chcesz, a my dowieziemy Ci gorące mięso i chrupiące frytki pod same drzwi. Szybko, konkretnie i bez stygnących tematów.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <button className="group relative inline-flex items-center px-8 py-4 bg-drwal-red text-white font-display font-bold text-xl uppercase tracking-widest overflow-hidden hover:bg-white hover:text-drwal-red transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Zamów Online <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </span>
             </button>
          </div>
        </div>

        <div className="h-[400px] lg:h-[600px] w-full relative order-1 lg:order-2 group">
            <div className="absolute inset-0 bg-drwal-red transform rotate-2 lg:-rotate-2 transition-transform group-hover:rotate-0"></div>
             <img 
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop" 
              alt="Kebab Delivery"
              className="absolute inset-0 w-full h-full object-cover object-center transform lg:scale-90 border-4 border-white grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
            {/* Delivery badge */}
            <div className="absolute top-4 right-4 lg:right-12 bg-white text-drwal-dark p-4 font-display font-bold text-center leading-none transform rotate-12 shadow-lg z-20">
                <span className="block text-3xl text-drwal-red">30</span>
                <span className="text-sm">MINUT</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default JoinSection;