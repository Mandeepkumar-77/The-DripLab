import React, { useEffect } from 'react';
import './Pages.css';

export default function SplashPage({ navigateTo }) {
  useEffect(() => {
    // Wait 3.5 seconds, then navigate to home
    const timer = setTimeout(() => {
      navigateTo('home');
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigateTo]);

  return (
    <div className="success-container">
      <h1 className="success-title text-primary morph-text" style={{fontSize: '2rem', textAlign: 'center'}}>
        Welcome to The DripLab Family
      </h1>
      <p className="morph-text-delay" style={{marginTop: '1rem', color: 'var(--on-surface-variant)'}}>Getting your menu ready...</p>
    </div>
  );
}
