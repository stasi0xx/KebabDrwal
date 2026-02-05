import React from 'react';
import { MENU_BESTSELLERS, MENU_FOREST, MENU_FIT, MENU_FORMS, MENU_SIDES } from '../constants';
import { MenuItem, MenuCategory } from '../types';
import { Leaf, Flame, Zap, ArrowDown } from 'lucide-react';

const MenuSection: React.FC = () => {
  return (
    <div id="menu" className="relative">
      
      {/* 1. BESTSELLERS SECTION */}
      {/* Changed: sticky only on lg screens to prevent covering items on mobile */}
      <section className="relative lg:sticky lg:top-0 min-h-screen flex flex-col justify-center bg-[#f4f4f4] py-20 border-b border-gray-200 shadow-xl z-10">
         <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b-4 border-drwal-dark pb-4">
                <div>
                    <span className="font-sans font-bold text-drwal-red tracking-widest uppercase mb-2 block">Rozdział 1</span>
                    <h2 className="font-display font-bold text-5xl md:text-8xl text-drwal-dark leading-none">{MENU_BESTSELLERS.title}</h2>
                </div>
                <p className="font-sans text-xl text-gray-600 max-w-sm text-right mt-4 md:mt-0">
                    {MENU_BESTSELLERS.description}
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {MENU_BESTSELLERS.items.map((item) => (
                    <StandardCard key={item.id} item={item} theme="light" />
                ))}
            </div>
            
            <div className="mt-12 text-center animate-bounce text-gray-400 hidden lg:block">
                <ArrowDown className="mx-auto" />
                <span className="text-xs uppercase tracking-widest">Przewiń po więcej</span>
            </div>
         </div>
      </section>

      {/* 2. FOREST SECTION */}
      <section className="relative lg:sticky lg:top-0 min-h-screen flex flex-col justify-center bg-drwal-wood text-white py-20 shadow-[0_-20px_40px_rgba(0,0,0,0.3)] z-20 overflow-hidden">
         {/* Forest Pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                <div className="text-center md:text-left">
                    <span className="font-sans font-bold text-drwal-green tracking-widest uppercase mb-2 block">Rozdział 2</span>
                    <h2 className="font-display font-bold text-5xl md:text-8xl leading-none text-white">
                        {MENU_FOREST.title}
                    </h2>
                </div>
                 <div className="mt-6 md:mt-0 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 max-w-md">
                     <p className="font-sans text-lg text-gray-200 italic">
                        "{MENU_FOREST.description}"
                     </p>
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {MENU_FOREST.items.map((item) => (
                    <ForestCard key={item.id} item={item} />
                ))}
            </div>
         </div>
      </section>

      {/* 3. FIT SECTION */}
      <section className="relative lg:sticky lg:top-0 min-h-screen flex flex-col justify-center bg-white py-20 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] z-30">
         <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="text-center mb-16">
                 <span className="inline-flex items-center bg-green-100 text-drwal-green px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                  <Leaf size={16} className="mr-2" /> Rozdział 3: Healthy Choice
                </span>
                <h2 className="font-display font-bold text-5xl md:text-8xl text-drwal-dark mb-4">{MENU_FIT.title}</h2>
                <p className="font-sans text-gray-500 max-w-2xl mx-auto">Lżej, ale dalej konkretnie.</p>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {MENU_FIT.items.map((item) => (
                  <FitCard key={item.id} item={item} />
                ))}
            </div>
         </div>
      </section>

      {/* 4. SIDES & FORMS SECTION */}
      <section className="relative lg:sticky lg:top-0 min-h-screen flex flex-col justify-center bg-drwal-red text-white py-20 shadow-[0_-20px_40px_rgba(0,0,0,0.3)] z-40">
         <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="mb-12 border-b-4 border-white/20 pb-4">
                 <span className="font-sans font-bold text-drwal-yellow tracking-widest uppercase mb-2 block">Rozdział 4</span>
                 <h2 className="font-display font-bold text-5xl md:text-8xl leading-none">Dodatki & Formy</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Forms List */}
                <div className="lg:col-span-7 bg-drwal-dark p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                    <h3 className="font-display font-bold text-3xl mb-8 flex items-center text-drwal-yellow">
                       <Zap className="mr-3" /> {MENU_FORMS.title}
                    </h3>
                    <div className="space-y-6">
                        {MENU_FORMS.items.map(item => (
                            <div key={item.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/10 pb-4 last:border-0 hover:pl-4 transition-all duration-300 cursor-default group">
                                <span className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-drwal-red transition-colors">{item.name}</span>
                                <span className="font-sans text-sm md:text-base text-gray-400 mt-1 sm:mt-0">{item.description}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sides List */}
                <div className="lg:col-span-5 flex flex-col space-y-8">
                     <div className="bg-white text-drwal-dark p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="font-display font-bold text-3xl mb-6 text-drwal-red">{MENU_SIDES.title}</h3>
                            <div className="space-y-6">
                                 {MENU_SIDES.items.map(item => (
                                    <div key={item.id} className="border-b border-gray-100 last:border-0 pb-3">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="font-display font-bold text-xl">{item.name}</span>
                                            <span className="font-sans font-bold text-drwal-red bg-red-50 px-2 py-1 rounded">{item.price}</span>
                                        </div>
                                        <p className="font-sans text-sm opacity-70 leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                     </div>
                </div>
            </div>
         </div>
      </section>

    </div>
  );
};

// --- CARD COMPONENTS ---

const StandardCard: React.FC<{ item: MenuItem, theme?: 'light' | 'dark' }> = ({ item, theme = 'light' }) => (
    <div className={`group flex flex-col h-full rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-drwal-dark border border-white/10'}`}>
        <div className="relative h-56 overflow-hidden">
            {item.tag && (
                <div className="absolute top-4 right-4 z-10 bg-drwal-red text-white px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-sm shadow-md">
                    {item.tag}
                </div>
            )}
            <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
        </div>
        <div className="p-6 flex flex-col flex-grow">
             <div className="flex justify-between items-start mb-2">
                <h4 className={`font-display font-bold text-xl uppercase leading-tight ${theme === 'light' ? 'text-drwal-dark' : 'text-white'}`}>
                    {item.name}
                </h4>
             </div>
             <p className={`font-sans text-sm leading-relaxed mb-6 flex-grow ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                 {item.description}
             </p>
             <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                 <span className={`font-display font-bold text-2xl ${theme === 'light' ? 'text-drwal-dark' : 'text-white'}`}>{item.price}</span>
                 <button className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${theme === 'light' ? 'bg-drwal-dark text-white hover:bg-drwal-red' : 'bg-white text-drwal-dark hover:bg-drwal-red hover:text-white'}`}>
                     +
                 </button>
             </div>
        </div>
    </div>
);

const ForestCard: React.FC<{ item: MenuItem }> = ({ item }) => (
    <div className="flex flex-col md:flex-row bg-drwal-dark/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-drwal-green/50 transition-colors group">
         <div className="w-full md:w-2/5 h-56 md:h-auto overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
         </div>
         <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
             {item.tag && <span className="text-drwal-green font-bold text-xs tracking-widest uppercase mb-2 block">{item.tag}</span>}
             <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 text-white group-hover:text-drwal-green transition-colors">{item.name}</h3>
             <p className="font-sans text-gray-300 mb-6 text-base md:text-lg">{item.description}</p>
             <div className="flex items-center justify-between mt-auto">
                 <span className="font-display font-bold text-2xl md:text-3xl text-white">{item.price}</span>
                 <button className="px-6 py-2 border border-white text-white hover:bg-drwal-green hover:border-drwal-green font-bold uppercase text-sm tracking-wider transition-colors rounded-sm">
                     Zamów
                 </button>
             </div>
         </div>
    </div>
)

const FitCard: React.FC<{ item: MenuItem }> = ({ item }) => (
    <div className="flex flex-col group cursor-pointer">
        <div className="relative rounded-3xl overflow-hidden mb-6 bg-gray-100 shadow-md aspect-square md:aspect-[4/3]">
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
             <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold text-drwal-green shadow-lg z-10">
                 FIT
             </div>
             <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
             />
        </div>
        
        <h4 className="font-sans text-2xl font-bold text-gray-900 mb-2 group-hover:text-drwal-green transition-colors">
            {item.name}
        </h4>
        
        <div className="flex items-baseline space-x-3 mb-4">
             <span className="text-xl font-bold text-gray-400 line-through scale-90 opacity-0 group-hover:opacity-100 transition-opacity"></span>
             <span className="text-xl font-bold text-drwal-dark">{item.price}</span>
        </div>

        {item.macros && (
            <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-4 gap-2 border border-gray-100">
                <MacroItem value={item.macros.calories} label="KCAL" />
                <MacroItem value={item.macros.protein} label="BIAŁKO" />
                <MacroItem value={item.macros.carbs} label="WĘGLE" />
                <MacroItem value={item.macros.fat} label="TŁUSZCZ" />
            </div>
        )}
    </div>
);

const MacroItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center text-center">
        <span className="font-sans font-bold text-sm text-drwal-green">{value}</span>
        <span className="font-sans text-[9px] font-bold text-gray-400 tracking-wider uppercase mt-1">{label}</span>
    </div>
);

export default MenuSection;