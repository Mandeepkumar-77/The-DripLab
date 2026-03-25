import React from 'react';
import './BottomNav.css';

export default function BottomNav({ currentPath, navigateTo }) {
  const tabs = [
    { id: 'home', label: 'Specials', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
    { id: 'builder', label: 'Build Drip', type: 'flask' },
  ];

  if (currentPath === 'success') return null; // Hide on success page

  return (
    <nav className="bottom-nav">
      {tabs.map(tab => (
        <button 
          key={tab.id}
          className={`nav-btn ${currentPath === tab.id ? 'active' : ''}`}
          onClick={() => navigateTo(tab.id)}
        >
          {tab.type === 'flask' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 2v7.31L2.5 20A2 2 0 0 0 4 23h16a2 2 0 0 0 1.5-3L14 9.31V2"></path>
              <path d="M8.5 2h7"></path>
              <path d="M7 16h10"></path>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={tab.icon}></path>
              {tab.id === 'home' && <polyline points="9 22 9 12 15 12 15 22"></polyline>}
            </svg>
          )}
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
