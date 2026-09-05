import { Mission } from '@/types/content';

export const mission3: Mission = {
  id: 'mission-3',
  order: 3,
  title: 'El Radar de Desconocidos',
  pillar: 'contactos',
  minAge: 8,
  maxAge: 12,
  introDialogue: [
    { speaker: 'orion', text: 'En el cinturón de asteroides te vas a cruzar con otros avatares. Algunos son simpáticos de verdad. Pero un avatar amigable también puede esconder a cualquiera. Tu Radar te va a avisar cuándo frenar.' },
  ],
  decisions: [
    {
      id: 'd1-secreto-familiar',
      prompt: 'Un avatar simpático te dice: "Esto es solo nuestro, no se lo digas ni a tus papás". ¿Qué hace tu Radar?',
      factRefs: ['fact-cont-04'],
      options: [
        { text: 'El Radar no reacciona, parece un juego inocente', isCorrect: false, feedback: 'Pedir guardar un secreto de la familia siempre activa el Radar, sin excepción — no importa cuán simpático parezca.' },
        { text: 'Se enciende en rojo: Alerta Roja', isCorrect: true, feedback: 'Exacto. Ese pedido es la señal más clara que existe. Alerta Roja siempre significa: avisar al Copiloto ya.' },
      ],
    },
    {
      id: 'd2-migrar-chat',
      prompt: 'Un jugador te insiste: "Mejor hablemos por otra app, ahí es más tranquilo". ¿Qué hacés?',
      factRefs: ['fact-cont-05'],
      options: [
        { text: 'Acepto, capaz ahí conversamos mejor', isCorrect: false, feedback: 'Cuando alguien insiste en pasar a un chat más privado, es una señal de alerta — ahí ya no hay quien te acompañe.' },
        { text: 'Activo el Radar y no cambio de chat', isCorrect: true, feedback: 'Bien hecho. Quedarte en espacios donde tu Copiloto también puede estar presente es más seguro.' },
      ],
    },
    {
      id: 'd3-regalo-virtual',
      prompt: 'Un avatar te ofrece monedas espaciales gratis "si le mandás una foto tuya". ¿Qué hacés?',
      factRefs: ['fact-cont-06'],
      options: [
        { text: 'Envío la foto, son solo monedas del juego', isCorrect: false, feedback: 'Nadie regala algo de valor a cambio de una foto tuya sin motivo — eso es una señal de alerta.' },
        { text: 'Activo el Radar y no envío nada', isCorrect: true, feedback: 'Así es. Ningún premio vale más que tu seguridad. Activar el Radar es la jugada correcta.' },
      ],
    },
  ],
  doubleKey: {
    id: 'dk-mission3',
    pactText: 'Pacto del Radar: toda Alerta Roja se activa junto al Copiloto, sin excepción y sin miedo a las consecuencias.',
    holdDurationMs: 3000,
    cadeteLabel: 'CADETE 🧑‍🚀',
    copilotoLabel: 'COPILOTO 🧑‍🤝‍🧑',
  },
  victoryText: '¡Tu Radar está calibrado! Ahora reconocés las señales de alerta más importantes del espacio.',
};
