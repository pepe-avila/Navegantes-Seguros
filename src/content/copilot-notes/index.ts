import { CopilotNote } from '@/types/content';
import { mission1Notes } from './mission1';
import { mission2Notes } from './mission2';
import { mission3Notes } from './mission3';
import { mission4Notes } from './mission4';

export const allCopilotNotes: CopilotNote[] = [
  ...mission1Notes,
  ...mission2Notes,
  ...mission3Notes,
  ...mission4Notes
];
