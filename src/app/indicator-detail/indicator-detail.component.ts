import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { Location } from '@angular/common'
import * as moment from 'moment';


@Component({
  selector: 'app-indicator-detail',
  templateUrl: './indicator-detail.component.html',
  styleUrls: ['./indicator-detail.component.css']
})
export class IndicatorDetailComponent implements OnInit {
  data: any;
  dataYear: any;
  multi: any[] = [

  ];
  view: [number, number] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Fecha';
  yAxisLabel: string = 'Valor';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#007bff']
  };
  status = {
    loading: false,
    error: false,
  }
  status2 = {
    loading: false,
    error: false,
  }





  constructor(private location: Location, private routeData: ActivatedRoute, private service: ServicesService) {
    Object.assign(this.multi);
  }

  ngOnInit(): void {



    const { params: { type, date } }: any = this.routeData.snapshot.paramMap;
    console.log(type, date);
    const dateFull = moment(date).format('DD-MM-YYYY');
    const dateYear = moment(date).format('YYYY');

    this.getData(type, dateFull)
    this.getDataYear(type, dateYear)



  }
  btnClick = () => {
    this.location.back();
  };
  getData = async (type: string, date: string) => {
    this.status.loading = true;

    try {
      const data = await this.service.getDetailDate(type, date);
      console.log(data);
      this.data = data;
      this.status.loading = false;
    } catch (err) {
      this.status.loading = false;
      this.status.error = true;

      console.log(err);


    }
  }
  getDataYear = async (type: string, year: string) => {
    this.status2.loading = true;
    try {
      const data: any = await this.service.getDetailYear(type, year);
      console.log(data);
      this.dataYear = data;

      const series = data.serie.map((data: any) => {
        return {
          "name": moment(data.fecha).format('DD-MM-YYYY'),
          "value": data.valor
        }

      });
      console.log(series);

      const body: any = [

        {
          "name": data.nombre,
          "series": series
        }
      ]
      this.multi = body;

      this.status2.loading = false;



    } catch (err) {
      this.status2.loading = false;
      this.status2.error = true;

      console.log(err);


    }
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  tryAgain() {
    this.status.loading = false;
    this.status.error = false;
    this.status2.loading = false;
    this.status2.error = false;
    this.ngOnInit();
  }

}
