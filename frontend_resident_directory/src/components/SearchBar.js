import React from 'react';
import './SearchBar.css';

// PUBLIC_INTERFACE
/**
 * SearchBar component for filtering residents by name
 * @param {string} searchTerm - Current search term
 * @param {function} onSearchChange - Callback function when search term changes
 */
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar">
      <label htmlFor="resident-search" className="search-label">
        Search Residents
      </label>
      <div className="search-input-wrapper">
        <svg 
          className="search-icon" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          id="resident-search"
          type="text"
          className="search-input"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search residents by name"
        />
      </div>
    </div>
  );
};

export default SearchBar;
