"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface Mission1ContentProps {
  onComplete: () => void;
}

export function Mission1Content({ onComplete }: Mission1ContentProps) {
  const [engineStarted, setEngineStarted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [missionComplete, setMissionComplete] = useState(false);

  // Cuestionario
  const questions = [
    {
      text: "Si alguien que no conocemos nos pide nuestra foto en internet, ¿qué debemos hacer?",
      options: [
        "Enviarla rápido para hacer un nuevo amigo.",
        "Avisarle a un adulto de confianza inmediatamente.",
        "Preguntarle por qué la quiere."
      ],
      correctAnswer: 1
    },
    {
      text: "¡Alerta de virus! Una ventana dice que ganamos un millón de monedas espaciales. ¿Qué hacemos?",
      options: [
        "Hacer clic para reclamar el premio.",
        "Cerrar la ventana sin hacer clic en nada más.",
        "Compartir el enlace con otros cadetes."
      ],
      correctAnswer: 1
    }
  ];

  const handleEngineStart = () => {
    setEngineStarted(true);
    setTimeout(() => setQuizStarted(true), 1500);
  };

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentQuestionIndex].correctAnswer) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setMissionComplete(true);
      }
    } else {
      alert("Mmm... ¿estás seguro? Piénsalo de nuevo.");
    }
  };

  return (
    <div className="max-w-3xl w-full text-center space-y-8 p-4">
      {/* Cabecera */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-retro text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
          Misión 1: Encendido de Motores
        </h2>
        <p className="text-lg text-slate-300">
          Prepara tu nave para el despegue.
        </p>
      </div>

      {/* Fase 1: Encendido Simple */}
      {!quizStarted && (
        <Card variant="glow" className="py-8 space-y-8 animate-in zoom-in duration-500">
          <h3 className="text-xl font-retro text-white mb-6">Secuencia de Encendido</h3>
          
          <div className="flex flex-col items-center justify-center gap-6">
            <div className={`w-24 h-24 rounded-none flex items-center justify-center transition-all duration-300 ${engineStarted ? 'bg-fuchsia-500 shadow-[4px_4px_0_0_rgba(217,70,239,0.8)] scale-110' : 'bg-slate-800 border-4 border-cyan-500/50'}`}>
              <span className="text-4xl">{engineStarted ? '🚀' : '⚡'}</span>
            </div>
            <p className="text-cyan-200 font-retro text-sm">PILOTO (Cadete)</p>
            <p className="text-sm text-slate-400 max-w-[200px]">Presiona el botón para encender los motores de la nave.</p>
            
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleEngineStart}
              disabled={engineStarted}
            >
              Encender Motores
            </Button>
          </div>
          
          {engineStarted && (
            <p className="text-lg font-retro text-lime-400 animate-pulse mt-6">
              ¡Motores encendidos!
            </p>
          )}
        </Card>
      )}

      {/* Fase 2: Cuestionario */}
      {quizStarted && !missionComplete && (
        <Card variant="glow" className="py-8 px-6 space-y-6 animate-in slide-in-from-right duration-500 text-left">
          <div className="flex justify-between items-center border-b-4 border-slate-700 pb-4">
            <h3 className="text-xl font-retro text-white">Navegación Táctica</h3>
            <span className="bg-slate-800 px-3 py-1 text-cyan-400 font-retro text-xs border-2 border-cyan-400">
              {currentQuestionIndex + 1}/{questions.length}
            </span>
          </div>
          
          <p className="text-lg text-slate-200 leading-relaxed font-retro-text">
            <span className="text-cyan-400 font-retro text-sm mr-2 block mb-2">Decisión:</span> 
            {questions[currentQuestionIndex].text}
          </p>

          <div className="space-y-4">
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <button 
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="w-full text-left p-4 border-4 border-slate-700 bg-slate-800 hover:bg-slate-700 hover:border-cyan-500 transition-all text-slate-300 hover:text-white font-retro-text text-lg"
              >
                {option}
              </button>
            ))}
          </div>
        </Card>
      )}

      {/* Victoria */}
      {missionComplete && (
        <Card variant="glow" className="py-12 space-y-8 animate-in zoom-in duration-700 border-lime-500 shadow-[8px_8px_0_0_rgba(132,204,22,0.2)]">
          <div className="text-6xl animate-bounce">🏆</div>
          <h2 className="text-3xl font-retro text-lime-400">¡Misión Cumplida!</h2>
          <p className="text-lg text-slate-300 max-w-md mx-auto font-retro-text">
            Has demostrado ser un gran piloto. No hay amenaza en el hiperespacio que no puedas superar.
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
