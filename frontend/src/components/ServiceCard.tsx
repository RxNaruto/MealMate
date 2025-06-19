import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  discount: string;
  imageSrc: string;
  imageAlt: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  subtitle, 
  discount, 
  imageSrc, 
  imageAlt 
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>
        
        <p className="text-orange-500 font-bold text-xl">{discount}</p>
        
        <div className="relative h-48 mb-6 overflow-hidden rounded-2xl">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <button className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors group-hover:shadow-lg">
          Explore
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;