import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'expense-manager';
  constructor(private router:Router){}
  ngOnInit(): void {
      console.log("asd");
      
    if(localStorage.getItem('name'))
    {
      this.router.navigateByUrl('/Home');
    }
    else
    {
      this.router.navigateByUrl('/Login');
    }
  }
}

