
import React from 'react';

const GiftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M20 12v10H4V12" />
    <path d="M16 6H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
    <path d="M12 12v10" />
    <path d="M12 6a4 4 0 0 0-4-4h0a4 4 0 0 0-4 4" />
    <path d="M12 6a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4" />
  </svg>
);

export default GiftIcon;
