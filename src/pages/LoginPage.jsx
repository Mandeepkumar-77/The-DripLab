import React, { useState } from 'react';
import './Pages.css';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('test@driplab.com');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ name: 'Alex', email, phone: '+1 234 567 8900' });
  };

  return (
    <div className="page-container animate-fade-in-up">
      <div className="hero-section">
        <h1 className="hero-title" style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>Drip<span className="text-primary">Lab</span></h1>
        <p className="hero-subtitle">Crafting your perfect drink.</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email or Phone</label>
          <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group" style={{marginTop: '1rem'}}>
          <label>Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            placeholder="Enter your password"
            required
          />
        </div>
        
        <div style={{marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '1rem', fontSize: '1.05rem'}}>
            Sign In
          </button>
          <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginTop: '0.5rem'}}>
            <span style={{color: 'var(--on-surface-variant)', cursor: 'pointer', fontWeight: 500}}>Forgot Password?</span>
            <span style={{color: 'var(--primary)', cursor: 'pointer', fontWeight: 600}}>Create Account</span>
          </div>
        </div>
      </form>
    </div>
  );
}
