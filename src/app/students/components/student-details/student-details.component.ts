import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../../shared/models/student.model';

@Component({
  selector: 'wiki-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent implements OnInit {
  detailedStudentIndex: number = 0;
  detailedStudent: Student | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.detailedStudentIndex = Number(param.get('index'));
    });
  }
}
