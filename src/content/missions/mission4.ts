import { Mission } from '@/types/content';

export const mission4: Mission = {
  id: 'mission-4',
  order: 4,
  title: 'El Copiloto Sintético',
  pillar: 'ia',
  minAge: 10,
  maxAge: 12,
  introDialogue: [
    { speaker: 'orion', text: 'A veces la nave tiene un asistente automático que parece escuchar todo. Pero un asistente no es un amigo real — y todo lo que le contás queda guardado.' },
  ],
  decisions: [
    {
      id: 'd1-confidente-ia',
      prompt: 'El asistente de la nave te pregunta cómo te sentís hoy y te dice "podés contarme lo que quieras, no se lo diré a nadie". ¿Qué hacés?',
      factRefs: ['fact-ia-01', 'fact-ia-02'],
      options: [
        { text: 'Le cuento todo, es solo una máquina', isCorrect: false, feedback: 'Aunque parezca que no juzga, lo que le contás a un asistente queda guardado. No es lo mismo que hablar con tu Copiloto.' },
        { text: 'Le cuento algunas cosas, pero también se lo cuento a mi Copiloto', isCorrect: true, feedback: 'Muy bien. Usar el asistente está bien, pero tu Copiloto humano siempre tiene que estar al tanto de lo que te importa de verdad.' },
      ],
    },
  ],
  doubleKey: {
    id: 'dk-mission4',
    pactText: 'Pacto del Copiloto Sintético: lo que le cuento a un asistente también se lo cuento a mi Copiloto humano.',
    holdDurationMs: 3000,
    cadeteLabel: 'CADETE 🧑‍🚀',
    copilotoLabel: 'COPILOTO 🧑‍🤝‍🧑',
  },
  victoryText: '¡Aprendiste a distinguir un asistente de un amigo real! Tu Copiloto humano sigue siendo tu mejor aliado.',
};
