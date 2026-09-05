import { Mission } from '@/types/content';

export const mission2: Mission = {
  id: 'mission-2',
  order: 2,
  title: 'El Disfraz Digital',
  pillar: 'privacidad',
  minAge: 6,
  maxAge: 12,
  introDialogue: [
    { speaker: 'orion', text: 'Todo buen navegante tiene un disfraz espacial: un nombre en clave y un avatar. Así nadie sabe quién sos realmente hasta que vos lo decidís.' },
  ],
  decisions: [
    {
      id: 'd1-registro-datos',
      prompt: 'Un robot de la estación te pide "nombre completo, escuela y dirección para completar tu registro de cadete". ¿Qué hacés?',
      factRefs: ['fact-priv-02'],
      options: [
        { text: 'Completar todo para avanzar más rápido', isCorrect: false, feedback: 'Nombre completo, escuela y dirección son datos Íntimos — nunca se completan solos, sin importar quién los pida.' },
        { text: 'Decir "eso se lo pregunto a mi Copiloto"', isCorrect: true, feedback: '¡Así se hace! Ante cualquier formulario que pida datos Íntimos, la respuesta correcta siempre es consultar primero.' },
      ],
    },
    {
      id: 'd2-clasificar-dato',
      prompt: 'Tu color de nave favorito aparece en tu perfil público. ¿A qué categoría pertenece?',
      factRefs: ['fact-priv-02'],
      options: [
        { text: 'Pública: la puede ver cualquiera', isCorrect: true, feedback: 'Correcto. Gustos como el color favorito no identifican dónde vivís ni quién sos en la vida real — son datos Públicos.' },
        { text: 'Íntima: nunca se comparte', isCorrect: false, feedback: 'No hace falta ser tan cuidadoso con esto — un gusto o color favorito no revela nada sobre tu identidad real.' },
      ],
    },
    {
      id: 'd3-foto-real',
      prompt: 'Para tu perfil de cadete, ¿qué imagen usás?',
      factRefs: ['fact-priv-04'],
      options: [
        { text: 'Una foto real de mi cara', isCorrect: false, feedback: 'Una foto real puede usarse para identificarte fuera del juego. Mejor un avatar.' },
        { text: 'El avatar que armé en el Vestuario', isCorrect: true, feedback: 'Excelente elección. El avatar te representa sin exponer tu imagen real — así navegás disfrazado y seguro.' },
      ],
    },
  ],
  doubleKey: {
    id: 'dk-mission2',
    pactText: 'Pacto del Disfraz: antes de mostrar mi perfil a otros cadetes, lo revisamos juntos para asegurarnos de que no muestre datos Íntimos.',
    holdDurationMs: 3000,
    cadeteLabel: 'CADETE 🧑‍🚀',
    copilotoLabel: 'COPILOTO 🧑‍🤝‍🧑',
  },
  victoryText: '¡Tu disfraz digital está listo! Navegás protegido, mostrando solo lo que es seguro compartir.',
};
