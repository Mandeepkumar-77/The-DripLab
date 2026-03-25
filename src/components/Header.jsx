import React from 'react';
import './Header.css';

export default function Header({ cartCount, navigateTo, user }) {
  return (
    <header className="header" style={{backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--outline)'}}>
      <div className="logo" onClick={() => navigateTo('home')} style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
        <span style={{fontSize: '0.8rem', color: 'var(--on-surface-variant)'}}>©</span>
        <span className="logo-text brand-logo">The Drip<span className="text-primary">Lab</span></span>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
        {user && (
          <div onClick={() => navigateTo('profile')} style={{cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--on-surface-variant)'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '2px'}}>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span style={{fontWeight: 600, fontSize: '0.8rem'}}>{user.name}</span>
          </div>
        )}
        <div className="cart-icon-wrapper" onClick={() => navigateTo('checkout')} style={{backgroundColor: 'var(--surface-low)', padding: '0.5rem', borderRadius: '50%'}}>
          <div className="cart-icon" style={{color: 'var(--on-surface)'}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
              <line x1="6" y1="9" x2="10" y2="9"></line>
            </svg>
          </div>
          {cartCount > 0 && <span className="cart-badge" style={{background: 'var(--primary)', color: 'white', border: '2px solid var(--surface)'}}>{cartCount}</span>}
        </div>
      </div>
    </header>
  );
}
