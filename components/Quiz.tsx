
import React, { useState, useMemo } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import GlassCard from './GlassCard';

interface QuizProps {
  userName: string;
  onSuccess: () => void;
}

const Quiz: React.FC<QuizProps> = ({ userName, onSuccess }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  
  // Shuffle options for each question
  const shuffledOptions = useMemo(() => {
    const options = [...currentQuestion.options];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }, [currentQuestion]);

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    setTimeout(() => {
      if (correct) {
        if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setIsAnswered(false);
        } else {
          onSuccess();
        }
      } else {
        setSelectedAnswer(null);
        setIsAnswered(false);
      }
    }, 1500);
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-white/10 hover:bg-white/20 border-white/20';
    }
    if (option === selectedAnswer) {
      return isCorrect ? 'bg-green-500/50 border-green-500' : 'bg-red-500/50 border-red-500';
    }
    return 'bg-white/10 border-white/20 cursor-not-allowed opacity-50';
  };
  
  const progressPercentage = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <GlassCard className="w-full max-w-2xl animate-scale-in">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 text-gray-300">
          <p>Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</p>
          <p>Good luck, {userName}!</p>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%`, transition: 'width 0.5s ease-in-out' }}></div>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 h-24 flex items-center justify-center">{currentQuestion.question}</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {shuffledOptions.map((option, index) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            disabled={isAnswered}
            className={`w-full p-6 border-2 rounded-xl text-left text-lg font-medium transition-all duration-300 transform hover:scale-102 hover:shadow-lg ${getButtonClass(option)}`}
          >
            <span className="text-pink-300 font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
            {option}
          </button>
        ))}
      </div>
    </GlassCard>
  );
};

export default Quiz;
