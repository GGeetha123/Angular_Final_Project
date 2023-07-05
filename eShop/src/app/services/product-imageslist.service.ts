import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { imagesList } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductImageslistService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':"Bearer "+sessionStorage.getItem("token")
      })
  };
  constructor(private http:HttpClient) { }

  getProductImagesList():Observable<any>{
    return this.http.get<imagesList[]>("http://localhost:4500/660/imagesList",this.httpOptions);
  }
}
