import React from 'react';
import TaskManager from '../features/TaskManager';

export default function TasksPage(){
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
      <TaskManager />
    </div>
  );
}
