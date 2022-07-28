import { Component, OnInit } from '@angular/core';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  constructor(private expenseEntryService:ExpenseEntryService) { }
  ExpenseList!:any
  ngOnInit(): void {
  this.expenseEntryService.list(null).subscribe((responseData) => {
    this.ExpenseList=responseData;
    
  })
  }


}
