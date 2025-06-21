import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const placeholders = [
    'Dashboard',
    'Orders',
    'Products',
    'Customers',
    'Analytics',
    'Settings'
  ];

  return (
    <div className="sidebar">
      {/* Top icon */}
      <div className="sidebar-top">
        <div className="sidebar-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" 
              stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Navigation dots */}
      <nav className="sidebar-nav">
        <div className="nav-dots-container">
          {placeholders.map((item, index) => (
            <div key={index} className={`nav-item ${index === 0 ? 'active' : ''}`}>
              <div className="nav-dot"></div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar; 