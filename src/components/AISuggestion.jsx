import { BrainCircuit, X } from 'lucide-react';

export default function AISuggestion({ suggestion, onClose }) {
  if (!suggestion) return null;

  return (
    <div className="alert alert-info shadow-lg mb-6 animate-fadeIn">
      <BrainCircuit className="flex-shrink-0" />
      <div className="flex-1">{suggestion}</div>
      <button onClick={onClose} className="btn btn-ghost btn-sm">
        <X size={18} />
      </button>
    </div>
  );
}