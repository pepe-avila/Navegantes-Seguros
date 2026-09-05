"use client";

import { useState, useEffect, useCallback } from 'react';
import { DialogueBox } from './DialogueBox';
import { Mission1Content } from '../missions/Mission1Content';

const GRID_SIZE = 10;
const CELL_SIZE = 48; // in pixels

interface Position {
  x: number;
  y: number;
}

export function MapEngine() {
  const [playerPos, setPlayerPos] = useState<Position>({ x: 2, y: 2 });
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // NPC position (Mission 1 Station)
  const npcPos: Position = { x: 7, y: 5 };

  // Check if player is adjacent to NPC
  const isAdjacentToNPC = () => {
    const dx = Math.abs(playerPos.x - npcPos.x);
    const dy = Math.abs(playerPos.y - npcPos.y);
    return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Prevent moving if dialogue or modal is open
    if (isDialogueOpen || isModalOpen) {
      if ((e.key === 'Enter' || e.key === ' ') && isDialogueOpen) {
        setIsDialogueOpen(false);
        setIsModalOpen(true); // Open mission after dialogue
      }
      return;
    }

    let newX = playerPos.x;
    let newY = playerPos.y;

    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        newY = Math.max(0, playerPos.y - 1);
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        newY = Math.min(GRID_SIZE - 1, playerPos.y + 1);
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        newX = Math.max(0, playerPos.x - 1);
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        newX = Math.min(GRID_SIZE - 1, playerPos.x + 1);
        break;
      case 'Enter':
      case ' ':
        if (isAdjacentToNPC()) {
          setIsDialogueOpen(true);
        }
        break;
    }

    // Collision with NPC
    if (newX !== npcPos.x || newY !== npcPos.y) {
      setPlayerPos({ x: newX, y: newY });
    }
  }, [playerPos, isDialogueOpen, isModalOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleCellClick = (x: number, y: number) => {
    if (isDialogueOpen || isModalOpen) return;
    
    // Simple click-to-move (one step if adjacent, or just teleport for MVP)
    // To keep it simple, we just set the position if it's not the NPC
    if (x === npcPos.x && y === npcPos.y) {
      if (isAdjacentToNPC()) {
        setIsDialogueOpen(true);
      }
    } else {
      setPlayerPos({ x, y });
    }
  };

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden flex items-center justify-center select-none bg-[url('/space-bg-dark.jpg')] bg-cover bg-center">
      
      {/* Game Viewport */}
      <div 
        className="relative bg-slate-900/80 border-4 border-slate-700 shadow-[16px_16px_0_0_rgba(0,0,0,0.5)]"
        style={{ 
          width: GRID_SIZE * CELL_SIZE, 
          height: GRID_SIZE * CELL_SIZE 
        }}
      >
        {/* Render Grid */}
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
          const x = i % GRID_SIZE;
          const y = Math.floor(i / GRID_SIZE);
          return (
            <div 
              key={i}
              onClick={() => handleCellClick(x, y)}
              className="absolute border border-slate-800/30 cursor-pointer hover:bg-white/5 transition-colors"
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                left: x * CELL_SIZE,
                top: y * CELL_SIZE
              }}
            />
          );
        })}

        {/* NPC */}
        <div 
          className="absolute flex items-center justify-center text-3xl drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse cursor-pointer"
          onClick={() => isAdjacentToNPC() && setIsDialogueOpen(true)}
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            left: npcPos.x * CELL_SIZE,
            top: npcPos.y * CELL_SIZE,
            transition: 'all 0.2s'
          }}
        >
          🤖
        </div>

        {/* Player Avatar */}
        <div 
          className="absolute flex items-center justify-center text-3xl drop-shadow-[0_0_10px_rgba(132,204,22,0.8)] z-10"
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            left: playerPos.x * CELL_SIZE,
            top: playerPos.y * CELL_SIZE,
            transition: 'all 0.15s ease-out'
          }}
        >
          👨‍🚀
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-8 left-8 text-slate-300 font-retro-text text-xl bg-slate-900/80 p-4 border-2 border-slate-700">
        <p>WASD / Flechas: Moverse</p>
        <p>Click / Enter: Interactuar</p>
        <p className="text-cyan-400 mt-2">Encuentra al Mentor 🤖</p>
      </div>

      {/* Dialogue */}
      <DialogueBox 
        isOpen={isDialogueOpen} 
        text="¡Hola Cadete! Soy el Mentor de la estación. ¿Estás listo para aprender a encender los motores de tu nave de forma segura?" 
        onComplete={() => {
          setIsDialogueOpen(false);
          setIsModalOpen(true);
        }}
      />

      {/* Mission Modal */}
      {isModalOpen && (
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <Mission1Content onComplete={() => setIsModalOpen(false)} />
        </div>
      )}

    </div>
  );
}
