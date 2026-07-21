import React, { useState, useRef, useCallback, useEffect } from 'react';
import ParticlesBg from '../ParticlesBg/ParticlesBg';
import { useWindowManager } from '../WindowManager/WindowManagerContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useWallpaper } from '../../contexts/WallpaperContext';
import Window from '../Window/Window';
import TerminalApp from '../../apps/TerminalApp/TerminalApp';
import BrowserApp from '../../apps/BrowserApp/BrowserApp';
import DiagnosticsApp from '../../apps/DiagnosticsApp/DiagnosticsApp';
import ContactApp from '../../apps/ContactApp/ContactApp';
import ResumeApp from '../../apps/ResumeApp/ResumeApp';
import SettingsApp from '../../apps/SettingsApp/SettingsApp';
import TrashApp from '../../apps/TrashApp/TrashApp';
import GamesFolderApp from '../../apps/GamesFolderApp/GamesFolderApp';
import SpotifyApp from '../../apps/SpotifyApp/SpotifyApp';

/* ── Ubuntu Yaru-style SVG icons ── */
const GithubIcon = () => (
  <svg viewBox="0 0 48 48" width="42" height="42">
    <defs><linearGradient id="gh" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2b2b2b"/><stop offset="100%" stopColor="#1a1a1a"/></linearGradient></defs>
    <rect width="48" height="48" rx="12" fill="url(#gh)"/>
    <path d="M24 12C17.4 12 12 17.4 12 24c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C29 16.3 30 16.6 30 16.6c.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0036 24c0-6.6-5.4-12-12-12z" fill="#fff"/>
    <circle cx="38" cy="10" r="6" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    <path d="M36 10l2-2m0 4V8h-4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 48 48" width="42" height="42">
    <rect width="48" height="48" rx="12" fill="#0077b5"/>
    <path d="M16 20h4v12h-4V20zm2-6a2.3 2.3 0 110 4.6A2.3 2.3 0 0118 14zm6 6h3.8v1.6h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.1V32h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V32h-4V20z" fill="#fff"/>
    <circle cx="38" cy="10" r="6" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    <path d="M36 10l2-2m0 4V8h-4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const StarGazerIcon = () => (
  <svg viewBox="0 0 48 48" width="42" height="42">
    <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1a1a3e"/><stop offset="100%" stopColor="#0d0d2b"/></linearGradient></defs>
    <rect width="48" height="48" rx="12" fill="url(#sg)"/>
    <path d="M24 14l2.5 5 5.5.8-4 3.9 1 5.5L24 26.5l-5 2.7 1-5.5-4-3.9 5.5-.8z" fill="#ffc646" stroke="#ffd54f" strokeWidth="0.5"/>
    <circle cx="14" cy="16" r="1" fill="rgba(255,255,255,0.4)"/>
    <circle cx="36" cy="20" r="0.8" fill="rgba(255,255,255,0.3)"/>
    <circle cx="32" cy="34" r="0.6" fill="rgba(255,255,255,0.25)"/>
    <circle cx="16" cy="32" r="0.7" fill="rgba(255,255,255,0.2)"/>
    <circle cx="38" cy="10" r="6" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    <path d="M36 10l2-2m0 4V8h-4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const ReadmeIcon = () => (
  <svg viewBox="0 0 48 48" width="42" height="42">
    <defs><linearGradient id="rm" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2a4a7f"/><stop offset="100%" stopColor="#1a2d4d"/></linearGradient></defs>
    <rect width="48" height="48" rx="12" fill="url(#rm)"/>
    <rect x="14" y="12" width="20" height="24" rx="2" fill="#fff" opacity="0.9"/>
    <rect x="17" y="16" width="14" height="2" rx="1" fill="#2a4a7f"/>
    <rect x="17" y="21" width="10" height="1.5" rx="0.75" fill="#8b949e"/>
    <rect x="17" y="25" width="12" height="1.5" rx="0.75" fill="#8b949e"/>
    <rect x="17" y="29" width="8" height="1.5" rx="0.75" fill="#8b949e"/>
  </svg>
);

