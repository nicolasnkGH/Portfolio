import React from 'react';
import { useWallpaper } from '../../contexts/WallpaperContext';
import { useLanguage } from '../../contexts/LanguageContext';

const SettingsApp = () => {
  const { wallpaper, setWallpaper } = useWallpaper();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#0d1117', color: '#c9d1d9', overflowY: 'auto' }}>
      
      {/* Header */}
      <div style={{ padding: '24px 30px', backgroundColor: '#161b22', borderBottom: '1px solid #30363d' }}>
        <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#fff' }}>Settings</h2>
        <p style={{ margin: '8px 0 0', color: '#8b949e' }}>System personalization and configuration</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '30px', gap: '30px' }}>
        
        {/* Left Column: Personalization */}
        <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Wallpaper Selection */}
          <div style={{ backgroundColor: '#161b22', padding: '24px', borderRadius: '12px', border: '1px solid #30363d' }}>
            <h3 style={{ margin: '0 0 16px', color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              Desktop Background
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px' }}>
              <button 
                onClick={() => setWallpaper('particles')}
                style={{
                  padding: '12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                  background: wallpaper === 'particles' ? 'rgba(88,166,255,0.1)' : 'transparent',
                  border: `2px solid ${wallpaper === 'particles' ? '#58a6ff' : '#30363d'}`,
                  color: wallpaper === 'particles' ? '#58a6ff' : '#c9d1d9',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ width: '100%', height: '60px', background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)', borderRadius: '4px', border: '1px solid #30363d' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>Particles</span>
              </button>

              <button 
                onClick={() => setWallpaper('solid')}
                style={{
                  padding: '12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                  background: wallpaper === 'solid' ? 'rgba(88,166,255,0.1)' : 'transparent',
                  border: `2px solid ${wallpaper === 'solid' ? '#58a6ff' : '#30363d'}`,
                  color: wallpaper === 'solid' ? '#58a6ff' : '#c9d1d9',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ width: '100%', height: '60px', backgroundColor: '#0d1117', borderRadius: '4px', border: '1px solid #30363d' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>Solid Dark</span>
              </button>

              <button 
                onClick={() => setWallpaper('devops')}
                style={{
                  padding: '12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                  background: wallpaper === 'devops' ? 'rgba(88,166,255,0.1)' : 'transparent',
                  border: `2px solid ${wallpaper === 'devops' ? '#58a6ff' : '#30363d'}`,
                  color: wallpaper === 'devops' ? '#58a6ff' : '#c9d1d9',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ width: '100%', height: '60px', backgroundImage: 'url(/devops_wallpaper.png)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '4px', border: '1px solid #30363d' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>DevOps</span>
              </button>
            </div>
          </div>

          {/* Language Selection */}
          <div style={{ backgroundColor: '#161b22', padding: '24px', borderRadius: '12px', border: '1px solid #30363d' }}>
            <h3 style={{ margin: '0 0 16px', color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Language Preferences
            </h3>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => language !== 'en' && toggleLanguage()}
                style={{
                  flex: 1, padding: '12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold',
                  background: language === 'en' ? '#58a6ff' : 'transparent',
                  color: language === 'en' ? '#000' : '#c9d1d9',
                  border: `1px solid ${language === 'en' ? '#58a6ff' : '#30363d'}`,
                  transition: 'all 0.2s'
                }}
              >
                English
              </button>
              <button 
                onClick={() => language !== 'pt' && toggleLanguage()}
                style={{
                  flex: 1, padding: '12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold',
                  background: language === 'pt' ? '#3fb950' : 'transparent',
                  color: language === 'pt' ? '#000' : '#c9d1d9',
                  border: `1px solid ${language === 'pt' ? '#3fb950' : '#30363d'}`,
                  transition: 'all 0.2s'
                }}
              >
                Português
              </button>
            </div>
          </div>
          
        </div>

        {/* Right Column: System Info */}
        <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ backgroundColor: '#161b22', padding: '24px', borderRadius: '12px', border: '1px solid #30363d' }}>
            <h3 style={{ margin: '0 0 20px', color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              System Information
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #30363d', paddingBottom: '8px' }}>
                <span style={{ color: '#8b949e' }}>OS Name</span>
                <span style={{ fontWeight: '500', color: '#fff' }}>Nicolas Web OS</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #30363d', paddingBottom: '8px' }}>
                <span style={{ color: '#8b949e' }}>Version</span>
                <span style={{ fontWeight: '500', color: '#fff' }}>v2026.06 (Cloud-Native)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #30363d', paddingBottom: '8px' }}>
                <span style={{ color: '#8b949e' }}>Environment</span>
                <span style={{ fontWeight: '500', color: '#fff' }}>React 18 / Vite</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #30363d', paddingBottom: '8px' }}>
                <span style={{ color: '#8b949e' }}>Processor</span>
                <span style={{ fontWeight: '500', color: '#fff' }}>Coffee Lake (Caffeine Powered)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#8b949e' }}>Memory</span>
                <span style={{ fontWeight: '500', color: '#fff' }}>100% Focused</span>
              </div>
            </div>
            
            <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#0d1117', borderRadius: '8px', border: '1px solid #30363d' }}>
              <div style={{ color: '#3fb950', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', marginBottom: '8px' }}>[ OK ] Kernel modules loaded.</div>
              <div style={{ color: '#3fb950', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', marginBottom: '8px' }}>[ OK ] DevOps pipeline secured.</div>
              <div style={{ color: '#3fb950', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem' }}>[ OK ] Systems operational.</div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default SettingsApp;
