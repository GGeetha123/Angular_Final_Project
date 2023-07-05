import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../views/product/product.component';
import { ProductlistComponent } from '../views/productlist/productlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from '../views/home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProductFormComponent } from '../wzforms/product-form/product-form.component';

import { ProductCategoryService } from '../services/product-category.service';
import { ProductImageslistService } from '../services/product-imageslist.service';
import { ProductColorslistService } from '../services/product-colorslist.service';
import { ProductStorageListService } from '../services/product-storage-list.service';
import { ProductFeatureslistService } from '../services/product-featureslist.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatDialogModule } from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';

const route:Routes=[
  {
    path:"home",
    component: UserhomeComponent,
    children: [
      {
        path: "",
        component: HomeComponent      
      }    
    ]
  },
  {
    path:"gold",
    component: UserhomeComponent,
    children: [
      {
        path: "",
        component: ProductlistComponent      
      }    
    ]
  }
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductlistComponent,
    MenuBarComponent,
    HomeComponent,
    FooterComponent,
    UserhomeComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule.forChild(route),
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    MatFormFieldModule,    
    MatDialogModule,
    MatDividerModule
    
  ],
  entryComponents: [ProductFormComponent]
})
export class UserModule { }
