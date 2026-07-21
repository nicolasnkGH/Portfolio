import React, { useState, useCallback } from 'react';
import { WindowManagerProvider, useWindowManager } from './components/WindowManager/WindowManagerContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { WallpaperProvider } from './contexts/WallpaperContext';
import Desktop from './components/Desktop/Desktop';
import TopBar from './components/Taskbar/TopBar';
import SideDock from './components/Taskbar/SideDock';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import TerminalApp from './apps/TerminalApp/TerminalApp';

function AppInner() {
  const [booted, setBooted] = useState(false);
  const { openWindow } = useWindowManager();

  const handleBootComplete = useCallback(() => {
    setBooted(true);
    // Auto-open terminal after a brief delay
    setTimeout(() => {
      const isMobile = window.innerWidth <= 768;
      const w = 800;
      const h = 480;
      openWindow({
        id: 'terminal',
        title: 'Terminal',
        component: TerminalApp,
        x: isMobile ? 0 : Math.max(80, (window.innerWidth - w) / 2),
        y: isMobile ? 0 : Math.max(40, (window.innerHeight - h) / 2 - 30),
        width: w,
        height: h,
        defaultMaximized: isMobile,
      });
    }, 2000);
  }, [openWindow]);

  return (
    <>
      {!booted && <WelcomeScreen onComplete={handleBootComplete} />}
      <div className="os-shell" style={{ opacity: booted ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <TopBar />
        <div className="os-shell-body">
          <SideDock />
          <Desktop />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <WallpaperProvider>
        <WindowManagerProvider>
          <AppInner />
        </WindowManagerProvider>
      </WallpaperProvider>
    </LanguageProvider>
  );
}

export default App;
