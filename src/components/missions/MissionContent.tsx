"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Mission, AnswerOption } from '@/types/content';
import { DoubleKeyButton } from '../game/DoubleKeyButton';

interface MissionContentProps {
  mission: Mission;
  onComplete: () => void;
}

export function MissionContent({ mission, onComplete }: MissionContentProps) {
  const [engineStarted, setEngineStarted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [missionComplete, setMissionComplete] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<AnswerOption | null>(null);

  const handleDoubleKeySuccess = () => {
    setEngineStarted(true);
    setTimeout(() => {
      setQuizStarted(true);
    }, 1000);
  };

  const handleAnswer = (option: AnswerOption) => {
    setSelectedFeedback(option);
  };

  const handleNextQuestion = () => {
    if (selectedFeedback?.isCorrect) {
      if (currentQuestionIndex < mission.decisions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedFeedback(null);
      } else {
        setMissionComplete(true);
        setSelectedFeedback(null);
      }
    } else {
      setSelectedFeedback(null);
    }
  };

  return (
    <div className="max-w-3xl w-full text-center space-y-8 p-4 max-h-[90vh] overflow-y-auto">
      {/* Cabecera */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-retro text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400 leading-tight">
          Misión {mission.order}: {mission.title}
        </h2>
      </div>

      {/* Fase 1: Doble Llave */}
      {!quizStarted && (
        <DoubleKeyButton 
          config={mission.doubleKey} 
          onSuccess={handleDoubleKeySuccess} 
        />
      )}

      {/* Fase 2: Cuestionario / Decisiones */}
      {quizStarted && !missionComplete && (
        <Card variant="glow" className="py-8 px-6 space-y-6 animate-in slide-in-from-right duration-500 text-left">
          <div className="flex justify-between items-center border-b-4 border-slate-700 pb-4">
            <h3 className="text-xl font-retro text-white">Navegación Táctica</h3>
            <span className="bg-slate-800 px-3 py-1 text-cyan-400 font-retro text-xs border-2 border-cyan-400">
              {currentQuestionIndex + 1}/{mission.decisions.length}
            </span>
          </div>
          
          <p className="text-lg text-slate-200 leading-relaxed font-retro-text">
            <span className="text-cyan-400 font-retro text-sm mr-2 block mb-2">Decisión:</span> 
            {mission.decisions[currentQuestionIndex].prompt}
          </p>

          <div className="space-y-4">
            {selectedFeedback ? (
              <div className={`p-6 border-4 ${selectedFeedback.isCorrect ? 'border-lime-500 bg-lime-500/10' : 'border-fuchsia-500 bg-fuchsia-500/10'}`}>
                <p className="text-xl font-retro text-white mb-4">
                  {selectedFeedback.isCorrect ? '✅ ¡Correcto!' : '❌ Señal de Alerta'}
                </p>
                <p className="text-lg text-slate-200 font-retro-text mb-6">
                  {selectedFeedback.feedback}
                </p>
                <Button variant="primary" onClick={handleNextQuestion}>
                  {selectedFeedback.isCorrect ? 'Continuar Misión' : 'Intentar de Nuevo'}
                </Button>
              </div>
            ) : (
              mission.decisions[currentQuestionIndex].options.map((option, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left p-4 border-4 border-slate-700 bg-slate-800 hover:bg-slate-700 hover:border-cyan-500 transition-all text-slate-300 hover:text-white font-retro-text text-lg"
                >
                  {option.text}
                </button>
              ))
            )}
          </div>
        </Card>
      )}

      {/* Victoria */}
      {missionComplete && (
        <Card variant="glow" className="py-12 space-y-8 animate-in zoom-in duration-700 border-lime-500 shadow-[8px_8px_0_0_rgba(132,204,22,0.2)]">
          <div className="text-6xl animate-bounce">🏆</div>
          <h2 className="text-3xl font-retro text-lime-400">¡Misión Cumplida!</h2>
          <p className="text-lg text-slate-300 max-w-md mx-auto font-retro-text">
            {mission.victoryText}
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg" onClick={onComplete}>
              Cerrar y Volver al Hub
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
