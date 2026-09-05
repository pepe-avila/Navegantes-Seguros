"use client";

import { useState, useEffect, useRef } from 'react';
import { DoubleKeyMoment } from '@/types/content';
import { Card } from '../ui/Card';

interface DoubleKeyButtonProps {
  config: DoubleKeyMoment;
  onSuccess: () => void;
}

export function DoubleKeyButton({ config, onSuccess }: DoubleKeyButtonProps) {
  const [cadeteHolding, setCadeteHolding] = useState(false);
  const [copilotoHolding, setCopilotoHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const startTimeRef = useRef<number | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (isSuccess) return;

    if (cadeteHolding && copilotoHolding) {
      if (!startTimeRef.current) {
        startTimeRef.current = performance.now();
      }

      const updateProgress = (timestamp: number) => {
        if (!startTimeRef.current) return;
        const elapsed = timestamp - startTimeRef.current;
        const newProgress = Math.min((elapsed / config.holdDurationMs) * 100, 100);
        setProgress(newProgress);

        if (newProgress >= 100) {
          setIsSuccess(true);
          onSuccess();
        } else {
          animationRef.current = requestAnimationFrame(updateProgress);
        }
      };
      
      animationRef.current = requestAnimationFrame(updateProgress);
    } else {
      setProgress(0);
      startTimeRef.current = null;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [cadeteHolding, copilotoHolding, config.holdDurationMs, isSuccess, onSuccess]);

  // Prevent context menu on long press
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <Card variant="glow" className="py-8 space-y-8 animate-in zoom-in duration-500 text-center select-none">
      <h3 className="text-xl font-retro text-white mb-2">Pacto de Seguridad</h3>
      <p className="text-sm text-cyan-200 font-retro-text mb-8 px-4 max-w-lg mx-auto">
        {config.pactText}
      </p>
      
      {/* Progress Bar */}
      <div className="w-full max-w-md mx-auto h-6 bg-slate-800 border-4 border-slate-700 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-lime-500 transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xs font-retro text-white mix-blend-difference">
          {Math.floor(progress)}%
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8">
        {/* Cadete Button */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-cyan-400 font-retro text-sm">{config.cadeteLabel}</p>
          <button
            onMouseDown={() => setCadeteHolding(true)}
            onMouseUp={() => setCadeteHolding(false)}
            onMouseLeave={() => setCadeteHolding(false)}
            onTouchStart={() => setCadeteHolding(true)}
            onTouchEnd={() => setCadeteHolding(false)}
            onContextMenu={handleContextMenu}
            className={`w-24 h-24 border-4 transition-all duration-150 flex items-center justify-center
              ${cadeteHolding ? 'bg-cyan-500 border-white scale-95 shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.3)]' : 'bg-slate-800 border-cyan-500 shadow-[8px_8px_0_0_rgba(6,182,212,0.5)]'}
            `}
          >
            <span className="text-3xl">{cadeteHolding ? '⚡' : '🖐️'}</span>
          </button>
        </div>

        {/* Copiloto Button */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-fuchsia-400 font-retro text-sm">{config.copilotoLabel}</p>
          <button
            onMouseDown={() => setCopilotoHolding(true)}
            onMouseUp={() => setCopilotoHolding(false)}
            onMouseLeave={() => setCopilotoHolding(false)}
            onTouchStart={() => setCopilotoHolding(true)}
            onTouchEnd={() => setCopilotoHolding(false)}
            onContextMenu={handleContextMenu}
            className={`w-24 h-24 border-4 transition-all duration-150 flex items-center justify-center
              ${copilotoHolding ? 'bg-fuchsia-500 border-white scale-95 shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.3)]' : 'bg-slate-800 border-fuchsia-500 shadow-[8px_8px_0_0_rgba(217,70,239,0.5)]'}
            `}
          >
            <span className="text-3xl">{copilotoHolding ? '⚡' : '🖐️'}</span>
          </button>
        </div>
      </div>
      
      <p className="text-xs text-slate-400 font-retro mt-6">
        {cadeteHolding && copilotoHolding ? '¡Mantengan presionado!' : 'Ambos deben mantener presionado el botón a la vez.'}
      </p>
    </Card>
  );
}
