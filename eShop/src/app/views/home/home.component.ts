import { Component } from '@angular/core';
import { banner } from 'src/app/model/model';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  banner:banner[]=[];
  currentIndex:number=0;
  currentBanner:banner={id:0,title:"",tag:"",image:"",mrp:0,price:0};  
  image_src:string="../assets/images/banner/homeImage_1.jpg";

  timer:number=setInterval(()=>{
    this.currentIndex=Math.round(Math.random()*4);
    this.currentIndex=this.currentIndex>4?0:this.currentIndex;
    this.currentBanner = this.banner[this.currentIndex];
    this.image_src = "../assets/images/banner/"+this.currentBanner.image;    
  },2000);
  
  changeImage(arrowType:string):void{
    if(arrowType=="right")
      {          
          this.currentIndex = this.currentIndex==4?0:++this.currentIndex;
      }
      else if(arrowType=="left")
      {
        this.currentIndex = this.currentIndex==0?4:--this.currentIndex;          
      }      
      this.currentBanner = this.banner[this.currentIndex];
      this.image_src = "../assets/images/banner/"+this.currentBanner.image;
  }

  
  constructor(private svcBanner:BannerService){

  }

  ngOnInit():void{
    this.svcBanner.getBanner().subscribe({
        next:(data:banner[])=>this.banner=data,
        error:(ex:any)=>{this.banner=[]; console.error(ex)}
      }
    );
  }
}
