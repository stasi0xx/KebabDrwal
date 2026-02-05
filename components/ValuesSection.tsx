import React from 'react';
import { VALUES } from '../constants';
import { Star } from 'lucide-react';

const ValuesSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {VALUES.map((value, index) => {
            const colors = {
              red: { icon: 'text-drwal-red', star: 'text-drwal-red' },
              yellow: { icon: 'text-drwal-yellow', star: 'text-drwal-yellow' },
              green: { icon: 'text-drwal-green', star: 'text-drwal-green' },
            };
            const currentColors = colors[value.color];

            return (
              <div key={index} className="flex flex-col items-center md:items-start space-y-4 group">
                <div className="relative mb-4">
                  <Star 
                    className={`absolute -top-4 -right-6 w-8 h-8 ${currentColors.star} opacity-20 group-hover:opacity-100 transition-opacity rotate-12`} 
                    fill="currentColor" 
                  />
                  <div className={`p-4 border-4 border-drwal-dark rounded-full ${currentColors.icon} group-hover:scale-110 transition-transform duration-300 bg-white`}>
                    {value.icon}
                  </div>
                </div>

                <h3 className="font-display font-bold text-3xl uppercase text-drwal-dark">
                  {value.title}
                </h3>
                
                <p className="font-sans text-drwal-dark/70 leading-relaxed max-w-xs">
                  {value.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ValuesSection;