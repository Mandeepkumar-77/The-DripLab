import React from 'react';
import './Header.css';
import brandLogoImg from '../assets/logo_driplab.png';

export default function Header({ cartCount, navigateTo, user }) {
  return (
    <header className="header" style={{backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--outline)'}}>
      <div className="logo" onClick={() => navigateTo('home')} style={{display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer'}}>
        <img src={brandLogoImg} alt="The DripLab Logo" style={{width: '30px', height: '30px', borderRadius: '8px', objectFit: 'cover'}} />
        <span className="logo-text brand-logo" style={{fontSize: '1.25rem', color: 'var(--on-surface)'}}>
          The Drip<span className="text-primary">Lab</span>
        </span>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
        {user ? (
          <div onClick={() => navigateTo('profile')} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary)', 
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
            }}>
              👤
            </div>
            <span style={{fontWeight: 600, fontSize: '0.9rem', color: 'var(--on-surface)'}}>{user.name}</span>
          </div>
        ) : (
          <button 
            className="btn btn-primary" 
            style={{padding: '0.4rem 1rem', fontSize: '0.85rem', borderRadius: '20px'}}
            onClick={() => navigateTo('login')}
          >
            Sign In
          </button>
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
