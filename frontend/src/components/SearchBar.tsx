import React from "react";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
}

export const SearchBarComponent: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded w-full mb-6"
      />
    </div>
  );
};
