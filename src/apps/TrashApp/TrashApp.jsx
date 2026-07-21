import React from 'react';

const TrashApp = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100%', 
      backgroundColor: '#0d1117', 
      color: '#c9d1d9',
      padding: '40px',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '24px', opacity: 0.5 }}>
        <svg viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </div>
      <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '12px' }}>Trash is empty</h2>
      <p style={{ color: '#8b949e', maxWidth: '400px', lineHeight: '1.6' }}>
        I don't delete my mistakes, I learn from them. 
        <br/><br/>
        (There's nothing to see here right now.)
      </p>
    </div>
  );
};

export default TrashApp;
