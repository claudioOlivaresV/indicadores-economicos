import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(environment.baseUrl + environment.api.getAll).toPromise();
  }
  public getDetail(type: string) {
    return this.http.get(environment.baseUrl + environment.api.getDetail + type).toPromise();
  }
  public getDetailDate(type: string, date: string) {
    return this.http.get(environment.baseUrl + environment.api.getDetail + type + '/' + date).toPromise();
  }
  public getDetailYear(type: string, year: string) {
    return this.http.get(environment.baseUrl + environment.api.getDetail + type + '/' + year).toPromise();
  }
}
