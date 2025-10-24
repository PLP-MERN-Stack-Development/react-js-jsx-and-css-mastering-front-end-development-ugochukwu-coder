import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const active = "text-blue-600 dark:text-blue-400 font-semibold";

export default function Navbar(){
  return (
    <header className="bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold">NotePad</span>
          <nav className="flex gap-3">
            <NavLink to="/" className={({isActive})=>isActive?active:"hover:text-blue-600"}>Home</NavLink>
            <NavLink to="/tasks" className={({isActive})=>isActive?active:"hover:text-blue-600"}>Tasks</NavLink>
            <NavLink to="/posts" className={({isActive})=>isActive?active:"hover:text-blue-600"}>Posts</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
