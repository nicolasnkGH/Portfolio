import React from 'react';

const SpotifyApp = () => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#000', display: 'flex', flexDirection: 'column' }}>
      <iframe 
        style={{ borderRadius: '0', border: 'none', flex: 1 }} 
        src="https://open.spotify.com/embed/playlist/5pCEyA6rTe0mZv6SunO1yl?utm_source=generator&theme=0" 
        width="100%" 
        height="100%" 
        allowFullScreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        title="Spotify Music Player"
      ></iframe>
    </div>
  );
};

export default SpotifyApp;
