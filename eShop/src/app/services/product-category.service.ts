import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productCategory } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':"Bearer "+sessionStorage.getItem("token")
      })
  };
  constructor(private http:HttpClient) { }

  getProductCategory():Observable<any>{
    return this.http.get<productCategory[]>("http://localhost:4500/660/productcategory",this.httpOptions);
  }
}
