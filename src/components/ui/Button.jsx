import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  type = 'button',
  as = 'button',
  href,
  target,
  rel,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer tracking-wide";
  
  const variants = {
    primary: "bg-[#B90124] hover:bg-[#9E001E] text-white shadow-lg shadow-[#B90124]/25 focus:ring-[#B90124]/50 border border-transparent",
    secondary: "bg-[#0B2545] hover:bg-[#133E87] text-white shadow-lg shadow-[#0B2545]/20 focus:ring-[#0B2545]/50 border border-transparent",
    gold: "bg-gradient-to-r from-[#C09D59] via-[#D4AF37] to-[#C09D59] text-[#0B2545] font-semibold shadow-lg shadow-[#C09D59]/30 hover:shadow-xl hover:shadow-[#C09D59]/40 border border-[#E5C378]/50",
    teal: "bg-[#60BAB1] hover:bg-[#007A83] text-[#071629] hover:text-white shadow-lg shadow-[#60BAB1]/25 focus:ring-[#60BAB1]/50 border border-transparent",
    outline: "border-2 border-[#B90124] text-[#B90124] dark:border-[#E5C378] dark:text-[#E5C378] hover:bg-[#B90124] hover:text-white dark:hover:bg-[#E5C378] dark:hover:text-[#0B2545] focus:ring-[#B90124]/40 bg-transparent",
    outlineWhite: "border-2 border-white/80 text-white hover:bg-white hover:text-[#0B2545] focus:ring-white/50 bg-transparent",
    ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-transparent",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3 gap-2.5",
    xl: "text-lg px-8 py-3.5 gap-3 font-semibold",
  };

  const combinedClasses = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03, y: -1 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
  };

  if (as === 'a' || href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={onClick}
        {...motionProps}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </motion.button>
  );
}
