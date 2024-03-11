import { Component } from '@angular/core';
import { Student } from '../shared/models/student.model';

@Component({
  selector: 'wiki-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  students: Student[] = [
    {
      fullName: "Jaime Alberto Meza Herrera",
      semester: 1,
      imagePath: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hobbies: ["Basket", "Calistenia"],
      favoriteSeries: [],
    },
    {
      fullName: "Ospi",
      semester: 1,
      imagePath: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hobbies: ["Basket", "Calistenia"],
      favoriteSeries: [],
    },
  ];
}
