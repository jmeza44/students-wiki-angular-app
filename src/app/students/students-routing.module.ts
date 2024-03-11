import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentShellComponent } from './containers/student-shell/student-shell.component';

const routes: Routes = [
  {
    path: '',
    component: StudentShellComponent,
    children: [
      {
        path: '',
        component: StudentsListComponent
      },
      {
        path: ':index',
        component: StudentDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule {}
