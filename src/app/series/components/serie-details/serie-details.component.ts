import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../../../shared/services/serie.service';
import { Serie } from '../../../shared/models/serie.model';

@Component({
  selector: 'wiki-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrl: './serie-details.component.scss'
})
export class SerieDetailsComponent {
  detailedStudentId: number = 0;
  detailedSerieId: number = 0;
  detailedSerie: Serie | null = null;

  constructor(private activatedRoute: ActivatedRoute, private serieService: SerieService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.detailedStudentId = Number(param.get('studentId'));
      this.detailedSerieId = Number(param.get('serieId'));
      this.serieService.getSerie(this.detailedStudentId, this.detailedSerieId).subscribe(serie => {
        this.detailedSerie = serie ?? null;
      });
    });
  }

  public get actorsList(): string {
    if (!this.detailedSerie) return "None";
    if (this.detailedSerie.actors.length === 0) return "None";
    if (this.detailedSerie.actors.every(actor => actor.name === "")) return "None";
    return this.detailedSerie.actors.map(actor => actor.name.trim()).filter(name => name !== "").join(', ') ?? 'None';
  }
}
