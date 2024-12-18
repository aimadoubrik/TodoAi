import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete, onGetSuggestions }) {
  if (todos.length === 0) {
    return (
      <div className="text-center p-8 bg-base-200/50 rounded-lg">
        <p className="text-base-content/60">
          No tasks yet. Add some tasks or let AI generate them for you!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onGetSuggestions={onGetSuggestions}
        />
      ))}
    </div>
  );
}