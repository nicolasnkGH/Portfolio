import React, { useState } from 'react';
import { useWindowManager } from '../WindowManager/WindowManagerContext';
import { Terminal, Globe, Activity, Mail, Grid, Code, FileText, Settings } from 'lucide-react';
import TerminalApp from '../../apps/TerminalApp/TerminalApp';
import BrowserApp from '../../apps/BrowserApp/BrowserApp';
import DiagnosticsApp from '../../apps/DiagnosticsApp/DiagnosticsApp';
import ContactApp from '../../apps/ContactApp/ContactApp';
import PythonApp from '../../apps/PythonApp/PythonApp';
import ResumeApp from '../../apps/ResumeApp/ResumeApp';
import SettingsApp from '../../apps/SettingsApp/SettingsApp';
import GamesFolderApp from '../../apps/GamesFolderApp/GamesFolderApp';
import SpotifyApp from '../../apps/SpotifyApp/SpotifyApp';
import { Gamepad2, Music } from 'lucide-react';

const apps = [
  {
    id: 'terminal',
    title: 'Terminal',
    icon: Terminal,
    component: TerminalApp,
    color: '#c9d1d9',
    bgColor: 'rgba(255,255,255,0.1)',
    tooltip: 'Interactive Terminal'
  },
  {
    id: 'browser',
    title: 'Portfolio Browser',
    icon: Globe,
    component: BrowserApp,
    color: '#58a6ff',
    bgColor: 'rgba(88,166,255,0.1)',
    tooltip: 'About · Experience · Projects · Education'
  },
  {
    id: 'diagnostics',
    title: 'System Diagnostics',
    icon: Activity,
    component: DiagnosticsApp,
    color: '#3fb950',
    bgColor: 'rgba(63,185,80,0.1)',
    tooltip: 'Skills & System Telemetry'
  },
  {
    id: 'contact',
    title: 'Contact Me',
    icon: Mail,
    component: ContactApp,
    color: '#ffbd2e',
    bgColor: 'rgba(255, 189, 46, 0.1)',
    tooltip: 'Get in Touch'
  },
  {
    id: 'python',
    title: 'Python IDE',
    icon: Code,
    component: PythonApp,
    color: '#ffc646',
    bgColor: 'rgba(255, 198, 70, 0.1)',
    tooltip: 'Interactive Python Environment'
  },
  {
    id: 'resume',
    title: 'Resume',
    icon: FileText,
    component: ResumeApp,
    color: '#eb4470',
    bgColor: 'rgba(235, 68, 112, 0.1)',
    tooltip: 'Interactive Resume'
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: Settings,
    component: SettingsApp,
    color: '#8b949e',
    bgColor: 'rgba(139, 148, 158, 0.1)',
    tooltip: 'System Configuration'
  },
  {
    id: 'games',
    title: 'Games',
    icon: Gamepad2,
    component: GamesFolderApp,
    color: '#a371f7',
    bgColor: 'rgba(163,113,247,0.1)',
    tooltip: 'Play classic browser games'
  },
  {
    id: 'spotify',
    title: 'Spotify',
    icon: Music,
    component: SpotifyApp,
    color: '#1DB954',
    bgColor: 'rgba(29, 185, 84, 0.1)',
    tooltip: 'Music Player'
  }
];

const SideDock = () => {
  const { windows, openWindow, focusWindow, minimizeWindow, toggleStartMenu } = useWindowManager();
  const [hoveredId, setHoveredId] = useState(null);

  const handleAppClick = (appConfig) => {
    const existing = windows.find(w => w.id === appConfig.id);
    if (existing) {
      if (existing.isMinimized) {
        minimizeWindow(appConfig.id);
      }
      focusWindow(appConfig.id);
    } else {
      const isMobile = window.innerWidth <= 768;
      openWindow({
        ...appConfig,
        x: isMobile ? 0 : (100 + (Math.random() * 50)),
        y: isMobile ? 0 : (50 + (Math.random() * 50)),
        width: 900,
        height: 600,
        defaultMaximized: isMobile,
      });
    }
  };

  return (
    <div className="os-sidedock">
      {apps.map(app => {
        const windowState = windows.find(w => w.id === app.id);
        const isOpen = !!windowState;
        const isMinimized = windowState?.isMinimized;

        return (
          <div 
            key={app.id} 
            className={`os-dock-icon-wrapper ${isOpen ? 'is-open' : ''}`}
            onClick={() => handleAppClick(app)}
            onMouseEnter={() => setHoveredId(app.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div 
              className="os-dock-icon" 
              style={{ 
                backgroundColor: app.bgColor,
                opacity: isMinimized ? 0.5 : 1,
              }}
            >
              <app.icon size={28} color={app.color} />
            </div>
            {isOpen && <div className="os-dock-indicator" />}
            
            {/* Tooltip */}
            {hoveredId === app.id && (
              <div className="os-dock-tooltip">
                <strong>{app.title}</strong>
                <span>{app.tooltip}</span>
              </div>
            )}
          </div>
        );
      })}
      
      {/* Spacer to push Show Applications to bottom */}
      <div className="os-dock-spacer" style={{ flex: 1 }} />
      
      {/* Show Applications Button */}
      <div 
        className="os-dock-icon-wrapper os-dock-show-apps"
        onClick={toggleStartMenu}
        onMouseEnter={() => setHoveredId('show-apps')}
        onMouseLeave={() => setHoveredId(null)}
        style={{ marginBottom: '12px' }}
      >
        <div className="os-dock-icon" style={{ backgroundColor: 'transparent' }}>
          <Grid size={28} color="#c9d1d9" />
        </div>
        {hoveredId === 'show-apps' && (
          <div className="os-dock-tooltip">
            <strong>Show Applications</strong>
            <span>All Apps & Search</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideDock;
