import React from 'react';
import ResidentCard from './ResidentCard';
import './ResidentList.css';

// PUBLIC_INTERFACE
/**
 * ResidentList component displays a list of residents
 * @param {array} residents - Array of resident objects to display
 * @param {function} onResidentClick - Callback function when a resident is clicked
 */
const ResidentList = ({ residents, onResidentClick }) => {
  if (residents.length === 0) {
    return (
      <div className="no-results">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="no-results-icon"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 8v4M12 16h.01"></path>
        </svg>
        <p className="no-results-text">No residents found</p>
        <p className="no-results-subtext">Try adjusting your search</p>
      </div>
    );
  }

  return (
    <div className="resident-list" role="list">
      {residents.map((resident) => (
        <ResidentCard 
          key={resident.id}
          resident={resident}
          onClick={() => onResidentClick(resident)}
        />
      ))}
    </div>
  );
};

export default ResidentList;
