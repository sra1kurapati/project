import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl animate-fade-in mx-auto">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask your cybersecurity question..."
          className="w-full px-6 py-4 pl-14 bg-cyber-dark-light border-2 border-gray-600 rounded-lg 
                   focus:outline-none focus:border-cyber-blue text-cyber-text placeholder-cyber-text-muted
                   transition-all duration-300 hover:border-gray-500 text-lg"
        />
        <Search className="absolute left-5 top-4.5 h-5 w-5 text-cyber-blue" />
        <button
          type="submit"
          className="absolute right-3 top-2.5 px-8 py-2 bg-cyber-blue text-white rounded-md
                   hover:bg-cyber-blue-hover transition-colors duration-300 font-medium text-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
}