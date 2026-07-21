import React, { useState } from 'react';
import { Loader } from 'lucide-react';

const GameViewerApp = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#000' }}>
      {isLoading && (
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0, 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#0d1117',
          color: '#c9d1d9',
          zIndex: 1
        }}>
          <Loader className="animate-spin" size={32} style={{ animation: 'spin 2s linear infinite', marginBottom: '15px' }} />
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem' }}>Loading Game Engine...</p>
        </div>
      )}
      <iframe
        src={url}
        title="Game Viewer"
        style={{ width: '100%', height: '100%', border: 'none', position: 'relative', zIndex: 2 }}
        onLoad={() => setIsLoading(false)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default GameViewerApp;
