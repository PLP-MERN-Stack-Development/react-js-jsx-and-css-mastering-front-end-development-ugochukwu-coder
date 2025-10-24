import React, { useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (!text.trim()) return;
    const newTask = { id: Date.now(), text: text.trim(), done: false };
    setTasks([newTask, ...tasks]);
    setText('');
  };

  const toggle = id => setTasks(tasks.map(t => t.id === id ? {...t, done: !t.done} : t));
  const del = id => setTasks(tasks.filter(t => t.id !== id));

  const filtered = useMemo(() => {
    if (filter === 'Active') return tasks.filter(t => !t.done);
    if (filter === 'Completed') return tasks.filter(t => t.done);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex gap-2">
          <input
            className="flex-1 p-2 border rounded"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="New task..."
            onKeyDown={(e)=>{ if(e.key==='Enter') addTask(); }}
          />
          <Button onClick={addTask}>Add</Button>
        </div>
        <div className="mt-3 flex gap-2">
          {['All','Active','Completed'].map(f => (
            <button key={f} onClick={()=>setFilter(f)} className={`px-3 py-1 rounded ${filter===f?'bg-blue-600 text-white':'bg-gray-100 dark:bg-gray-700'}`}>
              {f}
            </button>
          ))}
        </div>
      </Card>

      <div className="space-y-2">
        {filtered.length === 0 && <p className="text-sm text-gray-500">No tasks.</p>}
        {filtered.map(t => (
          <Card key={t.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={t.done} onChange={()=>toggle(t.id)} />
              <span className={t.done ? 'line-through text-gray-500' : ''}>{t.text}</span>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={()=>del(t.id)}>Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
