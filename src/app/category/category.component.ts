import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ExpenseEntryService} from '../expense-entry.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryName!:UntypedFormGroup
  CategoryList!:any;
  constructor(private toastrService:ToastrService,private router: Router,private expenseEntryService:ExpenseEntryService,private fb:UntypedFormBuilder,) { }

  ngOnInit(): void {
    this.expenseEntryService.categoryList(0).subscribe((responseData)=>{
      this.CategoryList = responseData;

    })
    this.categoryName = this.fb.group({
      name: ['', Validators.required],
      parent_id: ['', Validators.required],

  })
  }

  onSubmit(){
    this.expenseEntryService.categoryAdd(this.categoryName.value).subscribe((responseData) => {
      if(!!responseData)
      { this.toastrService.success('Category Added');
        this.router.navigate(['/Home'])
      }
      else
      {
        this.toastrService.error('Something went wronge');
      }

    })
  }
}
