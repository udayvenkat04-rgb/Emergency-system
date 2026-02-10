import React, { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SharedLocation from './pages/SharedLocation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [shareId, setShareId] = useState(null);

  const handleNavigate = (page, id = null) => {
    setCurrentPage(page);
    if (id) setShareId(id);
  };

  return (
    <div>
      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
      {currentPage === 'shared' && <SharedLocation shareId={shareId} onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
