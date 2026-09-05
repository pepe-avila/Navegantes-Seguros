"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const ADJETIVOS = [
  "Cósmico", "Estelar", "Galáctico", "Secreto", "Veloz", 
  "Valiente", "Invisible", "Radiante", "Supremo", "Turbo"
];

const SUSTANTIVOS = [
  "Rayo", "Halcón", "Cometa", "Meteorito", "Guardián",
  "Centinela", "Explorador", "Dragón", "Fénix", "Navegante"
];

export default function OnboardingPage() {
  const [codeName, setCodeName] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCodeName = () => {
    setIsGenerating(true);
    // Simulate generation delay for effect
    setTimeout(() => {
      const adjetivo = ADJETIVOS[Math.floor(Math.random() * ADJETIVOS.length)];
      const sustantivo = SUSTANTIVOS[Math.floor(Math.random() * SUSTANTIVOS.length)];
      setCodeName(`${sustantivo} ${adjetivo}`);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[url('/space-bg.jpg')] bg-cover bg-center">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in slide-in-from-top-10 duration-700">
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-md">
            Terminal de Reclutamiento
          </h1>
          <p className="text-xl text-cyan-200">
            En el espacio no usamos nuestros nombres reales. Necesitas un alias de Agente.
          </p>
        </div>

        <Card variant="glow" className="py-12 px-6 flex flex-col items-center space-y-8">
          
          <div className="h-32 flex items-center justify-center w-full bg-slate-900/50 rounded-xl border-2 border-dashed border-slate-600">
            {codeName ? (
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400 animate-in zoom-in duration-500">
                {codeName}
              </span>
            ) : (
              <span className="text-2xl text-slate-500 font-mono">
                {isGenerating ? "Decodificando..." : "[ Nombre en Clave Vacío ]"}
              </span>
            )}
          </div>

          <Button 
            variant="secondary" 
            size="lg" 
            onClick={generateCodeName}
            disabled={isGenerating}
            className="w-full md:w-auto"
          >
            {codeName ? "Generar Otro Nombre 🎲" : "Generar Mi Nombre en Clave 🚀"}
          </Button>

        </Card>

        {/* Next Step */}
        <div className={`transition-all duration-700 transform ${codeName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          <p className="text-lg text-slate-300 mb-4 font-retro-text">
            ¿Listo para abordar, {codeName}?
          </p>
          <Link href="/hub">
            <Button variant="primary" size="lg" className="px-12 py-5 text-xl">
              Entrar al Hub Espacial
            </Button>
          </Link>
        </div>

      </div>
    </main>
  );
}
