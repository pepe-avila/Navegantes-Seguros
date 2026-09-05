export type Pillar = 'supervision' | 'privacidad' | 'contactos' | 'ia';

// ---------- CAPA A ----------
export interface VerifiedFact {
  id: string;
  pillar: Pillar;
  statement: string;   // el hecho, resumido, sin jerga
  source: string;       // organización / estudio
  sourceUrl?: string;   // opcional, si se quiere linkear
}

// ---------- CAPA B ----------
export interface DialogueLine {
  speaker: 'orion' | 'npc' | 'system';
  text: string;
}

export interface AnswerOption {
  text: string;
  isCorrect: boolean;
  feedback: string;     // SIEMPRE explica el porqué, en lenguaje de niño
}

export interface DecisionPoint {
  id: string;
  prompt: string;
  options: AnswerOption[];
  factRefs: string[];    // ids de VerifiedFact que sostienen esta decisión
}

export interface DoubleKeyMoment {
  id: string;
  pactText: string;
  holdDurationMs: number;
  cadeteLabel: string;
  copilotoLabel: string;
}

export interface Mission {
  id: string;
  order: number;
  title: string;
  pillar: Pillar;
  minAge: number;
  maxAge: number;
  introDialogue: DialogueLine[];
  decisions: DecisionPoint[];
  doubleKey: DoubleKeyMoment;
  victoryText: string;
}

// ---------- CAPA C ----------
export interface CopilotNote {
  id: string;
  pillar: Pillar;
  relatedMissionId: string;
  relatedDecisionId: string;
  title: string;
  body: string;          // contenido completo para adultos
  talkingPointForHome: string; // pregunta o disparador para charlar sin pantalla
  factRefs: string[];
}
