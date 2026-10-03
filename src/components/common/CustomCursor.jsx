import React from 'react';
import { motion } from 'framer-motion';
import { useCursorPosition } from '../../hooks/useCursorPosition';

export function CustomCursor() {
  const { position, cursorType, isVisible, isTouchDevice } = useCursorPosition();

  // Do not render on touch/mobile devices
  if (isTouchDevice || !isVisible) {
    return null;
  }

  const isPointer = cursorType === 'pointer';
  const isText = cursorType === 'text';

  return (
    <>
      {/* Outer Spring Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full border border-[#B90124] dark:border-[#E5C378] mix-blend-difference"
        animate={{
          x: position.x - (isPointer ? 24 : 16),
          y: position.y - (isPointer ? 24 : 16),
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          backgroundColor: isPointer ? 'rgba(185, 1, 36, 0.25)' : 'rgba(255, 255, 255, 0.05)',
          scale: isPointer ? 1.25 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
          mass: 0.5,
        }}
      />

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-[#B90124] dark:bg-[#E5C378]"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          width: 6,
          height: 6,
          scale: isPointer ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
        }}
      />
    </>
  );
}
