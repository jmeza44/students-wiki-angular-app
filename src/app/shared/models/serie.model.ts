import { Actor } from './actor.model';

export interface Serie {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  actors: Actor[];
}
