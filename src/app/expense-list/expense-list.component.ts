import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(private toastrService:ToastrService ,private expenseEntryService:ExpenseEntryService) { 

  }
  ExpenseList!:any
  ngOnInit(): void {


  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true
  };

  this.expenseEntryService.list(null).subscribe((responseData) => {

    if(!!responseData)
        {
          this.ExpenseList=responseData;
        }
        else
        {
          this.toastrService.error('Something went wronge');
        }
  })
  }
}
