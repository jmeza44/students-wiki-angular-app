import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentsJsonFilePath = '../../../assets/students.json';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsJsonFilePath)
      .pipe(catchError(this.handleError));
  }

  getStudent(id: number): Observable<Student | undefined> {
    return this.http.get<Student[]>(this.studentsJsonFilePath)
      .pipe(map(students => students.find(student => student.id === id)))
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return [];
  }
}
