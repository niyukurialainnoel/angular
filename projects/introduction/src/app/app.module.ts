import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {AppareilService} from './services/appareil.service.';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { Authguard } from './services/auth-guard-service';

const appRoutes:Routes=[
  {path:'appareils',canActivate:[Authguard],component:AppareilViewComponent},
  {path:'appareils/:id',canActivate:[Authguard],component:SingleAppareilComponent},
  {path:'auth',component:AuthComponent},
  {path:'',component:AppareilViewComponent},
  {path:'not-found',component:FourOhFourComponent},
  {path:'**',redirectTo:'/not-found'}
  
]

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AppareilService,
    AuthService,
    Authguard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
