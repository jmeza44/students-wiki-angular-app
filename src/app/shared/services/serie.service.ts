import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, find, map } from 'rxjs';
import { Serie } from '../models/serie.model';
import { Student } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class SerieService {
  private studentsJsonFilePath = '../../../assets/students.json';

  constructor(private http: HttpClient) {}

  getSeries(studentId: number): Observable<Serie[]> {
    return this.http.get<Student[]>(this.studentsJsonFilePath)
      .pipe(map(students => {
        const foundStudent = students.find(student => student.id === studentId);
        if (!foundStudent) return [];
        return foundStudent.favoriteSeries;
      }))
      .pipe(catchError(this.handleError));
  }

  getSerie(studentId: number, serieId: number): Observable<Serie | undefined> {
    return this.http.get<Student[]>(this.studentsJsonFilePath)
      .pipe(map(students => students.find(student => student.id === studentId)?.favoriteSeries.find(serie => serie.id === serieId)))
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return [];
  }
}
