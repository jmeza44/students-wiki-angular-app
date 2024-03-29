import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SerieDetailsComponent } from './components/serie-details/serie-details.component';

const routes: Routes = [
  {
    path: ':studentId',
    component: SeriesListComponent
  },
  {
    path: ':studentId/details/:serieId',
    component: SerieDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule {}
