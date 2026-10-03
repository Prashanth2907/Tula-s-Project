import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';

export function SectionHeading({
  badge,
  badgeVariant = 'gold',
  badgeIcon,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3.5 inline-block"
        >
          <Badge variant={badgeVariant} icon={badgeIcon} size="md">
            {badge}
          </Badge>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight ${
          light ? 'text-white' : 'text-[#0B2545] dark:text-white'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="relative inline-block text-[#B90124] dark:text-[#E5C378] font-serif italic font-normal">
            {highlight}
            {/* Elegant SVG flourish underline */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#C09D59]/60 dark:text-[#C09D59]/80 pointer-events-none"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9.5C50 3.5 150 1.5 198 8"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
