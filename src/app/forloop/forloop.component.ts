import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {

  constructor() { }
  datas=[1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {

  }

}
