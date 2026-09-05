import { CopilotNote } from '@/types/content';

export const mission4Notes: CopilotNote[] = [
  {
    id: 'note-m4-d1',
    pillar: 'ia',
    relatedMissionId: 'mission-4',
    relatedDecisionId: 'd1-confidente-ia',
    title: 'La IA como "falso confidente"',
    body: 'Una porción creciente de menores usa asistentes de IA generativa como confidente emocional, atraídos por la ilusión de que "una máquina no juzga". Sin embargo, estas interacciones suelen quedar registradas y pueden usarse para reentrenar modelos, exponiendo datos emocionales sensibles sin que el menor lo perciba como un riesgo de privacidad.',
    talkingPointForHome: '"¿Alguna vez le contaste algo importante a un chatbot o asistente? ¿Me lo contaste a mí también?"',
    factRefs: ['fact-ia-01', 'fact-ia-02'],
  },
];
