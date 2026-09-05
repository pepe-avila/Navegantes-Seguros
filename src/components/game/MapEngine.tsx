"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { DialogueBox } from './DialogueBox';
import { MissionContent } from '../missions/MissionContent';
import { allMissions } from '@/content/missions';
import { Mission } from '@/types/content';
import { Button } from '../ui/Button';

const GRID_SIZE = 10;
const CELL_SIZE = 48; // in pixels

interface Position {
  x: number;
  y: number;
}

interface NPC {
  id: string;
  pos: Position;
  mission: Mission;
  icon: string;
}

const npcs: NPC[] = [
  { id: 'npc-1', pos: { x: 7, y: 5 }, mission: allMissions[0], icon: '🤖' },
  { id: 'npc-2', pos: { x: 2, y: 8 }, mission: allMissions[1], icon: '👽' },
  { id: 'npc-3', pos: { x: 8, y: 1 }, mission: allMissions[2], icon: '👾' },
  { id: 'npc-4', pos: { x: 1, y: 2 }, mission: allMissions[3], icon: '👻' },
];

export function MapEngine() {
  const [playerPos, setPlayerPos] = useState<Position>({ x: 4, y: 4 });
  const [activeNpc, setActiveNpc] = useState<NPC | null>(null);
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if player is adjacent to any NPC
  const getAdjacentNPC = (pos: Position): NPC | undefined => {
    return npcs.find(npc => {
      const dx = Math.abs(pos.x - npc.pos.x);
      const dy = Math.abs(pos.y - npc.pos.y);
      return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
    });
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
        const adjacent = getAdjacentNPC(playerPos);
        if (adjacent) {
          setActiveNpc(adjacent);
          setIsDialogueOpen(true);
        }
        break;
    }

    // Collision with NPCs
    if (!npcs.some(npc => npc.pos.x === newX && npc.pos.y === newY)) {
      setPlayerPos({ x: newX, y: newY });
    }
  }, [playerPos, isDialogueOpen, isModalOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleCellClick = (x: number, y: number) => {
    if (isDialogueOpen || isModalOpen) return;
    
    const clickedNpc = npcs.find(npc => npc.pos.x === x && npc.pos.y === y);
    if (clickedNpc) {
      const adjacent = getAdjacentNPC(playerPos);
      if (adjacent && adjacent.id === clickedNpc.id) {
        setActiveNpc(adjacent);
        setIsDialogueOpen(true);
      }
    } else {
      setPlayerPos({ x, y });
    }
  };

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden flex items-center justify-center select-none bg-[url('/space-bg-dark.jpg')] bg-cover bg-center">
      
      {/* Botón Centro de Familias */}
      <div className="absolute top-8 right-8 z-20">
        <Link href="/copiloto">
          <Button variant="secondary">Centro de Familias (Copiloto)</Button>
        </Link>
      </div>

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

        {/* NPCs */}
        {npcs.map(npc => (
          <div 
            key={npc.id}
            className="absolute flex items-center justify-center text-3xl drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse cursor-pointer"
            onClick={() => handleCellClick(npc.pos.x, npc.pos.y)}
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              left: npc.pos.x * CELL_SIZE,
              top: npc.pos.y * CELL_SIZE,
              transition: 'all 0.2s'
            }}
          >
            {npc.icon}
          </div>
        ))}

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
        <p className="text-cyan-400 mt-2">Encuentra a los NPCs 👾</p>
      </div>

      {/* Dialogue */}
      <DialogueBox 
        isOpen={isDialogueOpen && activeNpc !== null} 
        text={activeNpc?.mission.introDialogue[0].text || ""} 
        onComplete={() => {
          setIsDialogueOpen(false);
          setIsModalOpen(true);
        }}
      />

      {/* Mission Modal */}
      {isModalOpen && activeNpc && (
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <MissionContent mission={activeNpc.mission} onComplete={() => setIsModalOpen(false)} />
        </div>
      )}

    </div>
  );
}
