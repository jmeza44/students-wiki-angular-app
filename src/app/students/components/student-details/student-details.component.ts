import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../../shared/models/student.model';
import { StudentsService } from '../../../shared/services/students.service';

@Component({
  selector: 'wiki-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent implements OnInit {
  detailedStudentId: number = 0;
  detailedStudent: Student | null = null;

  constructor(private activatedRoute: ActivatedRoute, private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.detailedStudentId = Number(param.get('id'));
      this.studentsService.getStudent(this.detailedStudentId).subscribe(student => {
        this.detailedStudent = student ?? null;
      });
    });
  }

  public get getHobbiesList(): string {
    if (!this.detailedStudent) return "None";
    if (this.detailedStudent.hobbies.length === 0) return "None";
    if (this.detailedStudent.hobbies.every(hobby => hobby === "")) return "None";
    return this.detailedStudent.hobbies
      .filter(hobby => hobby.trim() !== "")
      .join(', ');
  }
}
