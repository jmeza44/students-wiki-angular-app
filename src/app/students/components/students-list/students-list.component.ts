import { Component, Input } from '@angular/core';
import { Student } from '../../../shared/models/student.model';
import { Observable } from 'rxjs';
import { StudentsService } from '../../../shared/services/students.service';

@Component({
  selector: 'wiki-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})
export class StudentsListComponent {
  students: Observable<Student[]> = this.studentsService.getStudents();

  constructor(private studentsService: StudentsService) {}
}
