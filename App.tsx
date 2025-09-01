
import React, { useState, useCallback } from 'react';
import { GameState } from './types';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
import SuccessScreen from './components/SuccessScreen';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Home);
  const [userName, setUserName] = useState<string>('');

  const handleStart = useCallback((name: string) => {
    setUserName(name);
    setGameState(GameState.Quiz);
  }, []);

  const handleQuizSuccess = useCallback(() => {
    setGameState(GameState.Success);
  }, []);
  
  const handleRestart = useCallback(() => {
    setUserName('');
    setGameState(GameState.Home);
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case GameState.Home:
        return <HomePage onStart={handleStart} />;
      case GameState.Quiz:
        return <Quiz userName={userName} onSuccess={handleQuizSuccess} />;
      case GameState.Success:
        return <SuccessScreen userName={userName} onRestart={handleRestart} />;
      default:
        return <HomePage onStart={handleStart} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white font-sans overflow-hidden">
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(./img.jpg)'}}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      <main className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {renderContent()}
      </main>
      
      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes scale-in-center {
          0% {
            transform: scale(0.95);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
      `}</style>
    </div>
  );
};

export default App;
