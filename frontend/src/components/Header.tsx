import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">MealMate</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                MealMate Corporate
              </button>
              <button className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Partner with us
              </button>
              <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                Get the App
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              onClick={()=>{
                navigate("/login");
              }}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;