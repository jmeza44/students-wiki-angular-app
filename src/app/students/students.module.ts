import { NgModule } from '@angular/core';

import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentDetailsComponent } from '../students/components/student-details/student-details.component';
import { StudentShellComponent } from '../students/containers/student-shell/student-shell.component';


@NgModule({
  declarations: [
    StudentsListComponent,
    StudentDetailsComponent,
    StudentShellComponent
  ],
  imports: [
    SharedModule,
    StudentsRoutingModule
  ],
  exports: [
    StudentDetailsComponent,
    StudentShellComponent
  ]
})
export class StudentsModule {}
