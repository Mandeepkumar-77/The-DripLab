import React from 'react';
import './Pages.css';

export default function LandingPage({ navigateTo, addToCart, removeFromCart, cart }) {
  const specials = [
    { id: 's1', name: 'The Deep Berry Drip', desc: 'Mixed berries, vanilla bean, almond milk', price: 180, icon: '🫐' },
    { id: 's2', name: 'Tropical Zest', desc: 'Mango, pineapple, passionfruit, coconut splash', price: 160, icon: '🥭' },
    { id: 's3', name: 'Chocolate Fudge', desc: 'Double cocoa, fudgy brownie bits, whole milk', price: 190, icon: '🍫' },
    { id: 's4', name: 'Midnight Green', desc: 'Fresh avocado, spinach, green apple, honey', price: 210, icon: '🥑' },
    { id: 's5', name: 'Nutty Banana', desc: 'Ripe banana, peanut butter, chia, oat milk', price: 200, icon: '🍌' }
  ];

  return (
    <div className="page-container animate-fade-in-up" style={{padding: 0}}>
      <div className="hero-section">
        <h1 className="hero-title brand-logo" style={{animation: 'slideInDrop 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'}}>
          The Drip<span className="text-primary">Lab</span>
        </h1>
        <p className="hero-subtitle" style={{animation: 'fadeSlogan 1.2s ease-in 0.4s forwards', opacity: 0}}>
          Crafting your perfect drink.
        </p>
      </div>

      <div className="section" style={{marginTop: '0.5rem'}}>
        <h2 className="section-title">Our Specials</h2>
        <div className="menu-grid">
          {specials.map(item => (
            <div key={item.id} className="shake-card">
              <div className="shake-image">{item.icon}</div>
              <div className="shake-content">
                <div>
                  <div className="shake-name">{item.name}</div>
                  <div className="shake-desc">{item.desc}</div>
                </div>
                <div className="shake-bottom">
                  <div className="shake-price">₹{item.price}</div>
                  {cart.find(c => c.id === item.id) ? (
                    <div className="qty-selector">
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      <span>{cart.find(c => c.id === item.id).qty}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  ) : (
                    <button 
                      className="add-btn" 
                      onClick={() => { addToCart(item); }}
                    >
                      ADD
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
