import { useState, useEffect } from 'react';

export function useCursorPosition() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'pointer' | 'hover' | 'text'
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    
    setIsTouchDevice(checkTouch());
    if (checkTouch()) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Inspect hover target
      const target = e.target;
      const interactiveParent = target.closest('button, a, input, select, textarea, [role="button"], [data-cursor-interactive]');
      
      if (interactiveParent) {
        const customCursor = interactiveParent.getAttribute('data-cursor');
        if (customCursor) {
          setCursorType(customCursor);
        } else {
          setCursorType('pointer');
        }
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return { position, cursorType, isVisible, isTouchDevice };
}
