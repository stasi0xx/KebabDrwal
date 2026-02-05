import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SLIDES } from '../constants';
import { SlideData } from '../types';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: `-${100 * (SLIDES.length - 1)}vw`,
          ease: 'none',
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: `+=${100 * SLIDES.length}%`, 
            scrub: 0.6,
            pin: true,
          },
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden"> 
      <div 
        ref={sectionRef} 
        className="flex flex-row h-screen relative" 
        style={{ width: `${SLIDES.length * 100}vw` }}
      >
        {SLIDES.map((slide) => (
          <Slide key={slide.id} data={slide} />
        ))}
      </div>
    </div>
  );
};

const Slide: React.FC<{ data: SlideData }> = ({ data }) => {
  // Helper to split title by highlight if present
  const renderTitle = () => {
    if (!data.highlight) return data.title;
    
    const parts = data.title.split(data.highlight);
    return (
      <>
        {parts[0]}
        <span className="text-drwal-red">{data.highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`w-screen h-screen flex-shrink-0 relative overflow-hidden flex items-center justify-center ${data.bgColor} ${data.textColor}`}>
      
      {/* Background/Pattern decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
      
      {/* Carbon Fibre specifically for dark theme slides */}
      {data.theme === 'dark' && (
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      )}

      {/* Added pt-20 for navbar clearance on mobile */}
      <div className="container mx-auto px-6 pt-20 lg:pt-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full relative z-10">
        
        {/* Content Side */}
        <div className="flex flex-col justify-center order-2 lg:order-1 space-y-4 lg:space-y-6 text-center lg:text-left">
            <div className={`hidden lg:inline-block border-b-4 w-16 mb-2 ${data.theme === 'dark' ? 'border-drwal-red' : 'border-drwal-dark'}`}></div>
            
            <h2 className="font-display font-bold text-4xl md:text-7xl lg:text-8xl leading-[0.9] uppercase">
              {renderTitle()}
            </h2>
            
            <p className={`font-sans text-base md:text-xl md:max-w-md font-medium leading-relaxed mx-auto lg:mx-0 ${data.theme === 'dark' ? 'text-gray-300' : 'opacity-90'}`}>
              {data.description}
            </p>
            
            {/* Action Buttons */}
            {data.buttons && (
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                    {data.buttons.map((btn, idx) => (
                        <a 
                           key={idx}
                           href={btn.href} 
                           className={`group relative inline-flex items-center justify-center px-8 py-3 lg:py-4 font-display font-bold text-lg lg:text-xl uppercase tracking-widest rounded-sm transition-all duration-300 ${
                               btn.variant === 'primary' 
                               ? 'bg-drwal-red text-white hover:bg-white hover:text-drwal-red' 
                               : 'border-2 border-white text-white hover:bg-white hover:text-drwal-dark'
                           }`}
                        >
                           <span className="relative z-10 flex items-center">
                              {btn.label} {btn.variant === 'primary' && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>}
                           </span>
                        </a>
                    ))}
                </div>
            )}
        </div>

        {/* Image Side */}
        <div className="order-1 lg:order-2 h-[30vh] md:h-[40vh] lg:h-[70vh] w-full relative group perspective-1000 flex items-center justify-center">
            {/* Decoration for the Kebab/Drwal Dark Slide */}
            {data.bgColor === 'bg-drwal-dark' && (
                 <div className="absolute inset-0 bg-drwal-yellow/10 transform rotate-6 scale-90 rounded-3xl backdrop-blur-sm border border-white/10"></div>
            )}

            <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 hidden lg:block opacity-20 rounded-3xl"></div>
            
            <img 
              src={data.image} 
              alt={data.title}
              className={`w-auto h-full max-h-full object-contain lg:object-cover lg:w-full relative z-10 rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-[1.02] ${data.theme === 'light' ? 'border-4 border-drwal-dark' : 'shadow-drwal-red/20'}`}
            />
            
            {/* Badge for Delivery Slide */}
            {data.id === 0 && (
                <div className="absolute bottom-4 -left-2 lg:bottom-10 lg:-left-6 bg-white text-drwal-dark p-3 lg:p-6 font-display font-bold text-center leading-none transform -rotate-6 shadow-xl z-20 border-4 border-drwal-red">
                   <span className="block text-3xl lg:text-5xl text-drwal-red">4.9</span>
                   <span className="text-[10px] lg:text-sm tracking-widest">GWIAZDEK</span>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default HorizontalScroll;