import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorsList } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductColorslistService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':"Bearer "+sessionStorage.getItem("token")
      })
  };
  constructor(private http:HttpClient) { }

  getProductColorsList():Observable<any>{
    return this.http.get<colorsList[]>("http://localhost:4500/660/colorsList",this.httpOptions);
  }
}
