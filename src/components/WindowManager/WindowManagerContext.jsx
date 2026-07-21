import React, { createContext, useContext, useState, useCallback } from 'react';

const WindowManagerContext = createContext();

export const useWindowManager = () => useContext(WindowManagerContext);

export const WindowManagerProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [maxZIndex, setMaxZIndex] = useState(1);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const toggleStartMenu = useCallback(() => setIsStartMenuOpen(prev => !prev), []);
  const closeStartMenu = useCallback(() => setIsStartMenuOpen(false), []);

  const openWindow = useCallback((appInfo) => {
    setWindows(prev => {
      // Check if window already open
      const existing = prev.find(w => w.id === appInfo.id);
      if (existing) {
        if (existing.isMinimized) {
          return prev.map(w => w.id === appInfo.id ? { ...w, isMinimized: false, zIndex: maxZIndex + 1 } : w);
        }
        return prev.map(w => w.id === appInfo.id ? { ...w, zIndex: maxZIndex + 1 } : w);
      }
      
      const newWindow = {
        ...appInfo,
        zIndex: maxZIndex + 1,
        isMinimized: false,
        isMaximized: appInfo.defaultMaximized || false,
        x: appInfo.x || Math.floor(Math.random() * 100) + 50,
        y: appInfo.y || Math.floor(Math.random() * 100) + 50,
        width: appInfo.width || 800,
        height: appInfo.height || 600,
      };
      return [...prev, newWindow];
    });
    setMaxZIndex(prev => prev + 1);
    setActiveWindowId(appInfo.id);
  }, [maxZIndex]);

  const closeWindow = useCallback((id) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindowId === id) {
      setActiveWindowId(null); // Or set to next highest zIndex
    }
  }, [activeWindowId]);

  const minimizeWindow = useCallback((id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  }, [activeWindowId]);

  const toggleMaximize = useCallback((id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
    focusWindow(id);
  }, []); // focusWindow dependency will be added inside

  const focusWindow = useCallback((id) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, zIndex: maxZIndex + 1, isMinimized: false };
      }
      return w;
    }));
    setMaxZIndex(prev => prev + 1);
    setActiveWindowId(id);
  }, [maxZIndex]);

  const updateWindowPosition = useCallback((id, x, y) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, x, y } : w));
  }, []);

  const updateWindowSize = useCallback((id, width, height) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, width, height } : w));
  }, []);

  return (
    <WindowManagerContext.Provider value={{
      windows,
      activeWindowId,
      isStartMenuOpen,
      toggleStartMenu,
      closeStartMenu,
      openWindow,
      closeWindow,
      minimizeWindow,
      toggleMaximize,
      focusWindow,
      updateWindowPosition,
      updateWindowSize
    }}>
      {children}
    </WindowManagerContext.Provider>
  );
};
