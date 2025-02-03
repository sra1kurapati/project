import React from 'react';

export function CyberMonkey() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 w-32 h-auto hidden lg:block animate-swing pointer-events-none select-none">
      <svg
        viewBox="0 0 200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(74, 144, 226, 0.3))'
        }}
      >
        <path
          d="M100 50c27.614 0 50-22.386 50-50H50c0 27.614 22.386 50 50 50z"
          fill="#4A90E2"
          opacity="0.1"
        />
        <path
          d="M65 80c0-19.33 15.67-35 35-35s35 15.67 35 35v140c0 19.33-15.67 35-35 35s-35-15.67-35-35V80z"
          stroke="#4A90E2"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="85" cy="100" r="10" fill="#4A90E2" />
        <circle cx="115" cy="100" r="10" fill="#4A90E2" />
        <path
          d="M80 140c10 10 30 10 40 0"
          stroke="#4A90E2"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M60 160l-40 60M140 160l40 60"
          stroke="#4A90E2"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="8 8"
        />
        <path
          d="M85 180c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15"
          stroke="#4A90E2"
          strokeWidth="4"
        />
        <circle cx="85" cy="100" r="5" fill="#2A2A2A" />
        <circle cx="115" cy="100" r="5" fill="#2A2A2A" />
      </svg>
    </div>
  );
}