import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable} from "rxjs";
import {LoginServiceService} from "../login-service.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

  constructor(private loginServiceService:LoginServiceService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('name'))
    {
      return true
    }
    return this.loginServiceService.isAdmin.pipe(map(user => {
      const isAuth=user;
      if(isAuth)
      {
        return true;
      }
      else
      {
        return this.router.createUrlTree(['/Login'])
      }
    }));
  }
}


// const user$ = this.authService.user.asObservable() as Observable<boolean>;
// let isLogin = false;
// user$.subscribe(res => {
//   isLogin = res;
// });
// return isLogin;
