import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-admin-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnInit {
  public chart: any | undefined;
  @Input() labels: string[] | any;
  @Input() datasets: any[] = [];
  @Input() type: string | any;

  createChart() {
    this.chart = new Chart('MyChart', {
      type: this.type,

      data: {
        // values on X-Axis
        labels: this.labels,
        datasets: this.datasets,
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  ngOnInit() {
    console.log(this.datasets[0]);
    this.createChart();
  }
}
