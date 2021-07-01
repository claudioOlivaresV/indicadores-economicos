import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: any = [];
  status = {
    loading: false,
    error: false,
  }


  constructor(private router: Router, private service: ServicesService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  btnClick = (type: string) => {
    this.router.navigateByUrl('/price-detail/' + type);
  };
  getAllData = async () => {
    this.status.loading = true;
 
    try {
      const {uf, bitcoin, dolar, dolar_intercambio, euro, imacec, ipc, ivp, libra_cobre,
            tasa_desempleo, tpm, utm}: any =  await this.service.getAll();
      console.log();
      this.data.push(bitcoin, dolar, dolar_intercambio, euro, imacec, ipc, ivp, libra_cobre,
        tasa_desempleo, tpm, uf, utm)

      console.log(this.data);
      
      this.status.loading = false;


    } catch (err) {
      this.status.loading = false;
      this.status.error = true;

      console.log(err);
      

    }
  }
  tryAgain() {
    this.status.loading = false;
    this.status.error = false;
    this.ngOnInit();
  }





}
