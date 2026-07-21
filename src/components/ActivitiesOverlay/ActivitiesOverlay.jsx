import React, { useState, useMemo } from 'react';
import { useWindowManager } from '../WindowManager/WindowManagerContext';
import { useLanguage } from '../../contexts/LanguageContext';
import TerminalApp from '../../apps/TerminalApp/TerminalApp';
import BrowserApp from '../../apps/BrowserApp/BrowserApp';
import DiagnosticsApp from '../../apps/DiagnosticsApp/DiagnosticsApp';
import ContactApp from '../../apps/ContactApp/ContactApp';
import ResumeApp from '../../apps/ResumeApp/ResumeApp';
import PythonApp from '../../apps/PythonApp/PythonApp';
import SettingsApp from '../../apps/SettingsApp/SettingsApp';
import TrashApp from '../../apps/TrashApp/TrashApp';
import GamesFolderApp from '../../apps/GamesFolderApp/GamesFolderApp';
import SpotifyApp from '../../apps/SpotifyApp/SpotifyApp';

const apps = [
  {
    id: 'terminal',
    label: 'Terminal',
    component: TerminalApp,
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48">
        <rect width="48" height="48" rx="10" fill="#2d2d2d"/>
        <path d="M14 16l6 6-6 6" stroke="#3fb950" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="24" y1="30" x2="34" y2="30" stroke="#8b949e" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'browser',
    label: 'Portfolio Browser',
    component: BrowserApp,
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48">
        <rect width="48" height="48" rx="10" fill="#1a3a5c"/>
        <circle cx="24" cy="24" r="12" stroke="#58a6ff" strokeWidth="2" fill="none"/>
        <ellipse cx="24" cy="24" rx="6" ry="12" stroke="#58a6ff" strokeWidth="1.5" fill="none"/>
        <line x1="12" y1="24" x2="36" y2="24" stroke="#58a6ff" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'diagnostics',
    label: 'System Diagnostics',
    component: DiagnosticsApp,
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48">
        <rect width="48" height="48" rx="10" fill="#1a2d1a"/>
        <polyline points="12,32 18,24 24,28 30,18 36,22" stroke="#3fb950" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    id: 'resume',
    label: 'Resume',
    component: ResumeApp,
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48">
        <rect width="48" height="48" rx="10" fill="#1a1a3e"/>
        <rect x="14" y="10" width="20" height="28" rx="2" fill="#fff" opacity="0.9"/>
        <rect x="17" y="14" width="14" height="2.5" rx="1" fill="#1a1a3e"/>
        <rect x="17" y="19" width="10" height="1.5" rx="0.75" fill="#8b949e"/>
        <rect x="17" y="23" width="12" height="1.5" rx="0.75" fill="#8b949e"/>
        <rect x="17" y="27" width="8" height="1.5" rx="0.75" fill="#8b949e"/>
        <rect x="17" y="31" width="11" height="1.5" rx="0.75" fill="#8b949e"/>
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contact Me',
    component: ContactApp,
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48">
        <rect width="48" height="48" rx="10" fill="#3a1a1a"/>
        <rect x="10" y="14" width="28" height="20" rx="3" stroke="#eb4470" strokeWidth="2" fill="none"/>
        <polyline points="10,14 24,26 38,14" stroke="#eb4470" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'python',
    label: 'Python IDE',
    component: PythonApp,
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48">
        <rect width="48" height="48" rx="10" fill="#2c2510"/>
        <polyline points="18,16 10,24 18,32" stroke="#ffc646" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <polyline points="30,16 38,24 30,32" stroke="#ffc646" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="28" y1="14" x2="20" y2="34" stroke="#ffc646" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    component: SettingsApp,
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48">
        <rect width="48" height="48" rx="10" fill="#2d333b"/>
        <path d="M24 16a8 8 0 100 16 8 8 0 000-16zm0 12a4 4 0 110-8 4 4 0 010 8z" fill="#8b949e"/>
        <path d="M26.7 14.1l-.8-2.6h-3.8l-.8 2.6c-1 .3-1.8.8-2.5 1.5l-2.6-.8-2.7 2.7.8 2.6c-.7.7-1.2 1.5-1.5 2.5l-2.6.8v3.8l2.6.8c.3 1 .8 1.8 1.5 2.5l-.8 2.6 2.7 2.7 2.6-.8c.7.7 1.5 1.2 2.5 1.5l.8 2.6h3.8l.8-2.6c1-.3 1.8-.8 2.5-1.5l2.6.8 2.7-2.7-.8-2.6c.7-.7 1.2-1.5 1.5-2.5l2.6-.8v-3.8l-2.6-.8c-.3-1-.8-1.8-1.5-2.5l.8-2.6-2.7-2.7-2.6.8c-.7-.7-1.5-1.2-2.5-1.5z" fill="#8b949e"/>
      </svg>
    ),
  },
  {
    id: 'games',
    label: 'Games',
    component: GamesFolderApp,
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48">
        <rect width="48" height="48" rx="10" fill="#4a148c"/>
        <path d="M16 26c0-3 3-6 8-6s8 3 8 6c0 3-1.5 5-3 5a3 3 0 01-2.5-1.5l-1-1.5h-3l-1 1.5a3 3 0 01-2.5 1.5c-1.5 0-3-2-3-5z" fill="#fff" opacity="0.9"/>
        <circle cx="20" cy="26" r="1.2" fill="#2d0a59"/>
        <circle cx="23" cy="26" r="1.2" fill="#2d0a59"/>
        <circle cx="30" cy="24.5" r="1.2" fill="#ff0000"/>
        <circle cx="27" cy="27.5" r="1.2" fill="#00ff00"/>
      </svg>
    ),
  },
  {
    id: 'spotify',
    label: 'Spotify',
    component: SpotifyApp,
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48">
        <rect width="48" height="48" rx="10" fill="#1DB954"/>
        <path d="M34.6 34.3c-.4.6-1.2.8-1.8.4-5-3.1-11.3-3.8-18.7-2.1-.7.2-1.4-.3-1.6-1-.2-.7.3-1.4 1-1.6 8.2-1.9 15.1-1 20.7 2.4.6.4.8 1.2.4 1.9zm1.3-4.1c-.5.8-1.6 1.1-2.4.6-5.7-3.5-14.4-4.6-21.6-2.5-.9.3-1.9-.2-2.2-1.1-.3-.9.2-1.9 1.1-2.2 8.3-2.4 17.9-1.2 24.5 2.8.8.5 1.1 1.6.6 2.4zm.1-4.3c-6.8-4-18-4.4-24.5-2.4-1.1.3-2.3-.3-2.6-1.4-.3-1.1.3-2.3 1.4-2.6 7.6-2.3 20-1.8 27.8 2.8 1 .6 1.3 1.8.7 2.8-.6 1-1.8 1.3-2.8.8z" fill="#fff"/>
      </svg>
    ),
  },
];

