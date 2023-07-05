import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductlistComponent } from './views/productlist/productlist.component';
import { LogonComponent } from './logon/logon.component';

const routes: Routes = [
  {path:"", component: LogonComponent},
  {path:"logon", component: LogonComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
