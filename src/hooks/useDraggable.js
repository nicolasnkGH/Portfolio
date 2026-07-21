import { useState, useEffect, useRef } from 'react';

export const useDraggable = (id, initialX, initialY, updatePosition, isMaximized) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({ x: initialX, y: initialY });
  }, [initialX, initialY]);

  const startDrag = (clientX, clientY) => {
    if (isMaximized) return;
    setIsDragging(true);
    offset.current = {
      x: clientX - position.x,
      y: clientY - position.y
    };
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    startDrag(e.clientX, e.clientY);
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      // Don't prevent default here so buttons still work
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y
      });
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !e.touches[0]) return;
      if (e.cancelable) e.preventDefault();
      setPosition({
        x: e.touches[0].clientX - offset.current.x,
        y: e.touches[0].clientY - offset.current.y
      });
    };

    const handleDragEnd = () => {
      if (isDragging) {
        setIsDragging(false);
        if (updatePosition) {
          updatePosition(id, position.x, position.y);
        }
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleDragEnd);
      window.addEventListener('touchcancel', handleDragEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleDragEnd);
      window.removeEventListener('touchcancel', handleDragEnd);
    };
  }, [isDragging, position.x, position.y, id, updatePosition]);

  return { position, handleMouseDown, handleTouchStart };
};
