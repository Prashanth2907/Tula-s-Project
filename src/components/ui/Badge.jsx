import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Badge({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  icon: Icon
}) {
  const baseStyles = "inline-flex items-center font-medium rounded-full tracking-wider uppercase";

  const variants = {
    gold: "bg-[#C09D59]/15 text-[#9A7B39] dark:text-[#E5C378] border border-[#C09D59]/30",
    crimson: "bg-[#B90124]/10 text-[#B90124] dark:bg-[#B90124]/20 dark:text-[#FF8A9E] border border-[#B90124]/25",
    teal: "bg-[#60BAB1]/15 text-[#007A83] dark:text-[#90CCD0] border border-[#60BAB1]/30",
    navy: "bg-[#0B2545]/10 text-[#0B2545] dark:bg-white/10 dark:text-blue-200 border border-[#0B2545]/20",
    white: "bg-white/90 text-[#0B2545] border border-white/40 shadow-sm backdrop-blur-sm",
  };

  const sizes = {
    sm: "text-[10px] px-2.5 py-0.5 gap-1 font-semibold",
    md: "text-xs px-3.5 py-1 gap-1.5 font-semibold",
    lg: "text-sm px-4 py-1.5 gap-2 font-bold",
  };

  return (
    <span className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}>
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
