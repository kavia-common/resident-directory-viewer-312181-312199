import React from 'react';
import './ResidentCard.css';

// PUBLIC_INTERFACE
/**
 * ResidentCard component displays a resident's basic information
 * @param {object} resident - Resident data object
 * @param {function} onClick - Callback function when card is clicked
 */
const ResidentCard = ({ resident, onClick }) => {
  return (
    <div 
      className="resident-card" 
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View details for ${resident.name}`}
    >
      <img 
        src={resident.avatar} 
        alt={`${resident.name}'s avatar`} 
        className="resident-avatar"
        loading="lazy"
      />
      <div className="resident-info">
        <h3 className="resident-name">{resident.name}</h3>
        <p className="resident-apartment">{resident.apartment}</p>
        {resident.tags && resident.tags.length > 0 && (
          <div className="resident-tags">
            {resident.tags.map((tag, index) => (
              <span key={index} className="resident-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResidentCard;
