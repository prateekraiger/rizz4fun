
import React from 'react';

const HeartBreakIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M19.62 3.62a5 5 0 0 0-7.07 0L12 4l-.55-.38a5 5 0 0 0-7.07 0 5 5 0 0 0 0 7.07l.55.38L12 18l7.07-7.07a5 5 0 0 0 0-7.07z" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

export default HeartBreakIcon;
