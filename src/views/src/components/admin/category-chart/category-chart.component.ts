import { Component, OnInit } from '@angular/core';
import { categories } from 'src/store/categoryRepository';
import { PostService } from 'src/services/post/post.service';
import { store } from 'src/store/store';
import { Chart } from 'chart.js/auto';

interface IDataset {
  label: string;
  data: any[];
  backgroundColor?: string[];
  borderWidth: 1;
}

const colors = ['green', 'yellow', 'red', 'blue'];

@Component({
  selector: 'app-admin-category-chart',
  templateUrl: './category-chart.component.html',
  styleUrls: ['./category-chart.component.scss'],
})
export class CategoryChartComponent implements OnInit {
  public labels = categories;
  dataSets: IDataset[] = [];
  chart: Chart<any, any[], string> | undefined;
  type: any = 'doughnut';

  constructor(private post: PostService) {}
  async ngOnInit() {
    const token: any = store.state.authToken;
    this.post.getCountByCategory(token).subscribe((data: any) => {
      if (data.success) {
        let tempData: any[] = [];
        data.post.forEach((post: any, index: number) => {
          tempData.push(post.count);
        });
        this.dataSets.push({
          label: 'Offer by category',
          data: tempData,
          borderWidth: 1,
          backgroundColor: colors,
        });
        this.createChart();
      }
    });
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: this.type,

      data: {
        // values on X-Axis
        labels: this.labels,
        datasets: this.dataSets,
      },
      options: {
        aspectRatio: 2.5,
      },
    });

    this.chart.resize(600, 600);
  }
}
