import {Component, OnInit} from '@angular/core';
import {from} from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  // constructor() { }
  // today= new Date()
  // price:number = 2999887;
  // str:string="hello world"
  title = 'Reactive programming concept';
  numbers : number[] = [];
  val1 : number = 0;
  filteredNumbers : number[] = [];
  val2 : number = 0;
  processedNumbers : number[] = [];
  val3 : number = 0;
  apiMessage : string;
  counter : number = 0;


  ngOnInit(): void {
    // setInterval( () => { this.today= new Date() }, 1000);

      const numbers$ = from([0,1,2,3,4,5,6,7,8,9,10]);

      const observer = {
         next: (num: number) => {this.numbers.push(num); this.val1 += num },
         error: (err: any) => console.log(err),
         complete: () => console.log("Observation completed"+this.val1)
      };
      numbers$.subscribe(observer);

  }



}
