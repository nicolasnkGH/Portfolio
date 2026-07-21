import React from 'react';
import { useWindowManager } from '../WindowManager/WindowManagerContext';
import { useDraggable } from '../../hooks/useDraggable';
import { X, Minus, Square } from 'lucide-react';

const Window = ({ windowInfo }) => {
  const { 
    id, title, icon: Icon, component: Component, 
    isMinimized, isMaximized, zIndex, width, height 
  } = windowInfo;
  
  const { closeWindow, minimizeWindow, toggleMaximize, focusWindow, updateWindowPosition, activeWindowId } = useWindowManager();
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const dockWidth = 44;
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

  const windowWidth = isMobile 
    ? Math.min(width || 800, screenWidth - dockWidth - 8) 
    : (width || 800);
    
  const windowHeight = isMobile 
    ? Math.min(height || 600, screenHeight - 50) 
    : (height || 600);

  const { position, handleMouseDown, handleTouchStart } = useDraggable(
    id, windowInfo.x, windowInfo.y, updateWindowPosition, isMaximized, windowWidth
  );

  // Strictly clamp X and Y on mobile so cached state can NEVER overflow!
  const clampedX = isMobile 
    ? Math.max(dockWidth + 2, Math.min(position.x, screenWidth - windowWidth - 4))
    : position.x;

  const clampedY = isMobile
    ? Math.max(42, Math.min(position.y, screenHeight - 60))
    : position.y;

  if (isMinimized) return null;

  const isActive = activeWindowId === id;

  const windowStyle = isMaximized ? {
    zIndex,
  } : {
    top: clampedY,
    left: clampedX,
    width: windowWidth,
    height: windowHeight,
    zIndex,
  };

  return (
    <div 
      className={`os-window ${isActive ? 'is-active' : ''} ${isMaximized ? 'is-maximized' : ''}`}
      style={windowStyle}
      onMouseDown={() => focusWindow(id)}
      onTouchStart={() => focusWindow(id)}
    >
      {/* Title Bar */}
      <div 
        className={`os-window-titlebar ${isMaximized ? 'is-maximized' : ''} ${isActive ? 'is-active' : ''}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onDoubleClick={() => toggleMaximize(id)}
      >
        <div className="os-window-title">
          {Icon && <Icon size={16} />}
          <span>{title}</span>
        </div>
        
        <div className="os-window-controls">
          <button onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }} className="btn-minimize">
            <Minus size={16} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); toggleMaximize(id); }} className="btn-maximize">
            <Square size={14} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); closeWindow(id); }} className="btn-close">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="os-window-content">
        <Component {...windowInfo} />
      </div>
    </div>
  );
};

export default Window;
