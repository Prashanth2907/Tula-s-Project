import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Card({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  onClick,
  ...props
}) {
  const baseStyles = "bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 relative";
  
  const hoverStyles = hoverEffect ? "hover:shadow-card-hover hover:-translate-y-1.5 hover:border-[#C09D59]/40 dark:hover:border-[#C09D59]/40" : "";
  const glowStyles = glow ? "shadow-glow-gold" : "shadow-card-soft";

  return (
    <motion.div
      className={twMerge(clsx(baseStyles, hoverStyles, glowStyles, className))}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
}
