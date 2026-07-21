import React, { createContext, useContext, useState, useEffect } from 'react';

const WallpaperContext = createContext();

export const WallpaperProvider = ({ children }) => {
  const [wallpaper, setWallpaper] = useState(() => {
    return localStorage.getItem('os-wallpaper') || 'particles';
  });

  useEffect(() => {
    localStorage.setItem('os-wallpaper', wallpaper);
  }, [wallpaper]);

  return (
    <WallpaperContext.Provider value={{ wallpaper, setWallpaper }}>
      {children}
    </WallpaperContext.Provider>
  );
};

export const useWallpaper = () => useContext(WallpaperContext);
