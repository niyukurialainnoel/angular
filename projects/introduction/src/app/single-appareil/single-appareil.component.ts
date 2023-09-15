import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service.';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit{
  name!: string;
  status!: string;
  constructor(private appareilservice:AppareilService
              ,private route:ActivatedRoute){

  }
  ngOnInit(){
    const id=this.route.snapshot.params['id']
    
    const appareil = this.appareilservice?.getappareilbyid(+id);
    this.name = appareil && appareil.name ? appareil.name : '';
    this.status = appareil && appareil.status ? appareil.status : '';
  }

}
