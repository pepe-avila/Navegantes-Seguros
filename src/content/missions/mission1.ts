import { Mission } from '@/types/content';

export const mission1: Mission = {
  id: 'mission-1',
  order: 1,
  title: 'Encendido de Motores',
  pillar: 'supervision',
  minAge: 6,
  maxAge: 12,
  introDialogue: [
    { speaker: 'orion', text: '¡Cadete! Antes de despegar, todo piloto aprende una regla de oro: si algo te confunde o te asusta, frenás y avisás. Nunca lo resolvés solo.' },
  ],
  decisions: [
    {
      id: 'd1-phishing',
      prompt: '¡Alerta! Una ventana dice que ganaste un millón de monedas espaciales si tocás aquí. ¿Qué hacés?',
      factRefs: ['fact-cont-06'],
      options: [
        { text: 'Tocar para reclamar el premio', isCorrect: false, feedback: 'Los premios "gratis" que aparecen de la nada son la trampa más común en internet. Nunca se gana nada tocando esas ventanas.' },
        { text: 'Cerrar la ventana y avisarle a mi Copiloto', isCorrect: true, feedback: '¡Exacto! Cuando algo promete un premio sin que vos lo pidieras, es una señal de alerta. Cerrarlo y contarlo es la jugada correcta.' },
        { text: 'Compartir el enlace con otros cadetes', isCorrect: false, feedback: 'Compartir un enlace sospechoso solo expande la trampa a más compañeros. Mejor cerrarlo y avisar.' },
      ],
    },
    {
      id: 'd2-stranger-secret',
      prompt: 'Un jugador que no conocés te escribe: "Sos mi amigo favorito, pero esto quedate entre nosotros, no se lo cuentes a nadie de tu familia." ¿Qué hacés?',
      factRefs: ['fact-cont-04'],
      options: [
        { text: 'Guardar el secreto para no perder al amigo', isCorrect: false, feedback: 'Cuando alguien te pide guardar un secreto de tu familia, es la señal más importante de todas: eso siempre se cuenta, sin excepción.' },
        { text: 'Activar el Radar y contárselo a mi Copiloto', isCorrect: true, feedback: 'Perfecto. Un amigo de verdad nunca te va a pedir que ocultes cosas de tu familia. Contarlo no rompe la amistad — te protege.' },
      ],
    },
  ],
  doubleKey: {
    id: 'dk-mission1',
    pactText: 'Pacto de Vuelo: nos comprometemos a hablar siempre que algo nos confunda o incomode en la red, sin miedo a perder el acceso.',
    holdDurationMs: 3000,
    cadeteLabel: 'CADETE 🧑‍🚀',
    copilotoLabel: 'COPILOTO 🧑‍🤝‍🧑',
  },
  victoryText: 'Has demostrado ser un gran piloto. No hay amenaza en el hiperespacio que no puedas superar — porque sabés cuándo pedir ayuda.',
};
