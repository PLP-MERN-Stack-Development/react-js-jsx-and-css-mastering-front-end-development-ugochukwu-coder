import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="container py-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Notepad • Built with React & Tailwind
      </div>
    </footer>
  );
}
