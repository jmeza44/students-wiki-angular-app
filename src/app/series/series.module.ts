import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesListComponent } from '../series/components/series-list/series-list.component';
import { SerieDetailsComponent } from '../series/components/serie-details/serie-details.component';


@NgModule({
  declarations: [
    SeriesListComponent,
    SerieDetailsComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule
  ],
  exports: [
    SeriesListComponent,
    SerieDetailsComponent
  ]
})
export class SeriesModule {}
