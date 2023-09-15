import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  constructor(private authservice:AuthService,private router:Router) {
    
  }
  authstatus!: Boolean;
  ngOnInit(): void {
    this.authstatus=this.authservice.isAuth;
  }

  onsignin(){
    this.authservice.signIn().then(
      ()=>{
        console.log('connexion reussi!')
        this.authstatus=this.authservice.isAuth
        this.router.navigate(['appareils'])
      }
    );
  }

  onsignout(){
    this.authservice.signout()
    this.authstatus=this.authservice.isAuth
  }


}
