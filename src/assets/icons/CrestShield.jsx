import React from 'react';

export function CrestShield({ className = "w-6 h-6", color = "#C09D59" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 2L20 5.5V12C20 17 12 21.5 12 21.5C12 21.5 4 17 4 12V5.5L12 2Z" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 7V13M12 17H12.01" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CrestShield;
