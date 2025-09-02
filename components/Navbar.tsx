import React, { useState, useRef, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      // Force autoplay
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center px-6 py-3">
        <h1 className="text-xl font-bold text-white">
          Dating Compatibility Quiz 💕
        </h1>

        <button
          onClick={togglePlay}
          className="text-white hover:text-pink-400 transition-colors duration-300"
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      <audio ref={audioRef} loop autoPlay>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>
    </nav>
  );
};

export default Navbar;
