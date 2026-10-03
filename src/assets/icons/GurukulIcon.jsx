import React from 'react';

export function GurukulIcon({ className = "w-6 h-6", color = "#C09D59" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 3L2 8L12 13L22 8L12 3Z" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M6 10.6V16C6 16 8 18 12 18C16 18 18 16 18 16V10.6" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M22 8V15" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

export default GurukulIcon;
