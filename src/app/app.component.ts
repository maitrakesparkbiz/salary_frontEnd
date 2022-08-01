import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Expense Manager';
  isLogin:boolean;
  constructor(private router:Router,private loginServiceService:LoginServiceService){}
  ngOnInit(): void {

    if(localStorage.getItem('name'))
    {
      this.isLogin =true
    }
    else{
      this.loginServiceService.user.subscribe(data=>{
        this.isLogin=!!data;
      })
    }
  }

  logout(){
    this.isLogin =false;
    this.router.navigate(['/Logout'])
  }
}

