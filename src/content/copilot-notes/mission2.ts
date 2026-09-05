import { CopilotNote } from '@/types/content';

export const mission2Notes: CopilotNote[] = [
  {
    id: 'note-m2-d1',
    pillar: 'privacidad',
    relatedMissionId: 'mission-2',
    relatedDecisionId: 'd1-registro-datos',
    title: 'La clasificación de datos según la AAIP',
    body: 'La Agencia de Acceso a la Información Pública recomienda que padres y docentes trabajen la distinción entre información Íntima, Privada y Pública como ejercicio central de alfabetización en privacidad, evitando completar formularios en línea sin supervisión.',
    talkingPointForHome: 'Jueguen juntos a clasificar: nombre completo, escuela, dirección, color favorito, apodo — ¿en qué categoría entra cada uno?',
    factRefs: ['fact-priv-02'],
  },
  {
    id: 'note-m2-d3',
    pillar: 'privacidad',
    relatedMissionId: 'mission-2',
    relatedDecisionId: 'd3-foto-real',
    title: 'Sharenting y el uso de avatares',
    body: 'Buena parte de la huella digital de un menor se construye por decisiones de los propios adultos (sharenting), no solo por el menor. Fomentar el uso de avatares desde temprano ayuda a instalar el hábito de no exponer la imagen real como default.',
    talkingPointForHome: 'Revisen juntos qué fotos de tu hijo/a están públicas en tus propias redes sociales.',
    factRefs: ['fact-priv-03', 'fact-priv-04'],
  },
];
