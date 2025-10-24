import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle(){
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <button onClick={toggle} className="px-3 py-1 rounded border hover:bg-gray-100 dark:hover:bg-gray-700">
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
