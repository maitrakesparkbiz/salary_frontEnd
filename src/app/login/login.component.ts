import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode!:Boolean
  constructor( private loginServiceService:LoginServiceService,private router:Router) { }
  token!:any;
  ngOnInit(): void {
  }
  onSubmit(form:NgForm){

    
    if(this.isLoginMode){
      this.loginServiceService.login(form.value).subscribe((responseData:any)=>{
        console.log(responseData);
        
        if(!!responseData)
        {
          this.loginServiceService.user.next(responseData);
          this.token = Object.values(responseData['token']);
          this.router.navigateByUrl('/Home');
          localStorage.setItem('name', this.token);
        }
      })
    
    }
    else
    {
      this.loginServiceService.register(form.value).subscribe(responseData=>{
        this.isLoginMode=!this.isLoginMode;
        
      })
    }
     
    form.reset();
    
  }

  onSwitchMode()
  {
    this.isLoginMode=!this.isLoginMode;
  }
}
