import { useState, useEffect, useRef, useCallback } from 'react';

export const useDraggable = (id, initialX, initialY, updatePosition, isMaximized, defaultWidth = 800) => {
  const getInitialPosition = useCallback(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMobile) {
      const dockWidth = 44;
      const availableWidth = window.innerWidth - dockWidth;
      const windowWidth = Math.min(defaultWidth, availableWidth - 8);
      const centeredX = dockWidth + Math.max(2, (availableWidth - windowWidth) / 2);
      return { x: Math.round(centeredX), y: 42 };
    }
    return { x: initialX, y: initialY };
  }, [initialX, initialY, defaultWidth]);

  const [position, setPosition] = useState(getInitialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setPosition(getInitialPosition());
  }, [initialX, initialY, getInitialPosition]);

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
      const touch = e.touches[0];
      startDrag(touch.clientX, touch.clientY);
    }
  };

  useEffect(() => {
    const updateDragPosition = (clientX, clientY) => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
      const minX = isMobile ? 44 : -100;
      const maxX = Math.max(minX, window.innerWidth - 80);
      const minY = 36;
      const maxY = Math.max(minY, window.innerHeight - 60);

      const rawX = clientX - offset.current.x;
      const rawY = clientY - offset.current.y;

      const clampedX = Math.min(Math.max(rawX, minX), maxX);
      const clampedY = Math.min(Math.max(rawY, minY), maxY);

      setPosition({ x: clampedX, y: clampedY });
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      updateDragPosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !e.touches[0]) return;
      if (e.cancelable) e.preventDefault();
      updateDragPosition(e.touches[0].clientX, e.touches[0].clientY);
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
