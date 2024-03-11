import { NgModule } from '@angular/core';

import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentDetailsComponent } from '../students/components/student-details/student-details.component';


@NgModule({
  declarations: [
    StudentsListComponent,
    StudentDetailsComponent,
  ],
  imports: [
    SharedModule,
    StudentsRoutingModule
  ],
  exports: []
})
export class StudentsModule {}
