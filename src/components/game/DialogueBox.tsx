"use client";

import { useState, useEffect } from 'react';

interface DialogueBoxProps {
  text: string;
  speaker?: string;
  onComplete?: () => void;
  isOpen: boolean;
}

export function DialogueBox({ text, speaker = "Instructor", onComplete, isOpen }: DialogueBoxProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setDisplayedText("");
      return;
    }

    setIsTyping(true);
    setDisplayedText("");
    
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, 40); // Velocidad de escritura

    return () => clearInterval(intervalId);
  }, [text, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-11/12 max-w-2xl bg-slate-900 border-4 border-cyan-500 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,0.8)] z-50">
      <div className="absolute -top-6 left-4 bg-fuchsia-600 border-4 border-fuchsia-600 px-4 py-1 text-white font-retro text-sm uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]">
        {speaker}
      </div>
      <p className="text-white font-retro-text text-xl leading-relaxed mt-2 min-h-[4rem]">
        {displayedText}
      </p>
      
      <div className="mt-4 flex justify-end">
        {!isTyping && (
          <button 
            onClick={onComplete}
            className="animate-pulse text-cyan-400 font-retro text-xs hover:text-white"
          >
            [Continuar] (Acción)
          </button>
        )}
      </div>
    </div>
  );
}
