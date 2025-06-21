import React from 'react';
import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';

const FoodItems = () => {
  const restaurants = [
    {
      id: '1',
      name: 'Burger King',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
      offer: 'ITEMS AT ₹139',
      rating: 4.3,
      deliveryTime: '15-20 mins',
      cuisine: 'Burgers, American',
      location: 'PATIALA'
    },
    {
      id: '2',
      name: "McDonald's",
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
      offer: '65% OFF UPTO ₹125',
      rating: 4.3,
      deliveryTime: '20-25 mins',
      cuisine: 'American',
      location: 'Lahori Gate'
    },
    {
      id: '3',
      name: 'Pizza Hut',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
      offer: 'ITEMS AT ₹59',
      rating: 4.2,
      deliveryTime: '25-30 mins',
      cuisine: 'Pizzas',
      location: 'Model Town'
    },
    {
      id: '4',
      name: 'KFC',
      image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
      offer: '65% OFF UPTO ₹125',
      rating: 4.3,
      deliveryTime: '10-15 mins',
      cuisine: 'Burgers, Fast Food, Rolls & Wraps',
      location: 'Model Town'
    },
    {
      id: '5',
      name: "Domino's Pizza",
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      offer: 'ITEMS AT ₹149',
      rating: 4.2,
      deliveryTime: '20-25 mins',
      cuisine: 'Pizzas, Italian, Pastas, Desserts',
      location: 'Model Town'
    },
    {
      id: '6',
      name: 'Bakingo',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      offer: '₹165 OFF ABOVE ₹899',
      rating: 4.8,
      deliveryTime: '15-20 mins',
      cuisine: 'Bakery, Desserts, Beverages',
      location: 'Patiala'
    },
    {
      id: '7',
      name: 'Olio - The Wood Fired Pizzeria',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
      offer: '65% OFF UPTO ₹135',
      rating: 4.4,
      deliveryTime: '25-30 mins',
      cuisine: 'Pizzas, Pastas, Italian, Fast Food',
      location: 'Rajbaha Road'
    },
    {
      id: '8',
      name: 'NIC Ice Creams',
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop',
      offer: 'ITEMS AT ₹148',
      rating: 4.6,
      deliveryTime: '15-20 mins',
      cuisine: 'Ice Cream, Desserts',
      location: 'Lahori Gate'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Restaurants with online food delivery
          </h1>
          <p className="text-gray-600">
            Discover the best food & drinks in your area
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
            />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold">Swiggy</span>
            </div>
            <p className="text-gray-400 mb-8">© 2024 Swiggy Limited. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Team</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Swiggy Blog</a>
              <a href="#" className="hover:text-white transition-colors">Bug Bounty</a>
              <a href="#" className="hover:text-white transition-colors">Swiggy One</a>
              <a href="#" className="hover:text-white transition-colors">Swiggy Corporate</a>
              <a href="#" className="hover:text-white transition-colors">Swiggy Instamart</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FoodItems;