import { Actor } from './actor.model';

export interface Serie {
  name: string;
  description: string;
  imagePath: string;
  actors: Actor[];
}
