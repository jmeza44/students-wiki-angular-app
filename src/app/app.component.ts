import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'wiki-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'students-wiki';

  constructor(private router: Router) {}

  ngOnInit(): void {
    initFlowbite();
  }

  navigateToStudents() {
    this.router.navigateByUrl("students");
  }
}
