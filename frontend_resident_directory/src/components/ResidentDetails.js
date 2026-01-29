import React, { useEffect } from 'react';
import './ResidentDetails.css';

// PUBLIC_INTERFACE
/**
 * ResidentDetails component displays detailed information about a resident in a modal
 * @param {object} resident - Resident data object
 * @param {function} onClose - Callback function to close the modal
 */
const ResidentDetails = ({ resident, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!resident) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12"></path>
          </svg>
        </button>
        
        <div className="modal-header">
          <img 
            src={resident.avatar} 
            alt={`${resident.name}'s avatar`} 
            className="modal-avatar"
          />
          <h2 id="modal-title" className="modal-name">{resident.name}</h2>
          <p className="modal-apartment">{resident.apartment}</p>
        </div>
        
        <div className="modal-body">
          <div className="detail-section">
            <h3 className="detail-label">Contact Information</h3>
            
            <div className="detail-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="detail-icon"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <p className="detail-subtitle">Phone</p>
                <p className="detail-value">{resident.phone}</p>
              </div>
            </div>
            
            <div className="detail-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="detail-icon"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <div>
                <p className="detail-subtitle">Email</p>
                <p className="detail-value">{resident.email}</p>
              </div>
            </div>
          </div>
          
          {resident.tags && resident.tags.length > 0 && (
            <div className="detail-section">
              <h3 className="detail-label">Tags</h3>
              <div className="modal-tags">
                {resident.tags.map((tag, index) => (
                  <span key={index} className="modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResidentDetails;
