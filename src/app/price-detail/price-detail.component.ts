import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.css']
})

export class PriceDetailComponent implements OnInit {
  data: any;
  status = {
    loading: false,
    error: false,
  }


  constructor(private router: Router, private routeData: ActivatedRoute, private service: ServicesService) { }

  ngOnInit(): void {
    const routeParams: any = this.routeData.snapshot.paramMap;
    console.log(routeParams.params.type);
    const data = routeParams.params.type;
    this.getAllData(data)


  }
  btnClick = () => {
    this.router.navigateByUrl('/list');
  };
  getAllData = async (type: string) => {
    this.status.loading = true;

    try {
      const data = await this.service.getDetail(type);
      console.log(data);
      this.data = data;
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
