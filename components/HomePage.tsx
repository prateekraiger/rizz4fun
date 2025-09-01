
import React, { useState } from 'react';
import GlassCard from './GlassCard';

interface HomePageProps {
  onStart: (name: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  const triggerConfetti = () => {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    
    document.body.appendChild(confettiContainer);

    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '-10px';
      confetti.style.borderRadius = '50%';
      confetti.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;
      
      confettiContainer.appendChild(confetti);
    }

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
      document.body.removeChild(confettiContainer);
      document.head.removeChild(style);
    }, 5000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerConfetti();
    setTimeout(() => {
      onStart(name.trim() || 'Challenger');
    }, 1000);
  };

  return (
    <GlassCard className="text-center w-full max-w-2xl animate-scale-in">
      <div className="flex justify-center mb-6">
        <video width="600" height="450" autoPlay loop muted>
          <source src="./assets/gif1.mp4" type="video/mp4" />
        </video>
      </div>
      
      <h1 className="text-4xl font-bold mb-2 tracking-tight">Date or Single?</h1>
      <p className="text-lg text-gray-200 mb-6">If you want me, you must pass this coding test.</p>
      <p className="text-md text-gray-300 italic mb-8">A secret reward is waiting for you...</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Quiz
        </button>
      </form>
    </GlassCard>
  );
};

export default HomePage;
