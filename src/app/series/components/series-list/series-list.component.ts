import { Component, OnInit } from '@angular/core';
import { Serie } from '../../../shared/models/serie.model';
import { SerieService } from '../../../shared/services/serie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wiki-series-list',
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.scss'
})
export class SeriesListComponent implements OnInit {
  studentId: number = 0;
  series: Serie[] = [];

  constructor(private activatedRoute: ActivatedRoute, private serieService: SerieService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.studentId = Number(param.get('id'));
      this.serieService.getSeries(this.studentId)
        .subscribe(series => {
          this.series = series;
        });
    });
  }
}
