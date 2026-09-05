import { CopilotNote } from '@/types/content';

export const mission3Notes: CopilotNote[] = [
  {
    id: 'note-m3-d1',
    pillar: 'contactos',
    relatedMissionId: 'mission-3',
    relatedDecisionId: 'd1-secreto-familiar',
    title: 'El secreto familiar como bisagra del riesgo',
    body: 'Es la señal de mayor consenso entre las fuentes relevadas (Grooming Argentina, Ley Mica Ortega, UNICEF). No requiere que el adulto explique el delito en detalle al menor — solo que el reflejo de reportarlo esté bien instalado.',
    talkingPointForHome: '"¿Alguna vez alguien te pidió que no me contaras algo? ¿Qué hiciste?"',
    factRefs: ['fact-cont-04'],
  },
  {
    id: 'note-m3-d2',
    pillar: 'contactos',
    relatedMissionId: 'mission-3',
    relatedDecisionId: 'd2-migrar-chat',
    title: 'La "migración de canal"',
    body: 'Los agresores suelen iniciar contacto en plataformas de juego públicas y luego insisten en trasladar la conversación a apps de mensajería privada, donde el control parental es casi inexistente. Vale la pena revisar en conjunto qué apps de mensajería usa tu hijo/a y con quién.',
    talkingPointForHome: 'Repasen juntos la lista de contactos en las apps de mensajería que usa.',
    factRefs: ['fact-cont-05'],
  },
  {
    id: 'note-m3-d3',
    pillar: 'contactos',
    relatedMissionId: 'mission-3',
    relatedDecisionId: 'd3-regalo-virtual',
    title: 'Regalos virtuales como táctica de enganche',
    body: 'El ofrecimiento de objetos o monedas virtuales a cambio de fotos o datos es una táctica de enganche documentada especialmente en plataformas de juego masivo. Vale la pena preguntar a tu hijo/a si alguna vez le ofrecieron algo así.',
    talkingPointForHome: '"¿Te ofrecieron alguna vez algo del juego a cambio de una foto o un dato tuyo?"',
    factRefs: ['fact-cont-06'],
  },
];
