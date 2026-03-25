import React from 'react';
import './Pages.css';

export default function SuccessPage({ navigateTo }) {
  return (
    <div className="success-container animate-fade-in-up">
      <div className="success-icon">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="success-title">Thank you for ordering with us.</h1>
      <div className="feedback-box">
        <p>Please share your feedback and experience</p>
        <textarea 
          className="input-field" 
          placeholder="I loved the..."
          rows="4"
          style={{resize: 'none', marginBottom: '1.5rem'}}
        ></textarea>
        <button 
          className="btn btn-primary" 
          style={{width: '100%'}}
          onClick={() => navigateTo('home')}
        >
          Submit & Return Home
        </button>
      </div>
    </div>
  );
}
