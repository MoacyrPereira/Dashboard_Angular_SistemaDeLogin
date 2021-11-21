import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
chart:any;

  constructor() { }

  ngOnInit(): void {
    this.chart = document.getElementById('meu_chart');
    Chart.register(...registerables);
    this.loadChart();
  }

  loadChart(): void {
    new Chart(this.chart, {
      type: 'line',
      data:{
        datasets: [{
          data: [10,40,25,60,90],
          label:"Acessos",
          backgroundColor: 'blue',
          tension: 0.3,
          pointRadius: 5,
          pointHoverBackgroundColor:'red',
        }],
        labels:['1 Semana','2 Semana','3 Semana','4 Semana','Final de semana'],
      },
      options: {
        responsive:true,
        maintainAspectRatio:true,
        scales: {
          y: {
            beginAtZero:true,
          }
        }
      }
    });
  }

}
