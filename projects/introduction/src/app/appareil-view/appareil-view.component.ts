import { Component } from '@angular/core';
import { AppareilService } from '../services/appareil.service.';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent {

  title = 'introduction';
  isAuth=false;

  // lastupdate=new Promise(
  //   (resolve,reject)=>{
  //     const date=new Date()
  //     setTimeout(() => {
  //       resolve(date)
  //     }, 2000);
  //   }
  // )
  
  appareils: any[] = [];
  constructor( private appareilService:AppareilService){
    setTimeout(() => {
      this.isAuth=true;
    }, 4000);
  }
  onAllumer(){
    this.appareilService.switchonall()
  }

  oneteindre(){
    this.appareilService.switchoffall()
  }
  ngOnInit(){
    this.appareils=this.appareilService.appareils
  }


}
