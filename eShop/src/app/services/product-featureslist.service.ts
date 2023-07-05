import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { featuresList } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductFeatureslistService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':"Bearer "+sessionStorage.getItem("token")
      })
  };
  constructor(private http:HttpClient) { }

  getProductFeaturesList():Observable<any>{
    return this.http.get<featuresList[]>("http://localhost:4500/660/featuresList",this.httpOptions);
  }
}
