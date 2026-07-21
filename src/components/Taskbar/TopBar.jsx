import React, { useState, useEffect } from 'react';
import { Wifi, Volume2, Globe } from 'lucide-react';
import { useWindowManager } from '../WindowManager/WindowManagerContext';
import { useLanguage } from '../../contexts/LanguageContext';
import ActivitiesOverlay from '../ActivitiesOverlay/ActivitiesOverlay';

const TopBar = () => {
  const { isStartMenuOpen, toggleStartMenu, closeStartMenu } = useWindowManager();
  const { language, toggleLanguage, t } = useLanguage();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    }) + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <div className="os-topbar">
        <div className="os-topbar-left">
          <button 
            className={`os-topbar-btn ${isStartMenuOpen ? 'is-active' : ''}`}
            onClick={toggleStartMenu}
            style={{ backgroundColor: isStartMenuOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent' }}
          >
            {t('topbar.activities')}
          </button>
        </div>

        <div className="os-topbar-center">
          <button className="os-topbar-btn os-topbar-clock">
            {formatDate(time)}
          </button>
        </div>

        <div className="os-topbar-right">
          <button className="os-topbar-btn" onClick={toggleLanguage} style={{ fontWeight: 'bold' }}>
            {language.toUpperCase()}
          </button>
          <button className="os-topbar-btn os-topbar-tray">
            <Wifi size={16} />
            <Volume2 size={16} />
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="10" x2="23" y2="14"/>
              <rect x="3" y="8" width="10" height="8" rx="1" fill="currentColor" opacity="0.4"/>
            </svg>
          </button>
        </div>
      </div>

      <ActivitiesOverlay 
        isOpen={isStartMenuOpen} 
        onClose={closeStartMenu} 
      />
    </>
  );
};

export default TopBar;
