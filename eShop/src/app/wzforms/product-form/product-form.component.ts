import { Component,OnInit  } from '@angular/core';
import { product, productCategory } from 'src/app/model/model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductImageslistService } from 'src/app/services/product-imageslist.service';
import { ProductColorslistService } from 'src/app/services/product-colorslist.service';
import { ProductStorageListService } from 'src/app/services/product-storage-list.service';
import { ProductFeatureslistService } from 'src/app/services/product-featureslist.service';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogActions,MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']  
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;

  dropdownSettings:IDropdownSettings={};

  errors:string[]=[];

  name:string="";
  productcategoryid:number=0;
  mrp:any="";
  price:any="";
  reviewscount:any="";
  averagerating:any="";
  images:any[]=[];
  colours:any[]=[];
  storage:any[]=[];
  features:any[]=[];
  tags:string[]=[];
  description:string="";
  message:string="";
  availableqty:any="";

  public productCatArray:productCategory[] =[];
  public productImgListArray =[];
  public productStorageListArray =[];
  public productColorsListArray =[];
  public productFeaturesListArray =[];

  public selectedItemsImage = [];
  public selectedItemsColors = [];
  public selectedItemsStorage = [];
  public selectedItemsFeatures = [];
  


  constructor(private _productCatService:ProductCategoryService,
    private _productImgService:ProductImageslistService,private _productColorsListService:ProductColorslistService,
    private _productStorageListService:ProductStorageListService,private _productFeaturesListService:ProductFeatureslistService,
    private dialogRef: MatDialogRef<ProductFormComponent>,fb:FormBuilder
    ){
      this.form = fb.group({
        name: ["", Validators.required]
    });
  }

  save() {
    this.dialogRef.close();
}

  close() {
      this.dialogRef.close();
  }
  
  ngOnInit(){

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 3,
      allowSearchFilter:true
   }
   

    this._productCatService.getProductCategory()
    .subscribe(
      
      {
        next:(data:productCategory[]) => this.productCatArray= data,
        error:(error:any) => this.productCatArray=[]
      }
      )

    this._productImgService.getProductImagesList()
    .subscribe(data => this.productImgListArray=data)

    this._productColorsListService.getProductColorsList()
    .subscribe(data => this.productColorsListArray=data)

    this._productStorageListService.getProductStorageList()
    .subscribe(data => this.productStorageListArray=data)

    this._productFeaturesListService.getProductFeaturesList()
    .subscribe(data => this.productFeaturesListArray=data)
  }

  onImageItemSelect(item: any) {
    console.log(item);
  }
  onImageSelectAll(items: any) {
    console.log(items);
  }

  onColorsItemSelect(item: any) {
    console.log(item);
  }
  onColorsSelectAll(items: any) {
    console.log(items);
  }

  onStorageItemSelect(item: any) {
    console.log(item);
  }
  onStorageSelectAll(items: any) {
    console.log(items);
  }

  onFeatureItemSelect(item: any) {
    console.log(item);
  }
  onFeatureSelectAll(items: any) {
    console.log(items);
  }

  postProduct():void{

    this.errors=[];

    if(this.name=="")
      this.errors.push("Name should not be empty");

    let oProduct={
      id:Math.round(Math.random()*100000),
      name:this.name,
      productcategoryid:this.productcategoryid,
      mrp:this.mrp,
      price:this.price,
      reviewscount:this.reviewscount,
      averagerating:this.averagerating,
      images:this.images,
      colours:this.colours,
      storage:this.storage,
      features:this.features,
      tags:this.tags,
      description:this.description,
      availableqty:this.availableqty

    };

    if(this.errors.length==0)
    {

    // this._productService.postProduct(oProduct).subscribe({
    //   next:()=>{
    //     alert("Product is successfully stored");
    //     location.reload();
    //   },
    //   error:()=>{
    //     alert("Problem in saving Product!!");
    //   }
    // });
  }

  }

}
