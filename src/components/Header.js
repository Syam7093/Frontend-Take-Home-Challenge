import React, { useState } from 'react';
import "../App.css";

function Header({ onSearch }) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ date: '', category: '', source: '' });

  const handleSearch = () => {
    onSearch(query, filters);
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
    onSearch(query, { ...filters, [key]: value });
  };

  return (
    <header>
      <input
      className='searchBox'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        <input
        className='selectFields'
          type="date"
          value={filters.date}
          onChange={(e) => handleFilterChange('date', e.target.value)}
        />
        <select
        className='selectFields'
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="sports">Sports</option>
        </select>
        <select
        className='selectFields'
          value={filters.source}
          onChange={(e) => handleFilterChange('source', e.target.value)}
        >
          <option value="">All Sources</option>
          <option value="bbc-news">NewsAPI</option>
          <option value="cnn">The Guardian:</option>
          <option value="cnn">New York Times</option>

          
        </select>
      </div>
    </header>
  );
}

export default Header;
