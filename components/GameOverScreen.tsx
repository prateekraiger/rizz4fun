import React from "react";
import GlassCard from "./GlassCard";

interface GameOverScreenProps {
  onRestart: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ onRestart }) => {
  return (
    <GlassCard className="text-center w-full max-w-md animate-scale-in">
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
        Not Quite A Match 💔
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        We might not be compatible, but don't give up on love!
      </p>

      <video className="w-full rounded-lg" autoPlay loop muted>
        <source src="/over.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={onRestart}
        className="mt-8 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Try Again For Love 💕
      </button>
    </GlassCard>
  );
};

export default GameOverScreen;
