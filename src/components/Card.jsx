import React from 'react';

export default function Card({ children, className='' }) {
  return (
    <article className={`p-4 bg-white dark:bg-gray-800 border rounded shadow-sm ${className}`}>
      {children}
    </article>
  );
}
