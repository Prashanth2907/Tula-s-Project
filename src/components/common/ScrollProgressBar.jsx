import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgressBar() {
  const { scrollProgress } = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-slate-200/40 dark:bg-slate-800/40 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#B90124] via-[#C09D59] to-[#60BAB1]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ ease: "easeOut", duration: 0.1 }}
      />
    </div>
  );
}