const ActivitiesOverlay = ({ isOpen, onClose }) => {
  const { openWindow, focusWindow, minimizeWindow, windows } = useWindowManager();
  const { t } = useLanguage();
  const [search, setSearch] = useState('');

  const filteredApps = useMemo(() => {
    if (!search.trim()) return apps;
    return apps.filter(app => {
      const label = t(`apps.${app.id}`) || app.label;
      return label.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, t]);

  const handleAppClick = (app) => {
    const existing = windows.find(w => w.id === app.id);
    if (existing) {
      if (existing.isMinimized) minimizeWindow(app.id);
      focusWindow(app.id);
    } else {
      openWindow({
        id: app.id,
        title: t(`apps.${app.id}`) || app.label,
        component: app.component,
        x: 120 + Math.random() * 100,
        y: 50 + Math.random() * 60,
        width: app.id === 'resume' ? 850 : 900,
        height: 600,
      });
    }
    onClose();
    setSearch('');
  };

  if (!isOpen) return null;

  return (
    <div className="activities-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="activities-content">
        {/* Search Bar */}
        <div className="activities-search-container">
          <input
            type="text"
            className="activities-search"
            placeholder={t('activities.search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
        </div>

        {/* App Grid */}
        <div className="activities-grid">
          {filteredApps.map(app => (
            <button
              key={app.id}
              className="activities-app-btn"
              onClick={() => handleAppClick(app)}
            >
              <div className="activities-app-icon">{app.icon}</div>
              <span className="activities-app-label">{t(`apps.${app.id}`) || app.label}</span>
            </button>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="activities-bottom">
          <button className="activities-show-all" onClick={onClose}>
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/>
              <rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/>
            </svg>
            {t('activities.showApplications')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesOverlay;
