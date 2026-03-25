import React from 'react';
import './Pages.css';

import s1Berry from '../assets/items/s1_berry.png';
import s2Mango from '../assets/items/s2_mango.png';
import s3Chocolate from '../assets/items/s3_chocolate.png';
import s4Green from '../assets/items/s4_green.png';
import s5Banana from '../assets/items/s5_banana.png';
import brandLogoImg from '../assets/logo_driplab.png';

export default function LandingPage({ navigateTo, addToCart, removeFromCart, cart }) {
  const specials = [
    { id: 's1', name: 'The Deep Berry Drip', desc: 'Mixed berries, vanilla bean, almond milk', price: 180, image: s1Berry },
    { id: 's2', name: 'Tropical Zest', desc: 'Mango, pineapple, passionfruit, coconut splash', price: 160, image: s2Mango },
    { id: 's3', name: 'Chocolate Fudge', desc: 'Double cocoa, fudgy brownie bits, whole milk', price: 190, image: s3Chocolate },
    { id: 's4', name: 'Midnight Green', desc: 'Fresh avocado, spinach, green apple, honey', price: 210, image: s4Green },
    { id: 's5', name: 'Nutty Banana', desc: 'Ripe banana, peanut butter, chia, oat milk', price: 200, image: s5Banana }
  ];

  return (
    <div className="page-container animate-fade-in-up" style={{padding: 0}}>
      <div className="hero-section">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', animation: 'slideInDrop 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'}}>
          <img src={brandLogoImg} alt="The DripLab" style={{width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.08)'}} />
          <h1 className="hero-title brand-logo" style={{margin: 0}}>
            The Drip<span className="text-primary">Lab</span>
          </h1>
        </div>
        <p className="hero-subtitle" style={{animation: 'fadeSlogan 1.2s ease-in 0.4s forwards', opacity: 0}}>
          Crafting your perfect drink.
        </p>
      </div>

      <div className="section" style={{marginTop: '0.5rem'}}>
        <h2 className="section-title">Our Specials</h2>
        <div className="menu-grid">
          {specials.map(item => (
            <div key={item.id} className="shake-card">
              <div className="shake-image" style={{padding: 0, overflow: 'hidden'}}>
                <img src={item.image} alt={item.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
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
