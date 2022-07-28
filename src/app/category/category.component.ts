import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryName!:UntypedFormGroup
  constructor(private router: Router,private expenseEntryService:ExpenseEntryService,private fb:UntypedFormBuilder,) { }

  ngOnInit(): void {
    this.categoryName = this.fb.group({
      name: ['', Validators.required],

  })
  }

  onSubmit(){
    this.expenseEntryService.categoryAdd(this.categoryName.value).subscribe((responseData) => {
      this.router.navigate(['/Home'])
      
    })
  }
}
