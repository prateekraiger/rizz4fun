
import React from 'react';
import GlassCard from './GlassCard';
import HeartBreakIcon from './icons/HeartBreakIcon';

interface FailureScreenProps {
  userName: string;
  onRestart: () => void;
}

const FailureScreen: React.FC<FailureScreenProps> = ({ userName, onRestart }) => {
  return (
    <GlassCard className="text-center w-full max-w-md animate-scale-in">
      <div className="flex justify-center mb-6 text-gray-400">
          <HeartBreakIcon className="w-24 h-24" />
      </div>
      <h1 className="text-4xl font-bold mb-2 tracking-tight">Almost, {userName}...</h1>
      <p className="text-lg text-gray-200 mb-8">Maybe we're not a match... yet. Don't give up!</p>
      
      <button
        onClick={onRestart}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Try Again
      </button>
    </GlassCard>
  );
};

export default FailureScreen;
