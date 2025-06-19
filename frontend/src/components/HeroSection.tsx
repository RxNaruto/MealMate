import React from 'react';
import { MapPin, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-orange-600 min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
            Order food. Discover best<br />
            restaurants. with MealMate!
          </h1>
          
          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 bg-white rounded-2xl p-4 shadow-2xl">
              {/* Location Input */}
              <div className="flex items-center flex-1 border-r border-gray-200 pr-4">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Enter your delivery location"
                  className="w-full text-gray-700 placeholder-gray-400 border-none outline-none text-lg"
                />
                <button className="text-gray-400 hover:text-gray-600 ml-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Search Input */}
              <div className="flex items-center flex-1">
                <Search className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search for restaurant, item or more"
                  className="w-full text-gray-700 placeholder-gray-400 border-none outline-none text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;