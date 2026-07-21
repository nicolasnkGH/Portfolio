import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const bootLines = [
  { text: '[    0.000000] nicolas-os: Booting kernel v2026.06-devops...', delay: 0 },
  { text: '[    0.012844] CPU: 6 cores initialized (Cloud/DevOps/AI/Security/Monitoring/Automation)', delay: 300 },
  { text: '[    0.025100] Memory: 8192MB available for infrastructure workloads', delay: 200 },
  { text: '[    0.041200] ACPI: Loading GPU acceleration modules...', delay: 250 },
  { text: '[    0.058300] systemd[1]: Starting nicolas-portfolio.service...', delay: 400 },
  { text: '[    0.072100] systemd[1]: Mounting /dev/experience...', delay: 200 },
  { text: '[    0.089400] systemd[1]: Mounting /dev/skills...', delay: 150 },
  { text: '[    0.103200] systemd[1]: Mounting /dev/projects...', delay: 150 },
  { text: '[    0.121000] net: Establishing connection to nick-t.net...', delay: 300 },
  { text: '[    0.145600] systemd[1]: Started nicolas-portfolio.service.', delay: 400 },
  { text: '', delay: 200 },
  { text: '  Welcome to NicolasOS 2026.06 LTS (GNU/Linux 6.1.0-devops amd64)', delay: 500 },
  { text: '', delay: 100 },
  { text: '  * Documentation: https://nick-t.net', delay: 200 },
  { text: '  * Portfolio:     Interactive Ubuntu Desktop Environment', delay: 200 },
  { text: '', delay: 100 },
  { text: '  System load:  0.45    Processes: 6 running', delay: 200 },
  { text: '  Memory usage: 78%     Services:  All operational', delay: 200 },
  { text: '', delay: 300 },
  { text: 'guest@nick-t.net:~$ startx', delay: 600 },
];

