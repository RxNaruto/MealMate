import React from 'react';
import { Star } from 'lucide-react';

export interface FoodCardProps {
  id: number;
    name: string;
    description: string;
    image: string;
  
}

export const FoodCard: React.FC<FoodCardProps> = ({ 
  name,
  description,
  image 
  
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
      {/* Food Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 shadow-lg">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{"5"}</span>
          </div>
        </div>
      </div>

      {/* Food Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
            {"Veg"}
          </span>
        </div>
        
      </div>
    </div>
  );
};

