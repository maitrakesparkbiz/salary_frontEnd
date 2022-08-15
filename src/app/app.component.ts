import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from './counter.actions';
import {LoginServiceService} from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Expense Manager';
  isLogin:boolean;
  count$: Observable<string>;
  constructor(private store: Store<{ count: string }>,private activatedRoute: ActivatedRoute,private router:Router,private loginServiceService:LoginServiceService){
    this.count$ = store.select('count');
  }
  ngOnInit(): void {
    if(localStorage.getItem('name'))
    {
      this.isLogin =true
    }
    else{
      this.loginServiceService.user.subscribe(data=>{
        if(!!data){
          this.isLogin=true;
        }
      })
    }
    this.activatedRoute.url.subscribe((url) => {
      if(url[0].path=="")
      {
        this.router.navigate(['auth/login'])
      }
    }) 
    if(localStorage.getItem('name'))
    {
      this.router.navigateByUrl('/Home');
    }
  }

  logout(){
    this.isLogin =false;
    // this.store.dispatch(logout());
    this.router.navigate(['auth/logout'])
  }
}

