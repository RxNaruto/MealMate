import React, { useRef, useState, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
}

export const SearchBarTest: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
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
      // You can trigger additional logic here if needed
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

  return (
    <div className="w-full max-w-4xl mx-auto mb-8" ref={containerRef}>
      {/* Location Header */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
       
    
      </div>

      {/* Input Container */}
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
            className="p-2 hover:bg-orange-50 rounded-full transition-colors duration-200 group"
            title="Voice search"
          >
            
          </button>
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
