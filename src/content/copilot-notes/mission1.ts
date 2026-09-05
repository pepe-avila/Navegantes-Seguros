import { CopilotNote } from '@/types/content';

export const mission1Notes: CopilotNote[] = [
  {
    id: 'note-m1-d1',
    pillar: 'supervision',
    relatedMissionId: 'mission-1',
    relatedDecisionId: 'd1-phishing',
    title: 'Por qué funciona la trampa del "premio gratis"',
    body: 'Los premios falsos explotan la curiosidad y la falta de experiencia frente a estafas. Este patrón corresponde al pilar "No caigas en trampas" del currículo de Google y a la Unidad "Controla la Tecnología" de INCIBE.',
    talkingPointForHome: 'Preguntale a tu hijo/a: "¿te acordás de alguna vez que viste un cartel de premio en una app o juego? ¿Qué hiciste?"',
    factRefs: ['fact-cont-06'],
  },
  {
    id: 'note-m1-d2',
    pillar: 'contactos',
    relatedMissionId: 'mission-1',
    relatedDecisionId: 'd2-stranger-secret',
    title: 'La señal más confiable que existe',
    body: 'El pedido de guardar un secreto de la familia es el marcador conductual más consistente en los casos de grooming documentados: aísla al menor de su red de apoyo antes de avanzar a etapas más graves. No hace falta explicarle al niño el mecanismo completo — alcanza con instalar el reflejo de reportarlo siempre, sin excepción.',
    talkingPointForHome: 'Reforzá en casa: "no importa lo que te pidan guardar en secreto sobre nosotros, siempre me lo podés contar y no vas a tener problemas por eso".',
    factRefs: ['fact-cont-04'],
  },
];
