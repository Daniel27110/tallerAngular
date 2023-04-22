import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieRequestService } from './serieRequest.service';

@Component({
  selector: 'series-list',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieRequestService: SerieRequestService) { }
  series: Array<Serie> = [];

  getSeries(): void {
    this.serieRequestService.getSeries().subscribe(series => this.series = series);
  }


  ngOnInit() {
    this.getSeries();
  }

}
