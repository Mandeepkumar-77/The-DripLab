import React, { useState } from 'react';
import './Pages.css';

export default function ProfilePage({ user, onUpdate, onLogout }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSave = (e) => {
    e.preventDefault();
    onUpdate({ name, email, phone });
  };

  return (
    <div className="page-container animate-fade-in-up">
      <div className="section" style={{marginBottom: 0, paddingBottom: 0, backgroundColor: 'transparent'}}>
        <h2 className="section-title">Edit Profile</h2>
      </div>
      
      <form className="profile-form" onSubmit={handleSave}>
        <div className="input-group">
          <label>Full Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group mt-3" style={{marginTop: '1rem'}}>
          <label>Email Address</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group mt-3" style={{marginTop: '1rem'}}>
          <label>Phone Number</label>
          <input 
            type="tel" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-field"
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: '2rem'}}>
          Update Profile
        </button>
      </form>

      <div style={{marginTop: '2rem', padding: '0 1rem'}}>
        <button onClick={onLogout} className="btn btn-secondary" style={{width: '100%', borderColor: 'var(--primary)', color: 'var(--primary)', fontWeight: 600}}>
          Log Out
        </button>
      </div>
    </div>
  );
}
