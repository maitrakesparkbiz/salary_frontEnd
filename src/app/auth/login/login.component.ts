import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {LoginServiceService} from "../../login-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {  userData } from 'src/app/counter.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode!:Boolean
  count$: Observable<string>;
  data$!: Observable<Object>;
  constructor(private store: Store<{ count: string }>,private toastrService: ToastrService,private loginServiceService:LoginServiceService,private router:Router, private activatedRoute: ActivatedRoute) { 
    this.count$ = store.select('count');
  }
  token!:any;
  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      if(url[0].path=="logout"){
        this.logout()
      }
    })        
  }
  onSubmit(form:NgForm){


    if(this.isLoginMode){
      this.loginServiceService.login(form.value).subscribe((responseData:any)=>{

        if(!!responseData)
        {
          console.log(typeof responseData);
          
          this.store.dispatch(userData({user:responseData}));
          this.data$ = this.store.select('count')
          // console.log(this.data$);
          this.loginServiceService.user.next(responseData);
          this.token = Object.values(responseData['token']);
          this.router.navigateByUrl('/Home');
          localStorage.setItem('name', this.token);
          this.toastrService.success('successfully Login');

        }
        else{
          this.toastrService.error('Invalid Email or Password');
        }
      })

    }
    else
    {
      this.loginServiceService.register(form.value).subscribe(responseData=>{
        this.isLoginMode=!this.isLoginMode;

        if(responseData==23000)
        {
          this.toastrService.error('Email already Exists');
        }
        else
        {
          this.toastrService.success('successfully Register');
        }

      })
    }

    form.reset();

  }

  onSwitchMode()
  {
    this.isLoginMode=!this.isLoginMode;
  }

  logout()
  {
    this.loginServiceService.user.subscribe(responseData=>{
      return responseData;
    })
    this.store.dispatch(userData({user:{}}));
    this.data$ = this.store.select('count')
    // console.log(this.data$);
    localStorage.removeItem('name');
    localStorage.clear();
    this.router.navigateByUrl('auth/login')
    this.toastrService.success(' Logout Successfully');
  }
}
