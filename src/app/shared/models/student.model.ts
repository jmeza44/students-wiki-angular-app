import { Serie } from './serie.model';

export interface Student {
  fullName: string;
  semester: number;
  imagePath: string;
  hobbies: string[];
  favoriteSeries: Serie[],
}
