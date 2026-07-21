import React from 'react';

const PythonApp = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      backgroundColor: '#1e1e1e',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
    }}>
      <iframe 
        src="https://coddy.tech/embed-editor?lang=python&theme=dark" 
        width="100%" 
        height="100%" 
        style={{ display: 'block', border: 0 }} 
        title="Python IDE"
      />
    </div>
  );
};

export default PythonApp;
