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

  const windowWidth = isMobile 
    ? Math.min(width || 800, window.innerWidth - 50) 
    : (width || 800);
    
  const windowHeight = isMobile 
    ? Math.min(height || 600, window.innerHeight - 50) 
    : (height || 600);

  const { position, handleMouseDown, handleTouchStart } = useDraggable(
    id, windowInfo.x, windowInfo.y, updateWindowPosition, isMaximized, windowWidth
  );

  if (isMinimized) return null;

  const isActive = activeWindowId === id;

  const windowStyle = isMaximized ? {
    zIndex,
  } : {
    top: position.y,
    left: position.x,
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
