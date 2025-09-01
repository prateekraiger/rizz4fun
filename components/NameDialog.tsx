
import React, { useState, useEffect } from 'react';
import GlassCard from './GlassCard';

interface NameDialogProps {
  isOpen: boolean;
  onStartQuiz: (name: string) => void;
  onClose: () => void;
}

const NameDialog: React.FC<NameDialogProps> = ({ isOpen, onStartQuiz, onClose }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName('');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartQuiz(name);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <GlassCard className="w-full max-w-sm text-center animate-scale-in">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">First, tell me your name.</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-6"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-500 disabled:cursor-not-allowed"
              disabled={!name.trim()}
            >
              Start Quiz
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default NameDialog;
