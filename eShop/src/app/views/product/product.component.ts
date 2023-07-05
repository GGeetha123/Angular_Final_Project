import { Component, Input } from '@angular/core';
import { product } from 'src/app/model/model';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']  
})
export class ProductComponent {
  isAdminUser:boolean=(sessionStorage.getItem("usertype")=="admin");
  @Input()
  product:product={id: 0, name:"", productcategoryid:0, mrp: 0,
    price:0,
    reviewscount:0,
    averagerating:0,
    images:[],
    colours:[],
    storage:[],
    features:[],
    tags:[],     
    description: "",
    availableqty: 0};
}
