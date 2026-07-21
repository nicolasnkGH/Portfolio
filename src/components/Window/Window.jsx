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

  const { position, handleMouseDown, handleTouchStart } = useDraggable(
    id, windowInfo.x, windowInfo.y, updateWindowPosition, isMaximized
  );

  if (isMinimized) return null;

  const isActive = activeWindowId === id;

  // When maximized, CSS .is-maximized handles sizing/positioning
  // When not maximized, use inline styles for position/size
  const windowStyle = isMaximized ? {
    zIndex,
  } : {
    top: position.y,
    left: position.x,
    width: width || 800,
    height: height || 600,
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
          {isMobile ? (
            <button onClick={(e) => { e.stopPropagation(); closeWindow(id); }} className="btn-close" style={{ padding: '8px' }}>
              <X size={22} strokeWidth={2.5} />
            </button>
          ) : (
            <>
              <button onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }} className="btn-minimize">
                <Minus size={16} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); toggleMaximize(id); }} className="btn-maximize">
                <Square size={14} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); closeWindow(id); }} className="btn-close">
                <X size={16} />
              </button>
            </>
          )}
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
