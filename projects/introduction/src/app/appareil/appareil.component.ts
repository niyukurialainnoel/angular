import { Component,Input,OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service.';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit{

  

  @Input()
  appareilname!: string;

  @Input()
  appareilstatus!: string;

  @Input()
  indexofappareil!:number

  @Input()
  id!:number

  constructor(private appareilservice:AppareilService){}

  ngOnInit(){
    
  }

  getColor() {
    if (this.appareilstatus === "allumer") {
      return "green";
    } else if (this.appareilstatus === "eteint") {
      return "red";
    }
  
    // Default color if `appareilstatus` doesn't match any condition
    return 'default-color';
  }

  getstatus(){
    return this.appareilstatus;
  }

  onswichton(){
    this.appareilservice.switchonone(this.indexofappareil)
  }

  onswichtoff(){
    this.appareilservice.switchoffone(this.indexofappareil)
  }

  



}
