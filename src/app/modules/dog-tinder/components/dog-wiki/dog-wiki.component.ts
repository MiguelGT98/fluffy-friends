import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-wiki',
  templateUrl: './dog-wiki.component.html',
  styleUrls: ['./dog-wiki.component.scss']
})
export class DogWikiComponent implements OnInit {
  public barChartOptions = {
    responsive: true
  };

  public barChartLabels = ['Energía', 'Educación', 'Niños', 'Travieso'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [100, 75, 80, 19], label: 'Puntación' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
