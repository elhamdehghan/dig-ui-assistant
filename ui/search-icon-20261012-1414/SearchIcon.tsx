import React from 'react';

interface SearchIconProps {
  size?: number;
  className?: string;
}

export default function SearchIcon({ size = 24, className = '' }: SearchIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <g id="Icons" strokeWidth="1" fillRule="evenodd">
        <g id="Basic-Search" transform="translate(-64, -234)" fillRule="nonzero">
          <g id="Search" transform="translate(44, 166)">
            <g id="Icon/Search/Linear" transform="translate(20, 68)">
              <path
                d="M21,11.5 C21,16.7467051 16.7467051,21 11.5,21 C6.25329494,21 2,16.7467051 2,11.5 C2,6.25329494 6.25329494,2 11.5,2 C16.7467051,2 21,6.25329494 21,11.5 Z"
                id="Vector"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="22"
                y1="22"
                x2="20"
                y2="20"
                id="Vector"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polygon id="Vector" opacity="0" points="0 0 24 0 24 24 0 24" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}