import { Check, Trash2, MessageSquare } from 'lucide-react';

export default function TodoItem({ todo, onToggle, onDelete, onGetSuggestions }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-base-200/80 rounded-xl backdrop-blur-sm 
                    hover:bg-base-200 transition-all transform hover:scale-[1.02] hover:shadow-lg">
      <button
        onClick={() => onToggle(todo.id)}
        className={`btn btn-circle btn-sm ${
          todo.completed 
            ? 'btn-success animate-bounce-once' 
            : 'btn-outline hover:btn-success'
        }`}
      >
        <Check size={16} />
      </button>
      
      <span className={`flex-grow ${
        todo.completed 
          ? 'line-through text-base-content/50' 
          : 'text-base-content'
      }`}>
        {todo.text}
      </span>
      
      <button
        onClick={() => onGetSuggestions(todo.id)}
        className="btn btn-ghost btn-circle btn-sm hover:text-primary 
                   transition-colors hover:bg-primary/20"
      >
        <MessageSquare size={16} />
      </button>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="btn btn-ghost btn-circle btn-sm hover:text-error 
                   transition-colors hover:bg-error/20"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}