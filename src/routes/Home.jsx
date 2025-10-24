import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";

export default function Home(){

  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/tasks");
  };

  return (
    <div className="space-y-6">
      <Card className="text-center">
        <h1 className="text-3xl font-bold">Week 3 — React, JSX & Tailwind</h1>
        <p className="mt-2 text-gray-600">Build components, state, hooks and API integration.</p>
        <div className="mt-4">
          <Button
           onClick={handleStart}
          >Get Started</Button>
        </div>
      </Card>
    </div>
  );
}