const ResumeIcon = () => (
  <svg viewBox="0 0 48 48" width="42" height="42">
    <defs><linearGradient id="rs" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2d4a2d"/><stop offset="100%" stopColor="#1a2d1a"/></linearGradient></defs>
    <rect width="48" height="48" rx="12" fill="url(#rs)"/>
    <rect x="14" y="10" width="20" height="28" rx="2" fill="#fff" opacity="0.9"/>
    <rect x="17" y="14" width="14" height="2.5" rx="1" fill="#2d4a2d"/>
    <rect x="17" y="19" width="10" height="1.5" rx="0.75" fill="#8b949e"/>
    <rect x="17" y="23" width="12" height="1.5" rx="0.75" fill="#8b949e"/>
    <rect x="17" y="27" width="8" height="1.5" rx="0.75" fill="#8b949e"/>
    <rect x="17" y="31" width="11" height="1.5" rx="0.75" fill="#8b949e"/>
    <circle cx="31" cy="35" r="5" fill="#3fb950"/>
    <path d="M29 35l1.5 1.5 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 48 48" width="42" height="42">
    <defs><linearGradient id="trash" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#3a1a1a"/><stop offset="100%" stopColor="#2a0d0d"/></linearGradient></defs>
    <rect width="48" height="48" rx="12" fill="url(#trash)"/>
    <path d="M19 14v-2h10v2h6v2H13v-2h6zm-4 4h18v16c0 1.1-.9 2-2 2H17c-1.1 0-2-.9-2-2V18zm4 2v12m4-12v12m4-12v12" fill="none" stroke="#eb4470" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GamesIcon = () => (
  <svg viewBox="0 0 48 48" width="42" height="42">
    <defs><linearGradient id="gm" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#8a2be2"/><stop offset="100%" stopColor="#4a148c"/></linearGradient></defs>
    <rect width="48" height="48" rx="12" fill="url(#gm)"/>
    <path d="M12 24c0-4 4-8 12-8s12 4 12 8c0 4-2.5 7-4.5 7a4 4 0 01-3.5-2l-1.5-2h-5l-1.5 2a4 4 0 01-3.5 2C14.5 31 12 28 12 24z" fill="#fff" opacity="0.9"/>
    <circle cx="18" cy="24" r="1.5" fill="#4a148c"/>
    <circle cx="22" cy="24" r="1.5" fill="#4a148c"/>
    <circle cx="32" cy="22" r="1.5" fill="#ff0000"/>
    <circle cx="28" cy="26" r="1.5" fill="#00ff00"/>
  </svg>
);

const SpotifyIcon = () => (
  <svg viewBox="0 0 48 48" width="42" height="42">
    <rect width="48" height="48" rx="24" fill="#1DB954"/>
    <path d="M34.6 34.3c-.4.6-1.2.8-1.8.4-5-3.1-11.3-3.8-18.7-2.1-.7.2-1.4-.3-1.6-1-.2-.7.3-1.4 1-1.6 8.2-1.9 15.1-1 20.7 2.4.6.4.8 1.2.4 1.9zm1.3-4.1c-.5.8-1.6 1.1-2.4.6-5.7-3.5-14.4-4.6-21.6-2.5-.9.3-1.9-.2-2.2-1.1-.3-.9.2-1.9 1.1-2.2 8.3-2.4 17.9-1.2 24.5 2.8.8.5 1.1 1.6.6 2.4zm.1-4.3c-6.8-4-18-4.4-24.5-2.4-1.1.3-2.3-.3-2.6-1.4-.3-1.1.3-2.3 1.4-2.6 7.6-2.3 20-1.8 27.8 2.8 1 .6 1.3 1.8.7 2.8-.6 1-1.8 1.3-2.8.8z" fill="#fff"/>
  </svg>
);

const desktopShortcuts = [
  { id: 'github', label: 'GitHub', IconComponent: GithubIcon, action: 'link', url: 'https://github.com/nicolasnkGH' },
  { id: 'linkedin', label: 'LinkedIn', IconComponent: LinkedInIcon, action: 'link', url: 'https://www.linkedin.com/in/nicolasdealmeidateixeira/' },
  { id: 'stargazer', label: 'StarGazer', IconComponent: StarGazerIcon, action: 'link', url: 'https://stargazer.nick-t.net' },
  { id: 'readme', label: 'README.md', IconComponent: ReadmeIcon, action: 'app', appId: 'browser' },
  { id: 'resume', label: 'Resume', IconComponent: ResumeIcon, action: 'app', appId: 'resume' },
  { id: 'games', label: 'Games', IconComponent: GamesIcon, action: 'app', appId: 'games' },
  { id: 'spotify', label: 'Spotify', IconComponent: SpotifyIcon, action: 'app', appId: 'spotify' },
  { id: 'trash', label: 'Trash', IconComponent: TrashIcon, action: 'app', appId: 'trash' },
];

/* ── Draggable desktop icon hook ── */
const useDraggableIcon = (initialX, initialY) => {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  const onMouseDown = useCallback((e) => {
    dragging.current = true;
    hasMoved.current = false;
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };

    const onMouseMove = (e) => {
      if (!dragging.current) return;
      hasMoved.current = true;
      setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
    };
    const onMouseUp = () => {
      dragging.current = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }, [pos]);

  return { pos, onMouseDown, hasMoved };
};

/* ── Single Draggable Shortcut ── */
const DesktopShortcut = ({ shortcut, startX, startY, onClick }) => {
  const { pos, onMouseDown, hasMoved } = useDraggableIcon(startX, startY);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    if (!hasMoved.current) onClick(shortcut);
  };

  return (
    <div
      className="os-desktop-shortcut"
      style={{ position: 'absolute', left: pos.x, top: pos.y }}
      onMouseDown={onMouseDown}
      onClick={handleClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="shortcut-icon-box">
        <shortcut.IconComponent />
      </div>
      <span className="shortcut-label">{shortcut.label}</span>
      {showTooltip && (
        <div className="shortcut-tooltip">
          {shortcut.action === 'link' ? 'Click to open · Drag to move' : 'Click to launch · Drag to move'}
        </div>
      )}
    </div>
  );
};



/* ── Desktop Component ── */

const Desktop = () => {
  const { windows, openWindow, focusWindow, minimizeWindow } = useWindowManager();
  const { t } = useLanguage();
  const { wallpaper } = useWallpaper();
  const [matrixMode, setMatrixMode] = useState(false);

  // Calculate safe right-edge position — account for sidedock (48px) and ensure icons stay within viewport
  const iconStartX = typeof window !== 'undefined' ? Math.min(window.innerWidth - 130, window.innerWidth - 130) : 900;

  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setMatrixMode(true);
          konamiIndex = 0;
          setTimeout(() => setMatrixMode(false), 8000); // 8 seconds of matrix
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (matrixMode) {
      document.body.classList.add('konami-active');
      const timer = setTimeout(() => {
        document.body.classList.remove('konami-active');
      }, 3500); // Remove early so we can do it again smoothly if needed
      return () => {
        clearTimeout(timer);
        document.body.classList.remove('konami-active');
      };
    }
  }, [matrixMode]);

  const handleShortcutClick = (shortcut) => {
    if (shortcut.action === 'link') {
      window.open(shortcut.url, '_blank');
    } else if (shortcut.action === 'app') {
      const existing = windows.find(w => w.id === shortcut.appId);
      if (existing) {
        if (existing.isMinimized) minimizeWindow(shortcut.appId);
        focusWindow(shortcut.appId);
      } else {
        const isMobile = window.innerWidth <= 768;
        openWindow({
          id: shortcut.appId,
          title: shortcut.appId === 'browser' ? t('apps.browser') : shortcut.appId === 'resume' ? t('apps.resume') : shortcut.appId === 'trash' ? t('apps.trash') || 'Trash' : shortcut.appId === 'games' ? t('apps.games') || 'Games' : shortcut.appId === 'spotify' ? t('apps.spotify') || 'Spotify' : shortcut.appId,
          component: shortcut.appId === 'browser' ? BrowserApp : shortcut.appId === 'resume' ? ResumeApp : shortcut.appId === 'trash' ? TrashApp : shortcut.appId === 'games' ? GamesFolderApp : shortcut.appId === 'spotify' ? SpotifyApp : null,
          x: isMobile ? 0 : 150,
          y: isMobile ? 0 : 60,
          width: 900,
          height: 600,
          defaultMaximized: isMobile,
        });
      }
    }
  };

  const openAppFromFooter = (appId, AppComponent, title) => {
    const existing = windows.find(w => w.id === appId);
    if (existing) {
      if (existing.isMinimized) minimizeWindow(appId);
      focusWindow(appId);
    } else {
      const isMobile = window.innerWidth <= 768;
      openWindow({
        id: appId,
        title,
        component: AppComponent,
        x: isMobile ? 0 : 150,
        y: isMobile ? 0 : 60,
        width: 900,
        height: 600,
        defaultMaximized: isMobile,
      });
    }
  };

  return (
    <div className="os-desktop" onContextMenu={(e) => e.preventDefault()}>
      {/* Dynamic Wallpaper */}
      {wallpaper === 'particles' && <ParticlesBg />}
      {wallpaper === 'solid' && (
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0d1117' }} />
      )}
      {wallpaper === 'devops' && (
        <div style={{ 
          position: 'absolute', inset: 0, 
          backgroundImage: 'url(/devops_wallpaper.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }} />
      )}

      {/* Interactive Particles Background fallback when in matrix mode */}
      {matrixMode && (
        <ParticlesBg
          particleCount={matrixMode ? 300 : 90}
          particleColor={matrixMode ? "rgba(63, 185, 80, 0.8)" : "rgba(88, 166, 255, 0.6)"}
          lineColor={matrixMode ? "rgba(63, 185, 80, 0.3)" : "rgba(88, 166, 255, 0.12)"}
          connectionDistance={matrixMode ? 80 : 140}
          speed={matrixMode ? 1.5 : 0.3}
          mouseRadius={180}
        />
      )}

      {matrixMode && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none', zIndex: 999999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'rgba(0, 20, 0, 0.4)'
        }}>
          <h1 style={{ 
            color: '#3fb950', 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            fontFamily: "'JetBrains Mono', monospace",
            textShadow: '0 0 30px #3fb950, 0 0 60px #3fb950',
            animation: 'pulse 0.5s infinite alternate',
            textAlign: 'center',
            padding: '20px'
          }}>
            ACHIEVEMENT UNLOCKED<br/>
            <span style={{ fontSize: 'clamp(1.5rem, 6vw, 3.5rem)', color: '#ffbd2e', textShadow: '0 0 30px #ffbd2e' }}>30 LIVES GRANTED</span>
          </h1>
        </div>
      )}

      {/* Draggable Desktop Shortcut Icons */}
      <div className="os-desktop-icons-container">
        {desktopShortcuts.map((shortcut, i) => (
          <DesktopShortcut
            key={shortcut.id}
            shortcut={shortcut}
            startX={iconStartX}
            startY={20 + i * 90}
            onClick={handleShortcutClick}
          />
        ))}
      </div>

      {/* Render Open Windows */}
      {windows.map(win => (
        <Window key={win.id} windowInfo={win} />
      ))}

      {/* Footer */}
      <div className="os-desktop-footer">
        <div className="os-footer-content">
          <div className="os-footer-brand">
            <div className="os-footer-avatar">NT</div>
            <div>
              <h4 className="os-footer-name">Nicolas Teixeira</h4>
              <p className="os-footer-role">{t('desktop.footerRole')}</p>
            </div>
          </div>
          <nav className="os-footer-nav">
            <button className="os-footer-nav-link" onClick={() => openAppFromFooter('browser', BrowserApp, t('apps.browser'))}>{t('desktop.about')}</button>
            <button className="os-footer-nav-link" onClick={() => openAppFromFooter('browser', BrowserApp, t('apps.browser'))}>{t('desktop.experience')}</button>
            <button className="os-footer-nav-link" onClick={() => openAppFromFooter('diagnostics', DiagnosticsApp, t('apps.diagnostics'))}>{t('desktop.skills')}</button>
            <button className="os-footer-nav-link" onClick={() => openAppFromFooter('terminal', TerminalApp, t('apps.terminal'))}>{t('desktop.terminal')}</button>
            <button className="os-footer-nav-link" onClick={() => openAppFromFooter('contact', ContactApp, t('apps.contact'))}>{t('desktop.contact')}</button>
          </nav>
          <div className="os-footer-external">
            <a href="https://github.com/nicolasnkGH" target="_blank" rel="noreferrer" className="os-footer-link github" title="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/nicolasdealmeidateixeira/" target="_blank" rel="noreferrer" className="os-footer-link linkedin" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://stargazer.nick-t.net" target="_blank" rel="noreferrer" className="os-footer-link stargazer" title="StarGazer">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="os-footer-copyright">
          {t('desktop.copyright')}
        </div>
      </div>
    </div>
  );
};

export default Desktop;
