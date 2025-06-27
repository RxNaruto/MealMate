import React from 'react';
import { Search } from 'lucide-react';
import { FoodCard, type FoodCardProps } from './FoodCard';

interface FoodGridProps {
  items: FoodCardProps[];
  onItemClick?: (id: number) => void;
}

const FoodGrid: React.FC<FoodGridProps> = ({ items, onItemClick }) => {
  if (items.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <Search className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-2xl font-medium text-gray-900 mb-2">No dishes found</h3>
          <p className="text-gray-600">Try adjusting your search or browse different categories</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.id} onClick={() => onItemClick?.(item.id)} className="cursor-pointer">
            <FoodCard
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodGrid;
