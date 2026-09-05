import { Mission } from '@/types/content';
import { mission1 } from './mission1';
import { mission2 } from './mission2';
import { mission3 } from './mission3';
import { mission4 } from './mission4';

export const allMissions: Mission[] = [
  mission1,
  mission2,
  mission3,
  mission4
].sort((a, b) => a.order - b.order);
