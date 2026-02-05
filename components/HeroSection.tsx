import React from 'react';
import { ArrowRight, Bike } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-drwal-dark text-white flex items-center overflow-hidden pt-20">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      {/* Background Gradient/Glow */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-drwal-red/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <div className="flex items-center space-x-2 text-drwal-yellow mb-6">
            <Bike size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">Gdynia Chylonia</span>
          </div>
          
          <h1 className="font-display font-bold text-6xl md:text-8xl uppercase mb-6 leading-[0.9]">
            Drwal u Ciebie <br/> <span className="text-drwal-red">W Domu</span>
          </h1>
          
          <p className="font-sans text-xl md:text-2xl opacity-90 mb-10 max-w-lg text-gray-300 border-l-4 border-drwal-yellow pl-6">
            Nie chce Ci się wychodzić? Odpalasz telefon, wybierasz co chcesz, a my dowieziemy Ci gorące mięso i chrupiące frytki pod same drzwi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
             <a href="#menu" className="group relative inline-flex items-center justify-center px-10 py-5 bg-drwal-red text-white font-display font-bold text-2xl uppercase tracking-widest overflow-hidden hover:bg-white hover:text-drwal-red transition-all duration-300 rounded-sm shadow-lg shadow-drwal-red/30">
                <span className="relative z-10 flex items-center">
                  Zamów Online <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </span>
             </a>
             <a href="#locations" className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-display font-bold text-2xl uppercase tracking-widest hover:bg-white hover:text-drwal-dark transition-all duration-300 rounded-sm">
                Lokal
             </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="h-[50vh] lg:h-[80vh] w-full relative order-1 lg:order-2 group perspective-1000">
            {/* Decorative Element */}
            <div className="absolute inset-0 bg-drwal-yellow/10 transform rotate-6 scale-90 rounded-3xl backdrop-blur-sm border border-white/10"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1200&auto=format&fit=crop" 
              alt="Kebab Drwal Box"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl shadow-2xl transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-6 bg-white text-drwal-dark p-6 font-display font-bold text-center leading-none transform -rotate-6 shadow-xl z-20 border-4 border-drwal-red">
                <span className="block text-5xl text-drwal-red">4.9</span>
                <span className="text-sm tracking-widest">GWIAZDEK</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;