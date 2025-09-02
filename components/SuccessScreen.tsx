import React from "react";
import { INSTAGRAM_ID } from "../constants";
import GlassCard from "./GlassCard";

interface SuccessScreenProps {
  userName: string;
  onRestart: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({
  userName,
  onRestart,
}) => {
  return (
    <GlassCard className="text-center w-full max-w-2xl animate-scale-in">
      <div className="flex justify-center mb-6">
        <video width="400" height="300" autoPlay loop muted>
          <source src="/final.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
        We're A Perfect Match, {userName}! 💕
      </h1>
      <p className="text-lg text-gray-200 mb-6">
        You have all the qualities I'm looking for in a partner!
      </p>

      <div className="my-8">
        <p className="text-md text-gray-300">
          Ready to take this to the next level? Here's how to reach me:
        </p>
        <a
          href="https://www.instagram.com/dev.prat1k/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 my-2 p-2 rounded-lg inline-block hover:scale-105 transition-transform duration-300"
        >
          {INSTAGRAM_ID}
        </a>
      </div>

      <button
        onClick={onRestart}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Test Another Match? 💫
      </button>
    </GlassCard>
  );
};

export default SuccessScreen;
