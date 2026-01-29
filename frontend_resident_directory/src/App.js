import React, { useState, useMemo } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ResidentList from './components/ResidentList';
import ResidentDetails from './components/ResidentDetails';
import { mockResidents } from './mockData';

// PUBLIC_INTERFACE
/**
 * Main App component for the Resident Directory application
 * Displays a searchable list of residents and allows viewing detailed information
 */
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResident, setSelectedResident] = useState(null);

  // Filter residents based on search term
  const filteredResidents = useMemo(() => {
    if (!searchTerm.trim()) {
      return mockResidents;
    }
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return mockResidents.filter(resident =>
      resident.name.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm]);

  // PUBLIC_INTERFACE
  /**
   * Handle search term changes
   * @param {string} term - The new search term
   */
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // PUBLIC_INTERFACE
  /**
   * Handle resident card click to show details
   * @param {object} resident - The selected resident object
   */
  const handleResidentClick = (resident) => {
    setSelectedResident(resident);
  };

  // PUBLIC_INTERFACE
  /**
   * Close the resident details modal
   */
  const handleCloseModal = () => {
    setSelectedResident(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Resident Directory</h1>
          <p className="app-subtitle">
            Browse and search our community members
          </p>
        </div>
      </header>
      
      <main className="app-main">
        <div className="container">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
          
          <div className="results-count">
            Showing {filteredResidents.length} of {mockResidents.length} residents
          </div>
          
          <ResidentList 
            residents={filteredResidents}
            onResidentClick={handleResidentClick}
          />
        </div>
      </main>
      
      {selectedResident && (
        <ResidentDetails 
          resident={selectedResident}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
