import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate{

      constructor(private authservice:AuthService,private router:Router){}

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
                  Observable<boolean> | Promise<boolean> | boolean{
                  if(this.authservice.isAuth){
                        return true
                  }else{
                        this.router.navigate(['/auth'])
                  }
            
      }
}


