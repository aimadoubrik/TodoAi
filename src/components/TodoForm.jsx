import { PlusCircle, Wand2 } from 'lucide-react';
import { useState } from 'react';

export default function TodoForm({ onAdd, onGenerateTasks, loading }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    onAdd(newTodo);
    setNewTodo('');
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="input input-bordered flex-grow bg-base-200/50 focus:bg-base-200 transition-colors"
        />
        <button type="submit" className="btn btn-primary">
          <PlusCircle size={20} />
          Add Task
        </button>
      </form>
      
      <button 
        onClick={onGenerateTasks}
        disabled={loading}
        className="btn btn-secondary w-full"
      >
        <Wand2 className={loading ? 'animate-spin' : ''} />
        Generate AI Tasks
      </button>
    </div>
  );
}