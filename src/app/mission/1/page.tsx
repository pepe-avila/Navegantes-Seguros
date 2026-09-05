"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Mission1Page() {
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
    setTimeout(() => setQuizStarted(true), 1500); // Pequeño delay para ver la animación
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
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[url('/space-bg-dark.jpg')] bg-slate-950 bg-cover bg-center">
      <div className="max-w-3xl w-full text-center space-y-8">
        
        {/* Cabecera */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
            Misión 1: Encendido de Motores
          </h1>
          <p className="text-xl text-slate-300">
            Prepara tu nave para el despegue.
          </p>
        </div>

        {/* Fase 1: Encendido Simple */}
        {!quizStarted && (
          <Card variant="glow" className="py-12 space-y-12 animate-in zoom-in duration-500">
            <h2 className="text-2xl font-bold text-white mb-8">Secuencia de Encendido</h2>
            
            <div className="flex flex-col items-center justify-center gap-8">
              <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${engineStarted ? 'bg-fuchsia-500 shadow-[0_0_40px_rgba(217,70,239,0.8)] scale-110' : 'bg-slate-800 border-4 border-cyan-500/50'}`}>
                <span className="text-5xl">{engineStarted ? '🚀' : '⚡'}</span>
              </div>
              <p className="text-cyan-200 font-bold">PILOTO (Cadete)</p>
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
              <p className="text-2xl font-black text-lime-400 animate-pulse mt-8">
                ¡Motores encendidos! Preparando salto hiperespacial...
              </p>
            )}
          </Card>
        )}

        {/* Fase 2: Cuestionario */}
        {quizStarted && !missionComplete && (
          <Card variant="glow" className="py-12 px-6 md:px-12 space-y-8 animate-in slide-in-from-right duration-500 text-left">
            <div className="flex justify-between items-center border-b border-slate-700 pb-4">
              <h2 className="text-2xl font-bold text-white">Navegación Táctica</h2>
              <span className="bg-slate-800 px-4 py-2 rounded-lg text-cyan-400 font-mono">
                Pregunta {currentQuestionIndex + 1} de {questions.length}
              </span>
            </div>
            
            <p className="text-xl text-slate-200 leading-relaxed">
              <span className="text-cyan-400 font-bold mr-2">Decisión:</span> 
              {questions[currentQuestionIndex].text}
            </p>

            <div className="space-y-4">
              {questions[currentQuestionIndex].options.map((option, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full text-left p-6 rounded-xl border-2 border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-cyan-500 transition-all text-slate-300 hover:text-white text-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          </Card>
        )}

        {/* Victoria */}
        {missionComplete && (
          <Card variant="glow" className="py-16 space-y-8 animate-in zoom-in duration-700 border-lime-500/50 shadow-[0_0_30px_rgba(132,204,22,0.2)]">
            <div className="text-7xl animate-bounce">🏆</div>
            <h2 className="text-4xl font-black text-lime-400">¡Misión Cumplida!</h2>
            <p className="text-xl text-slate-300 max-w-md mx-auto">
              Has demostrado ser un gran piloto. No hay amenaza en el hiperespacio que no puedas superar.
            </p>
            <div className="pt-4">
              <Link href="/">
                <Button variant="primary" size="lg">Volver a la Base</Button>
              </Link>
            </div>
          </Card>
        )}

      </div>
    </main>
  );
}
