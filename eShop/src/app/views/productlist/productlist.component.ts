import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/model';
import { ProductService } from 'src/app/services/product.service';
import { ProductFormComponent } from 'src/app/wzforms/product-form/product-form.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
 
})
export class ProductlistComponent implements OnInit{
  isAdminUser:boolean=(sessionStorage.getItem("usertype")=="admin");
  products:product[]=[];

  constructor(private svcProduct:ProductService,private dialog: MatDialog){

  }

  ngOnInit():void{
    this.svcProduct.getProducts().subscribe({
        next:(data:product[])=>this.products=data,
        error:(ex:any)=>{this.products=[]; console.error(ex)}
      }
    );
  }

  addNewProduct():void{    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height="600px";
    dialogConfig.width="600px";
    dialogConfig.autoFocus = true;

    this.dialog.open(ProductFormComponent, dialogConfig);
  }
}
