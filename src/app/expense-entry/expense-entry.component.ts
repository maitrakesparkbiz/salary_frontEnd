import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {
  ExpenseID!:number;
  date!: FormGroup;
  constructor(private expenseEntryService:ExpenseEntryService, private activatedRoute: ActivatedRoute,private fb: FormBuilder) { }
  title: string | undefined;
  editButtonString:String | undefined;
  ExpenseList!: any;
  total:number=0;
  credittotal:number=0;
  debittotal:number=0;

  pColor="blue";
  ngOnInit(): void {
    this.date = this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],

  })
    let currentDate = new Date();
    const data = {"currentData":formatDate(currentDate, 'MM', 'en-US')};
    this.expenseEntryService.list(data).subscribe((responseData) => {
      this.ExpenseList=responseData;
      
      let data= Object.values(responseData)
      for (let i = 0; i < data.length; i++) {
        if(data[i].category.id==4)
        { 
          this.total+=data[i].price
          this.credittotal+=data[i].price
        }
        else
        {
          this.total-=data[i].price
          this.debittotal+=data[i].price
        }
        
      }
      
    })
  }
  
  onSubmit()
  {    
    this.total=0;
    this.credittotal=0;
    this.debittotal=0;
    this.expenseEntryService.list(this.date.value).subscribe((responseData) => {
      this.ExpenseList=responseData;
      
      let data= Object.values(responseData)
      for (let i = 0; i < data.length; i++) {
        if(data[i].category.id==4)
        { 
          this.total+=data[i].price
          this.credittotal+=data[i].price
        }
        else
        {
          this.total-=data[i].price
          this.debittotal+=data[i].price
        }
        
      }
      
    })
   
  }

  }
  