const WelcomeScreen = ({ onComplete }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const [visibleLines, setVisibleLines] = useState([]);
  const [bootComplete, setBootComplete] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Since bootLines is translated, we get it from context
  const bootLinesText = t('welcome.boot') || [];
  // Reconstruct bootLines with delays
  const bootLines = bootLinesText.map((text, i) => {
    // Delays match the original logic roughly
    const delays = [0, 300, 200, 250, 400, 200, 150, 150, 300, 400, 200, 500, 100, 200, 200, 100, 200, 200, 300, 600];
    return { text, delay: delays[i] || 200 };
  });

  useEffect(() => {
    let timeout;
    let totalDelay = 0;

    bootLines.forEach((line, i) => {
      totalDelay += line.delay;
      timeout = setTimeout(() => {
        setVisibleLines(prev => [...prev, line.text]);
      }, totalDelay);
    });

    // After all lines, show boot complete
    totalDelay += 800;
    setTimeout(() => setBootComplete(true), totalDelay);

    totalDelay += 600;
    setTimeout(() => setShowWelcome(true), totalDelay);

    return () => clearTimeout(timeout);
  }, []);

  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => onComplete(), 600);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      backgroundColor: '#0d1117',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      padding: '40px 16px',
      boxSizing: 'border-box',
      transition: 'opacity 0.6s ease',
      opacity: fadeOut ? 0 : 1,
    }}>
      {/* Language Toggle in Top Right */}
      {showWelcome && (
        <button
          onClick={toggleLanguage}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            padding: '6px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            animation: 'welcomeFadeIn 0.8s ease'
          }}
        >
          {language.toUpperCase()}
        </button>
      )}

      {!showWelcome ? (
        /* Boot sequence */
        <div style={{
          width: '100%',
          maxWidth: '800px',
          padding: '40px',
          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
          fontSize: '13px',
          color: '#3fb950',
          lineHeight: '1.6',
          overflow: 'hidden',
        }}>
          {visibleLines.map((line, i) => (
            <div key={i} style={{
              opacity: 1,
              animation: 'fadeInLine 0.15s ease',
              color: line.includes('Started') ? '#58a6ff' :
                     line.includes('Welcome') ? '#fff' :
                     line.includes('startx') ? '#ffbd2e' :
                     line.includes('*') ? '#8b949e' :
                     '#3fb950'
            }}>
              {line || '\u00A0'}
            </div>
          ))}
          {bootComplete && (
            <div style={{ color: '#58a6ff', animation: 'fadeInLine 0.3s ease' }}>
              {t('welcome.bootComplete')}
            </div>
          )}
        </div>
      ) : (
        /* Welcome card */
        <div style={{
          textAlign: 'center',
          animation: 'welcomeFadeIn 0.8s ease',
          maxWidth: '700px',
          width: '100%',
          margin: 'auto 0',
          padding: '20px 10px',
          boxSizing: 'border-box',
        }}>
          {/* Ubuntu-inspired circle logo */}
          <div style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            border: '3px solid #58a6ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            background: 'radial-gradient(circle, rgba(88,166,255,0.15) 0%, transparent 70%)',
            animation: 'pulseGlow 2s ease-in-out infinite',
          }}>
            <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#fff' }}>NT</span>
          </div>

          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: '800', marginBottom: '8px', letterSpacing: '-1px' }}>
            Nicolas Teixeira
          </h1>
          <p style={{ color: '#58a6ff', fontSize: '1.1rem', marginBottom: '24px', fontWeight: '600' }}>
            {t('welcome.role')}
          </p>

          <div style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '12px',
            padding: '20px 16px',
            marginBottom: '24px',
            textAlign: 'left',
          }}>
            <h4 style={{ color: '#fff', marginBottom: '16px', fontSize: '1rem' }}>
              {t('welcome.howToNavigate')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#c9d1d9', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ backgroundColor: 'rgba(88,166,255,0.15)', color: '#58a6ff', padding: '4px 10px', borderRadius: '6px', fontFamily: 'monospace', fontWeight: 'bold', flexShrink: 0, fontSize: '0.8rem' }}>{t('welcome.navDock')}</span>
                <span>{t('welcome.navDockDesc')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ backgroundColor: 'rgba(63,185,80,0.15)', color: '#3fb950', padding: '4px 10px', borderRadius: '6px', fontFamily: 'monospace', fontWeight: 'bold', flexShrink: 0, fontSize: '0.8rem' }}>{t('welcome.navWindows')}</span>
                <span>{t('welcome.navWindowsDesc')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ backgroundColor: 'rgba(163,113,247,0.15)', color: '#a371f7', padding: '4px 10px', borderRadius: '6px', fontFamily: 'monospace', fontWeight: 'bold', flexShrink: 0, fontSize: '0.8rem' }}>{t('welcome.navGames')}</span>
                <span>{t('welcome.navGamesDesc')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ backgroundColor: 'rgba(29,185,84,0.15)', color: '#1DB954', padding: '4px 10px', borderRadius: '6px', fontFamily: 'monospace', fontWeight: 'bold', flexShrink: 0, fontSize: '0.8rem' }}>{t('welcome.navSpotify')}</span>
                <span>{t('welcome.navSpotifyDesc')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ backgroundColor: 'rgba(255,189,46,0.15)', color: '#ffbd2e', padding: '4px 10px', borderRadius: '6px', fontFamily: 'monospace', fontWeight: 'bold', flexShrink: 0, fontSize: '0.8rem' }}>{t('welcome.navTerminal')}</span>
                <span>{t('welcome.navTerminalDesc')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ backgroundColor: 'rgba(210,168,255,0.15)', color: '#d2a8ff', padding: '4px 10px', borderRadius: '6px', fontFamily: 'monospace', fontWeight: 'bold', flexShrink: 0, fontSize: '0.8rem' }}>{t('welcome.navSecrets')}</span>
                <span>{t('welcome.navSecretsDesc')}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleEnter}
            style={{
              padding: '14px 48px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#58a6ff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 20px rgba(88,166,255,0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(88,166,255,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(88,166,255,0.3)';
            }}
          >
            {t('welcome.enterDesktop')}
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeInLine {
          from { opacity: 0; transform: translateX(-5px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes welcomeFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(88,166,255,0.2); }
          50% { box-shadow: 0 0 40px rgba(88,166,255,0.4); }
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;
