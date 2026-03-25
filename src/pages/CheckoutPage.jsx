import React, { useState } from 'react';
import './Pages.css';

export default function CheckoutPage({ navigateTo, cart, clearCart }) {
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

  const handleCheckout = () => {
    // In a real app we'd process payment here.
    clearCart();
    navigateTo('success');
  };

  return (
    <div className="page-container animate-fade-in-up">
      <h2 className="section-title">Order Summary</h2>
      
      {cart.length === 0 ? (
        <div style={{textAlign: 'center', marginTop: '4rem', color: 'var(--on-surface-variant)'}}>
          <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🛒</div>
          <p>Your cart is looking a little empty.</p>
          <button 
            className="btn btn-primary" 
            style={{marginTop: '2rem'}}
            onClick={() => navigateTo('home')}
          >
            Start Ordering
          </button>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                  <div style={{fontSize: '2rem'}}>{item.icon}</div>
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
                <div style={{fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif"}}>
                  {item.qty && item.qty > 1 && <span style={{fontSize: '0.8rem', opacity: 0.6, marginRight: '4px'}}>x{item.qty}</span>}
                  ₹{item.price * (item.qty || 1)}
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-total">
            <span>To Pay</span>
            <span>₹{totalPrice}</span>
          </div>

          <div style={{marginTop: '3rem'}}>
            <h3 className="section-title" style={{fontSize: '1.2rem'}}>Payment Method</h3>
            <div className="payment-options">
              <div 
                className={`payment-card ${paymentMethod === 'upi' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <div className="payment-icon">📱</div>
                <div className="payment-label">UPI / GPay / PhonePe</div>
                <div className="payment-radio"></div>
              </div>
              <div 
                className={`payment-card ${paymentMethod === 'card' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="payment-icon">💳</div>
                <div className="payment-label">Credit / Debit Card</div>
                <div className="payment-radio"></div>
              </div>
              <div 
                className={`payment-card ${paymentMethod === 'cash' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('cash')}
              >
                <div className="payment-icon">💵</div>
                <div className="payment-label">Cash on Delivery</div>
                <div className="payment-radio"></div>
              </div>
            </div>
          </div>

          <div className="pay-now-wrap">
            <button className="btn btn-primary" style={{width: '100%', padding: '1.2rem', fontSize: '1.2rem'}} onClick={handleCheckout}>
              Pay ₹{totalPrice} & Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
