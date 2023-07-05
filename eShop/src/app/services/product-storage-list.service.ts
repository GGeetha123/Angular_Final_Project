import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { storageList } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductStorageListService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':"Bearer "+sessionStorage.getItem("token")
      })
  };
  constructor(private http:HttpClient) { }

  getProductStorageList():Observable<any>{
    return this.http.get<storageList[]>("http://localhost:4500/660/storageList",this.httpOptions);
  }
}
