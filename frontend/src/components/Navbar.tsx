import React, { useRef, useState, useEffect } from "react";
import {
  ShoppingCart,
  User,
  Search,
  X,
  MapPin,
} from "lucide-react";
import { useAtom } from "jotai";
import { cartAtom } from "../atoms/cartAtom";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  currentPage: "menu" | "cart";
  query: string;
  setQuery: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  query,
  setQuery,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cart] = useAtom(cartAtom);
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const handleSearch = () => {
    if (query.trim()) {
      inputRef.current?.blur();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
    if (e.key === "Escape") {
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  const handleCartClick = () => {
    if (currentPage !== "cart") navigate("/cart");
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Top Section: Logo + Cart + User */}
          <div className="flex justify-between items-center w-full md:w-auto">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MealMate</span>
            </div>

            {/* Right Controls on Mobile */}
            <div className="flex md:hidden items-center space-x-3">
              <button onClick={handleCartClick} className="relative p-2">
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>
              <button className="p-2 text-gray-600">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div
            className="w-full md:flex-1 md:mx-8 mt-4 md:mt-0"
            ref={containerRef}
          >
            <div
              className={`flex items-center px-6 py-4 rounded-2xl shadow-lg bg-white/90 backdrop-blur-lg border-2 transition-all duration-300 ${
                isFocused
                  ? "border-orange-500 shadow-orange-100 shadow-2xl"
                  : "border-gray-200 hover:border-orange-300"
              }`}
            >
              <Search
                size={24}
                className={`transition-colors duration-200 ${
                  isFocused ? "text-orange-500" : "text-gray-400"
                }`}
              />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onFocus={() => setIsFocused(true)}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Search for dishes..."
                className="flex-1 ml-4 text-lg bg-transparent outline-none placeholder-gray-400 text-gray-800"
              />
              {query && (
                <button
                  onClick={handleClear}
                  className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              )}
              <div className="flex items-center gap-3 ml-4">
                <button
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Right Controls on Desktop */}
          <div className="hidden md:flex items-center space-x-6 ml-6">
            {/* Location */}
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              Patiala
            </div>

            {/* Cart */}
            <button
              onClick={handleCartClick}
              className={`relative p-2 rounded-full transition-all duration-200 ${
                currentPage === "cart"
                  ? "bg-orange-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* User */}
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
