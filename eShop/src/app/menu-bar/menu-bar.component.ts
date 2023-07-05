import { Component } from '@angular/core';
import { LogonService } from '../services/logon.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  isAdminUser:boolean=(sessionStorage.getItem("usertype")=="admin");
  userName:string=sessionStorage.getItem("username")??"(no name)";

  userIconSrc:string=this.isAdminUser?"admin-user-icon.png":"user-icon.png";  
  constructor(private svcLogon:LogonService,private router: Router){
    
  }
  
  logout():void{
    if(confirm("Are you sure you want to logout?"))
    {
      this.svcLogon.logout();
      //window.location.reload();
      this.router.navigate(["/","logon"]);
    }
  }
}
