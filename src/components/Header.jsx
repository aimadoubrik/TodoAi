import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="text-center mb-12">
      <h1 className="text-5xl font-bold mb-4 animate-neon-pulse flex items-center justify-center gap-3">
        <Sparkles className="text-primary" />
        AI Todo List
        <Sparkles className="text-primary" />
      </h1>
      <p className="text-base-content/70 text-lg">
        Your intelligent task management companion
      </p>
    </header>
  );
}