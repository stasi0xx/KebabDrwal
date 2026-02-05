import React from 'react';
import Navbar from './components/Navbar';
import HorizontalScroll from './components/HorizontalScroll';
import MenuSection from './components/MenuSection';
import ValuesSection from './components/ValuesSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-drwal-red selection:text-white">
      <Navbar />
      
      <main>
        {/* Horizontal Scroll returns as the Hero intro */}
        <HorizontalScroll />
      </main>

      {/* Vertical Content */}
      <div className="relative z-10 bg-white">
        
        <ValuesSection />
        
        {/* Menu Section with overlapping cards */}
        <MenuSection />
        
        <LocationSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;