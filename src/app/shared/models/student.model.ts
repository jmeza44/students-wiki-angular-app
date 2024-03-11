import { Serie } from './serie.model';

export interface Student {
  id: number;
  fullName: string;
  semester: number;
  imagePath: string;
  hobbies: string[];
  favoriteSeries: Serie[],
}
