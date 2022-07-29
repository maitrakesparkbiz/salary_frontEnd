import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  ExpenseID!:number;
  Expense!: UntypedFormGroup;
  CategoryList!:any;
  editButtonString!:String
  Data!:any;
  canEdit!:boolean;
  constructor(private toastrService:ToastrService, private router: Router, private route: ActivatedRoute,private fb: UntypedFormBuilder,private expenseEntryService:ExpenseEntryService,private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe((url) => {
      this.ExpenseID =url['id'];
      
    });
    
   }
   
  ngOnInit(): void {
    this.expenseEntryService.categoryList().subscribe((responseData)=>{
      this.CategoryList = responseData;
      
    })
    if(this.ExpenseID)
    { 
      this.Expense = this.fb.group({
      item_name: ['', Validators.required],
      price: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      category: ['', Validators.required],
      location: ['', Validators.required],
      spend_on: ['', Validators.required],
      id: ['', Validators.required],
  })
      this.editButtonString="Edit"
      this.expenseEntryService.get(this.ExpenseID).subscribe(
        (responseData) => {
          if(!!responseData){

          
          const data=Object.values(responseData);
          let currentDate = formatDate(new Date(), 'YYYY-MM-dd', 'en-US')
          let oldDate = formatDate(data[6], 'YYYY-MM-dd', 'en-US');

          this.canEdit=currentDate==oldDate?true:false;
          
          this.Expense.get('id')!.setValue(data[0]);
          this.Expense.get('item_name')!.setValue(data[1]);
          this.Expense.get('price')!.setValue(data[2]);
          this.Expense.get('category')!.setValue(data[3]);
          this.Expense.get('location')!.setValue(data[4]);
          this.Expense.get('spend_on')!.setValue(data[5]);
          }
          else{
            this.toastrService.error('Something went wronge');
          }
        
      })
      
    }
    else
    { 

      this.canEdit=true;
      this.Expense = this.fb.group({
      item_name: ['', Validators.required],
      price: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      category: ['', Validators.required],
      location: ['', Validators.required],
      spend_on: ['', Validators.required],
      id: [''],
  })
      this.editButtonString="Add"
    }

  }

  onSubmit()
  {

    this.expenseEntryService.add(this.Expense.value).subscribe(
      (responseData) => {

        if(!!responseData)
        {
          this.router.navigate(['/Report'])
        }
        else
        {
          this.toastrService.error('Something went wronge');
        }
      })
  }

  onUpdate()
  {
    this.expenseEntryService.add(this.Expense.value).subscribe(
      (responseData) => {
        if(!!responseData)
        {
          this.router.navigate(['/Report'])
        }
        else
        {
          this.toastrService.error('Something went wronge');
        }
      })
  }
  
  ondelete(ExpenseID:number){

    this.expenseEntryService.delete(ExpenseID).subscribe(
      (responseData) => {
        this.router.navigate(['/Report'])
      })
  }

}
