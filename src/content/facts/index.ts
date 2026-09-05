import { VerifiedFact } from '@/types/content';
import { supervisionFacts } from './supervision';
import { privacidadFacts } from './privacidad';
import { contactosFacts } from './contactos';
import { iaFacts } from './ia';

export const allFacts: VerifiedFact[] = [
  ...supervisionFacts,
  ...privacidadFacts,
  ...contactosFacts,
  ...iaFacts
];
